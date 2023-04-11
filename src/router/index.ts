import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/pages/index/index.vue";
const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      { path: "/home", name: "home", component: () => import("@/pages/home/index.vue") },
      { path: "/shop/list", name: "shop/list", component: () => import("@/pages/shop/shopList/index.vue") },
      { path: "/shop/statistics", name: "shop/statistics", component: () => import("@/pages/shop/shopStatistics/index.vue") },
      { path: "/setting/center", name: "setting/center", component: () => import("@/pages/setting/center/index.vue") },
    ],
  },
  // { path: "/setting", name: "setting", component: () => import("@/pages/setting/center/index.vue") },
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
