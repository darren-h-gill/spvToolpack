<script setup lang="ts">
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'

// ─── Props ────────────────────────────────────────────────────────────────────

const props = defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)
defineExpose({ requiredPass })

// ─── Event handlers ───────────────────────────────────────────────────────────

function onChange(e: Event) {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}

/**
 * Delete / Backspace clears back to null — consistent with FormControlSelect.
 * The native color input has no empty state so we handle it in JS.
 */
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
  >
    <input
      :id="id"
      type="color"
      class="form-control form-control-color flex-grow-1"
      :value="modelValue ?? '#000000'"
      :disabled="readonly"
      :title="modelValue ?? 'Choose a colour'"
      @change="onChange"
      @keydown="onKeydown"
    >
  </FormControlWrapper>
</template>
