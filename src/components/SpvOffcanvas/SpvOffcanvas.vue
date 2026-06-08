<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: boolean
  title?: string
  placement?: 'start' | 'end' | 'top' | 'bottom'
  staticBackdrop?: boolean
  scroll?: boolean
}>(), {
  placement: 'start',
  staticBackdrop: false,
  scroll: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  shown: []
  hidden: []
}>()

const elRef = ref<HTMLElement | null>(null)
let bsOffcanvas: InstanceType<typeof window.bootstrap.Offcanvas> | null = null

onMounted(() => {
  if (!elRef.value) return
  bsOffcanvas = new window.bootstrap.Offcanvas(elRef.value, {
    backdrop: props.staticBackdrop ? 'static' : true,
    keyboard: !props.staticBackdrop,
    scroll: props.scroll
  })
  elRef.value.addEventListener('shown.bs.offcanvas', () => emit('shown'))
  elRef.value.addEventListener('hidden.bs.offcanvas', () => {
    emit('update:modelValue', false)
    emit('hidden')
  })
  if (props.modelValue) bsOffcanvas.show()
})

onBeforeUnmount(() => {
  bsOffcanvas?.dispose()
})

watch(() => props.modelValue, (val) => {
  if (!bsOffcanvas) return
  val ? bsOffcanvas.show() : bsOffcanvas.hide()
})
</script>

<template>
  <div
    ref="elRef"
    :class="['offcanvas', `offcanvas-${placement}`]"
    tabindex="-1"
  >
    <div class="offcanvas-header">
      <slot name="header">
        <h5 class="offcanvas-title">{{ title }}</h5>
      </slot>
      <button type="button" class="btn-close" @click="emit('update:modelValue', false)" />
    </div>
    <div class="offcanvas-body">
      <slot />
    </div>
  </div>
</template>
