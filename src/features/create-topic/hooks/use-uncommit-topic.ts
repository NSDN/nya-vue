import { PageType } from '@/constant/enums'
import { useCurrentPlateStore, usePlateStore } from '@/features/plate/store'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const useUncommitTopicStore = defineStore('uncommit-topic', () => {
  const route = useRoute()
  const currentPlate = useCurrentPlateStore()
  const plate = usePlateStore()

  /** @description 主题标题 */
  const title = ref<string>('')

  /**
   * @description 设置主题标题
   * @param _title
   */
  const setTitle = (_title: string) => (title.value = _title)

  /** @description 是否为漫画主题 */
  const isCommicType = computed<boolean>(() => {
    const commicPlateRouteNames = plate.plates
      ?.filter((item) => item.pageType === PageType.COMMIC)
      ?.map((item) => item.routeName)

    // 通过二次取反将空值转为布尔值
    return !!commicPlateRouteNames?.includes(
      currentPlate.currentPlate?.routeName ?? '',
    )
  })

  /** @description 主题版块路由名 */
  const plateRouteName = computed<string>(() => {
    const result = route.meta.plateRouteName

    if (typeof result !== 'string') {
      console.error('`route.meta.plateRouteName` should be string type.')
      return ''
    }

    return result
  })

  return { title, setTitle, isCommicType, plateRouteName }
})

export default useUncommitTopicStore
