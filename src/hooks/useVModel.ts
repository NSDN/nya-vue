import type { WritableComputedRef } from 'vue'
import { computed, getCurrentInstance } from 'vue'

/**
 * @description 方便自定义组件中使用 v-model
 * @props 组件的 props
 * @name props 中的属性名
 */
export function useVModel<Props>(
  props: Props,
  name: keyof Props
): WritableComputedRef<Props[keyof Props]> {
  const instance = getCurrentInstance()

  if (!instance) {
    throw new Error('请在 setup 中使用本勾子。')
  }

  return computed<Props[keyof Props]>({
    get: () => props[name],
    set: (value) => instance.emit(`update:${name.toString()}`, value),
  })
}
