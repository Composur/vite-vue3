/**
 * 集中管理路由
 */
import { RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Setup from '@/views/Test/Setup.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页(主)',
      icon: 'MailOutlined'
    }
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
    meta: {
      title: '测试页',
      icon: 'MailOutlined'
    },
    children: [
      {
        path: '/setup',
        name: 'Setup',
        component: Setup,
        meta: {
          title: '测试页1',
          icon: 'MailOutlined'
        }
      }
    ]
  }
]
export default routes
