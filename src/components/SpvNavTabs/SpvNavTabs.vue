<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from 'vue'

export interface TabItem {
  key: string
  label: string
  disabled?: boolean
}

const props = withDefaults(defineProps<{
  modelValue: string
  tabs: TabItem[]
  pills?: boolean
}>(), {
  pills: false
})

const emit = defineEmits<{
  'update:modelValue': [key: string]
  change: [key: string]
}>()

const tabRefs = ref<Record<string, HTMLElement>>({})

function activateTab(key: string) {
  const el = tabRefs.value[key]
  if (!el) return
  const bsTab = window.bootstrap.Tab.getOrCreateInstance(el)
  bsTab.show()
}

onMounted(() => {
  nextTick(() => activateTab(props.modelValue))
})

watch(() => props.modelValue, (key) => activateTab(key))

function onTabShown(key: string) {
  emit('update:modelValue', key)
  emit('change', key)
}
</script>

<template>
  <div>
    <ul :class="['nav', pills ? 'nav-pills' : 'nav-tabs']" role="tablist">
      <li v-for="tab in tabs" :key="tab.key" class="nav-item" role="presentation">
        <button
          :ref="(el) => { if (el) tabRefs[tab.key] = el as HTMLElement }"
          :class="['nav-link', { active: modelValue === tab.key, disabled: tab.disabled }]"
          type="button"
          role="tab"
          :data-bs-toggle="pills ? 'pill' : 'tab'"
          :data-bs-target="`#tab-pane-${tab.key}`"
          :aria-controls="`tab-pane-${tab.key}`"
          :aria-selected="modelValue === tab.key"
          @shown.bs.tab="onTabShown(tab.key)"
        >
          {{ tab.label }}
        </button>
      </li>
    </ul>
    <div class="tab-content">
      <div
        v-for="tab in tabs"
        :id="`tab-pane-${tab.key}`"
        :key="tab.key"
        :class="['tab-pane', 'fade', { 'show active': modelValue === tab.key }]"
        role="tabpanel"
      >
        <slot :name="tab.key" />
      </div>
    </div>
  </div>
</template>
