import { MenuItemI } from "@/interface";
import iconInfo from '@/config/iconInfo'
import menuRouter from '@/config/menu/menuRouter'
export const menuList: MenuItemI[] = []
menuRouter.forEach(item => {
  if (item.children) {
    menuList.push({
      ...item,
      icon: iconInfo[item.name],
      children: item.children.map((child => {
        return {
          name: child.name,
          title: child.title,
          icon: iconInfo[child.name]
        }
      }))
    })
  } else {
    menuList.push({
      name: item.name,
      title: item.title,
      icon: iconInfo[item.name]
    })
  }

})
console.log("menuList");
console.log(menuList);
export default menuList
// export const menuList: MenuItemI[] = [
//   {
//     title: "首页",
//     name: "home",
//     icon: House,
//   },
//   {
//     title: "店铺",
//     name: "shop",
//     icon: Shop,
//     children: [
//       {
//         title: "店铺列表",
//         name: "shop/list",
//         icon: List,
//       },
//       {
//         title: "店铺菜品",
//         name: "shop/menu",
//         icon: List,
//       },
//       {
//         title: "店铺统计",
//         name: "shop/statistics",
//         icon: Handbag,
//       },
//     ],
//   },
//   {
//     title: "设置",
//     name: "setting",
//     icon: Setting,
//     children: [
//       {
//         title: "个人中心",
//         name: "setting/center",
//         icon: InfoFilled,
//       },
//     ],
//   },
// ];

// export const menuInfo = {
//     "店铺列表": "shop/list"
// }
