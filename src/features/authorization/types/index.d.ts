import type { AxiosResponse } from 'axios'

export namespace AuthorizationServices {
  /** @description 令牌信息 */
  interface TokenInfo {
    accessToken: string
  }

  /** @description 登录信息 */
  type LoginInfo = Record<'username' | 'password', string>
  /** @description 登录信息错误 */
  type LoginInfoError = LoginInfo

  /** @description 用户信息 */
  interface UserInfo {
    uid: number
    username: string
    nickname: string
    userGroup: string
    mail: string
    icon: string
  }

  /** @description 注册信息 */
  interface RegisterInfo {
    /** @description 用户名 */
    username: string
    /** @description 密码 */
    password: string
    /** @description 确认密码 */
    confirmPassword: string
  }

  /** @description 注册信息错误 */
  type RegisterInfoError = RegisterInfo

  /** @description 请求 jwt 的响应 */
  type LoginResponse = AxiosResponse<TokenInfo, LoginInfo>

  /** @description 注册用户的响应 */
  type RegisterResponse = AxiosResponse<boolean, RegisterInfo>
}
