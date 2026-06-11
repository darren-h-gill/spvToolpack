<script setup lang="ts">
/**
 * FormControlSwitch — Bootstrap form-switch for SP Boolean fields.
 *
 * modelValue:
 *   null  — not yet set (renders as OFF; first click sets to true)
 *   false — explicitly OFF
 *   true  — ON
 *
 * Required indicator sits inline after the label text (no input-group wrapper
 * needed for a single checkbox/switch). The asterisk turns green once the user
 * has made any selection (true or false); null = red.
 */
import { computed } from 'vue'
import { useFormControl } from '../useFormControl'

const props = defineProps<{
  modelValue: boolean | null
  label?: string
  labelClass?: string
  required?: boolean
  readonly?: boolean
  // Accepted for passThrough compatibility — not used
  suppressPrefixIcon?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)
defineExpose({ requiredPass })

const checked = computed(() => props.modelValue === true)

function onToggle() {
  if (props.readonly) return
  // null or false → true;  true → false
  emit('update:modelValue', props.modelValue !== true)
}
</script>

<template>
  <div class="form-check form-switch">
    <input
      :id="id"
      type="checkbox"
      role="switch"
      class="form-check-input"
      :checked="checked"
      :disabled="readonly"
      @click.prevent="onToggle"
    >
    <label :for="id" :class="['form-check-label', ...labelClasses.filter(c => c !== 'form-label')]">
      {{ label }}
      <i
        v-if="required"
        :class="['fas fa-asterisk fa-xs ms-1', haveValue ? 'text-success' : 'text-danger']"
      />
    </label>
  </div>
</template>
