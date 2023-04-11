import { createApp } from 'vue'
import '@/style/common.scss'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
const pinia = createPinia()
const app = createApp(App)
// app.use(ElementPlus)
app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
