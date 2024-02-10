import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryPlateList } from '../services'
import { compareObject, storage } from '@/utils'
import { STORAGE_KEYS } from '@/constant'

export const usePlateStore = defineStore('plate', () => {
  /** 分区版块列表 */
  const plates = ref<Plate.List | null>(
    storage.get<Plate.List>(STORAGE_KEYS.PLATES) ?? [],
  )

  /** @description 设置分区版块列表 */
  const setPlates = (list: Plate.List | null) => {
    storage.set(STORAGE_KEYS.PLATES, list)
    plates.value = list
  }

  /**
   * @description 请求分区版块列表
   */
  const queryPlates = async (): Promise<void> => {
    const list = await queryPlateList()

    // 如果请求回来的版块信息与当前无变化，则不更新
    const platesUnchanged = compareObject(list, plates.value)

    if (platesUnchanged) {
      return
    }

    list && setPlates(list)
  }

  return {
    plates,
    setPlates,
    queryPlates,
  }
})
