<script setup lang="ts">
export type AlertVariant =
  | 'primary' | 'secondary' | 'success' | 'danger'
  | 'warning' | 'info' | 'light' | 'dark'

withDefaults(defineProps<{
  variant?: AlertVariant
  dismissible?: boolean
  modelValue?: boolean
}>(), {
  variant: 'primary',
  dismissible: false,
  modelValue: true
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  dismissed: []
}>()

function dismiss() {
  emit('update:modelValue', false)
  emit('dismissed')
}
</script>

<template>
  <div
    v-if="modelValue"
    :class="['alert', `alert-${variant}`, { 'alert-dismissible fade show': dismissible }]"
    role="alert"
  >
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="btn-close"
      aria-label="Close"
      @click="dismiss"
    />
  </div>
</template>
