<template>
  <h1 class="page-title">子组件接收：inject</h1>
  <p>msg:{{ msg }}</p>
  <p>id:{{ id }}</p>
  <p>todos.length:{{ todos.length }}</p>
</template>

<script lang="ts">
import { defineComponent, inject, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const msg: string = inject('msg') || ''
    // 接收响应式
    const userInfo: object = inject('userInfo')

    // 接收引用

    const todos = inject('todos')
    return { msg, ...toRefs(userInfo), todos }
  }
})
</script>

<style scoped></style>
