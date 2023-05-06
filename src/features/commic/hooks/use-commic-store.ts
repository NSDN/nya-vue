import type { Commic } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryCommicList, queryCommicPages } from '../services'
import { useRouter } from 'vue-router'
import { ROUTE_NAME } from '@/constant/router'

const useCommicStore = defineStore('commic', () => {
  const router = useRouter()

  /** @description 漫画列表 */
  const list = ref<Commic.List>([])

  /**
   * @description 设置漫画列表
   * @param _list 漫画列表
   */
  const setList = (_list: Commic.List) => (list.value = _list)

  /**
   * @description 点击漫画
   * @param commicID 漫画 ID
   */
  const clickListItem = async (commicID: string): Promise<void> => {
    await router.push({
      name: ROUTE_NAME.COMMIC,
      params: { id: commicID },
    })
  }

  /**
   * @description 请求漫画列表
   */
  const queryList = async (): Promise<void> => {
    setList(await queryCommicList())
  }

  /** @description 漫画内容页列表 */
  const pages = ref<Commic.Pages>([])

  /**
   * @description 设置漫画内容页列表
   * @param _pages
   */
  const setPages = (_pages: Commic.Pages) => (pages.value = _pages)

  /**
   * @description 请求漫画内容页列表
   * @param commicID 漫画 ID
   */
  const queryPages = async (commicID: string): Promise<void> => {
    setPages(await queryCommicPages(commicID))
  }

  return {
    list,
    setList,
    clickListItem,
    queryList,
    pages,
    setPages,
    queryPages,
  }
})

export default useCommicStore
