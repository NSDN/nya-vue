import type { AuthorizationServices } from '../types'

import { reactive } from 'vue'
import { updateObjectValue } from '@/utils'
import { register } from '../services'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

/** @description 注册功能 */
export function useRegister() {
  const router = useRouter()

  /** @description 注册信息 */
  const info = reactive<AuthorizationServices.RegisterInfo>({
    username: '',
    password: '',
    confirmPassword: '',
  })

  /** @description 注册信息错误 */
  const formError = reactive<AuthorizationServices.RegisterInfoError>({
    username: '',
    password: '',
    confirmPassword: '',
  })

  /** @description 确认注册 */
  const confirmRegister = async () => {
    // 表单验证
    const e = validateRegisterInfo(info)
    updateObjectValue(formError, e)
    const hasError = Object.values(formError).some((value) => !!value)

    // 如表单验证失败则不执行注册
    if (hasError) {
      return
    }

    const succeed = await register(info)

    // 成功注册则跳转至登入画面
    if (succeed) {
      await router.push({ name: ROUTE_NAME.LOGIN })
    }
  }

  return {
    info,
    confirmRegister,
    formError,
  }
}

/** @description 验证注册信息 */
function validateRegisterInfo(
  info: AuthorizationServices.RegisterInfo,
): AuthorizationServices.RegisterInfoError {
  const error: AuthorizationServices.RegisterInfoError = {
    username: '',
    password: '',
    confirmPassword: '',
  }

  if (info.username.length < 6) {
    error.username = '用户名至少为 6 位'
  }

  if (info.password.length < 6) {
    error.password = '密码至少为 6 位'
  }

  if (info.confirmPassword.length < 6) {
    error.confirmPassword = '密码至少为 6 位'
  }

  if (info.confirmPassword !== info.password) {
    error.password = '密码不一致'
    error.confirmPassword = '密码不一致'
  }

  return error
}
