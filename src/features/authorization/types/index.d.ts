import type { AxiosResponse } from 'axios'

export namespace AuthorizationServices {
  /** @description 令牌信息 */
  interface TokenInfo {
    accessToken: string
  }

  /** @description 登录信息 */
  interface LoginInfo {
    /** @description 用户名 */
    username: string
    /** @description 密码 */
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

  /** @description 请求 jwt 的响应 */
  type LoginResponse = AxiosResponse<TokenInfo, LoginInfo>
}
