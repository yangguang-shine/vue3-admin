import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/pages/index/index.vue";
const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      // home
      { path: "/home", name: "home", component: () => import("@/pages/index/home/index.vue") },
      // shop
      { path: "/shop/list", name: "shop/list", component: () => import("@/pages/index/shop/list/index.vue") },
      { path: "/shop/list/detail", name: "shop/list/detail", component: () => import("@/pages/index/shop/list/detail/index.vue") },
      { path: "/shop/menu", name: "shop/menu", component: () => import("@/pages/index/shop/menu/index.vue") },
      { path: "/shop/statistics", name: "shop/statistics", component: () => import("@/pages/index/shop/statistics/index.vue") },
      // setting
      { path: "/setting/center", name: "setting/center", component: () => import("@/pages/index/setting/center/index.vue") },
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
