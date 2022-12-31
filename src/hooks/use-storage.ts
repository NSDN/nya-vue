export enum StorageKeyEnum {
  TOKEN_INFO = 'token_info',
}

export default function useStorage() {
  const saveData = <T>(key: StorageKeyEnum, data: T): void => {
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  const loadData = <T>(key: StorageKeyEnum): T | null => {
    const stringData: string | null = sessionStorage.getItem(key)
    return stringData ? JSON.parse(stringData) : null
  }

  return { saveData, loadData }
}
