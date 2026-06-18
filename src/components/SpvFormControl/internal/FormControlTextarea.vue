<script setup lang="ts">
import { computed } from 'vue'
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
  rows?: number
  errorMessage?: string
}>(), {
  modelValue: null,
  rows: 3,
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

function onInput(e: Event) {
  const val = (e.target as HTMLTextAreaElement).value
  emit('update:modelValue', val === '' ? null : val)
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-pen-fancy"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'This field is required'"
  >
    <textarea
      :id="id"
      class="form-control"
      :class="{ 'is-invalid': isInvalid }"
      :value="modelValue ?? ''"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxlength"
      :rows="rows"
      @input="onInput"
      @blur="touch"
    />
  </FormControlWrapper>
</template>
