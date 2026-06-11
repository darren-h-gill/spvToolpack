<script setup lang="ts">
import { ref } from 'vue'
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
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

defineExpose({ requiredPass })

// Toggle between masked and visible input
const visible = ref(false)

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val === '' ? null : val)
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-lock"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
  >
    <input
      :id="id"
      :type="visible ? 'text' : 'password'"
      class="form-control"
      :value="modelValue ?? ''"
      :placeholder="placeholder"
      :readonly="readonly"
      autocomplete="current-password"
      @input="onInput"
    >

    <template #suffix>
      <button
        type="button"
        class="btn btn-outline-secondary"
        :title="visible ? 'Hide password' : 'Show password'"
        :aria-label="visible ? 'Hide password' : 'Show password'"
        :aria-pressed="visible"
        tabindex="-1"
        @click="visible = !visible"
      >
        <i :class="['fas', visible ? 'fa-eye-slash' : 'fa-eye']" />
      </button>
    </template>
  </FormControlWrapper>
</template>
