export const storage = {
  set<Data = any>(key: string, value: Data): void {
    sessionStorage.setItem(key, JSON.stringify(value))
  },

  get<Data = object>(key: string): Data | null {
    const value = sessionStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  remove(key: string): void {
    sessionStorage.removeItem(key)
  },

  clear(): void {
    sessionStorage.clear()
  },
}
