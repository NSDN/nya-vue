import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { computed } from 'vue'
import { queryPlateList } from '../services'
import { storage } from '@/utils'
import { STORAGE_KEYS } from '@/constant'

const usePlateStore = defineStore('plate', () => {
  /** @description 分区版块列表 */
  const plates = computed<Plate.List | null>(() => {
    return storage.get<Plate.List>(STORAGE_KEYS.PLATES)
  })

  /**
   * @description 请求分区版块列表
   */
  const queryPlates = async (): Promise<void> => {
    const list: Plate.List = await queryPlateList()
    storage.set<Plate.List>(STORAGE_KEYS.PLATES, list)
  }

  return {
    plates,
    queryPlates,
  }
})

export default usePlateStore
