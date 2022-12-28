import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT } from '../constant'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: MAIN_LAYOUT,
    children: [
      { path: '', component: () => import('@/views/ArticleList.vue') },
    ],
  },

  { path: '/login', component: () => import('@/views/Login.vue') },
]

export default routes
