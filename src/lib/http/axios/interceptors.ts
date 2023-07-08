import type { AuthorizationServices } from '@/features/authorization/types'

import { http } from '.'
import { STORAGE_KEYS } from '@/constant'
import { storage } from '@/utils'

http.interceptors.request.use((config) => {
  config.headers!.Authorization = computeAuthorization()
  return config
})

function computeAuthorization(): string {
  const token = storage.get<AuthorizationServices.TokenInfo>(
    STORAGE_KEYS.TOKEN_INFO
  )?.accessToken

  return token ? `Bearer ${token}` : ''
}
