<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

export type ToastVariant =
  | 'primary' | 'secondary' | 'success' | 'danger'
  | 'warning' | 'info' | 'light' | 'dark'

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  subtitle?: string
  variant?: ToastVariant
  autohide?: boolean
  delay?: number
}>(), {
  autohide: true,
  delay: 5000
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  shown: []
  hidden: []
}>()

const elRef = ref<HTMLElement | null>(null)
let bsToast: InstanceType<typeof window.bootstrap.Toast> | null = null

onMounted(() => {
  if (!elRef.value) return
  bsToast = new window.bootstrap.Toast(elRef.value, {
    autohide: props.autohide,
    delay: props.delay
  })
  elRef.value.addEventListener('shown.bs.toast', () => emit('shown'))
  elRef.value.addEventListener('hidden.bs.toast', () => {
    emit('update:modelValue', false)
    emit('hidden')
  })
  if (props.modelValue) bsToast.show()
})

onBeforeUnmount(() => {
  bsToast?.dispose()
})

watch(() => props.modelValue, (val) => {
  if (!bsToast) return
  val ? bsToast.show() : bsToast.hide()
})
</script>

<template>
  <div
    ref="elRef"
    :class="['toast', variant ? `text-bg-${variant}` : '']"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div v-if="title || subtitle" class="toast-header">
      <slot name="header">
        <strong v-if="title" class="me-auto">{{ title }}</strong>
        <small v-if="subtitle">{{ subtitle }}</small>
      </slot>
      <button type="button" class="btn-close" @click="emit('update:modelValue', false)" />
    </div>
    <div class="toast-body">
      <slot />
    </div>
  </div>
</template>
