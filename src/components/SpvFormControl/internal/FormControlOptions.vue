<script setup lang="ts">
/**
 * FormControlOptions — renders either a checkbox group (multi-select) or a
 * radio button group (single-select) depending on the `multi` prop.
 *
 * Used for:
 *   type="checkboxes"  (spType MultiChoice) → multi=true,  modelValue: unknown[] | null
 *   type="radio"       (spType Choice)      → multi=false, modelValue: unknown  | null
 *
 * Radio buttons support click-to-deselect: clicking the already-selected option
 * emits null, allowing the field to return to an unanswered state.
 *
 * Layout is inline by default; pass stacked for one-per-line rendering.
 */
import { computed } from 'vue'
import { useFormControl } from '../useFormControl'
import type { TListItem, OptionLabelResolver, SpType } from '../types'
import { resolveLabel } from '../utils/optionUtils'

// ─── Props ────────────────────────────────────────────────────────────────────

const props = defineProps<{
  modelValue: unknown
  /** true → checkboxes (multi-select);  false → radio (single-select) */
  multi?: boolean
  spType?: SpType
  label?: string
  labelClass?: string
  required?: boolean
  readonly?: boolean
  /** One option per line. Defaults to inline (false). */
  stacked?: boolean

  options?: TListItem[]
  optionLabel?: OptionLabelResolver
  optionValue?: OptionLabelResolver

  // Accepted for passThrough compatibility — not used by this component
  suppressPrefixIcon?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

// ─── Form control base ────────────────────────────────────────────────────────

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)
defineExpose({ requiredPass })

// ─── Value resolution ─────────────────────────────────────────────────────────

const LOOKUP_SP_TYPES: SpType[] = ['Lookup', 'LookupMulti', 'User', 'UserMulti']

function resolveValue(item: TListItem): unknown {
  if (typeof props.optionValue === 'function') return props.optionValue(item)
  if (typeof props.optionValue === 'string') {
    if (typeof item === 'string' || typeof item === 'number') return item
    return (item as Record<string, unknown>)[props.optionValue] ?? null
  }
  if (typeof item === 'string' || typeof item === 'number') return item
  if (props.spType && LOOKUP_SP_TYPES.includes(props.spType)) {
    return (item as Record<string, unknown>)['Id'] ?? null
  }
  return item
}

function valueToKey(v: unknown): string {
  if (v === null || v === undefined) return ''
  if (typeof v === 'object') return JSON.stringify(v)
  return String(v)
}

// ─── Option list ──────────────────────────────────────────────────────────────

interface ComputedOption {
  label: string
  value: unknown
  key: string
}

const allOptions = computed<ComputedOption[]>(() =>
  (props.options ?? []).map(item => ({
    label: resolveLabel(item, props.optionLabel),
    value: resolveValue(item),
    key:   valueToKey(resolveValue(item)),
  }))
)

// ─── Selection state ──────────────────────────────────────────────────────────

const selectedArray = computed<unknown[]>(() =>
  props.multi && Array.isArray(props.modelValue) ? props.modelValue : []
)

function isChecked(key: string): boolean {
  if (props.multi) {
    return selectedArray.value.some(v => valueToKey(v) === key)
  }
  return valueToKey(props.modelValue) === key
}

// ─── Event handlers ───────────────────────────────────────────────────────────

function onToggle(opt: ComputedOption) {
  if (props.readonly) return

  if (props.multi) {
    const already = selectedArray.value.some(v => valueToKey(v) === opt.key)
    if (already) {
      const next = selectedArray.value.filter(v => valueToKey(v) !== opt.key)
      emit('update:modelValue', next.length ? next : null)
    } else {
      emit('update:modelValue', [...selectedArray.value, opt.value])
    }
  } else {
    // Radio: clicking the selected option deselects it back to null
    if (valueToKey(props.modelValue) === opt.key) {
      emit('update:modelValue', null)
    } else {
      emit('update:modelValue', opt.value)
    }
  }
}
</script>

<template>
  <div role="group" :aria-labelledby="label ? `${id}-label` : undefined">

    <!-- Group label with inline required indicator -->
    <div
      v-if="label"
      :id="`${id}-label`"
      :class="labelClasses"
      style="margin-bottom: 0.25rem;"
    >
      {{ label }}
      <i
        v-if="required"
        :class="['fas fa-asterisk fa-xs ms-1', haveValue ? 'text-success' : 'text-danger']"
      />
    </div>

    <!-- Option list — inline by default, stacked when prop set -->
    <div>
      <div
        v-for="(opt, i) in allOptions"
        :key="opt.key"
        class="form-check"
        :class="{ 'form-check-inline': !stacked }"
      >
        <input
          :id="`${id}-opt-${i}`"
          :type="multi ? 'checkbox' : 'radio'"
          class="form-check-input"
          :checked="isChecked(opt.key)"
          :disabled="readonly"
          :name="multi ? undefined : id"
          @click="onToggle(opt)"
        >
        <label :for="`${id}-opt-${i}`" class="form-check-label">
          {{ opt.label }}
        </label>
      </div>
    </div>

  </div>
</template>
