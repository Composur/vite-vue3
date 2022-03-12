<template>
  <template v-if="!item.children">
    <sub-menu-item :item="item" @click="clickHandle" :key="item.key" />
  </template>
  <template v-else>
    <sub-menu :key="item.key" :menuInfo="item"></sub-menu>
  </template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SubMenu from './SubMenu.vue'
import SubMenuItem from './SubMenuItem.vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    'sub-menu': SubMenu,
    'sub-menu-item': SubMenuItem
  },
  setup(props, context) {
    const clickHandle = (item) => {
      context.emit('changeMenu', item)
    }
    return {
      clickHandle
    }
  }
})
</script>

<style scoped></style>
