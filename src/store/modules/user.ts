import { defineStore } from 'pinia'
import { store } from '@/store'
import { useAppStoreWithOut } from './app'

const appStore = useAppStoreWithOut()
export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      appName: appStore.name
    }
  },
  actions: {
    updateName(name) {
      this.name = name
    },
    async login() {
      const { data } = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({ data: '异步数据' })
        }, 2000)
      })
      this.name = data
      return data
    }
  },
  getters: {
    fullName: (state) => {
      return `${state.name}-getters`
    }
  }
})

// 在 setup 外部调用，需要实例化一下
export function useUserStoreWithOut() {
  return useUserStore(store)
}
