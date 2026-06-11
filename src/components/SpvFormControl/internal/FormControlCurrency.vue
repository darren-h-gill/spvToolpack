<script setup lang="ts">
/**
 * FormControlCurrency — numeric input with a currency symbol prefix.
 *
 * modelValue is stored as a plain number (matching SP Currency field storage).
 * The currency symbol is derived from Intl.NumberFormat based on the `currency`
 * and `locale` props, so it adapts automatically to any ISO 4217 code.
 *
 * min/max/step apply in the same currency units as the stored value.
 */
import { computed, ref } from 'vue'
import { clamp } from 'ramda'
import { useFormControl } from '../useFormControl'

const props = withDefaults(defineProps<{
  modelValue: number | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean

  /** ISO 4217 currency code — e.g. "GBP", "USD", "EUR". Defaults to "GBP". */
  currency?: string
  /** BCP 47 locale string for symbol extraction. Defaults to browser locale. */
  locale?: string

  min?: number
  max?: number
  step?: number
}>(), {
  modelValue: null,
  currency: 'GBP',
})

const emit = defineEmits<{
  'update:modelValue': [value: number | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)
defineExpose({ requiredPass })

const inputRef = ref<HTMLInputElement | null>(null)

// ─── Currency symbol ──────────────────────────────────────────────────────────

const currencySymbol = computed<string>(() => {
  try {
    const locale = props.locale
      ?? (typeof navigator !== 'undefined' ? navigator.language : 'en-GB')
    const parts = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: props.currency ?? 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).formatToParts(0)
    return parts.find(p => p.type === 'currency')?.value ?? (props.currency ?? '£')
  } catch {
    return props.currency ?? '£'
  }
})

// ─── Clamping ─────────────────────────────────────────────────────────────────

const minVal = computed(() => props.min ?? -Infinity)
const maxVal = computed(() => props.max ??  Infinity)

// ─── Event handlers ───────────────────────────────────────────────────────────

function onInput(e: Event) {
  const raw = (e.target as HTMLInputElement).value
  if (raw === '') {
    emit('update:modelValue', null)
    return
  }
  const parsed = parseFloat(raw)
  if (!isNaN(parsed)) {
    emit('update:modelValue', parsed)
  }
}

function onBlur(e: FocusEvent) {
  const raw = (e.target as HTMLInputElement).value
  if (raw === '' || props.modelValue === null) return
  const clamped = clamp(minVal.value, maxVal.value, props.modelValue)
  if (clamped !== props.modelValue) {
    emit('update:modelValue', clamped)
    if (inputRef.value) inputRef.value.value = String(clamped)
  }
}
</script>

<template>
  <div>
    <!-- Label -->
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>

    <!-- Input group: currency symbol | number input | required indicator -->
    <div class="input-group">
      <span class="input-group-text fw-semibold">{{ currencySymbol }}</span>

      <input
        :id="id"
        ref="inputRef"
        type="number"
        class="form-control"
        :value="modelValue ?? ''"
        :placeholder="placeholder"
        :readonly="readonly"
        :min="min"
        :max="max"
        :step="step"
        @input="onInput"
        @blur="onBlur"
      >

      <span v-if="required" class="input-group-text">
        <i :class="['fas fa-asterisk fa-xs', haveValue ? 'text-success' : 'text-danger']" />
      </span>
    </div>
  </div>
</template>
