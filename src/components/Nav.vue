<template>
  <section class="cns-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <template v-for="item in menus">
        <template v-if="!item.children">
          <a-menu-item @click="changeMenu(item)" :key="item.key">
            <template #icon>
              <component :is="item.icon" />
            </template>
            <router-link :to="{ path: item.path }" replace>
              <span>{{ item.title }}</span>
            </router-link>
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :key="item.key" :menuInfo="item"></sub-menu>
        </template>
      </template>
    </a-menu>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  SmileFilled,
  PieChartOutlined
} from '@ant-design/icons-vue'
import routes from '@/router/routes'

const SubMenu = {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  template: `
    <a-sub-menu :key="menuInfo.key">
      <template #icon><MailOutlined /></template>
      <template #title>{{ menuInfo.title }}</template>
      <template v-for="item in menuInfo.children" :key="item.key">
        <template v-if="!item.children">
          <a-menu-item :key="item.key">
            <template #icon>
              <PieChartOutlined />
            </template>
            {{ item.title }}
          </a-menu-item>
        </template>
        <template v-else>
          <sub-menu :menu-info="item" :key="item.key" />
        </template>
      </template>
    </a-sub-menu>
  `,
  components: {
    PieChartOutlined,
    MailOutlined
  }
}
/* eslint-disable no-param-reassign */
const s = (r: any) => {
  r.forEach((item: any) => {
    if (item.children) {
      s(item.children)
    }
    delete item.component
    item.key = item.path
    item.title = item.meta.title
    item.icon = item.meta.icon
  })
}

const navMenus = [...routes]
s(navMenus)
// const navMenus = routes.map(({ path, name, meta, children }) => {
//   return {
//     path,
//     name,
//     meta,
//     key: path,
//     title: meta.title,
//     icon: meta.icon,
//     children
//   }
// })
type MenuItem = {
  key: string
  title: string
  icon?: string
  path: string
  meta?: object
  children?: MenuItem[]
}
const microMenus: MenuItem[] = [
  {
    key: 'VueMicroApp',
    title: 'Vue主页（子）',
    path: '/vue',
    icon: 'SmileFilled'
  },
  {
    key: 'VueMicroAppList',
    title: 'Vue列表页（子）',
    path: '/vue/list',
    icon: 'AppstoreOutlined'
  },
  {
    key: 'StaticMicroApp',
    title: 'Static 微应用（子）',
    path: '/static',
    icon: 'SettingOutlined'
  }
]
const menus = [...navMenus, ...microMenus]
console.log(menus)
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    SmileFilled,
    'sub-menu': SubMenu
  },
  setup() {
    const $route = useRoute()
    const state = reactive({
      menus
    })
    const selectKey = ref('')

    function findCurrentMenu(m: MenuItem[], currentPath: string): MenuItem | null {
      for (let i = 0; i < m.length; i += 1) {
        const menu = m[i]
        const { path } = menu
        if (path === currentPath) return menu

        const currentMenu = findCurrentMenu(menu.children || [], currentPath)
        if (currentMenu) return currentMenu
      }
      return null
    }
    function initMenus(menu, path) {
      const currentMenu = findCurrentMenu(menu, path) as MenuItem
      if (!currentMenu) return
      const { key } = currentMenu
      selectKey.value = key
    }

    function changeMenu(item: MenuItem) {
      const { key } = item
      selectKey.value = key
    }
    watch(
      () => $route.path,
      (path) => {
        initMenus(state.menus, path)
      }
    )
    onMounted(() => {
      initMenus(state.menus, $route.path)
    })

    return {
      ...toRefs(state),
      changeMenu,
      selectKey
    }
  }
})
</script>

<style lang="less" scoped>
.cns-main-menu {
  width: 100%;
  height: 100%;
  background: #001529;
  .cns-menu {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    a {
      color: #fff;
      text-decoration: none;
    }
  }
  .cns-parent-title {
    font-size: 13px;
    color: rgba(233, 241, 255, 0.75);
  }
  .cns-child-title {
    font-size: 13px;
    color: #fff;
  }
  .cns-child-title:hover {
    color: #408fff;
  }
  /deep/ .cns-menu-sub {
    background: rgb(12, 28, 53);
  }
}
</style>
