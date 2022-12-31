import { PageTypeEnum } from '../enum'

export namespace Plate {
  interface Item {
    background: string
    title: string
    titleColor?: string
    routeName: string
  }

  type List = Item[]
}
