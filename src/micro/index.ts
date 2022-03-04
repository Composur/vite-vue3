import {
  registerMicroApps,
  start,
  addGlobalUncaughtErrorHandler,
  runAfterFirstMounted
} from 'qiankun'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 子应用配置
import apps from './apps'

/**
 * 注册子应用
 * 第一个参数 - 子应用的注册信息
 * 第二个参数 - 全局生命周期钩子
 */
registerMicroApps(apps, {
  // 加载前
  beforeLoad: () => {
    NProgress.start()
    return Promise.resolve()
  },
  // 挂载后
  afterMount: () => {
    NProgress.done()
    return Promise.resolve()
  }
})

/**
 * 添加全局的未捕获异常处理器
 */
addGlobalUncaughtErrorHandler((event: Event | string) => {
  const { message: msg, error } = event as any
  // 加载失败时提示
  if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
    console.error(`子应用 ${error?.appOrParcelName} 加载失败，请检查应用是否可运行`)
  }
})

/**
 * 设置默认进入的子应用
 */
// setDefaultMountApp('/')

/**
 * runAfterFirstMounted
 */
runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted')
})

// 导出 qiankun 的启动函数
export default start
