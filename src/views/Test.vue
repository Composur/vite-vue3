<template>
  <div class="test-container page-container">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Test'
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
