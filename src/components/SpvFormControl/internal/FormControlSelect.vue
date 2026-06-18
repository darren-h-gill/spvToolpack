<script setup lang="ts">
import { computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'
import type { TListItem, OptionLabelResolver, SpType } from '../types'
import { resolveLabel } from '../utils/optionUtils'

const props = defineProps<{
  modelValue: unknown
  spType?: SpType
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  options?: TListItem[]
  optionLabel?: OptionLabelResolver
  optionValue?: OptionLabelResolver
  errorMessage?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

const LOOKUP_SP_TYPES: SpType[] = ['Lookup', 'User']

function resolveValue(item: TListItem): unknown {
  if (typeof props.optionValue === 'function') return props.optionValue(item)
  if (typeof props.optionValue === 'string') {
    if (typeof item === 'string' || typeof item === 'number') return item
    const val = (item as Record<string, unknown>)[props.optionValue]
    return val ?? null
  }
  if (typeof item === 'string' || typeof item === 'number') return item
  if (props.spType && LOOKUP_SP_TYPES.includes(props.spType)) {
    const id = (item as Record<string, unknown>)['Id']
    return id ?? null
  }
  return item
}

interface SelectOption {
  label: string
  value: unknown
  key: string
}

const selectOptions = computed<SelectOption[]>(() => {
  if (!props.options?.length) return []
  return props.options.map(item => {
    const label = resolveLabel(item, props.optionLabel)
    const value = resolveValue(item)
    const key = value === null || value === undefined
      ? ''
      : typeof value === 'object'
        ? JSON.stringify(value)
        : String(value)
    return { label, value, key }
  })
})

const selectedKey = computed<string>(() => {
  const mv = props.modelValue
  if (mv === null || mv === undefined) return ''
  if (typeof mv === 'object') return JSON.stringify(mv)
  return String(mv)
})

function onChange(e: Event) {
  touch()
  const select = e.target as HTMLSelectElement
  const key = select.value
  if (key === '') {
    emit('update:modelValue', null)
    return
  }
  const matched = selectOptions.value.find(opt => opt.key === key)
  emit('update:modelValue', matched ? matched.value : null)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key !== 'Delete' && e.key !== 'Backspace') return
  if (props.readonly) return
  e.preventDefault()
  emit('update:modelValue', null)
}
</script>

<template>
  <FormControlWrapper
    :id="id"
    :label="label"
    :label-classes="labelClasses"
    icon-class="fa-list-ul"
    :have-value="haveValue"
    :required="required"
    :readonly="readonly"
    :suppress-prefix-icon="suppressPrefixIcon"
    :is-invalid="isInvalid"
    :error-message="errorMessage ?? 'Please select a value'"
  >
    <select
      :id="id"
      class="form-select"
      :class="{ 'is-invalid': isInvalid }"
      :value="selectedKey"
      :disabled="readonly"
      @change="onChange"
      @keydown="onKeydown"
      @blur="touch"
    >
      <option value="" :disabled="required">
        {{ placeholder ?? 'Choose…' }}
      </option>
      <option
        v-for="opt in selectOptions"
        :key="opt.key"
        :value="opt.key"
      >
        {{ opt.label }}
      </option>
    </select>
  </FormControlWrapper>
</template>
