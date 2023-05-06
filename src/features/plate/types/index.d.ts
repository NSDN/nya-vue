export namespace Plate {
  interface Item {
    // 背景图片（地址）
    background: string
    // 版块名
    name: string
    // 版块名颜色
    nameColor?: string
    // 路由名
    routeName: string
  }

  type List = Item[]
}
