import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import { login } from '../services'
import { AuthorizationServices } from '../types'

const useAuthorizationStore = defineStore('authorization', () => {
  /** @description 是否已经登入 */
  const loginDone = ref<boolean>(false)

  /**
   * @description 设置登入状态
   * @param status
   * @returns
   */
  const setLoginStatus = (status: boolean) => (loginDone.value = status)

  /** @description 令牌 */
  const tokenInfo = reactive<AuthorizationServices.TokenInfo>({
    access_token: '',
    token_type: '',
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
    tokenInfo && setTokenInfo(tokenInfo)
  }

  return { loginDone, setLoginStatus, tokenInfo, setTokenInfo, queryToken }
})

export default useAuthorizationStore
