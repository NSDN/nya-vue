import type { AuthorizationServices } from '@/features/authorization/types'
import type { AxiosError } from 'axios'

import { http } from '.'
import { STORAGE_KEYS } from '@/constant'
import { storage } from '@/utils'
import { useModal } from '@/features/modal/stores'

// 请求拦截器
http.interceptors.request.use((config) => {
  config.headers!.Authorization = computeAuthorization()
  return config
})

function computeAuthorization(): string {
  const token = storage.get<AuthorizationServices.TokenInfo>(
    STORAGE_KEYS.TOKEN_INFO,
  )?.accessToken

  return token ? `Bearer ${token}` : ''
}

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    return response
  },

  (error: AxiosError) => {
    handleShowErrorModal(error)
    return Promise.reject(error)
  },
)

/**
 * 发生错误时弹窗提示信息
 * @param error axios 错误实例
 */
function handleShowErrorModal(error: AxiosError) {
  const modalStore = useModal()

  const isErrorDataString = typeof error.response?.data === 'string'

  const errorText = isErrorDataString
    ? (error.response?.data as string)
    : error.message

  modalStore.showModal({ info: errorText })
}
