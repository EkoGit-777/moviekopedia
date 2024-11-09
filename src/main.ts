import '@/assets/tailwind.css'
import '@unocss/reset/tailwind.css'
import { createPinia } from 'pinia'
import 'virtual:uno.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VueLazyload)
  .mount('#app')
