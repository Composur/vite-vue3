<template>
  <div class="page-title">操作userStore</div>
  <a-row>
    <a-col :span="5">state:{{ name }}</a-col>
    <a-col :span="5">getter:{{ fullName }}</a-col>
    <a-col :span="5">获取appStore的name:{{ appName }}</a-col>
    <a-col :span="2">
      <a-button type="primary" size="small" @click="updateName('李四')">李四</a-button>
    </a-col>
    <a-col :span="2">
      <a-button type="primary" size="small" @click="updateName('王五')">王五</a-button>
    </a-col>
    <a-col :span="2">
      <a-button type="primary" size="small" @click="login" :loading="loading"
        >异步</a-button
      >
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/store/modules/user'

export default defineComponent({
  setup() {
    const loading = ref(false)
    const userStore = useUserStore()
    const updateName = (name) => {
      userStore.updateName(name)
    }
    const login = async () => {
      loading.value = true
      await userStore.login()
      loading.value = false
    }
    return { ...storeToRefs(userStore), updateName, login, loading }
  }
})
</script>

<style scoped></style>
