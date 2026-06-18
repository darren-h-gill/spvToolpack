<script setup lang="ts">
/**
 * Internal shared wrapper — renders the label, Bootstrap input-group,
 * type icon prefix, required indicator, and (when invalid) the error message.
 *
 * Not exported from the library — only used inside SpvFormControl.
 */
defineProps<{
  id: string
  label?: string
  labelClasses: string[]
  iconClass: string        // Full FA class string e.g. "fas fa-font"
  haveValue: boolean
  required?: boolean
  readonly?: boolean
  suppressPrefixIcon?: boolean
  /** When true adds has-validation to the group and renders invalid-feedback */
  isInvalid?: boolean
  /** Error text shown when isInvalid. Hidden when falsy. */
  errorMessage?: string
}>()
</script>

<template>
  <div>
    <!-- Label -->
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>

    <!-- Bootstrap input-group -->
    <div class="input-group" :class="{ 'has-validation': isInvalid }">

      <!-- Type icon prefix -->
      <span
        v-if="!suppressPrefixIcon && iconClass"
        class="input-group-text"
      >
        <i :class="['fas', iconClass]" />
      </span>

      <!-- The actual control (input / select / textarea etc.) -->
      <slot />

      <!-- Validation feedback — must follow the form-control slot for the CSS
           sibling selector (.is-invalid ~ .invalid-feedback) to work -->
      <div v-if="isInvalid && errorMessage" class="invalid-feedback">{{ errorMessage }}</div>

      <!-- Optional suffix slot (e.g. a button appended to the group) -->
      <slot name="suffix" />

      <!-- Required indicator — right side of the group -->
      <span v-if="required" class="input-group-text">
        <i
          :class="[
            'fas fa-asterisk fa-xs',
            haveValue ? 'text-success' : 'text-danger'
          ]"
        />
      </span>

    </div>
  </div>
</template>
