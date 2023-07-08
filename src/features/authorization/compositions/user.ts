import { getUserInfo } from '../services'
import { useUserStore } from '../store'

export default function useUser() {
  const userStore = useUserStore()

  /** @description 获取用户信息 */
  const queryUserInfo = async () => {
    const userInfo = await getUserInfo()
    userInfo && userStore.setUserInfo(userInfo)
  }

  return {
    queryUserInfo,
  }
}
