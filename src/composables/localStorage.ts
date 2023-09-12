export const useLocalStorage = (key: string, value: unknown): void => {
  if (typeof value === 'string') return window.localStorage.setItem(key, value)
  if (typeof value === 'object') return window.localStorage.setItem(key, JSON.stringify(value))
  return
}
