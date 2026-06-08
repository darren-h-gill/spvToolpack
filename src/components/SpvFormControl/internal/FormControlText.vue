<script setup lang="ts">
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'

const props = withDefaults(defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  maxlength?: number
}>(), {
  modelValue: null,
  maxlength: 255
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

defineExpose({ requiredPass })

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  // Emit null for empty string — cleaner for SP (avoids storing empty strings)
  emit('update:modelValue', val === '' ? null : val)
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-font"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
  >
    <input
      :id="id"
      type="text"
      class="form-control"
      :value="modelValue ?? ''"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxlength"
      @input="onInput"
    >
  </FormControlWrapper>
</template>
