/**
 * 路由的创建、拦截等逻辑功能
 */
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  Router
} from 'vue-router'
import routes from './routes'

const { GITHUB } = import.meta.env
const history = GITHUB ? createWebHashHistory() : createWebHistory()
const router: Router = createRouter({
  history,
  routes
})

export default router
