<script setup lang="ts">
/**
 * FormControlSwitch — Bootstrap form-switch for SP Boolean fields.
 *
 * modelValue:
 *   null  — not yet set (renders as OFF; first click sets to true)
 *   false — explicitly OFF
 *   true  — ON
 *
 * Required: null = not satisfied; true or false = satisfied (user made a choice).
 */
import { computed } from 'vue'
import { useFormControl } from '../useFormControl'

const props = defineProps<{
  modelValue: boolean | null
  label?: string
  labelClass?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  errorMessage?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean | null]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

// Writable computed drives v-model on the native checkbox, avoiding the
// :checked + @click.prevent pattern which fights the browser's DOM state.
// null and false both display as unchecked; first check always emits true.
const switchValue = computed({
  get: () => props.modelValue === true,
  set: (val: boolean) => {
    if (props.readonly) return
    touch()
    emit('update:modelValue', val)
  },
})
</script>

<template>
  <div>
    <div class="form-check form-switch">
      <input
        :id="id"
        type="checkbox"
        role="switch"
        class="form-check-input"
        :class="{ 'is-invalid': isInvalid }"
        v-model="switchValue"
        :disabled="readonly"
      >
      <label :for="id" :class="['form-check-label', ...labelClasses.filter(c => c !== 'form-label')]">
        {{ label }}
        <i
          v-if="required"
          :class="['fas fa-asterisk fa-xs ms-1', haveValue ? 'text-success' : 'text-danger']"
        />
      </label>
    </div>

    <!-- Error shown below the switch row; only when required and not yet set -->
    <div v-if="isInvalid" class="invalid-feedback d-block">
      {{ errorMessage ?? 'This field is required' }}
    </div>
  </div>
</template>
