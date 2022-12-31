export namespace CommicComment {
  interface Item {
    id: string
    date: string
    username: string
    floor: number
    content: string
  }

  type List = Item[]
}
