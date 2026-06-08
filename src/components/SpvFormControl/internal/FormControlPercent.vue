<script setup lang="ts">
/**
 * Percent control
 *
 * modelValue (SP stored value) : number | null  — stored as a decimal, e.g. 0.8
 * Display value                : the percentage, e.g. 80
 *
 * min / max props are in DISPLAY (percent) space, e.g. min=0 max=100
 *
 * Rounding strategy (ported from LabelledControlGroup):
 *   Multiplying/dividing by 100 can introduce floating-point noise.
 *   e.g. 0.07 * 100 = 7.000000000000001
 *   We detect this by comparing decimal-place counts before and after
 *   the operation and apply toFixed() when noise is detected.
 */
import { computed, ref } from 'vue'
import { clamp, isNil } from 'ramda'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'

const props = withDefaults(defineProps<{
  modelValue: number | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  /** Min value in percent-display space (e.g. 0) */
  min?: number
  /** Max value in percent-display space (e.g. 100) */
  max?: number
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

defineExpose({ requiredPass })

const inputRef = ref<HTMLInputElement | null>(null)

// --- Rounding helpers ---------------------------------------------------

/** Count the number of decimal places in a numeric string / number */
function decimalPlaces(value: number): number {
  const str = value.toString()
  const dot = str.indexOf('.')
  return dot > -1 ? str.length - dot - 1 : 0
}

/**
 * Convert stored decimal → display percent string, guarding against
 * floating-point noise introduced by * 100.
 *
 * e.g.  0.8   → "80"
 *       0.07  → "7"      (not "7.000000000000001")
 *       0.333 → "33.3"
 *       0.125 → "12.5"
 */
function decimalToDisplayPercent(decimal: number): string {
  const srcPlaces = decimalPlaces(decimal)
  const asPercent = decimal * 100
  const trgPlaces = decimalPlaces(asPercent)

  if (trgPlaces > srcPlaces + 2) {
    // Floating-point noise detected — round to source precision
    return parseFloat(asPercent.toFixed(srcPlaces)).toString()
  }
  return asPercent.toString()
}

/**
 * Convert display percent → stored decimal, guarding against noise
 * introduced by / 100.
 *
 * e.g.  80   → 0.8
 *       7    → 0.07
 *       33.3 → 0.333
 */
function displayPercentToDecimal(displayValue: number): number {
  const srcPlaces = decimalPlaces(displayValue)
  const raw = displayValue / 100
  // Round to srcPlaces + 2 to eliminate noise, then strip trailing zeros
  return parseFloat(raw.toFixed(srcPlaces + 2))
}

// --- Computed display value (decimal → percent string for the input) ---

const displayValue = computed<string>(() => {
  if (isNil(props.modelValue)) return ''
  return decimalToDisplayPercent(props.modelValue)
})

// --- Input handler ------------------------------------------------------

function onInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value

  if (raw === '' || raw === '-') {
    emit('update:modelValue', null)
    return
  }

  const parsed = parseFloat(raw)

  if (isNaN(parsed)) {
    if (inputRef.value) inputRef.value.value = displayValue.value
    return
  }

  // Clamp in display (percent) space
  const minVal = isNil(props.min) ? Number.NEGATIVE_INFINITY : props.min
  const maxVal = isNil(props.max) ? Number.POSITIVE_INFINITY : props.max
  const clamped = clamp(minVal, maxVal, parsed)

  if (clamped !== parsed && inputRef.value) {
    inputRef.value.value = String(clamped)
  }

  // Convert back to decimal for SP storage
  emit('update:modelValue', displayPercentToDecimal(clamped))
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-percent"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
  >
    <input
      :id="id"
      ref="inputRef"
      type="number"
      class="form-control"
      :value="displayValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :min="min"
      :max="max"
      @input="onInput"
    >
  </FormControlWrapper>
</template>
