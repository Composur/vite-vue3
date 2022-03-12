<template>
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props, context) {
    const changeMenu = (item) => {
      context.emit('clickHandle', item)
    }
    return {
      changeMenu
    }
  }
})
</script>

<style scoped></style>
