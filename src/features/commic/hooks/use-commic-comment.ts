import type { CommicComment } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { queryCommicCommentList } from '../services/comment'

const useCommicComment = defineStore('commic-comment', () => {
  /** @description 漫画评论列表 */
  const list = ref<CommicComment.List>([])

  /**
   * @description 设置漫画评论列表
   * @param _list 漫画评论列表
   */
  const setList = (_list: CommicComment.List) => (list.value = _list)

  /**
   * @description 请求漫画评论列表
   * @param commicID 漫画 ID
   */
  const queryList = async (commicID: string): Promise<void> => {
    const list = await queryCommicCommentList(commicID)
    setList(list)
  }

  /**
   * @description 添加漫画评论至列表中
   * @param item 漫画评论
   */
  const addItem = (item: CommicComment.Item) => {
    setList([...list.value, item])
  }

  return { list, setList, queryList, addItem }
})

export default useCommicComment
