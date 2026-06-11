<script setup lang="ts">
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import type { TListItem, OptionLabelResolver, SpType } from '../types'
import { resolveLabel } from '../utils/optionUtils'

// ─── Props ────────────────────────────────────────────────────────────────────

const props = defineProps<{
  modelValue: unknown
  spType?: SpType
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean

  /** Items to render as <option> elements */
  options?: TListItem[]

  /**
   * How to extract the display label from each option object.
   * When omitted, uses the smart fallback (Title → name → etc.)
   */
  optionLabel?: OptionLabelResolver

  /**
   * How to extract the value emitted on selection from each option object.
   *
   *   string   — property name, e.g. "Id" emits item.Id
   *   function — custom extractor, e.g. item => item.Id
   *   omitted  — behaviour depends on spType:
   *              • Lookup / User → defaults to emitting item.Id (number)
   *              • everything else → emits the whole object (or the primitive)
   */
  optionValue?: OptionLabelResolver
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)
defineExpose({ requiredPass })

// ─── Value resolution ─────────────────────────────────────────────────────────

/**
 * SP types that represent a single lookup to another list.
 * When no explicit optionValue prop is provided these default to emitting
 * the numeric Id of the selected item rather than the whole object.
 */
const LOOKUP_SP_TYPES: SpType[] = ['Lookup', 'User']

/**
 * Extract the stored/emitted value from a TListItem.
 *
 * Priority:
 *   1. Explicit optionValue prop (string property name or function)
 *   2. Primitives — return as-is
 *   3. Lookup / User spType — default to item.Id
 *   4. Everything else — emit the whole object
 */
function resolveValue(item: TListItem): unknown {
  // Explicit resolver always wins
  if (typeof props.optionValue === 'function') return props.optionValue(item)
  if (typeof props.optionValue === 'string') {
    if (typeof item === 'string' || typeof item === 'number') return item
    const val = (item as Record<string, unknown>)[props.optionValue]
    return val ?? null
  }

  // Primitives — no resolution needed
  if (typeof item === 'string' || typeof item === 'number') return item

  // Lookup / User spType default: emit just the Id
  if (props.spType && LOOKUP_SP_TYPES.includes(props.spType)) {
    const id = (item as Record<string, unknown>)['Id']
    return id ?? null
  }

  // Default — emit the whole object
  return item
}

// ─── Option list ──────────────────────────────────────────────────────────────

interface SelectOption {
  /** Display label rendered inside <option> */
  label: string
  /** Emitted when this option is chosen */
  value: unknown
  /**
   * String key used in the <select :value> comparison and as Vue :key.
   * For primitives it IS the value; for objects we use JSON so that deep
   * equality works for the selected-option highlight.
   */
  key: string
}

const selectOptions = computed<SelectOption[]>(() => {
  if (!props.options?.length) return []
  return props.options.map(item => {
    const label = resolveLabel(item, props.optionLabel)
    const value = resolveValue(item)
    const key = value === null || value === undefined
      ? ''
      : typeof value === 'object'
        ? JSON.stringify(value)
        : String(value)
    return { label, value, key }
  })
})

/**
 * The string key for the currently selected value — used to drive
 * <select :value> so the correct <option> is highlighted on first render
 * and when modelValue is updated externally.
 */
const selectedKey = computed<string>(() => {
  const mv = props.modelValue
  if (mv === null || mv === undefined) return ''
  if (typeof mv === 'object') return JSON.stringify(mv)
  return String(mv)
})

// ─── Event handlers ───────────────────────────────────────────────────────────

function onChange(e: Event) {
  const select = e.target as HTMLSelectElement
  const key = select.value

  if (key === '') {
    emit('update:modelValue', null)
    return
  }

  const matched = selectOptions.value.find(opt => opt.key === key)
  emit('update:modelValue', matched ? matched.value : null)
}

/**
 * Delete or Backspace on a select clears the selection back to null.
 * The browser won't do this natively — we intercept the key and
 * programmatically reset to the placeholder option.
 */
function onKeydown(e: KeyboardEvent) {
  if (e.key !== 'Delete' && e.key !== 'Backspace') return
  if (props.readonly) return
  e.preventDefault()
  emit('update:modelValue', null)
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-list-ul"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
  >
    <select
      :id="id"
      class="form-select"
      :value="selectedKey"
      :disabled="readonly"
      @change="onChange"
      @keydown="onKeydown"
    >
      <!-- Placeholder option -->
      <option value="" :disabled="required">
        {{ placeholder ?? 'Choose…' }}
      </option>

      <option
        v-for="opt in selectOptions"
        :key="opt.key"
        :value="opt.key"
      >
        {{ opt.label }}
      </option>
    </select>
  </FormControlWrapper>
</template>
