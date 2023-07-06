import { useRouter } from 'vue-router'
import { useJWTStore, useLoginStore } from '../store'
import { ROUTE_NAME } from '@/constant/router'
import { useJWT } from '.'

export default function useLogin() {
  const loginStore = useLoginStore()
  const jwtStore = useJWTStore()

  const router = useRouter()
  const jwt = useJWT()

  /** @description 登入 */
  const execute = async () => {
    await jwt.queryToken()

    if (jwtStore.jwt?.access_token) {
      loginStore.setLoggedIn(true)
      await router.push({ name: ROUTE_NAME.HOME })
    }
  }

  return { execute }
}
