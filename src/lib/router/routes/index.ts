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

      {
        path: 'new-topic',
        name: 'NewTopic',
        component: () => import('@/views/computer/NewTopic.vue'),

        beforeEnter(to, from) {
          to.meta.from = from.name
        },
      },

      {
        path: '/article',
        name: 'Article',
        component: () => import('@/views/computer/Article.vue'),
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
