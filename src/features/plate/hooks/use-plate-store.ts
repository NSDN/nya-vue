import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryPlateList } from '../services'
import { storage } from '@/utils'
import { STORAGE_KEYS } from '@/constant'

const usePlateStore = defineStore('plate', () => {
  /** @description 分区版块列表 */
  const plates = ref<Plate.List | null>(
    storage.get<Plate.List>(STORAGE_KEYS.PLATES) ?? []
  )

  /** @description 设置分区版块列表 */
  const setPlates = (list: Plate.List | null) => {
    plates.value = list ?? []

    if (!list?.length) {
      storage.set(STORAGE_KEYS.PLATES, plates)
    } else {
      storage.remove(STORAGE_KEYS.PLATES)
    }
  }

  /**
   * @description 请求分区版块列表
   */
  const queryPlates = async (): Promise<void> => {
    const list = await queryPlateList()
    list && setPlates(list)
  }

  return {
    plates,
    setPlates,
    queryPlates,
  }
})

export default usePlateStore
