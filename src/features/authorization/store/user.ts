import type { AuthorizationServices } from '../types'

import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { storage } from '@/utils'

/** @description 用户 */
const useUserStore = defineStore(STORE_ID.USER, () => {
  /** @description 用户信息 */
  const userInfo = ref<AuthorizationServices.UserInfo | null>(
    storage.get<AuthorizationServices.UserInfo>(STORAGE_KEYS.USER_INFO)
  )

  /** @description 设置用户信息 */
  const setUserInfo = (info: AuthorizationServices.UserInfo | null) => {
    userInfo.value = info

    if (info) {
      storage.set(STORAGE_KEYS.USER_INFO, info)
    } else {
      storage.remove(STORAGE_KEYS.USER_INFO)
    }
  }

  return { userInfo, setUserInfo }
})

export default useUserStore
