import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Vuex from '@/views/Vuex.vue'
import Test from '@/views/Test.vue'
import microRoute from '@/micro/microRoute'
import Main from '@/components/Main.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: Main,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/Axios.vue') // 懒加载 Axios 组件
  },
  {
    path: '/test',
    name: 'Test',
    component: Test
  },
  // 子应用路由容器
  ...microRoute
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
