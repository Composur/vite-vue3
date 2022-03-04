<template>
  <div id="frame"></div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import start from '@/micro'

onMounted(() => {
  if (window.qiankunStarted) return
  window.qiankunStarted = true
  start()
})
</script>
