<script setup lang="ts">
defineProps<{ code: string }>()
</script>

<template>
  <div class="border rounded p-3 h-100 d-flex flex-column gap-2">
    <div class="flex-grow-1">
      <slot />
    </div>
    <pre class="bg-light rounded p-2 mb-0 small lh-sm" style="white-space: pre; overflow-x: auto;"><code>{{ code }}</code></pre>
  </div>
</template>
