<script setup lang="ts">
import { computed, ref } from 'vue'
import { useClipboard } from './useClipboard'

const props = defineProps<{
  text?: string
}>()

const emit = defineEmits<{
  copied: [text: string]
}>()

const contentRef = ref<HTMLElement | null>(null)
const { copied, error, copy } = useClipboard()

const iconClasses = computed(() => {
  if (copied.value) return 'fas fa-check'
  if (error.value) return 'fas fa-times'
  return 'fas fa-copy'
})

async function handleCopy() {
  const value = props.text ?? contentRef.value?.innerText ?? ''
  if (!value) return
  await copy(value)
  if (copied.value) emit('copied', value)
}
</script>

<template>
  <span class="spv-copyable position-relative d-inline-block">
    <span ref="contentRef"><slot /></span>
    <button
      type="button"
      class="spv-copyable__btn btn btn-sm btn-light border position-absolute top-0 end-0 p-1 lh-1"
      :class="{ 'is-active text-success': copied, 'is-active text-danger': error }"
      :title="copied ? 'Copied!' : 'Copy to clipboard'"
      @click="handleCopy"
    >
      <i :class="iconClasses" />
    </button>
  </span>
</template>

<style scoped>
.spv-copyable__btn {
  transform: translate(40%, -40%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.15s ease;
  z-index: 1;
}

.spv-copyable:hover .spv-copyable__btn,
.spv-copyable__btn:focus-visible,
.spv-copyable__btn.is-active {
  opacity: 1;
  pointer-events: auto;
}
</style>
