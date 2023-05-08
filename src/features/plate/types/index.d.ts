import { PageType } from '@/constant/enums'

export namespace Plate {
  interface Item {
    // 编号
    id: number
    // 版块名
    name: string
    // 版块名颜色（同 CSS）
    nameColor?: string
    // 路由名
    routeName: string
    // 背景图片（图床地址）
    background: string
    // 画面类型
    pageType: PageType
  }

  type List = Item[]
}
