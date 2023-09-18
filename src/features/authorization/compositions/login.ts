import type { AuthorizationServices } from '../types'

import { useRouter } from 'vue-router'
import { useJWTStore, useUserStore } from '../store'
import { ROUTE_NAME } from '@/constant/router'
import { reactive } from 'vue'
import { getMessage, storage, updateObjectValue } from '@/utils'

export function useLogin() {
  const userStore = useUserStore()
  const jwtStore = useJWTStore()
  const router = useRouter()

  /** @description 登入信息 */
  const loginInfo = reactive<AuthorizationServices.LoginInfo>({
    username: '',
    password: '',
  })

  const formError = reactive<AuthorizationServices.LoginInfoError>({
    username: '',
    password: '',
  })

  /** @description 登入 */
  const login = async () => {
    const error = validateLoginForm(loginInfo)
    updateObjectValue(formError, error)
    const hasError = Object.values(formError).some((value) => !!value)

    if (hasError) {
      return
    }

    await jwtStore.queryToken(loginInfo)
    await userStore.queryUserInfo()

    if (userStore.loggedIn) {
      await router.push({ name: ROUTE_NAME.HOME })
    }
  }

  /** @description 登出 */
  const logout = (): void => {
    storage.clear()
    window.alert(getMessage('LOGGED_OUT'))
    location.reload()
  }

  return { loginInfo, formError, login, logout }
}

/** @description 验证登录表单 */
function validateLoginForm(
  info: AuthorizationServices.LoginInfo
): AuthorizationServices.LoginInfoError {
  const error: AuthorizationServices.LoginInfoError = {
    username: '',
    password: '',
  }

  if (info.username.length < 1) {
    error.username = getMessage('NEED_USERNAME')
  }

  if (info.password.length < 1) {
    error.password = getMessage('NEED_PASSWORD')
  }

  return error
}
