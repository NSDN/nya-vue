import type { Plate } from '../types'
import type {
  RouteLocationNamedRaw,
  RouteLocationRaw,
  RouteRecordName,
} from 'vue-router'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryPlateList } from '../services'
import { useRoute, useRouter } from 'vue-router'
import { useRouterStore } from '@/hooks'

const usePlateStore = defineStore('plate', () => {
  const route = useRoute()
  const router = useRouter()
  const routerStore = useRouterStore()

  /** @description 分区版块列表 */
  const plates = ref<Plate.List>([])

  /**
   * @description 设置分区版块列表
   * @param list 分区版块列表
   */
  const setPlates = (list: Plate.List) => (plates.value = list)

  /**
   * @description 请求分区版块列表
   */
  const queryPlates = async (): Promise<void> => {
    setPlates(await queryPlateList())
  }

  /** @description 当前所在版块 */
  const currentPlate = ref<RouteRecordName>(route.name ?? '')

  /** @description 设置当前所在版块 */
  const setCurrentPlate = (routeName: string | symbol) => {
    currentPlate.value = routeName
  }

  /**
   * @description 跳转版块
   * @param to 路由
   */
  const transfer = (to: RouteLocationRaw) => {
    router.push(to)
    const routeName = (to as RouteLocationNamedRaw).name ?? ''
    setCurrentPlate(routeName)
    routerStore.setCurrentRouteName(routeName)
  }

  return {
    plates,
    setPlates,
    queryPlates,
    currentPlate,
    setCurrentPlate,
    transfer,
  }
})

export default usePlateStore
