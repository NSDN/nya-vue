import type { Commic } from '../types'

import { sleep } from '@/utils'

export async function queryCommicList(): Promise<Commic.List> {
  try {
    const list: Commic.List = []

    for (let i = 0; i < 30; i++) {
      await sleep(1)

      list.push({
        id: Date.now().toString(),
        thumbnail: 'https://i.imgur.com/s7wa8p2l.png',
        title: '测试一下过长的贴子标题测试一下过长的贴子标题',
      })
    }

    return list
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function queryCommicPages(
  commicID: string
): Promise<Commic.Pages> {
  try {
    const pages: Commic.Pages = []

    for (let i = 0; i < 22; i++) {
      await sleep(1)

      pages.push({
        id: i.toString(),
        thumbnail: 'https://i.imgur.com/s7wa8p2l.png',
        title: `0${i}`.slice(-2),
      })
    }

    return pages
  } catch (error) {
    console.error(error)
    return []
  }
}
