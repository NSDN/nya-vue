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

const usePlateStore = defineStore('plate', () => {
  const route = useRoute()
  const router = useRouter()

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

  return {
    plates,
    setPlates,
    queryPlates,
  }
})

export default usePlateStore
