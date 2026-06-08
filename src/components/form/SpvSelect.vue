<script setup lang="ts">
import type { ValidationState } from './SpvInput.vue'

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue: string | number
  options: SelectOption[]
  label?: string
  placeholder?: string
  size?: 'sm' | 'lg'
  disabled?: boolean
  validationState?: ValidationState
  validFeedback?: string
  invalidFeedback?: string
  helpText?: string
  id?: string
}>(), {
  validationState: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectClass = () => [
  'form-select',
  props.size ? `form-select-${props.size}` : '',
  { 'is-valid': props.validationState === 'valid' },
  { 'is-invalid': props.validationState === 'invalid' }
]
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">{{ label }}</label>
    <select
      :id="id"
      :class="selectClass()"
      :value="modelValue"
      :disabled="disabled"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        :disabled="opt.disabled"
      >
        {{ opt.label }}
      </option>
    </select>
    <div v-if="validationState === 'valid' && validFeedback" class="valid-feedback">
      {{ validFeedback }}
    </div>
    <div v-if="validationState === 'invalid' && invalidFeedback" class="invalid-feedback">
      {{ invalidFeedback }}
    </div>
    <div v-if="helpText" class="form-text">{{ helpText }}</div>
  </div>
</template>
