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

const props = defineProps<{
  modelValue: unknown
  multi?: boolean
  spType?: SpType
  label?: string
  labelClass?: string
  required?: boolean
  readonly?: boolean
  stacked?: boolean
  options?: TListItem[]
  optionLabel?: OptionLabelResolver
  optionValue?: OptionLabelResolver
  suppressPrefixIcon?: boolean
  errorMessage?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

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

const selectedArray = computed<unknown[]>(() =>
  props.multi && Array.isArray(props.modelValue) ? props.modelValue : []
)

function isChecked(key: string): boolean {
  if (props.multi) {
    return selectedArray.value.some(v => valueToKey(v) === key)
  }
  return valueToKey(props.modelValue) === key
}

function onToggle(opt: ComputedOption) {
  if (props.readonly) return
  touch()

  if (props.multi) {
    const already = selectedArray.value.some(v => valueToKey(v) === opt.key)
    if (already) {
      const next = selectedArray.value.filter(v => valueToKey(v) !== opt.key)
      emit('update:modelValue', next.length ? next : null)
    } else {
      emit('update:modelValue', [...selectedArray.value, opt.value])
    }
  } else {
    if (valueToKey(props.modelValue) === opt.key) {
      emit('update:modelValue', null)
    } else {
      emit('update:modelValue', opt.value)
    }
  }
}

const defaultError = computed(() =>
  props.multi ? 'Please select at least one option' : 'Please select an option'
)
</script>

<template>
  <div role="group" :aria-labelledby="label ? `${id}-label` : undefined">

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
          :class="{ 'is-invalid': isInvalid }"
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

    <div v-if="isInvalid" class="invalid-feedback d-block">
      {{ errorMessage ?? defaultError }}
    </div>

  </div>
</template>
