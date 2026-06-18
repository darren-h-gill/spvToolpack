<script setup lang="ts">
/**
 * DateTime control — spType="DateTime" rendered as type="datetime-local"
 *
 * modelValue: string | null — SP ISO UTC format, e.g. "2026-06-08T13:30:00Z"
 *
 * Full timezone conversion both ways:
 *   SP UTC → local display:  "2026-06-08T13:30:00Z" in BST → input shows "2026-06-08T14:30"
 *   Local input → SP UTC:    "2026-06-08T14:30" in BST     → emits "2026-06-08T13:30:00Z"
 */
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import { isoToDateTimeInput, dateTimeInputToIso, getBrowserTimezone } from '../utils/dateUtils'

const props = withDefaults(defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  timezone?: string
  min?: string
  max?: string
  errorMessage?: string
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

const resolvedTimezone = computed(() => props.timezone ?? getBrowserTimezone())

const displayValue = computed<string>(() =>
  isoToDateTimeInput(props.modelValue, resolvedTimezone.value)
)
const inputMin = computed(() =>
  props.min ? isoToDateTimeInput(props.min, resolvedTimezone.value) : undefined
)
const inputMax = computed(() =>
  props.max ? isoToDateTimeInput(props.max, resolvedTimezone.value) : undefined
)

function onChange(e: Event) {
  touch()
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', dateTimeInputToIso(val, resolvedTimezone.value))
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-clock"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'This field is required'"
  >
    <input
      :id="id"
      type="datetime-local"
      class="form-control"
      :class="{ 'is-invalid': isInvalid }"
      :value="displayValue"
      :readonly="readonly"
      :min="inputMin"
      :max="inputMax"
      @change="onChange"
    >
    <span
      v-if="timezone"
      class="input-group-text text-muted small"
      :title="`Times shown in ${resolvedTimezone}`"
    >
      <i class="fas fa-globe fa-xs" />
    </span>
  </FormControlWrapper>
</template>
