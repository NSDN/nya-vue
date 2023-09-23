import type { AuthorizationServices } from '../types'

import { storage } from '@/utils'
import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login } from '../services'

/** @description JWT 状态库 */
const useJWTStore = defineStore(STORE_ID.JWT, () => {
  /** @description JWT 令牌 */
  const jwt = ref<AuthorizationServices.TokenInfo | null>(
    storage.get<AuthorizationServices.TokenInfo>(STORAGE_KEYS.TOKEN_INFO)
  )

  /**
   * @description 设置令牌
   * @param token 从后端获取到的令牌
   */
  const setJWT = (token: AuthorizationServices.TokenInfo | null) => {
    jwt.value = token

    // 在浏览器的 storage 中保存 token
    if (token) {
      storage.set(STORAGE_KEYS.TOKEN_INFO, token)
    } else {
      storage.remove(STORAGE_KEYS.TOKEN_INFO)
    }
  }

  /**
   * @description 请求令牌
   * @param info 登入信息
   */
  const queryToken = async (
    info: AuthorizationServices.LoginInfo
  ): Promise<AuthorizationServices.TokenInfo | undefined> => {
    const tokenInfo = await login(info)

    if (tokenInfo) {
      setJWT(tokenInfo)
      return tokenInfo
    }
  }

  return { jwt, setJWT, queryToken }
})

export default useJWTStore
