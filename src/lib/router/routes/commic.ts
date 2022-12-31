import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT } from '../constant'
import { RouteNameEnum } from '../enum'

const commic: RouteRecordRaw[] = [
  {
    path: '/commic',
    component: MAIN_LAYOUT,
    meta: { plateRouteName: RouteNameEnum.TRANSLATE_PLATE },

    children: [
      {
        path: '',
        name: 'Commic',
        component: () => import('@/views/computer/Commic.vue'),
      },
    ],
  },
]

export default commic
