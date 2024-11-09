import { defineStore } from 'pinia'

interface State {
  toasts: {
    id: number
    message: string
  }[]
}

const TOAST_DURATION = 2000 // 2 seconds

export const useToastStore = defineStore('Toast', {
  state: (): State => ({
    toasts: [],
  }),
  actions: {
    add(message: string) {
      this.toasts.push({ message, id: Date.now() })
      setTimeout(() => {
        this.toasts.shift()
      }, TOAST_DURATION)
    },
  },
})
