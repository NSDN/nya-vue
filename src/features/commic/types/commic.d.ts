export namespace Commic {
  interface PictureItem {
    id: string
    path: string
    name: string
    [property: string]: any
  }

  type ListItem = PictureItem
  type List = ListItem[]

  type Page = PictureItem
  type Pages = Page[]
}
