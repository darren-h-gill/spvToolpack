<script setup lang="ts">
import { ref, computed } from 'vue'
import FormControlWrapper from './FormControlWrapper.vue'
import { useFormControl } from '../useFormControl'

const props = withDefaults(defineProps<{
  modelValue: string | null
  label?: string
  labelClass?: string
  placeholder?: string
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  minLength?: number
  requiredCharacters?: string[]
  mixedCase?: boolean
  mustMatch?: string | null
  errorMessage?: string
}>(), {
  modelValue: null
})

const emit = defineEmits<{
  'update:modelValue': [value: string | null]
}>()

const { id, haveValue, labelClasses, touched, touch } = useFormControl(props)

const visible = ref(false)
// hasInteracted gates checklist visibility — show rules as user types, not just on blur
const hasInteracted = ref(false)

interface ValidationRule {
  key: string
  label: string
  passed: boolean
}

function describeCharSet(chars: string): string {
  if (/^\d+$/.test(chars))        return 'At least one number (0–9)'
  if (/^[a-z]+$/i.test(chars))    return 'At least one letter'
  if (chars.length <= 12)         return `At least one of: ${chars}`
  return 'At least one special character'
}

const validationRules = computed<ValidationRule[]>(() => {
  const val = props.modelValue ?? ''
  const rules: ValidationRule[] = []

  if (props.minLength) {
    rules.push({
      key: 'minLength',
      label: `At least ${props.minLength} character${props.minLength === 1 ? '' : 's'}`,
      passed: val.length >= props.minLength
    })
  }

  if (props.mixedCase) {
    rules.push({
      key: 'mixedCase',
      label: 'Upper and lowercase letters',
      passed: /[a-z]/.test(val) && /[A-Z]/.test(val)
    })
  }

  props.requiredCharacters?.forEach((charSet, i) => {
    rules.push({
      key: `chars-${i}`,
      label: describeCharSet(charSet),
      passed: [...charSet].some(c => val.includes(c))
    })
  })

  if (props.mustMatch !== undefined) {
    rules.push({
      key: 'mustMatch',
      label: 'Passwords match',
      passed: val.length > 0 && val === (props.mustMatch ?? '')
    })
  }

  return rules
})

const allRulesPassed = computed(() => validationRules.value.every(r => r.passed))
const hasRules = computed(() => validationRules.value.length > 0)

const requiredPass = computed<boolean>(() => {
  if (!props.required && !hasRules.value) return true
  if (props.required && !haveValue.value)  return false
  return allRulesPassed.value
})

const isInvalid = computed(() => touched.value && !requiredPass.value)

defineExpose({ requiredPass, touch })

function onInput(e: Event) {
  hasInteracted.value = true
  const val = (e.target as HTMLInputElement).value
  emit('update:modelValue', val === '' ? null : val)
}
</script>

<template>
  <div>
    <FormControlWrapper
      :id="id"
      :label="label"
      :label-classes="labelClasses"
      icon-class="fa-lock"
      :have-value="allRulesPassed && haveValue"
      :required="required || hasRules"
      :readonly="readonly"
      :suppress-prefix-icon="suppressPrefixIcon"
      :is-invalid="isInvalid"
      :error-message="errorMessage ?? 'This field is required'"
    >
      <input
        :id="id"
        :type="visible ? 'text' : 'password'"
        class="form-control"
        :class="{ 'is-invalid': isInvalid }"
        :value="modelValue ?? ''"
        :placeholder="placeholder"
        :readonly="readonly"
        autocomplete="current-password"
        @input="onInput"
        @blur="touch"
      >

      <template #suffix>
        <button
          type="button"
          class="btn btn-outline-secondary"
          :title="visible ? 'Hide password' : 'Show password'"
          :aria-label="visible ? 'Hide password' : 'Show password'"
          :aria-pressed="visible"
          tabindex="-1"
          @click="visible = !visible"
        >
          <i :class="['fas', visible ? 'fa-eye-slash' : 'fa-eye']" />
        </button>
      </template>
    </FormControlWrapper>

    <!-- Validation checklist — shown after first keystroke -->
    <ul
      v-if="hasRules && hasInteracted"
      class="list-unstyled mt-1 mb-0 small ps-1"
    >
      <li
        v-for="rule in validationRules"
        :key="rule.key"
        :class="rule.passed ? 'text-success' : 'text-danger'"
      >
        <i :class="['fas fa-xs me-1', rule.passed ? 'fa-check' : 'fa-times']" />
        {{ rule.label }}
      </li>
    </ul>
  </div>
</template>
