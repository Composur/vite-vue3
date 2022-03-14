<template>
  <h1 class="page-title">父组件 provide</h1>
  <p>
    <span>基础类型msg:{{ msg }}</span>
  </p>

  <p>
    <span>响应式id:{{ id }}</span>
  </p>
  <p>
    <span>引用类型todos.length:{{ todos.length }}</span>
  </p>
  <Son />
</template>

<script lang="ts">
import { defineComponent, provide, reactive, toRefs } from 'vue'
import Son from './Son.vue'

export default defineComponent({
  components: {
    Son
  },
  setup() {
    // 定义好数据
    let msg: string = 'Hello World!'

    // provide出去
    provide('msg', msg)

    const todos: number[] = [1, 2, 3]
    provide('todos', todos)
    // provide一个reactive
    const userInfo = reactive({
      id: 1
    })
    setInterval(() => {
      userInfo.id += 1
      todos.push(4)
      msg = '新的 msg'
    }, 2000)
    provide('userInfo', userInfo)
    return { msg, ...toRefs(userInfo), todos }
  }
})
</script>

<style scoped></style>
