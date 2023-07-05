import { login } from '../services'
import { storage, STORAGE_KEYS } from '@/utils'
import { useRouter } from 'vue-router'
import { useLoginStore } from '../store'

/**
 * @description 登入登出的组合式函数
 * @returns 登入登出所需的属性和函数
 */
export default function useLogin() {
  const router = useRouter()
  const loginStore = useLoginStore()

  /** @description 请求令牌 */
  const queryToken = async (): Promise<void> => {
    const tokenInfo = await login(loginStore.loginInfo)

    if (tokenInfo) {
      storage.set(STORAGE_KEYS.TOKEN_INFO, tokenInfo)
      loginStore.setTokenInfo(tokenInfo)
      loginStore.setLoginDone(true)
    }
  }

  /** @description 登入 */
  const submitLoginInfo = async () => {
    await queryToken()

    if (loginStore.loginDone) {
      router.back()
    }
  }

  /** @description 登出 */
  const logout = (): void => {
    storage.clear()
    loginStore.setLoginDone(false)
    window.alert('已登出')
  }

  return { queryToken, logout, submitLoginInfo }
}
