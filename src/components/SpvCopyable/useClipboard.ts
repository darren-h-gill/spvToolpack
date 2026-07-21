import { ref } from 'vue'

export function useClipboard(resetDelay = 1500) {
  const copied = ref(false)
  const error = ref(false)
  let resetTimer: ReturnType<typeof setTimeout> | null = null

  async function copy(text: string) {
    if (resetTimer) clearTimeout(resetTimer)
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      error.value = false
    } catch {
      copied.value = false
      error.value = true
    }
    resetTimer = setTimeout(() => {
      copied.value = false
      error.value = false
    }, resetDelay)
  }

  return { copied, error, copy }
}
