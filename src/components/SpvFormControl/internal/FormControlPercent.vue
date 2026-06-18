<script setup lang="ts">
/**
 * Percent control
 *
 * modelValue (SP stored value) : number | null  — stored as a decimal, e.g. 0.8
 * Display value                : the percentage, e.g. 80
 *
 * min / max props are in DISPLAY (percent) space, e.g. min=0 max=100
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
  min?: number
  max?: number
  errorMessage?: string
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

const inputRef = ref<HTMLInputElement | null>(null)

function decimalPlaces(value: number): number {
  const str = value.toString()
  const dot = str.indexOf('.')
  return dot > -1 ? str.length - dot - 1 : 0
}

function decimalToDisplayPercent(decimal: number): string {
  const srcPlaces = decimalPlaces(decimal)
  const asPercent = decimal * 100
  const trgPlaces = decimalPlaces(asPercent)
  if (trgPlaces > srcPlaces + 2) {
    return parseFloat(asPercent.toFixed(srcPlaces)).toString()
  }
  return asPercent.toString()
}

function displayPercentToDecimal(displayValue: number): number {
  const srcPlaces = decimalPlaces(displayValue)
  const raw = displayValue / 100
  return parseFloat(raw.toFixed(srcPlaces + 2))
}

const displayValue = computed<string>(() => {
  if (isNil(props.modelValue)) return ''
  return decimalToDisplayPercent(props.modelValue)
})

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

  const minVal = isNil(props.min) ? Number.NEGATIVE_INFINITY : props.min
  const maxVal = isNil(props.max) ? Number.POSITIVE_INFINITY : props.max
  const clamped = clamp(minVal, maxVal, parsed)

  if (clamped !== parsed && inputRef.value) {
    inputRef.value.value = String(clamped)
  }

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
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'This field is required'"
  >
    <input
      :id="id"
      ref="inputRef"
      type="number"
      class="form-control"
      :class="{ 'is-invalid': isInvalid }"
      :value="displayValue"
      :placeholder="placeholder"
      :readonly="readonly"
      :min="min"
      :max="max"
      @input="onInput"
      @blur="touch"
    >
  </FormControlWrapper>
</template>
