import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT } from '../constant'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Top',
    component: MAIN_LAYOUT,

    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/ArticleList.vue'),
      },
    ],
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
]

export default routes
