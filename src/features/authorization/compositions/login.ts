import { useRouter } from 'vue-router'
import { useLoginStore, useUserStore } from '../store'
import { ROUTE_NAME } from '@/constant/router'
import { useJWT, useUser } from '.'

export default function useLogin() {
  const loginStore = useLoginStore()
  const userStore = useUserStore()
  const router = useRouter()
  const jwt = useJWT()
  const user = useUser()

  /** @description 登入 */
  const execute = async () => {
    await jwt.queryToken()
    await user.queryUserInfo()

    if (userStore.userInfo) {
      loginStore.setLoggedIn(true)
      await router.push({ name: ROUTE_NAME.HOME })
    }
  }

  return { execute }
}
