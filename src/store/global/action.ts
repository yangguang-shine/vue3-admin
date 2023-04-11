// import { popWindowConfigList } from './../../config/pop';
import globalState from "./state";
function setSinglePageFlag(singlePageFlag: boolean) {
  globalState.singlePageFlag = singlePageFlag
}

const action = {
  setSinglePageFlag,
};
export default action;
