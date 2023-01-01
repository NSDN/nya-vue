import { defineStore } from 'pinia'
import { ref } from 'vue'

const useTopicTitleStore = defineStore('topic-title', () => {
  /** @description 主题标题 */
  const value = ref<string>('')

  /**
   * @description 设置主题标题
   * @param title
   */
  const setValue = (title: string) => (value.value = title)

  return { value, setValue }
})

export default useTopicTitleStore
