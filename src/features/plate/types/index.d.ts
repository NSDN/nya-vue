import { PageTypeEnum } from '../enum'

export namespace Plate {
  interface Item {
    // 背景图片（地址）
    background: string
    // 版块名
    title: string
    // 版块名颜色
    titleColor?: string
    // 路由名
    routeName: string
  }

  type List = Item[]
}
