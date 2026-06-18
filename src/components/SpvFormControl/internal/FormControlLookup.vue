<script setup lang="ts">
/**
 * FormControlLookup — single-selection typeahead for SP Lookup / User fields.
 *
 * modelValue is a single emitted value (or null when empty):
 *   • spType="Lookup" / "User" with object options → item.Id  (default)
 *   • plain string / number options                → the primitive
 *   • explicit optionValue prop                    → extracted value
 *
 * UX:
 *   • Type to filter; matching suggestions appear in a dropdown
 *   • First suggestion is pre-highlighted (dotted underline)
 *   • Up / Down move the highlight; Enter selects; Escape closes
 *   • When a value is selected the label is shown in the input (readonly)
 *   • Typing while a value is selected clears the value and starts a new search
 *   • × button or Delete / Backspace clears the selection
 *   • @search event fired on each keystroke for async option loading
 */
import { computed, ref, watch, nextTick } from 'vue'
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
  'search': [query: string]
}>()

const { id, haveValue, requiredPass, labelClasses, touched, touch } = useFormControl(props)

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

const LOOKUP_SP_TYPES: SpType[] = ['Lookup', 'LookupMulti', 'User', 'UserMulti']

function resolveValue(item: TListItem): unknown {
  if (typeof props.optionValue === 'function') return props.optionValue(item)
  if (typeof props.optionValue === 'string') {
    if (typeof item === 'string' || typeof item === 'number') return item
    return (item as Record<string, unknown>)[props.optionValue] ?? null
  }
  if (typeof item === 'string' || typeof item === 'number') return item
  if (props.spType && LOOKUP_SP_TYPES.includes(props.spType)) {
    return (item as Record<string, unknown>)['Id'] ?? null
  }
  return item
}

function valueToKey(v: unknown): string {
  if (v === null || v === undefined) return ''
  if (typeof v === 'object') return JSON.stringify(v)
  return String(v)
}

interface ComputedOption {
  label: string
  value: unknown
  key: string
}

const allOptions = computed<ComputedOption[]>(() =>
  (props.options ?? []).map(item => ({
    label: resolveLabel(item, props.optionLabel),
    value: resolveValue(item),
    key:   valueToKey(resolveValue(item)),
  }))
)

const selectedLabel = computed<string | null>(() => {
  if (props.modelValue === null || props.modelValue === undefined) return null
  const key = valueToKey(props.modelValue)
  const match = allOptions.value.find(o => o.key === key)
  return match?.label ?? String(props.modelValue)
})

const inputText        = ref('')
const isOpen           = ref(false)
const highlightedIndex = ref(0)
const inputRef         = ref<HTMLInputElement | null>(null)

watch(selectedLabel, (label) => {
  if (label !== null) inputText.value = label
}, { immediate: true })

const filteredOptions = computed<ComputedOption[]>(() => {
  const q = inputText.value.trim().toLowerCase()
  const selectedKey = valueToKey(props.modelValue)
  return allOptions.value.filter(opt => {
    if (opt.key === selectedKey) return false
    if (!q) return true
    return opt.label.toLowerCase().includes(q)
  })
})

watch(filteredOptions, (opts) => {
  if (highlightedIndex.value >= opts.length) highlightedIndex.value = 0
})

function openDropdown() {
  if (props.readonly) return
  isOpen.value = true
  highlightedIndex.value = 0
}

function closeDropdown() {
  touch()
  isOpen.value = false
  highlightedIndex.value = 0
  emit('search', '')
  if (selectedLabel.value !== null) {
    inputText.value = selectedLabel.value
  }
}

function selectOption(opt: ComputedOption) {
  emit('update:modelValue', opt.value)
  inputText.value = opt.label
  isOpen.value = false
  emit('search', '')
}

function clearSelection() {
  emit('update:modelValue', null)
  inputText.value = ''
  emit('search', '')
  nextTick(() => inputRef.value?.focus())
}

function onInput() {
  if (props.modelValue !== null && props.modelValue !== undefined) {
    emit('update:modelValue', null)
  }
  isOpen.value = true
  highlightedIndex.value = 0
  emit('search', inputText.value)
}

function onFocus() {
  openDropdown()
}

function onBlur() {
  setTimeout(closeDropdown, 150)
}

function onKeydown(e: KeyboardEvent) {
  const opts = filteredOptions.value

  switch (e.key) {
    case 'ArrowDown':
      e.preventDefault()
      if (!isOpen.value) { openDropdown(); return }
      highlightedIndex.value = opts.length
        ? (highlightedIndex.value + 1) % opts.length
        : 0
      break

    case 'ArrowUp':
      e.preventDefault()
      if (!isOpen.value) { openDropdown(); return }
      highlightedIndex.value = opts.length
        ? (highlightedIndex.value - 1 + opts.length) % opts.length
        : 0
      break

    case 'Enter':
      e.preventDefault()
      if (isOpen.value && opts.length) {
        const idx = highlightedIndex.value >= 0 && highlightedIndex.value < opts.length
          ? highlightedIndex.value
          : 0
        selectOption(opts[idx])
      }
      break

    case 'Escape':
      e.preventDefault()
      closeDropdown()
      break

    case 'Delete':
    case 'Backspace':
      if (props.modelValue !== null && props.modelValue !== undefined && !inputText.value) {
        e.preventDefault()
        clearSelection()
      }
      break
  }
}
</script>

<template>
  <div>
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>

    <div class="input-group" :class="{ 'has-validation': isInvalid }">

      <span v-if="!suppressPrefixIcon" class="input-group-text">
        <i class="fas fa-search" />
      </span>

      <div class="position-relative flex-grow-1 d-flex">
        <input
          :id="id"
          ref="inputRef"
          type="text"
          class="form-control border-end-0"
          :class="{ 'is-invalid': isInvalid }"
          v-model="inputText"
          :placeholder="placeholder ?? 'Type to search…'"
          :readonly="readonly"
          autocomplete="off"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @keydown="onKeydown"
        >

        <ul
          v-if="isOpen && filteredOptions.length"
          class="dropdown-menu show position-absolute w-100 p-0 mb-0"
          style="top: 100%; left: 0; z-index: 1000;"
          role="listbox"
          :aria-label="label ?? 'Suggestions'"
        >
          <li
            v-for="(opt, i) in filteredOptions"
            :key="opt.key"
            role="option"
            :aria-selected="i === highlightedIndex"
            class="dropdown-item"
            :class="{ active: i === highlightedIndex }"
            :style="i === highlightedIndex ? 'text-decoration: underline dotted;' : ''"
            @mousedown.prevent="selectOption(opt)"
            @mouseover="highlightedIndex = i"
          >
            {{ opt.label }}
          </li>
        </ul>

        <ul
          v-else-if="isOpen && inputText && !filteredOptions.length"
          class="dropdown-menu show position-absolute w-100 p-0 mb-0"
          style="top: 100%; left: 0; z-index: 1000;"
        >
          <li class="dropdown-item disabled text-muted fst-italic">No matches</li>
        </ul>
      </div>

      <div v-if="isInvalid" class="invalid-feedback">
        {{ errorMessage ?? 'Please select a value' }}
      </div>

      <button
        v-if="haveValue && !readonly"
        type="button"
        class="btn btn-outline-secondary"
        title="Clear selection"
        aria-label="Clear selection"
        tabindex="-1"
        @click="clearSelection"
      >
        <i class="fas fa-times" />
      </button>

      <span v-if="required" class="input-group-text">
        <i :class="['fas fa-asterisk fa-xs', haveValue ? 'text-success' : 'text-danger']" />
      </span>

    </div>
  </div>
</template>
