import { computed, ref } from 'vue'
import { isNil } from 'ramda'

export interface UseFormControlOptions {
  modelValue: unknown
  label?: string
  required?: boolean
  labelClass?: string
}

// Stable unique ID per control instance
function generateId(): string {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `spv-fc-${crypto.randomUUID()}`
  }
  return `spv-fc-${Math.random().toString(36).slice(2)}`
}

export function useFormControl(props: UseFormControlOptions) {
  // ID is created once and never changes for this instance
  const id = generateId()

  // Whether the bound value is considered "present" — drives the required indicator
  const haveValue = computed<boolean>(() => {
    const v = props.modelValue
    if (isNil(v)) return false
    if (typeof v === 'string' && v.trim() === '') return false
    if (Array.isArray(v) && v.length === 0) return false
    if (typeof v === 'object') {
      // SP multi-value fields arrive as { results: [...] } — empty means unset
      const results = (v as Record<string, unknown>)['results']
      if (Array.isArray(results)) return results.length > 0
      // A bare {} is a placeholder, not a selection
      return Object.keys(v as object).length > 0
    }
    return true
  })

  // A trailing "*" on the label is shorthand for "required" — stripped from the
  // displayed text and used to infer `required` when the prop is left undefined.
  const labelEndsWithAsterisk = computed<boolean>(() => {
    const label = props.label?.trimEnd()
    return !!label && label.endsWith('*')
  })

  // Explicit `required` prop always wins; otherwise infer from the label.
  const resolvedRequired = computed<boolean>(() => props.required ?? labelEndsWithAsterisk.value)

  // Label text with the inferred-required "*" stripped — controls render their
  // own required indicator instead of the raw asterisk character.
  const displayLabel = computed<string | undefined>(() => {
    if (!labelEndsWithAsterisk.value) return props.label
    return props.label!.trimEnd().slice(0, -1).trimEnd()
  })

  // Exposed for parent form validation — true when field is optional OR has a value
  const requiredPass = computed<boolean>(() => !resolvedRequired.value || haveValue.value)

  // Label CSS classes — always includes form-label, plus any consumer overrides
  const labelClasses = computed<string[]>(() => {
    const base = ['form-label']
    if (props.labelClass) {
      base.push(...props.labelClass.split(/\s+/).filter(Boolean))
    }
    return base
  })

  // Touched state — set on first blur/interaction; gates invalid styling so errors
  // only appear after the user has had a chance to fill in the field.
  const touched = ref(false)
  const touch = () => { touched.value = true }

  return { id, haveValue, requiredPass, resolvedRequired, displayLabel, labelClasses, touched, touch }
}
