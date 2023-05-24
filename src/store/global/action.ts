import { menuList } from './../../config/menuList';
import { navList } from '@/config/nav/index';
// import { popWindowConfigList } from './../../config/pop';
import globalState from "./state";
function setModuleNameActive(moduleNameActive: string) {
  globalState.moduleNameActive = moduleNameActive
}
function setMenuList() {
  const find = navList.find(item => item.moduleName === globalState.moduleNameActive )
  if (find) {
    globalState.menuList = find.menuList
  } else {
    throw `${globalState.moduleNameActive} 模块未找到`
  }
}

const action = {
  setModuleNameActive,
  setMenuList
};
export default action;
