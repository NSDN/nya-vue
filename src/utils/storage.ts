export const STORAGE_KEYS = {
  TOKEN_INFO: 'token_info',
  PLATES: 'plates',
  COMMIC_TOPIC: 'commic_topic',
}

export const storage = {
  set<Data = any>(key: string, value: Data): void {
    localStorage.setItem(key, JSON.stringify(value))
  },

  get<Data = object>(key: string): Data | null {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  remove(key: string): void {
    localStorage.removeItem(key)
  },

  clear(): void {
    localStorage.clear()
  },
}
