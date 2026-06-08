<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  size?: 'sm' | 'lg' | 'xl' | 'fullscreen'
  staticBackdrop?: boolean
  scrollable?: boolean
  centered?: boolean
}>(), {
  staticBackdrop: false,
  scrollable: false,
  centered: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  shown: []
  hidden: []
}>()

const elRef = ref<HTMLElement | null>(null)
let bsModal: InstanceType<typeof window.bootstrap.Modal> | null = null

onMounted(() => {
  if (!elRef.value) return
  bsModal = new window.bootstrap.Modal(elRef.value, {
    backdrop: props.staticBackdrop ? 'static' : true,
    keyboard: !props.staticBackdrop
  })
  elRef.value.addEventListener('shown.bs.modal', () => emit('shown'))
  elRef.value.addEventListener('hidden.bs.modal', () => {
    emit('update:modelValue', false)
    emit('hidden')
  })
  if (props.modelValue) bsModal.show()
})

onBeforeUnmount(() => {
  bsModal?.dispose()
})

watch(() => props.modelValue, (val) => {
  if (!bsModal) return
  val ? bsModal.show() : bsModal.hide()
})

const dialogClass = () => [
  'modal-dialog',
  props.size ? (props.size === 'fullscreen' ? 'modal-fullscreen' : `modal-${props.size}`) : '',
  { 'modal-dialog-scrollable': props.scrollable },
  { 'modal-dialog-centered': props.centered }
]
</script>

<template>
  <div ref="elRef" class="modal fade" tabindex="-1">
    <div :class="dialogClass()">
      <div class="modal-content">
        <div v-if="title || $slots.header" class="modal-header">
          <slot name="header">
            <h5 class="modal-title">{{ title }}</h5>
          </slot>
          <button type="button" class="btn-close" @click="emit('update:modelValue', false)" />
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div v-if="$slots.footer" class="modal-footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
