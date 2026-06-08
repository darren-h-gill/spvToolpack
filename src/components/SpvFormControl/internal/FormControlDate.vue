<script setup lang="ts">
/**
 * Date-only control — spType="DateTime" rendered as type="date"
 *
 * modelValue: string | null — SP ISO format, e.g. "2026-06-08T00:00:00Z"
 *
 * No timezone conversion needed. SP date-only fields are always stored as
 * midnight UTC and we treat the YYYY-MM-DD prefix as the authoritative date,
 * avoiding the classic "wrong day" bug for timezones ahead of UTC.
 */
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import { isoToDateInput, dateInputToIso } from '../utils/dateUtils'

const props = withDefaults(defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  min?: string   // ISO date string for min constraint, e.g. "2020-01-01T00:00:00Z"
  max?: string   // ISO date string for max constraint
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

defineExpose({ requiredPass })

// Convert SP ISO → input-friendly YYYY-MM-DD
const displayValue = computed<string>(() => isoToDateInput(props.modelValue))

// min/max also need converting to input format if provided as ISO strings
const inputMin = computed(() => props.min ? isoToDateInput(props.min) : undefined)
const inputMax = computed(() => props.max ? isoToDateInput(props.max) : undefined)

function onChange(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', dateInputToIso(val))
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-calendar"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
  >
    <input
      :id="id"
      type="date"
      class="form-control"
      :value="displayValue"
      :readonly="readonly"
      :min="inputMin"
      :max="inputMax"
      @change="onChange"
    >
  </FormControlWrapper>
</template>
