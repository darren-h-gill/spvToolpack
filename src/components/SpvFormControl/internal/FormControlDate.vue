<script setup lang="ts">
/**
 * Date-only control — spType="DateTime" rendered as type="date"
 *
 * modelValue: string | null — SP ISO UTC format, e.g. "2026-06-08T00:00:00Z"
 *
 * Full timezone conversion both ways, same as the datetime-local control.
 * SP "Date Only" values are not guaranteed to be literal midnight UTC — a
 * value entered via SharePoint's own UI is midnight in the site's regional
 * time zone, converted to UTC, so a UK site can produce a value like
 * "2026-06-07T23:00:00Z" for "8 June" while BST is in effect. Converting
 * through the target timezone (defaulting to the browser's) reads back the
 * calendar day that was actually picked, in both BST and GMT.
 */
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import { isoToDateInput, dateInputToIso, getBrowserTimezone } from '../utils/dateUtils'

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
  invalid?: boolean
  errorMessage?: string
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, externalInvalid, resolvedRequired, displayLabel, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => externalInvalid.value || (touched.value && !requiredPass.value))

defineExpose({ requiredPass, touch })

const resolvedTimezone = computed(() => props.timezone ?? getBrowserTimezone())

const displayValue = computed<string>(() =>
  isoToDateInput(props.modelValue, resolvedTimezone.value)
)
const inputMin = computed(() =>
  props.min ? isoToDateInput(props.min, resolvedTimezone.value) : undefined
)
const inputMax = computed(() =>
  props.max ? isoToDateInput(props.max, resolvedTimezone.value) : undefined
)

function onChange(e: Event) {
  touch()
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', dateInputToIso(val, resolvedTimezone.value))
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="displayLabel"
    :label-classes="labelClasses"
    icon-class="fa-calendar"
    :have-value="haveValue"
    :required="resolvedRequired"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'This field is required'"
  >
    <input
      :id="id"
      type="date"
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
      :title="`Dates shown in ${resolvedTimezone}`"
    >
      <i class="fas fa-globe fa-xs" />
    </span>
  </FormControlWrapper>
</template>
