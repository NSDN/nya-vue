export namespace Commic {
  interface PictureItem {
    id: string
    image: string
    title: string
  }

  type ListItem = PictureItem
  type List = ListItem[]

  type Page = PictureItem
  type Pages = Page[]
}
