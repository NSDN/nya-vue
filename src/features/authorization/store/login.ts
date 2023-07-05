import type { AuthorizationServices } from '../types'

import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { storage, STORAGE_KEYS } from '@/utils'

const useLoginStore = defineStore('login', () => {
  const token = storage.get<AuthorizationServices.TokenInfo | null>(
    STORAGE_KEYS.TOKEN_INFO
  )

  /** @description 登入信息 */
  const loginInfo = reactive<AuthorizationServices.LoginInfo>({
    username: '',
    password: '',
  })

  /** @description 是否已经登入 */
  const loginDone = ref<boolean>(token?.access_token ? true : false)

  /**
   * @description 设置已登入与否
   * @param status
   * @returns
   */
  const setLoginDone = (status: boolean) => (loginDone.value = status)

  /** @description 令牌 */
  const tokenInfo = reactive<AuthorizationServices.TokenInfo>({
    access_token: token?.access_token ?? '',
    token_type: token?.token_type ?? '',
  })

  /**
   * @description 设置令牌
   * @param info 令牌
   */
  const setTokenInfo = (info: AuthorizationServices.TokenInfo): void => {
    for (const key in tokenInfo) {
      const k = key as keyof AuthorizationServices.TokenInfo
      tokenInfo[k] = info[k]
    }
  }

  return {
    /** @description 登入信息 */
    loginInfo,
    /** @description 是否已经登入 */
    loginDone,
    /**
     * @description 设置已登入与否
     * @param status
     * @returns
     */
    setLoginDone,
    /** @description 令牌 */
    tokenInfo,
    /**
     * @description 设置令牌
     * @param info 令牌
     */
    setTokenInfo,
  }
})

export default useLoginStore
