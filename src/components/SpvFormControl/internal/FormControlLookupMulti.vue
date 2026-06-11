<script setup lang="ts">
/**
 * FormControlLookupMulti — typeahead multi-select for SP LookupMulti / UserMulti fields.
 *
 * modelValue is always an array of emitted values (or null when empty):
 *   • spType="LookupMulti" / "UserMulti" with object options → array of Ids  (default)
 *   • plain string options                                  → array of strings
 *   • explicit optionValue prop                             → array of extracted values
 *
 * UX:
 *   • Type to filter suggestions; popup opens automatically
 *   • First suggestion is pre-highlighted (dotted underline)
 *   • Up / Down move the highlight; Enter selects the highlighted item
 *   • Click an item to select it
 *   • Selected items shown as Bootstrap badge pills (dismissible)
 *   • Backspace with empty input removes the last badge
 *   • Escape closes the dropdown
 */
import { computed, ref, watch, nextTick } from 'vue'
import { useFormControl } from '../useFormControl'
import type { TListItem, OptionLabelResolver, SpType } from '../types'
import { resolveLabel } from '../utils/optionUtils'

// ─── Props ────────────────────────────────────────────────────────────────────

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

  /**
   * How to extract the stored value from each option object.
   * Omitted + spType LookupMulti/UserMulti → defaults to item.Id.
   * Omitted + other types → emits the whole object.
   */
  optionValue?: OptionLabelResolver
}>()

const emit = defineEmits<{
  'update:modelValue': [value: unknown[] | null]
}>()

// ─── Form control base ────────────────────────────────────────────────────────

const { id, labelClasses } = useFormControl(props)

const selectedArray = computed<unknown[]>(() =>
  Array.isArray(props.modelValue) ? props.modelValue : []
)

const haveValue = computed(() => selectedArray.value.length > 0)
const requiredPass = computed(() => !props.required || haveValue.value)
defineExpose({ requiredPass })

// ─── Value resolution ─────────────────────────────────────────────────────────

/** SP types that default to emitting item.Id when no optionValue is set */
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

// ─── Option list ──────────────────────────────────────────────────────────────

interface ComputedOption {
  label: string
  value: unknown
  key: string
}

const allOptions = computed<ComputedOption[]>(() =>
  (props.options ?? []).map(item => ({
    label:  resolveLabel(item, props.optionLabel),
    value:  resolveValue(item),
    key:    valueToKey(resolveValue(item)),
  }))
)

/** Keys of currently selected values — used for fast exclusion from the dropdown */
const selectedKeys = computed(() => new Set(selectedArray.value.map(valueToKey)))

/** Selected items enriched with display labels — drives badge rendering */
interface SelectedItem { label: string; value: unknown; key: string }

const selectedItems = computed<SelectedItem[]>(() =>
  selectedArray.value.map(v => {
    const key   = valueToKey(v)
    const match = allOptions.value.find(o => o.key === key)
    return { label: match?.label ?? (key || String(v)), value: v, key }
  })
)

// ─── Typeahead state ──────────────────────────────────────────────────────────

const inputText       = ref('')
const isOpen          = ref(false)
const highlightedIndex = ref(0)
const inputRef        = ref<HTMLInputElement | null>(null)

/** Options matching the current query, with already-selected items removed */
const filteredOptions = computed<ComputedOption[]>(() => {
  const q = inputText.value.trim().toLowerCase()
  return allOptions.value.filter(opt => {
    if (selectedKeys.value.has(opt.key)) return false
    if (!q) return true
    return opt.label.toLowerCase().includes(q)
  })
})

// Keep highlight in bounds when the filtered list shrinks
watch(filteredOptions, (opts) => {
  if (highlightedIndex.value >= opts.length) {
    highlightedIndex.value = 0
  }
})

// ─── Helpers ──────────────────────────────────────────────────────────────────

function openDropdown() {
  if (props.readonly) return
  isOpen.value = true
  highlightedIndex.value = 0
}

function closeDropdown() {
  isOpen.value    = false
  inputText.value = ''
  highlightedIndex.value = 0
}

function selectOption(opt: ComputedOption) {
  const next = [...selectedArray.value, opt.value]
  emit('update:modelValue', next)
  inputText.value        = ''
  highlightedIndex.value = 0
  // Keep the dropdown open so the user can add more items
  nextTick(() => {
    inputRef.value?.focus()
    isOpen.value = true
  })
}

function removeItem(key: string) {
  const next = selectedArray.value.filter(v => valueToKey(v) !== key)
  emit('update:modelValue', next.length ? next : null)
}

// ─── Event handlers ───────────────────────────────────────────────────────────

function onInput() {
  isOpen.value           = true
  highlightedIndex.value = 0
}

function onFocus() {
  openDropdown()
}

function onBlur() {
  // Brief delay so a mousedown on a dropdown item fires before blur hides the list
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

    case 'Backspace':
      // Empty input + Backspace removes the last badge
      if (!inputText.value && selectedArray.value.length) {
        const last = selectedItems.value[selectedItems.value.length - 1]
        removeItem(last.key)
      }
      break
  }
}
</script>

<template>
  <div>
    <!-- Label -->
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>

    <!-- Input-group: icon | badge+input area | required indicator -->
    <div class="input-group">

      <!-- Type icon prefix -->
      <span v-if="!suppressPrefixIcon" class="input-group-text">
        <i class="fas fa-search-plus" />
      </span>

      <!-- Badge + text input container — styled to look like a form-control -->
      <div
        class="form-control d-flex flex-wrap gap-1 align-items-center h-auto py-1 position-relative"
        :class="{ 'bg-body-secondary': readonly }"
        style="cursor: text; min-height: 2.375rem;"
        @click="inputRef?.focus()"
      >
        <!-- Selected item badges -->
        <span
          v-for="item in selectedItems"
          :key="item.key"
          class="badge rounded-pill bg-primary d-inline-flex align-items-center gap-1"
          style="font-size: 0.8em;"
        >
          {{ item.label }}
          <button
            v-if="!readonly"
            type="button"
            class="btn-close btn-close-white"
            style="font-size: 0.6em;"
            :aria-label="`Remove ${item.label}`"
            @click.stop="removeItem(item.key)"
          />
        </span>

        <!-- Typeahead input -->
        <input
          v-if="!readonly"
          :id="id"
          ref="inputRef"
          type="text"
          class="border-0 p-0 flex-grow-1 bg-transparent"
          style="outline: none; min-width: 8ch; line-height: inherit;"
          v-model="inputText"
          :placeholder="selectedItems.length ? '' : (placeholder ?? 'Type to search…')"
          autocomplete="off"
          @input="onInput"
          @focus="onFocus"
          @blur="onBlur"
          @keydown="onKeydown"
        >

        <!-- Dropdown suggestion list -->
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

        <!-- Empty-state hint when open with no matches -->
        <ul
          v-else-if="isOpen && inputText && !filteredOptions.length"
          class="dropdown-menu show position-absolute w-100 p-0 mb-0"
          style="top: 100%; left: 0; z-index: 1000;"
        >
          <li class="dropdown-item disabled text-muted fst-italic">No matches</li>
        </ul>
      </div>

      <!-- Required indicator -->
      <span v-if="required" class="input-group-text">
        <i
          :class="['fas fa-asterisk fa-xs', haveValue ? 'text-success' : 'text-danger']"
        />
      </span>

    </div>
  </div>
</template>
