import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT } from '../constant'

const commic: RouteRecordRaw[] = [
  {
    path: '/commic',
    component: MAIN_LAYOUT,

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
