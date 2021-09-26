import { ref } from '@vue/composition-api'

export default function usePromise(fn: any) {
  const results = ref(null)
  const error = ref(null)
  const loading = ref(false)
  const createPromise = async (...arg) => {
    loading.value = true
    error.value = null
    results.value = null
    try {
      results.value = await fn(...arg)
    } catch {
      error.value = null
    } finally {
      loading.value = false
    }
  }
  return { results, error, loading, createPromise }
}
