import type { CommicComment } from '../types'

export async function queryCommicCommentList(commicID: string) {
  try {
    const list: CommicComment.List = [
      {
        id: '01',
        date: '2022-01-02',
        username: 'hyoryu',
        content: '这是对漫画的评论',
        floor: 1,
      },

      {
        id: '02',
        date: '2022-01-02',
        username: 'hyoryu',
        content: '这是对漫画的评论',
        floor: 2,
      },

      {
        id: '03',
        date: '2022-01-02',
        username: 'hyoryu',
        content: '这是对漫画的评论',
        floor: 3,
      },
    ]

    return list
  } catch (error) {
    console.error(error)
    return []
  }
}
