<template>
  <section class="cns-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <template v-for="item in menus">
        <template v-if="!item.children">
          <sub-menu-item :item="item" @clickHandle="changeMenu" :key="item.key" />
        </template>
        <template v-else>
          <sub-menu
            :key="item.key"
            :menuInfo="item"
            @clickHandle="changeMenu"
          ></sub-menu>
        </template>
      </template>
    </a-menu>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from 'vue'
import { useRoute } from 'vue-router'
import routes from '@/router/routes'
import SubMenu from './SubMenu.vue'
import SubMenuItem from './SubMenuItem.vue'
/* eslint-disable no-param-reassign */
const foo = (temp: any) => {
  temp.forEach((item: any) => {
    if (item.children) {
      foo(item.children)
    }
    delete item.component
    item.key = item.path
    item.title = item.meta.title
    item.icon = item.meta.icon
  })
}

const navMenus = [...routes]
foo(navMenus)

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
    'sub-menu': SubMenu,
    'sub-menu-item': SubMenuItem
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
