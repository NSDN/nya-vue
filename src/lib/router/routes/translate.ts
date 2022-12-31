import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT } from '../constant'
import { RouteNameEnum } from '../enum'

const translate: RouteRecordRaw[] = [
  {
    path: '/translate/root',
    component: MAIN_LAYOUT,
    redirect: '/translate',
    meta: { plateRouteName: RouteNameEnum.TRANSLATE_PLATE },

    children: [
      {
        path: '/translate/commic',
        name: 'TranslateCommic',
        component: () => import('@/views/computer/Commic.vue'),
      },
    ],
  },
]

export default translate
