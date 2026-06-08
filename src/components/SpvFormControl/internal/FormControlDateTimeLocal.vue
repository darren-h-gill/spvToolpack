<script setup lang="ts">
/**
 * DateTime control — spType="DateTime" rendered as type="datetime-local"
 *
 * modelValue: string | null — SP ISO UTC format, e.g. "2026-06-08T13:30:00Z"
 *
 * Full timezone conversion both ways:
 *   SP UTC → local display:  "2026-06-08T13:30:00Z" in BST → input shows "2026-06-08T14:30"
 *   Local input → SP UTC:    "2026-06-08T14:30" in BST     → emits "2026-06-08T13:30:00Z"
 *
 * The `timezone` prop accepts any IANA timezone string (e.g. "Europe/London").
 * Defaults to the browser's own timezone.
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
  /** IANA timezone string. Defaults to the browser's local timezone. */
  timezone?: string
  min?: string   // ISO datetime string
  max?: string   // ISO datetime string
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

defineExpose({ requiredPass })

const resolvedTimezone = computed(() => props.timezone ?? getBrowserTimezone())

// SP ISO UTC → local datetime-local input value
const displayValue = computed<string>(() =>
  isoToDateTimeInput(props.modelValue, resolvedTimezone.value)
)

// min/max in ISO → input format in the same timezone
const inputMin = computed(() =>
  props.min ? isoToDateTimeInput(props.min, resolvedTimezone.value) : undefined
)
const inputMax = computed(() =>
  props.max ? isoToDateTimeInput(props.max, resolvedTimezone.value) : undefined
)

function onChange(e: Event) {
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
  >
    <input
      :id="id"
      type="datetime-local"
      class="form-control"
      :value="displayValue"
      :readonly="readonly"
      :min="inputMin"
      :max="inputMax"
      @change="onChange"
    >
    <!-- Timezone indicator — shown when an explicit timezone is set so the user
         knows the control is not using their local time -->
    <span
      v-if="timezone"
      class="input-group-text text-muted small"
      :title="`Times shown in ${resolvedTimezone}`"
    >
      <i class="fas fa-globe fa-xs" />
    </span>
  </FormControlWrapper>
</template>
