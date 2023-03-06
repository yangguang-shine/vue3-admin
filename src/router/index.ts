import Index from '@/pages/home/index.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
const routes = [
    { path: '/', name: 'home', component: Index },
    { path: '/login',name: 'login', component: ()=> import("@/pages/login/login.vue"), },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})
export default router