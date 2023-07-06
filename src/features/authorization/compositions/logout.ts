import { useLoginStore } from '../store'
import { storage } from '@/utils'

export default function useLogout() {
  const loginStore = useLoginStore()

  /** @description 登出 */
  const execute = (): void => {
    storage.clear()
    loginStore.setLoggedIn(false)
    window.alert('已登出')
  }

  return { execute }
}
