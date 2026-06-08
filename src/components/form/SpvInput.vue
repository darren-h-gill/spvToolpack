<script setup lang="ts">
export type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date'
export type ValidationState = 'valid' | 'invalid' | null

const props = withDefaults(defineProps<{
  modelValue: string | number
  type?: InputType
  label?: string
  placeholder?: string
  size?: 'sm' | 'lg'
  disabled?: boolean
  readonly?: boolean
  validationState?: ValidationState
  validFeedback?: string
  invalidFeedback?: string
  helpText?: string
  id?: string
}>(), {
  type: 'text',
  validationState: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClass = () => [
  'form-control',
  props.size ? `form-control-${props.size}` : '',
  { 'is-valid': props.validationState === 'valid' },
  { 'is-invalid': props.validationState === 'invalid' }
]
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <input
      :id="id"
      :type="type"
      :class="inputClass()"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
    <div v-if="validationState === 'valid' && validFeedback" class="valid-feedback">
      {{ validFeedback }}
    </div>
    <div v-if="validationState === 'invalid' && invalidFeedback" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
    <div v-if="helpText" class="form-text">{{ helpText }}</div>
  </div>
</template>
