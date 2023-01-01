import { RouteNameEnum } from '@/lib/router/enum'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const useUncommitTopicStore = defineStore('uncommit-topic', () => {
  const route = useRoute()

  /** @description 主题标题 */
  const title = ref<string>('')

  /**
   * @description 设置主题标题
   * @param _title
   */
  const setTitle = (_title: string) => (title.value = _title)

  const commicTypePlateRouteName: string[] = Object.values(RouteNameEnum)

  /** @description 是否为漫画主题 */
  const isCommicType = computed<boolean>(() =>
    commicTypePlateRouteName.includes((route.meta.from as string) ?? '')
  )

  /** @description 主题版块路由名 */
  const plateRouteName = computed<RouteNameEnum>(
    () => (route.meta.plateRouteName ?? '') as RouteNameEnum
  )

  return { title, setTitle, isCommicType, plateRouteName }
})

export default useUncommitTopicStore
