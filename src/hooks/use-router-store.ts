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
   * @param routeLocation 路由
   */
  const transfer = (
    routeLocation: RouteLocationRaw
  ): Promise<NavigationFailure | void | undefined> => {
    setCurrentRouteName((routeLocation as RouteLocationNamedRaw).name ?? '')
    return router.push(routeLocation)
  }

  return { currentRouteName, setCurrentRouteName, transfer }
})

export default useRouterStore
