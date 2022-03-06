<template>
  <section class="cns-main-menu">
    <a-menu mode="inline" theme="dark" :selectedKeys="[selectKey]">
      <a-menu-item v-for="item in menus" :key="item.key" @click="changeMenu(item)">
        <router-link :to="{ path: item.path }">
          <!-- <a-icon v-if="item.icon" :type="item.icon" /> -->
          <span>{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, toRefs } from 'vue'
import { useRoute } from 'vue-router'

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
    title: '主页',
    path: '/'
  },
  {
    key: 'VueMicroApp',
    title: 'Vue 主页',
    path: '/vue/VueMicroApp'
  },
  {
    key: 'VueMicroAppList',
    title: 'Vue 列表页',
    path: '/vue/list'
  },
  {
    key: 'StaticMicroApp',
    title: 'Static 微应用',
    path: '/static'
  }
]
export default defineComponent({
  components: {},
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
    function initMenus() {
      const currentMenu = findCurrentMenu(state.menus, $route.path) as MenuItem
      if (!currentMenu) return
      const { key } = currentMenu
      selectKey.value = key
    }

    function changeMenu(item: MenuItem) {
      const { key } = item
      selectKey.value = key
    }
    onMounted(() => {
      initMenus()
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
