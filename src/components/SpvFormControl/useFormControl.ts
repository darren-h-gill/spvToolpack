import { computed, ref } from 'vue'
import { isNil } from 'ramda'

export interface UseFormControlOptions {
  modelValue: unknown
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
    return true
  })

  // Exposed for parent form validation — true when field is optional OR has a value
  const requiredPass = computed<boolean>(() => !props.required || haveValue.value)

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

  return { id, haveValue, requiredPass, labelClasses, touched, touch }
}
