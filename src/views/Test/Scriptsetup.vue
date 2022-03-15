<template>
  <a-row>
    <a-col :span="4">
      <p>{{ name }}</p>
    </a-col>
  </a-row>
  <ScriptsetupSon
    ref="son"
    :name="name"
    msg="父组件传递的msg"
    data-msg="父组件传递的data-msg"
    @change-name="changeName"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ScriptsetupSon from './ScriptsetupSon.vue'

const name = ref('父组件传递的name')
const son = ref(null)
onMounted(() => {
  console.log(son.value.name)
})
const changeName = (n) => {
  name.value = n
}
</script>

<style scoped></style>
