<script setup lang="ts">
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
  step?: number
  invalid?: boolean
  errorMessage?: string
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
}>()

const { id, haveValue, requiredPass, externalInvalid, resolvedRequired, displayLabel, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => externalInvalid.value || (touched.value && !requiredPass.value))

defineExpose({ requiredPass, touch })

const inputRef = ref<HTMLInputElement | null>(null)

const displayValue = computed<string>(() => {
  return isNil(props.modelValue) ? '' : String(props.modelValue)
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

  emit('update:modelValue', clamped)
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="displayLabel"
    :label-classes="labelClasses"
    icon-class="fa-hashtag"
    :have-value="haveValue"
    :required="resolvedRequired"
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
      :step="step"
      @input="onInput"
      @blur="touch"
    >
  </FormControlWrapper>
</template>
