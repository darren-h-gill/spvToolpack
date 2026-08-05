<script setup lang="ts">
/**
 * Internal required indicator — the asterisk rendered after a required label.
 * Red while the field is empty, green once it holds a value.
 *
 * Two sibling spans toggled with v-if rather than one <i> with a swapped colour
 * class: Font Awesome's SVG auto-replacement swaps the <i> out for an <svg>, so
 * a later class-only change never reaches the rendered DOM and the asterisk is
 * stuck on whichever colour it first mounted with. Mounting a fresh element per
 * state — with the colour on the wrapping span, which Font Awesome leaves alone —
 * keeps the indicator in step with the value.
 *
 * Not exported from the library — only used inside SpvFormControl.
 */
defineProps<{
  haveValue?: boolean
}>()
</script>

<template>
  <span v-if="!haveValue" class="text-danger"><i class="fas fa-asterisk fa-xs ms-1"></i></span>
  <span v-if="haveValue" class="text-success"><i class="fas fa-asterisk fa-xs ms-1"></i></span>
</template>
