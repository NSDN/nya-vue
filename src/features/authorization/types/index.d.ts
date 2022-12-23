import type { AxiosResponse } from 'axios'

export namespace AuthorizationServices {
  interface LoginInfo {
    username: string
    password: string
  }

  interface UserInfo {
    uid: number
    username: string
    nickname: string
    userGroup: string
    mail: string
    icon: string
  }

  type LoginResponse = AxiosResponse<UserInfo, LoginInfo>
}
