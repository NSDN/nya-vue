import type { AuthorizationServices } from '../types'

import { storage } from '@/utils'
import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'

/** @description JWT 状态库 */
const useJWTStore = defineStore(STORE_ID.JWT, () => {
  const jwt = ref<AuthorizationServices.TokenInfo | null>(
    storage.get<AuthorizationServices.TokenInfo>(STORAGE_KEYS.TOKEN_INFO)
  )

  const setJWT = (token: AuthorizationServices.TokenInfo) => {
    jwt.value = token

    // 在浏览器的 storage 中保存 token
    storage.set(STORAGE_KEYS.TOKEN_INFO, token)
  }

  return { jwt, setJWT }
})

export default useJWTStore
