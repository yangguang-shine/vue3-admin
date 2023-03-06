// import { popWindowConfigList } from './../../config/pop';
import { ObjectI } from "./../../../../single/src/interface/index";
import { PositionConfigI } from "@/interface";
import { ComponentPropI } from "@/components/PositionWindow.vue";
import windowState from "./state";
import {  handleComponentProp } from "./other";
function setWindowList(windowList: ComponentPropI[]) {
  windowState.windowList = windowList.map(handleComponentProp);
  showWindowList();
}
function changeScreenMode() {
  if (windowState.windowType === "defaultWindow") {
    windowState.windowType = "secondWindow";
    showWindowList();
  } else if (windowState.windowType === "secondWindow") {
    windowState.windowType = "defaultWindow";
    showWindowList();
  }
}
function showWindowList() {
  windowState.windowList.forEach((item) => {
    if (item.windowType === "headerWindow" || item.windowType === windowState.windowType) {
      item.showFlag = true;
    } else {
      item.showFlag = false;
    }
  });
}
function setPopWindowConfigList(popWindowConfigList: ComponentPropI[]) {
  windowState.popWindowConfigList = popWindowConfigList;
}
function openPopWindow(componentName: string, params: ObjectI = {}) {
  const hasOpenFlag = windowState.popWindowList.find(item => item.componentName === componentName)
  if (hasOpenFlag) {
    closePopWindow(componentName)
  }
  const popWindowComponentProp = windowState.popWindowConfigList.find((item) => item.componentName === componentName);
  if (popWindowComponentProp) {
    const popWindowItem = handleComponentProp(popWindowComponentProp);
    popWindowItem.showFlag = true
    popWindowItem.extraInfo = {
      ...(popWindowItem.extraInfo || {}),
      ...params,
    };
    windowState.popWindowList.push(popWindowItem);
  }
}
function closePopWindow(componentName: string) {
  const index = windowState.popWindowList.findIndex(item => item.componentName === componentName)
  if (index !== -1) {
    windowState.popWindowList.splice(index, 1)
  }
}
function setFullScreenStatus(componentName: string, flag: boolean) {
  windowState.windowList
  const findWindowItem = windowState.windowList.find((item) => item.componentName === componentName)
  if (findWindowItem) {
    findWindowItem.scaleStatus = flag

    if (findWindowItem.positionPX && findWindowItem.scaleStatus) {
      windowState.zIndex++;
      findWindowItem.positionPX.zIndex = windowState.zIndex
    }
    // if (findWindowItem.scaleStatus) {
    //   handleFullScreen(findWindowItem)
    // }
  }

}


function removeAllPopList() {
  windowState.popWindowList = [];
}
function deleteDefaultList() {
  // windowState.defaultList.push(item)
}
function deletePopList() {
  // windowState.popList = popList
}
function setPositionConfig(positionConfig: PositionConfigI) {
  windowState.positionConfig = positionConfig;
}

// export interface WindowActionI {
//   setWindowList: (params: ComponentPropI[]) => void,
//   changeScreenMode: () => void,
//   setPopList: (params: any) => void,
//   removeAllPopList: () => void,
//   openPopWindow: (params: any) => void,
//   deleteDefaultList: (params: any) => void,
//   deletePopList: (params: any) => void,
//   setPositionConfig: (params: PositionConfigI) => void,
// }
const action = {
  setWindowList,
  changeScreenMode,
  setPopWindowConfigList,
  closePopWindow,
  setFullScreenStatus,
  removeAllPopList,
  openPopWindow,
  deleteDefaultList,
  deletePopList,
  setPositionConfig,
};
export default action;
