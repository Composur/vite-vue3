/**
 * 路由的创建、拦截等逻辑功能
 */
import { createRouter, createWebHistory, Router } from 'vue-router'
import routes from './routes'

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
