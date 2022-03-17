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

const { VITE_GIHUB } = import.meta.env
const history = VITE_GIHUB ? createWebHashHistory() : createWebHistory()
const router: Router = createRouter({
  history,
  routes
})

export default router
