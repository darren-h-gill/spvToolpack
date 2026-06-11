<script setup lang="ts">
import { computed } from 'vue'
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
}>(), {
  modelValue: null,
  maxlength: 255
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, requiredPass, labelClasses } = useFormControl(props)

defineExpose({ requiredPass })

// Stable ID for the datalist — derived from the control ID so label/input/list
// are all linked without generating a second random value
const datalistId = computed(() => props.options?.length ? `${id}-list` : undefined)

// Resolved display strings for each option
const optionLabels = computed<string[]>(() => {
  if (!props.options?.length) return []
  return props.options.map(item => resolveLabel(item, props.optionLabel))
})

function onInput(e: Event) {
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val === '' ? null : val)
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
    >

    <!-- Datalist — only rendered when options are provided -->
    <datalist v-if="datalistId" :id="datalistId">
      <option
        v-for="label in optionLabels"
        :key="label"
        :value="label"
      />
    </datalist>
  </FormControlWrapper>
</template>
