import type {
  NavigationFailure,
  RouteLocationNamedRaw,
  RouteLocationRaw,
  RouteRecordName,
} from 'vue-router'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const useRouterStore = defineStore('router', () => {
  const route = useRoute()
  const router = useRouter()

  /** @description 当前画面的路由名 */
  const currentRouteName = ref<RouteRecordName>(route.name ?? '')

  /**
   * @description 设置当前画面的路由名
   * @param name 路由名
   */
  const setCurrentRouteName = (name: string | symbol) => {
    currentRouteName.value = name
  }

  /**
   * @description 跳转画面
   * @param to 路由
   */
  const transfer = (
    to: RouteLocationRaw
  ): Promise<NavigationFailure | void | undefined> => {
    setCurrentRouteName((to as RouteLocationNamedRaw).name ?? '')
    return router.push(to)
  }

  return { currentRouteName, setCurrentRouteName, transfer }
})

export default useRouterStore
