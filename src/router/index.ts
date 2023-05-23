import { MenuItemI } from '@/interface';
import { navList } from '@/config/nav/index';
import { DeepChildrenI, MenuChildrenI, NavItemI } from '@/interface/nav';
import { menuRouter } from '@/config/nav/menuRouter';
import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/pages/index/index.vue";
import deepRouter from '@/config/nav/deepRouter';
const modules = import.meta.glob('@/pages/index/**/*.vue')
console.log("modules");
console.log(modules);
interface RouterConfigItemI {
  name: string
  path: string
  component:any
}
function getRouterInfo(item: MenuChildrenI | DeepChildrenI ) {
  const path = `/${item.name}`
  const modulePath = `/src/pages/index/${item.name}.vue`
  console.log("modulePath");
  console.log(modulePath);
  const component = modules[modulePath]
  console.log(component);

  return {
    path,
    name: item.name,
    component,
  }
}
const routerList: RouterConfigItemI[] = []
navList.forEach(navItem => {
  navItem.menuList.forEach((menuItem: MenuItemI) => {
    menuItem.children.forEach(childItem => {
    routerList.push(getRouterInfo(childItem))
      if (childItem.deepChildren) {
        childItem.deepChildren.forEach(deepChildrenItem => {
          routerList.push(getRouterInfo(deepChildrenItem))
        })
      }
    })
  })
})
console.log("routerList");
console.log(routerList);

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      ...routerList
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
