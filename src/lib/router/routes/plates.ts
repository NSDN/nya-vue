import type { RouteRecordRaw } from 'vue-router'

import {
  MAIN_LAYOUT,
  PLATE_ROOT_REDIRECT,
  ROUTE_NAME,
  ROUTE_PATH,
} from '@/constant/router'

const plates: RouteRecordRaw[] = [
  {
    path: ROUTE_PATH.PLATE,
    component: MAIN_LAYOUT,
    redirect: PLATE_ROOT_REDIRECT,
    meta: { displayCreateTopicButton: true },

    children: [
      {
        path: ROUTE_PATH.PLATE_ITEM,
        name: ROUTE_NAME.PLATE_ITEM,
        component: () => import('@/views/computer/PlateContent.vue'),
      },
    ],
  },
]

export default plates
