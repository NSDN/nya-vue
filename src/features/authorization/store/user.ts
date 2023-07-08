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

    storage.set<AuthorizationServices.UserInfo>(
      STORAGE_KEYS.USER_INFO,
      info ?? ({} as AuthorizationServices.UserInfo)
    )
  }

  return { userInfo, setUserInfo }
})

export default useUserStore
