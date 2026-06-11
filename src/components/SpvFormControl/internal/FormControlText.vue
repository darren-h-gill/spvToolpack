<script setup lang="ts">
import { computed, ref } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import type { TListItem, OptionLabelResolver } from '../types'
import { resolveLabel } from '../utils/optionUtils'

const props = withDefaults(defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  maxlength?: number
  /**
   * Optional list of suggestions rendered as a <datalist>.
   * Items can be plain strings or objects — see optionLabel for object config.
   */
  options?: TListItem[]
  /**
   * How to extract the display string from each option when options contains
   * objects. Either a property name ("Title") or a formatter function.
   * When omitted, a smart fallback tries common property names automatically.
   */
  optionLabel?: OptionLabelResolver
  /**
   * When true, the value is only valid if it exactly matches an entry in the
   * options list (case-insensitive). Validated on blur — the field is cleared
   * if no match is found, and the canonical label is emitted if the casing differs.
   * Has no effect when options is empty or not provided.
   */
  optionStrict?: boolean
}>(), {
  modelValue: null,
  maxlength: 255
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

// --- Strict mode validity tracking ---------------------------------------
// We only validate on blur, so we track whether the field has been blurred
// and whether the last blur produced a valid selection.
// Initial values from data are assumed valid (they came from SP, not user input).

const hasBeenBlurred = ref(false)
const isValidSelection = ref(true)

// Exposed requiredPass factors in strict-mode validity after first blur.
// Before blur: behave as normal (don't penalise mid-typing).
const exposedRequiredPass = computed<boolean>(() => {
  const basePass = requiredPass.value
  if (!props.optionStrict || !hasBeenBlurred.value) return basePass
  // In strict mode post-blur: must also be a valid selection (or empty, which
  // the base required check already handles)
  return basePass && (haveValue.value ? isValidSelection.value : true)
})

defineExpose({ requiredPass: exposedRequiredPass })

// --- Datalist ------------------------------------------------------------

const datalistId = computed(() => props.options?.length ? `${id}-list` : undefined)

const optionLabels = computed<string[]>(() => {
  if (!props.options?.length) return []
  return props.options.map(item => resolveLabel(item, props.optionLabel))
})

// --- Event handlers ------------------------------------------------------

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val === '' ? null : val)
}

function onBlur(e: FocusEvent) {
  if (!props.optionStrict || !props.options?.length) return

  hasBeenBlurred.value = true

  const input = e.target as HTMLInputElement
  const val = input.value

  // Empty field — not a strict violation, handled by required separately
  if (!val) {
    isValidSelection.value = true
    return
  }

  const lower = val.toLowerCase()
  const canonical = optionLabels.value.find(label => label.toLowerCase() === lower)

  if (canonical) {
    isValidSelection.value = true
    // Emit canonical casing if the user typed it differently
    if (canonical !== val) {
      input.value = canonical
      emit('update:modelValue', canonical)
    }
  } else {
    // No match — clear the field
    isValidSelection.value = false
    input.value = ''
    emit('update:modelValue', null)
  }
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-font"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
  >
    <input
      :id="id"
      type="text"
      class="form-control"
      :value="modelValue ?? ''"
      :placeholder="placeholder"
      :readonly="readonly"
      :maxlength="maxlength"
      :list="datalistId"
      @input="onInput"
      @blur="onBlur"
    >

    <datalist v-if="datalistId" :id="datalistId">
      <option
        v-for="label in optionLabels"
        :key="label"
        :value="label"
      />
    </datalist>
  </FormControlWrapper>
</template>
