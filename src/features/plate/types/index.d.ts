import { PageTypeEnum } from '../enum'

export namespace Plate {
  interface PlateItem {
    background: string
    title: string
    titleColor?: string
    routeName: string
    pageType: PageTypeEnum
  }
}
