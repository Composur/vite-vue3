import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import * as Icon from '@ant-design/icons-vue'
import router from '@/router/index'
import { setupStore } from '@/store'
import App from './App.vue'
// import styleImport from '@/utils/style-import'
import '@/style/basic.styl'
import 'ant-design-vue/dist/antd.css'
import start from '@/micro/index'

const app = createApp(App)
// 注册子应用
start()

Object.keys(Icon).forEach((iconName) => {
  app.component(iconName, Icon[iconName])
})
// 全局 store
setupStore(app)
app.use(Antd).use(router).mount('#app')
console.log(import.meta.env)
