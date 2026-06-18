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
  options?: TListItem[]
  optionLabel?: OptionLabelResolver
  /**
   * When true, the value is only valid if it exactly matches an entry in the
   * options list (case-insensitive). Validated on blur — the field is cleared
   * if no match is found, and the canonical label is emitted if the casing differs.
   * Has no effect when options is empty or not provided.
   */
  optionStrict?: boolean
  errorMessage?: string
}>(), {
  modelValue: null,
  maxlength: 255
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

// --- Strict mode validity tracking ---------------------------------------
// isValidSelection tracks whether the last blur produced a valid selection.
// Initial values from data are assumed valid (they came from SP, not user input).

const isValidSelection = ref(true)

// In strict mode post-touch: must also be a valid selection (or empty, which
// the base required check already handles)
const exposedRequiredPass = computed<boolean>(() => {
  const basePass = requiredPass.value
  if (!props.optionStrict || !touched.value) return basePass
  return basePass && (haveValue.value ? isValidSelection.value : true)
})

const isInvalid = computed(() => touched.value && !exposedRequiredPass.value)

defineExpose({ requiredPass: exposedRequiredPass, touch })

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
  touch()

  if (!props.optionStrict || !props.options?.length) return

  const input = e.target as HTMLInputElement
  const val = input.value

  if (!val) {
    isValidSelection.value = true
    return
  }

  const lower = val.toLowerCase()
  const canonical = optionLabels.value.find(label => label.toLowerCase() === lower)

  if (canonical) {
    isValidSelection.value = true
    if (canonical !== val) {
      input.value = canonical
      emit('update:modelValue', canonical)
    }
  } else {
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
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'This field is required'"
  >
    <input
      :id="id"
      type="text"
      class="form-control"
      :class="{ 'is-invalid': isInvalid }"
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
