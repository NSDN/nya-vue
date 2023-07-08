import { storage } from '@/utils'
import { useLoginStore, useUserStore } from '../store'

export default function useLogout() {
  const loginStore = useLoginStore()
  const userStore = useUserStore()

  /** @description 登出 */
  const execute = (): void => {
    storage.clear()
    loginStore.setLoggedIn(false)
    userStore.setUserInfo(null)
    window.alert('已登出')
  }

  return { execute }
}
