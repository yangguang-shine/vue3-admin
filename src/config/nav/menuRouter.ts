import { RouterItemI } from "@/interface";
export const menuRouter: RouterItemI[] = [
  {
    title: "首页",
    name: "home",
  },
  {
    title: "店铺",
    name: "shop",
    children: [
      {
        title: "店铺列表",
        name: "shop/list",
      },
      {
        title: "店铺菜品",
        name: "shop/menu",
      },
      {
        title: "店铺统计",
        name: "shop/statistics",
      },
    ],
  },
  {
    title: "设置",
    name: "setting",
    children: [
      {
        title: "个人中心",
        name: "setting/center",
      },
    ],
  },
];
export default menuRouter
