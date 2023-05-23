import { NavItemI } from '../../interface/nav';
import peopleImg from "@/image/nav/people.png";
import peopleImgActive from "@/image/nav/people_active.png";
export const peopleMenu: NavItemI = {
  navName: "人口管理",
  icon: peopleImg,
  iconActive: peopleImgActive,
  isActive: false,
  moduleName: "people",
  menuList: [
    {
      title: "人口概况管理",
      name: "people/overview",
      children: [
        {
          title: "人员总览",
          name: "people/overview/peopleOverview",
        },
        {
          title: "人员动态",
          name: "people/overview/peopleDynamic",
        },
      ],
    },
    {
      title: "实有人口管理",
      name: "people/real",
      children: [
        {
          title: "实有人口管理概况",
          name: "people/real/realOverview",
        },
        {
          title: "户籍人口管理",
          name: "people/real/peopleRegister",
        },
      ],
    },
  ],
};

export default peopleMenu;
