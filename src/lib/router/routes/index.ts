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

  {
    path: '/article',
    component: MAIN_LAYOUT,

    children: [
      {
        path: '',
        name: 'Article',
        component: () => import('@/views/computer/Article.vue'),
      },
    ],
  },
]

export default routes
