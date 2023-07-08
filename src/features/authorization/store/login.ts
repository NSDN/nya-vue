import type { AuthorizationServices } from '../types'

import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { storage } from '@/utils'

/** @description 登入用信息状态库 */
const useLoginStore = defineStore(STORE_ID.LOGIN, () => {
  /** @description 登入信息 */
  const loginInfo = reactive<AuthorizationServices.LoginInfo>({
    username: '',
    password: '',
  })

  /** @description 清除登入信息 */
  const clearLoginInfo = () => {
    loginInfo.username = ''
    loginInfo.password = ''
  }

  /** @description 是否已经登入 */
  const loggedIn = ref<boolean>(
    storage.get<AuthorizationServices.UserInfo>(STORAGE_KEYS.USER_INFO)?.uid
      ? true
      : false
  )

  /**
   * @description 设置是否已经登入
   * @param status 已登入与否
   */
  const setLoggedIn = (status: boolean) => (loggedIn.value = status)

  return {
    /** @description 登入信息 */
    loginInfo,
    /** @description 清除登入信息 */
    clearLoginInfo,
    /** @description 是否已经登入 */
    loggedIn,
    /**
     * @description 设置是否已经登入
     * @param status 已登入与否
     */
    setLoggedIn,
  }
})

export default useLoginStore
