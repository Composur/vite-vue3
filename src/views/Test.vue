<template>
  <div class="test-container page-container">
    <h1 class="page-title">ref reactive toRef toRefs</h1>
    <p>ref 定义 count is: {{ count }}</p>
    <p>普通对象属性进行 toRef count is: {{ s }}</p>
    <p>reactive 解构用toRefs转为响应 count is: {{ count1 }}</p>
    <p>{{ id }}--{{ name }}--{{ age }}</p>
    <button @click="increment">increment</button>
    <h1 class="page-title">computer watch</h1>
    <span>只能读不能写comVal：{{ comVal }}</span>
    <div>
      compute 的 set 用法： 原始的输入：
      <input
        type="text"
        v-model="tagsStr"
        placeholder="请输入标签，多个标签用英文逗号隔开"
      />
      需要处理的成的 tags {{ tags }}
    </div>
    <h1 class="page-title">
      <p class="msg">Hello World!</p>
      <p :class="$style.msg">Hello World!</p>
    </h1>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  toRef,
  computed,
  useCssModule
} from 'vue'

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

    const comVal = computed(() => count.value + userInfo.age)

    // 这个完成输入要用到的数组
    const tags = ref<string[]>([])

    const tagsStr = computed({
      // 所以通过getter来转成字符串
      get() {
        return tags.value.join(',')
      },
      // 然后在用户输入的时候，切割字符串转换回数组
      set(newVal: string) {
        tags.value = newVal.split(',')
      }
    })

    // 动态绑定样式
    const fontColor = ref<string>('#ff0000')
    setTimeout(() => {
      fontColor.value = '#666'
    }, 3000)

    // 获取 css modules 编译后的 class
    const style = useCssModule()
    // console.log(style)
    style.msg = 'msg'
    return {
      count,
      increment,
      s,
      ...toRefs(count1),
      ...toRefs(userInfo),
      comVal,
      tagsStr,
      tags,
      fontColor
    }
  }
})
</script>
<style module>
.msg {
  color: #ff0000;
}
</style>
<style scoped lang="stylus">
button {
  cursor: pointer;
  font-size: 20px;
  padding: 5px;
}

.msg {
  color: v-bind(fontColor);
}
</style>
