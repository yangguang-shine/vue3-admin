import { createApp } from 'vue'
import '@/style/common.scss'
import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
const pinia = createPinia()
const app = createApp(App)
// app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.mount('#app')
// const obj = {
//     name: '',
//     age: 12,
//     ext: {
//         like: ['1', '2'],
//         car: 'car1'
//     },
//     people: ['a', 'b', ],
//     list: [
//         {
//             name: 1
//         }
//     ]
// }

// const proxy =  freezeObj(obj)
// proxy.list[0].name = 2
// console.log(proxy)
// // proxy.ext.car = 'car2'

// console.log(proxy)
// proxy.name="aa"
