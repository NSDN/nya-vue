import type { RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
]

export default routes
