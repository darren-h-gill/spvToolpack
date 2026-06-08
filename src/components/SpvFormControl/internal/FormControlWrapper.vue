<script setup lang="ts">
/**
 * Internal shared wrapper — renders the label, Bootstrap input-group,
 * type icon prefix and required indicator. The actual <input> / <select>
 * etc. goes in the default slot.
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
}>()
</script>

<template>
  <div>
    <!-- Label -->
    <label v-if="label" :for="id" :class="labelClasses">{{ label }}</label>

    <!-- Bootstrap input-group -->
    <div class="input-group">

      <!-- Type icon prefix -->
      <span
        v-if="!suppressPrefixIcon && iconClass"
        class="input-group-text"
      >
        <i :class="['fas', iconClass]" />
      </span>

      <!-- The actual control (input / select / textarea etc.) -->
      <slot />

      <!-- Required indicator — right side of the group -->
      <span v-if="required" class="input-group-text">
        <i
          :class="[
            'fas fa-asterisk fa-xs',
            haveValue ? 'text-success' : 'text-danger'
          ]"
        />
      </span>

      <!-- Optional suffix slot (e.g. a button appended to the group) -->
      <slot name="suffix" />

    </div>
  </div>
</template>
