import type { AuthorizationServices } from '../types'

import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { login } from '../services'
import { storage, STORAGE_KEYS } from '@/utils'

const useLogin = defineStore('login', () => {
  const token = storage.get<AuthorizationServices.TokenInfo | null>(
    STORAGE_KEYS.TOKEN_INFO
  )

  /** @description 是否已经登入 */
  const loginDone = ref<boolean>(token?.access_token ? true : false)

  /**
   * @description 设置登入状态
   * @param status
   * @returns
   */
  const setLoginStatus = (status: boolean) => (loginDone.value = status)

  /** @description 令牌 */
  const tokenInfo = reactive<AuthorizationServices.TokenInfo>({
    access_token: token?.access_token ?? '',
    token_type: token?.token_type ?? '',
  })

  /**
   * @description 设置令牌
   * @param _tokenInfo
   */
  const setTokenInfo = (_tokenInfo: AuthorizationServices.TokenInfo): void => {
    for (const key in tokenInfo) {
      const _key = key as keyof AuthorizationServices.TokenInfo
      tokenInfo[_key] = _tokenInfo[_key]
    }
  }

  /**
   * @description 请求令牌
   * @param loginInfo
   */
  const queryToken = async (
    loginInfo: AuthorizationServices.LoginInfo
  ): Promise<void> => {
    const tokenInfo = await login(loginInfo)

    if (tokenInfo) {
      storage.set(STORAGE_KEYS.TOKEN_INFO, tokenInfo)
      setTokenInfo(tokenInfo)
      setLoginStatus(true)
    }
  }

  /**
   * @description 登出
   */
  const logout = (): void => {
    storage
    setLoginStatus(false)
    window.alert('已登出')
  }

  return {
    /** @description 是否已经登入 */
    loginDone,
    setLoginStatus,
    tokenInfo,
    setTokenInfo,
    queryToken,
    logout,
  }
})

export default useLogin
