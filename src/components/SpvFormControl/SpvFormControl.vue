<script setup lang="ts">
/**
 * SpvFormControl — single unified form control for SharePoint-bound data.
 *
 * The modelValue is always in SharePoint format:
 *   text          → string | null
 *   number        → number | null
 *   percent       → number | null  (stored as decimal, e.g. 0.8 for 80%)
 *   date          → string | null  (ISO UTC, e.g. "2026-06-08T00:00:00Z")
 *   datetime-local→ string | null  (ISO UTC, e.g. "2026-06-08T13:30:00Z")
 *
 * Props:
 *   spType   — the SharePoint field TypeAsString (e.g. "Text", "Number", "LookupMulti")
 *              Determines the default rendering type and SP-specific defaults.
 *   type     — overrides the rendered control type when the SP type and display
 *              type differ (e.g. spType="Number" type="percent").
 *              When omitted, derived automatically from spType via SP_TYPE_DEFAULTS.
 *   timezone — IANA timezone string for DateTime controls (e.g. "Europe/London").
 *              Defaults to the browser's local timezone. Ignored for date-only controls.
 */
import { computed, ref } from 'vue'
import type { FormControlType, SpType, TListItem, OptionLabelResolver } from './types'
import { SP_TYPE_DEFAULTS, SP_TYPE_MAXLENGTH } from './types'
import FormControlText from './internal/FormControlText.vue'
import FormControlPassword from './internal/FormControlPassword.vue'
import FormControlNumber from './internal/FormControlNumber.vue'
import FormControlPercent from './internal/FormControlPercent.vue'
import FormControlDate from './internal/FormControlDate.vue'
import FormControlDateTimeLocal from './internal/FormControlDateTimeLocal.vue'

const props = defineProps<{
  /** SharePoint field TypeAsString — drives default type and SP-specific behaviour */
  spType?: SpType

  /**
   * HTML control type override. When omitted, derived from spType.
   * Explicitly set when the SP data type and desired UI differ
   * (e.g. spType="Number" type="percent").
   */
  type?: FormControlType

  /** The bound value — always in SP format */
  modelValue: unknown

  /** Optional label rendered above the control */
  label?: string
  /** Additional CSS classes for the label element */
  labelClass?: string

  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean

  // number / percent props
  min?: number
  max?: number
  step?: number

  // text props — maxlength derived from spType (Text → 255) when omitted
  maxlength?: number

  /**
   * IANA timezone string for DateTime controls, e.g. "Europe/London".
   * Defaults to the browser's local timezone.
   * Has no effect on date-only controls.
   */
  timezone?: string

  /**
   * Optional list of items for suggestion lists (datalist) or option-based
   * controls (select, checkboxes, radio). Items may be strings, numbers, or objects.
   */
  options?: TListItem[]

  /**
   * How to extract the display string from each option when options contains
   * objects. Either a property name ("Title") or a formatter function.
   * When omitted, a smart fallback tries common property names automatically.
   */
  optionLabel?: OptionLabelResolver

  /**
   * When true, input is restricted to values present in the options list.
   * Validated on blur — invalid values are cleared, valid values are
   * normalised to their canonical casing from the options list.
   */
  optionStrict?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

// Resolved control type: explicit `type` prop wins, otherwise derived from spType,
// otherwise fall back to 'text'
const resolvedType = computed<FormControlType>(() => {
  if (props.type) return props.type
  if (props.spType) return SP_TYPE_DEFAULTS[props.spType]
  return 'text'
})

// Resolved maxlength: explicit prop wins, otherwise look up SP_TYPE_MAXLENGTH,
// otherwise undefined (no limit)
const resolvedMaxlength = computed<number | undefined>(() => {
  if (props.maxlength !== undefined) return props.maxlength
  if (props.spType) return SP_TYPE_MAXLENGTH[props.spType]
  return undefined
})

// Resolve which internal component to render
const resolvedComponent = computed(() => {
  switch (resolvedType.value) {
    case 'password':       return FormControlPassword
    case 'number':         return FormControlNumber
    case 'percent':        return FormControlPercent
    case 'date':           return FormControlDate
    case 'datetime-local': return FormControlDateTimeLocal
    case 'text':
    default:               return FormControlText
  }
})

// Forward the inner component's requiredPass up to the consumer
const innerRef = ref<{ requiredPass: boolean } | null>(null)
const requiredPass = computed(() => innerRef.value?.requiredPass ?? true)
defineExpose({ requiredPass })

// Props passed through to whichever internal component is active.
// Cast to any: the outer shell deliberately accepts unknown modelValue and
// routes it to a typed internal — type safety is enforced at the consumer level.
const passThrough = computed(() => ({
  modelValue:         props.modelValue,
  spType:             props.spType,
  label:              props.label,
  labelClass:         props.labelClass,
  placeholder:        props.placeholder,
  required:           props.required,
  readonly:           props.readonly,
  suppressPrefixIcon: props.suppressPrefixIcon,
  min:                props.min,
  max:                props.max,
  step:               props.step,
  maxlength:          resolvedMaxlength.value,
  timezone:           props.timezone,
  options:            props.options,
  optionLabel:        props.optionLabel,
  optionStrict:       props.optionStrict,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any))
</script>

<template>
  <component
    :is="resolvedComponent"
    ref="innerRef"
    v-bind="passThrough"
    @update:model-value="emit('update:modelValue', $event)"
  />
</template>
