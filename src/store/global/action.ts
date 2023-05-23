// import { popWindowConfigList } from './../../config/pop';
import globalState from "./state";
function setNavNameActive(navNameActive: string) {
  globalState.navNameActive = navNameActive
}

const action = {
  setNavNameActive,
};
export default action;
