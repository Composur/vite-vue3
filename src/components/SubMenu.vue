<template>
  <a-sub-menu :key="menuInfo.key">
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children">
      <template v-if="!item.children">
        <SubMenuItem :item="item" @clickHandle="clickHandle(item)" :key="item.key" />
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import SubMenuItem from './SubMenuItem.vue'

export default defineComponent({
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    SubMenuItem
  },
  setup(props, context) {
    const clickHandle = (item) => {
      context.emit('clickHandle', item)
    }
    return { clickHandle }
  }
})
</script>

<style scoped></style>
