<script setup lang="ts">
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'

const props = defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  errorMessage?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

function onChange(e: Event) {
  touch()
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

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
    icon-class="fa-palette"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'This field is required'"
  >
    <input
      :id="id"
      type="color"
      class="form-control form-control-color flex-grow-1"
      :class="{ 'is-invalid': isInvalid }"
      :value="modelValue ?? '#000000'"
      :disabled="readonly"
      :title="modelValue ?? 'Choose a colour'"
      @change="onChange"
      @keydown="onKeydown"
    >
  </FormControlWrapper>
</template>
