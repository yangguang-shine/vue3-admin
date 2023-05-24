export interface MenuItemI {
  title: string;
  name: string;
  children: MenuChildrenI[];
}
export interface MenuChildrenI {
  title: string;
  name: string;
  deepChildren?: DeepChildrenI[];
}
export interface DeepChildrenI {
  title: string;
  name: string;
}

export interface NavItemI {
  navTitle: string;
  icon: string;
  iconActive: string;
  moduleName: string;
  menuList: MenuItemI[];
}
