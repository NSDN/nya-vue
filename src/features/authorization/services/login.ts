import type { AuthorizationServices } from '../types'

import { http } from '@/lib/http/axios'

/**
 * @description 登入 API
 * @param param0
 * @returns
 */
export async function login({
  username,
  password,
}: AuthorizationServices.LoginInfo): Promise<
  AuthorizationServices.TokenInfo | undefined
> {
  try {
    const resonse: AuthorizationServices.LoginResponse = await http({
      url: 'login',
      method: 'POST',
      data: { username, password },
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    return resonse.data
  } catch (error) {
    console.error(error)
    return
  }
}
