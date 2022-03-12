<template>
  <a-sub-menu>
    <template #icon><MailOutlined /></template>
    <template #title>{{ menuInfo.title }}</template>
    <template v-for="item in menuInfo.children">
      <template v-if="!item.children">
        <SubMenuItem :item="item" :key="item.key" @clickHandle="clickHandle(item)" />
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.key" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { MailOutlined } from '@ant-design/icons-vue'
import SubMenuItem from './SubMenuItem.vue'

export default defineComponent({
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    MailOutlined,
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
