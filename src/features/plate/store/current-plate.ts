import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { STORAGE_KEYS, STORE_ID } from '@/constant'
import { ref } from 'vue'
import { storage } from '@/utils'

/** 当前板块 store */
export const useCurrentPlateStore = defineStore(STORE_ID.CURRENT_PLATE, () => {
  /** 当前板块 */
  const currentPlate = ref<Plate.Item | null>(
    storage.get<Plate.Item>(STORAGE_KEYS.CURRENT_PLATE),
  )

  /**
   * 设置当前板块
   * @param info 版块信息
   */
  const setCurrentPlate = (item: Plate.Item) => {
    storage.set<Plate.Item>(STORAGE_KEYS.CURRENT_PLATE, item)
    currentPlate.value = item
  }

  return { currentPlate, setCurrentPlate }
})
