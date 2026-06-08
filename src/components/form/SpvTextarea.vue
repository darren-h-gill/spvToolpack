<script setup lang="ts">
import type { ValidationState } from './SpvInput.vue'

const props = withDefaults(defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  rows?: number
  disabled?: boolean
  readonly?: boolean
  validationState?: ValidationState
  validFeedback?: string
  invalidFeedback?: string
  helpText?: string
  id?: string
}>(), {
  rows: 3,
  validationState: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const textareaClass = () => [
  'form-control',
  { 'is-valid': props.validationState === 'valid' },
  { 'is-invalid': props.validationState === 'invalid' }
]
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <textarea
      :id="id"
      :class="textareaClass()"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <div v-if="validationState === 'valid' && validFeedback" class="valid-feedback">
      {{ validFeedback }}
    </div>
    <div v-if="validationState === 'invalid' && invalidFeedback" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
    <div v-if="helpText" class="form-text">{{ helpText }}</div>
  </div>
</template>
