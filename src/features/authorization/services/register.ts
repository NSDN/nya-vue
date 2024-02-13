import type { AuthorizationServices } from '../types'

import { API_URL } from '@/config'
import { HTTPMethods } from '@/constant/enums'
import { http } from '@/lib/http/axios'
import { hashSecreate } from '@/utils'

/**
 * 注册 API
 * @param registerInfo 注测信息
 * @param registerInfo.username 用户名
 * @param registerInfo.password 确认密码
 * @param registerInfo.confrimPassword 密码
 * @returns 返回注册成功与否或 undefined
 */
export async function register({
  username,
  password,
  confirmPassword,
}: AuthorizationServices.RegisterInfo): Promise<boolean | undefined> {
  try {
    const resonse: AuthorizationServices.RegisterResponse = await http({
      url: API_URL.REGISTER,
      method: HTTPMethods.POST,
      data: {
        username,
        password: password && hashSecreate(password),
        confirmPassword: confirmPassword && hashSecreate(confirmPassword),
      },
    })

    return resonse.data
  } catch (error) {
    console.error(error)
  }
}
