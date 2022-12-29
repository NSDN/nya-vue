import type { AxiosResponse } from 'axios'

export namespace AuthorizationServices {
  /** @description 令牌信息 */
  interface TokenInfo {
    access_token: string
    token_type: string
  }

  /** @description 登录信息 */
  interface LoginInfo {
    username: string
    password: string
  }

  /** @description 用户信息 */
  interface UserInfo {
    uid: number
    username: string
    nickname: string
    userGroup: string
    mail: string
    icon: string
  }

  /** @description 登录响应 */
  type LoginResponse = AxiosResponse<TokenInfo, LoginInfo>
}
