import type { RouteRecordRaw } from 'vue-router'

import { MAIN_LAYOUT, NONE_SIDEBAR_LAYOUT } from '../constant'
import plates from './plates'
import translate from './translate'

const routes: RouteRecordRaw[] = [
  ...translate,
  ...plates,

  {
    path: '/',
    component: MAIN_LAYOUT,

    children: [
      {
        path: '',
        name: 'Home',
        redirect: '/translate',
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
