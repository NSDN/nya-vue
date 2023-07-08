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

  const setJWT = (token: AuthorizationServices.TokenInfo | null) => {
    jwt.value = token

    // 在浏览器的 storage 中保存 token
    if (token) {
      storage.set(STORAGE_KEYS.TOKEN_INFO, token)
    } else {
      storage.remove(STORAGE_KEYS.TOKEN_INFO)
    }
  }

  return { jwt, setJWT }
})

export default useJWTStore
