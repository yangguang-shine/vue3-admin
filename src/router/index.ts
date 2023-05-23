import { RouterItemI } from '@/interface/menu';
import { menuRouter } from '@/config/menu/menuRouter';
import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/pages/index/index.vue";
import deepRouter from '@/config/menu/deepRouter';
const modules = import.meta.glob('@/pages/index/**/*.vue')
console.log("modules");
console.log(modules);
interface RouterConfigItemI {
  name: string
  path: string
  component:any
}
function getRouterInfo(item: RouterItemI) {
  const path = `/${item.name}`
  const modulePath = `/src/pages/index/${item.name}/index.vue`
  const component = modules[modulePath]

  return {
    path,
    name: item.name,
    component,
  }
}

const menuRouterList: RouterConfigItemI[] = [];
menuRouter.forEach(item => {
  if (item.children) {
    item.children.forEach(child => {
      const routerInfo =getRouterInfo(child)
      menuRouterList.push(routerInfo)
    })
  } else {
    const routerInfo =getRouterInfo(item)
    menuRouterList.push(routerInfo)
  }
})

const deepRouterList: RouterConfigItemI[] = []
deepRouter.forEach(item => {
  if (item.children) {
    item.children.forEach(child => {
      const routerInfo =getRouterInfo(child)
      deepRouterList.push(routerInfo)
    })
  } else {
    const routerInfo =getRouterInfo(item)
    deepRouterList.push(routerInfo)
  }
})
console.log("deepRouterList");
console.log(deepRouterList);
const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      ...menuRouterList, 
      ...deepRouterList
      // second page
      // { path: "/shop/list/detail", name: "shop/list/detail", component: () => import("@/pages/index/shop/list/detail/index.vue") },

    ],
  },
  { path: "/login", name: "login", component: () => import("@/pages/login/index.vue") },
  { path: "/register", name: "register", component: () => import("@/pages/register/index.vue") },
  { path: "/404", name: "notFound", component: () => import("@/pages/404/index.vue") },
  { path: "/:pathMatch(.*)*", name: "notFound", component: () => import("@/pages/404/index.vue") },
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});
export default router;
