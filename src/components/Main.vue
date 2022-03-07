<template>
  <section id="cns-main-app">
    <section class="cns-menu-wrapper">
      <Nav />
    </section>
    <section class="cns-frame-wrapper">
      <!-- 主应用渲染区，用于挂载主应用路由触发的组件 -->
      <router-view v-show="$route.name" />
      <!-- 子应用渲染区，用于挂载子应用节点 -->
      <section v-show="!$route.name" id="frame"></section>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Nav from '@/components/Nav.vue'

export default defineComponent({
  name: 'Main',
  components: {
    Nav
  }
})
</script>

<style lang="less" scoped>
#cns-main-app {
  display: flex;
  height: 100%;
  position: relative;
}
.cns-menu-wrapper {
}

.cns-frame-wrapper {
  flex: 1;
}

#cns-frame {
  width: 100%;
  height: 100%;
  > :first-child {
    height: 100%;
  }
}
</style>
