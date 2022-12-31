import type { RouteRecordRaw } from 'vue-router'

import { PageTypeEnum } from '@/features/plate/enum'
import { MAIN_LAYOUT } from '../constant'

const plates: RouteRecordRaw[] = [
  {
    path: '/plate',
    name: 'Plate',
    component: MAIN_LAYOUT,

    children: [
      {
        path: '/plate/translate',
        name: 'TranslatePlate',
        component: () => import('@/views/computer/PlateContent.vue'),
        meta: { pageType: PageTypeEnum.COMMIC },
      },

      {
        path: '/plate/sample01',
        name: 'Sample01',
        component: () => import('@/views/computer/PlateContent.vue'),
        meta: { pageType: PageTypeEnum.ARTICLE },
      },

      {
        path: '/plate/sample02',
        name: 'Sample02',
        component: () => import('@/views/computer/PlateContent.vue'),
        meta: { pageType: PageTypeEnum.ARTICLE },
      },
    ],
  },
]

export default plates
