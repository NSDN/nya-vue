import type { AxiosResponse } from 'axios'
import type { AuthorizationServices } from '../types'

import { http } from '@/lib/http/axios'
import { HTTPMethods } from '@/constant/enums'
import { API_URL } from '@/config'

/**
 * @description 获取用户信息 API
 * @returns 用户信息
 */
export async function getUserInfo(): Promise<
  AuthorizationServices.UserInfo | undefined
> {
  try {
    const resonse: AxiosResponse<AuthorizationServices.UserInfo, null> =
      await http({
        url: API_URL.GET_USER_INFO,
        method: HTTPMethods.GET,
      })

    return resonse.data
  } catch (error) {
    console.error(error)
  }
}
