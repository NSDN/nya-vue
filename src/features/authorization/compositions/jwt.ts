import { login } from '../services'
import { useJWTStore, useLoginStore } from '../store'

export default function useJWT() {
  const loginStore = useLoginStore()
  const jwtStore = useJWTStore()

  /** @description 请求令牌 */
  const queryToken = async (): Promise<void> => {
    const tokenInfo = await login(loginStore.loginInfo)
    tokenInfo && jwtStore.setJWT(tokenInfo)
  }

  return { queryToken }
}
