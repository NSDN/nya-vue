import type { RouteRecordRaw } from 'vue-router'

import { PageType } from '@/constant/enums'
import { MAIN_LAYOUT, ROUTE_NAME, ROUTE_PATH } from '@/constant/router'

const PLATE_COMPONENT = () => import('@/views/computer/PlateContent.vue')

const plates: RouteRecordRaw[] = [
  {
    path: ROUTE_PATH.PLATE,
    component: MAIN_LAYOUT,
    redirect: ROUTE_PATH.PLATE_LOCALIZATION,
    meta: { displayCreateTopicButton: true },

    children: [
      {
        path: ROUTE_PATH.PLATE_LOCALIZATION,
        name: ROUTE_NAME.PLATE_LOCALIZATION,
        component: PLATE_COMPONENT,
        meta: { pageType: PageType.COMMIC },
      },

      {
        path: ROUTE_PATH.PLATE_MUSIC,
        name: ROUTE_NAME.PLATE_MUSIC,
        component: PLATE_COMPONENT,
        meta: { pageType: PageType.ARTICLE },
      },

      {
        path: ROUTE_PATH.PLATE_CHAT,
        name: ROUTE_NAME.PLATE_CHAT,
        component: PLATE_COMPONENT,
        meta: { pageType: PageType.ARTICLE },
      },
    ],
  },
]

export default plates
