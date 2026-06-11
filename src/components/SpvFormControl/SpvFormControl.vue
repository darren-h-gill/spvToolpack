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
import FormControlSelect from './internal/FormControlSelect.vue'
import FormControlLookupMulti from './internal/FormControlLookupMulti.vue'
import FormControlColor from './internal/FormControlColor.vue'
import FormControlOptions from './internal/FormControlOptions.vue'
import FormControlTextarea from './internal/FormControlTextarea.vue'
import FormControlSwitch from './internal/FormControlSwitch.vue'
import FormControlCurrency from './internal/FormControlCurrency.vue'
import FormControlLookup from './internal/FormControlLookup.vue'

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
  /** Render checkboxes/radio options one per line. Defaults to inline. */
  stacked?: boolean

  // number / percent props
  min?: number
  max?: number
  step?: number

  // text / textarea props
  maxlength?: number
  /** Number of visible rows for textarea controls. Defaults to 3. */
  rows?: number

  /** ISO 4217 currency code for currency controls, e.g. "GBP", "USD". Defaults to "GBP". */
  currency?: string
  /** BCP 47 locale string for currency symbol extraction. Defaults to browser locale. */
  locale?: string

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
   * How to extract the stored/emitted value from each option object.
   * For plain strings/numbers the primitive itself is always emitted.
   * For objects: string = property name (e.g. "Id"), function = custom extractor.
   * When omitted for objects, the entire object is emitted.
   */
  optionValue?: OptionLabelResolver

  /**
   * When true, input is restricted to values present in the options list.
   * Validated on blur — invalid values are cleared, valid values are
   * normalised to their canonical casing from the options list.
   */
  optionStrict?: boolean

  // ── Password validation rules (type="password" only) ─────────────────────
  /** Minimum number of characters */
  minLength?: number
  /**
   * Array of character sets — at least one char from each set must be present.
   * e.g. ["0123456789", "!@#$%^&*()"] requires a digit AND a special character.
   */
  requiredCharacters?: string[]
  /** Must contain both upper and lowercase letters */
  mixedCase?: boolean
  /**
   * Must equal this value — pass the other password field's modelValue reactively.
   * e.g. :must-match="confirmPassword"
   */
  mustMatch?: string | null
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
  /** Forwarded from FormControlLookupMulti — current typeahead query, '' on close */
  'search': [query: string]
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
    case 'select':         return FormControlSelect
    case 'lookupMulti':    return FormControlLookupMulti
    case 'color':          return FormControlColor
    case 'checkboxes':     return FormControlOptions
    case 'radio':          return FormControlOptions
    case 'textarea':       return FormControlTextarea
    case 'switch':         return FormControlSwitch
    case 'currency':       return FormControlCurrency
    case 'lookup':         return FormControlLookup
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
  stacked:            props.stacked,
  multi:              resolvedType.value === 'checkboxes',
  min:                props.min,
  max:                props.max,
  step:               props.step,
  maxlength:          resolvedMaxlength.value,
  rows:               props.rows,
  currency:           props.currency,
  locale:             props.locale,
  timezone:           props.timezone,
  options:            props.options,
  optionLabel:        props.optionLabel,
  optionValue:        props.optionValue,
  optionStrict:       props.optionStrict,
  minLength:          props.minLength,
  requiredCharacters: props.requiredCharacters,
  mixedCase:          props.mixedCase,
  mustMatch:          props.mustMatch,
// eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any))
</script>

<template>
  <component
    :is="resolvedComponent"
    ref="innerRef"
    v-bind="passThrough"
    @update:model-value="emit('update:modelValue', $event)"
    @search="emit('search', $event)"
  />
</template>
