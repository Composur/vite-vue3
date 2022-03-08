import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
// import microRoute from '@/micro/microRoute'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  }
  // 子应用路由容器
  // ...microRoute
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
