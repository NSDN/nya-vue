import type { AuthorizationServices } from '../types'

import { useStorage } from '@/hooks'
import { StorageKeyEnum } from '@/hooks/use-storage'
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { login } from '../services'

const useAuthorizationStore = defineStore('authorization', () => {
  const storage = useStorage()

  const token = storage.loadData<AuthorizationServices.TokenInfo | null>(
    StorageKeyEnum.TOKEN_INFO
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
   * @param LoginInfo
   */
  const queryToken = async (
    LoginInfo: AuthorizationServices.LoginInfo
  ): Promise<void> => {
    const tokenInfo = await login(LoginInfo)

    if (tokenInfo) {
      storage.saveData(StorageKeyEnum.TOKEN_INFO, tokenInfo)
      setTokenInfo(tokenInfo)
      setLoginStatus(true)
    }
  }

  /**
   * @description 登出
   */
  const logout = (): void => {
    sessionStorage.clear()
    setLoginStatus(false)
    window.alert('已登出')
  }

  return {
    loginDone,
    setLoginStatus,
    tokenInfo,
    setTokenInfo,
    queryToken,
    logout,
  }
})

export default useAuthorizationStore
