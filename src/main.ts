import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import router from '@/router/index'
import { key, store } from '@/store'
import App from './App.vue'
import styleImport from '@/utils/style-import'
import '@/style/basic.styl'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)
styleImport(app).use(Antd).use(router).use(store, key).mount('#app')
