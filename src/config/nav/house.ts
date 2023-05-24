import { NavItemI } from '@/interface/nav';
import houseImg from "@/image/nav/house.png";
import houseImgActive from "@/image/nav/house_active.png";
export const houseMenu: NavItemI = {
  navTitle: "房屋管理",
  icon: houseImg,
  iconActive: houseImgActive,
  isActive: false,
  moduleName: "house",
  menuList: [
    {
      title: "房屋管理概况",
      name: "house/overview",
      children: [
        {
          title: "房屋管理概况",
          name: "house/overview/houseOverview",
          deepChildren: [
            {
              title: "房屋管理概况详情",
              name: "house/overview/houseOverviewDetail",
            }
          ]
        },
      ],
    },
    {
      title: "小区管理",
      name: "house/estate",
      children: [
        {
          title: "小区管理",
          name: "house/estate/manage",
        },
        {
          title: "物业信息",
          name: "house/estate/property",
        },
      ],
    },
  ],
};

export default houseMenu;
