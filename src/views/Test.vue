<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>ref 定义 count is: {{ count }}</p>
    <p>普通对象属性进行 toRef count is: {{ s }}</p>
    <p>reactive 解构用toRefs转为响应 count is: {{ count1 }}</p>
    <p>{{ id }}--{{ name }}--{{ age }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, toRef } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const count = ref<number>(0)
    const count1 = reactive({ count1: 0 })
    const count2 = { count: 0 }
    const s = toRef(count2, 'count')
    const increment = () => {
      count.value += 1
      count1.count1 += 1
      count2.count += 1
    }
    setTimeout(() => {
      // 直接修改视图不会更新，但原始数据会更新
      s.value = 1000
      count1.count1 = 999
    }, 2000)

    // 定义一个reactive对象
    const userInfo = reactive({
      id: 1,
      name: 'Petter',
      age: 18,
      gender: 'male'
    })

    // 定义一个新的对象，它本身不具备响应性，但是它的字段全部是ref变量
    // const userInfoRefs = toRefs(userInfo)

    // 2s后更新userInfo
    setTimeout(() => {
      userInfo.id = 2
      userInfo.name = 'Tom'
      userInfo.age = 20
    }, 2000)
    return { count, increment, s, ...toRefs(count1), ...toRefs(userInfo) }
  }
})
</script>

<style scoped lang="stylus">
button {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
}
</style>
