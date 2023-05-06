/** @description 主要布局式样 */
export const MAIN_LAYOUT = () => import('@/layouts/MainLayout.vue')

/** @description 无边栏布局样式 */
export const NONE_SIDEBAR_LAYOUT = () =>
  import('@/layouts/NoneSidebarLayout.vue')

/** @description 路由路径 */
export const ROUTE_PATH = {
  /** @description 首页 */
  HOME: '/',
  /** @description 登入 */
  LOGIN: '/login',

  /** @description 新建帖文 */
  NEW_TOPIC: 'new-topic',

  /** @description 版块 */
  PLATE: '/plate',
  /** @description 版块 - 喵玉汉化馆 */
  PLATE_LOCALIZATION: '/plate/localization',
  /** @description 版块 - 喵玉咏唱馆 */
  PLATE_MUSIC: '/plate/music',
  /** @description 版块 - 魔女的茶会 */
  PLATE_CHAT: '/plate/chat',

  /** @description 漫画 */
  COMMIC: '/commic/:id',
  /** @description 文章 */
  ARTICLE: '/article/:id',
}

/** @description 路由名 */
export const ROUTE_NAME = {
  /** @description 首页 */
  HOME: 'Home',
  /** @description 登入 */
  LOGIN: 'Login',

  /** @description 新建帖文 */
  NEW_TOPIC: 'NewTopic',

  /** @description 版块 - 喵玉汉化馆 */
  PLATE_LOCALIZATION: 'PlateLocalization',
  /** @description 版块 - 喵玉咏唱馆 */
  PLATE_MUSIC: 'PlateMusic',
  /** @description 版块 - 魔女的茶会 */
  PLATE_CHAT: 'PlateChat',

  /** @description 漫画 */
  COMMIC: 'Commic',
  /** @description 文章 */
  ARTICLE: 'Article',
}
