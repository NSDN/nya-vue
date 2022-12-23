import type { AuthorizationServices } from '../types'

import { http } from '@/lib/http/axios'

export async function login({
  username,
  password,
}: AuthorizationServices.LoginInfo): Promise<
  AuthorizationServices.UserInfo | undefined
> {
  try {
    const resonse: AuthorizationServices.LoginResponse = await http({
      url: 'login',
      method: 'POST',
      data: { username, password },
    })

    return resonse.data
  } catch (error) {
    console.error(error)
    return
  }
}
