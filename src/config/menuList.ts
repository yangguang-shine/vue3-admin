import { MenuItemI } from "@/interface";
import { reactive } from "vue";
import { Setting, House, Shop, InfoFilled, List, Handbag } from "@element-plus/icons-vue";

export const menuList: MenuItemI[] = [
  {
    title: "首页",
    name: "home",
    icon: House,
  },
  {
    title: "店铺",
    name: "shop",
    icon: Shop,
    children: [
      {
        title: "店铺列表",
        name: "shop/list",
        icon: List,
      },
      {
        title: "店铺统计",
        name: "shop/statistics",
        icon: Handbag,
      },
    ],
  },
  {
    title: "设置",
    name: "setting",
    icon: Setting,
    children: [
      {
        title: "个人中心",
        name: "setting/center",
        icon: InfoFilled,
      },
    ],
  },
];

// export const menuInfo = {
//     "店铺列表": "shop/list"
// }
