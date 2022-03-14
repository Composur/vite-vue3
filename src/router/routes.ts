/**
 * 集中管理路由
 */
import { RouteRecordRaw } from 'vue-router'

import Home from '@/views/Home.vue'
import Test from '@/views/Test.vue'
import Setup from '@/views/Test/Setup.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
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
          title: 'setup',
          icon: 'MailOutlined'
        }
      },
      {
        path: '/communication',
        name: 'Communication',
        component: () => import('@/views/Test/Father.vue'),
        meta: {
          title: '组件通信',
          icon: 'MailOutlined'
        }
      }
    ]
  },
  {
    path: '/micro',
    redirect: '/micro/vue',
    component: Home,
    meta: {
      title: '微服',
      icon: 'MailOutlined'
    },
    children: [
      {
        path: '/vue',
        component: Home,
        meta: {
          title: 'Vue主页（子）',
          icon: 'MailOutlined'
        }
      },
      {
        path: '/vue/list',
        component: Home,
        meta: {
          title: 'Vue列表页（子）',
          icon: 'MailOutlined'
        }
      },
      {
        path: '/static',
        component: Home,
        meta: {
          title: 'Static 微应用（子）',
          icon: 'MailOutlined'
        }
      }
    ]
  }
]
export default routes
