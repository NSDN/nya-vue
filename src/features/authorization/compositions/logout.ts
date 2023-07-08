import { storage } from '@/utils'
import { useLoginStore } from '../store'

export default function useLogout() {
  const loginStore = useLoginStore()

  /** @description 登出 */
  const execute = (): void => {
    storage.clear()
    loginStore.setLoggedIn(false)
    window.alert('已登出')
    location.reload()
  }

  return { execute }
}
