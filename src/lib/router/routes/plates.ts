import type { RouteRecordRaw } from 'vue-router'

import { PageTypeEnum } from '@/features/plate/enum'
import { MAIN_LAYOUT } from '../constant'

const plates: RouteRecordRaw[] = [
  {
    path: '/root',
    component: MAIN_LAYOUT,
    redirect: '/',

    children: [
      {
        path: '/translate',
        name: 'TranslatePlate',
        component: () => import('@/views/computer/PlateContent.vue'),
        meta: { pageType: PageTypeEnum.COMMIC },
      },

      {
        path: '/sample01',
        name: 'Sample01',
        component: () => import('@/views/computer/PlateContent.vue'),
        meta: { pageType: PageTypeEnum.ARTICLE },
      },

      {
        path: '/sample02',
        name: 'Sample02',
        component: () => import('@/views/computer/PlateContent.vue'),
        meta: { pageType: PageTypeEnum.ARTICLE },
      },
    ],
  },
]

export default plates
