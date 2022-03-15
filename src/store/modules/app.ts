import { defineStore } from 'pinia'
import { store } from '@/store'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      name: 'app'
    }
  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
