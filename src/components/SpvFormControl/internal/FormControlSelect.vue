<script setup lang="ts">
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import type { TListItem, OptionLabelResolver } from '../types'
import { resolveLabel } from '../utils/optionUtils'

// ─── Props ────────────────────────────────────────────────────────────────────

const props = defineProps<{
  modelValue: unknown
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
   *   omitted  — for plain strings/numbers emits the primitive; for objects
   *              emits the entire object (useful for SP lookup bindings where
   *              you want to store { Id, Title } as a whole unit).
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
 * Extract the stored/emitted value from a TListItem, using optionValue if
 * provided, otherwise the primitive itself or the whole object.
 */
function resolveValue(item: TListItem): unknown {
  if (typeof item === 'string' || typeof item === 'number') return item
  if (typeof props.optionValue === 'function') return props.optionValue(item)
  if (typeof props.optionValue === 'string') {
    const val = (item as Record<string, unknown>)[props.optionValue]
    return val ?? null
  }
  // No optionValue — emit the whole object
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
