<template>
  <section class="cns-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <a-menu-item v-for="item in menus" :key="item.key" @click="changeMenu(item)">
        <template #icon>
          <component :is="item.icon" />
        </template>
        <router-link :to="{ path: item.path }" replace>
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
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
  SmileFilled
} from '@ant-design/icons-vue'

type MenuItem = {
  key: string
  title: string
  icon?: string
  path: string
  children?: MenuItem[]
}
const menus: MenuItem[] = [
  {
    key: 'Home',
    title: '主页(主)',
    path: '/',
    icon: 'MailOutlined'
  },
  {
    key: 'Test',
    title: '测试页',
    path: '/test',
    icon: 'MailOutlined'
  },
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
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
    SmileFilled
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
