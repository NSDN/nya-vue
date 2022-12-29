import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT, NONE_SIDEBAR_LAYOUT } from '../constant'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: MAIN_LAYOUT,

    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/computer/ArticleList.vue'),
      },
    ],
  },

  {
    path: '/login',
    component: NONE_SIDEBAR_LAYOUT,

    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/computer/Login.vue'),
      },
    ],
  },
]

export default routes
