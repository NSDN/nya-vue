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

  const token = storage.get<AuthorizationServices.TokenInfo>(
    STORAGE_KEYS.TOKEN_INFO
  )

  /** @description 是否已经登入 */
  const loggedIn = ref<boolean>(token?.access_token ? true : false)

  /**
   * @description 设置已登入与否
   * @param status
   * @returns
   */
  const setLoggedIn = (status: boolean) => (loggedIn.value = status)

  return {
    /** @description 登入信息 */
    loginInfo,
    /** @description 是否已经登入 */
    loggedIn,
    /**
     * @description 设置已登入与否
     * @param status
     * @returns
     */
    setLoggedIn,
  }
})

export default useLoginStore
