import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryPlateList } from '../services'
import { storage, STORAGE_KEYS } from '@/utils'

const usePlateStore = defineStore('plate', () => {
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
    const list: Plate.List = await queryPlateList()
    setPlates(list)
    storage.set<Plate.List>(STORAGE_KEYS.PLATES, list)
  }

  return {
    plates,
    setPlates,
    queryPlates,
  }
})

export default usePlateStore
