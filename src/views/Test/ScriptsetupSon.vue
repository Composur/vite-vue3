<template>
  <div class="page-title">{{ pageTitle }}</div>
  <a-row>
    <a-col :span="5">{{ attrs.msg }}</a-col>
    <a-col :span="5">{{ props.name }}</a-col>
    <a-col :span="4"><a-button @click="clickHandle">改变父的name</a-button></a-col>
  </a-row>
  <a-row> </a-row>
</template>

<script setup lang="ts">
// 导入 useAttrs 组件
import { useAttrs } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'name'
  }
})
const pageTitle = 'script-setup'

// 获取 emit
const emit = defineEmits(['change-name'])

const clickHandle = () => {
  // 调用 emit
  emit('change-name', 'Tom')
}

// 获取 attrs
const attrs = useAttrs()

// attrs是个对象，和 props 一样，需要通过 key 来得到对应的单个 attr
console.log(attrs)

defineExpose({
  name: props.name
})
</script>

<style scoped></style>
