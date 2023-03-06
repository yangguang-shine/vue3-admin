import { PositionI } from "./../../interface/index";
import { PositionPXI } from "@/interface/index";
import { PositionCssI } from "@/interface/index";
import { ComponentPropI } from "@/components/PositionWindow.vue";
import { SCREEN_HEIGHT, MIN_SCREEN_HEIGHT } from "@/config/global.config";
import windowState from "./state";
import { deepClone } from "@/utils";
export function handleComponentProp(originComponentProp: ComponentPropI): ComponentPropI {
  // 防止修改配置文件的源头数据
  const componentProp: ComponentPropI = deepClone(originComponentProp);
  addComponentClass(componentProp);
  return {
    ...componentProp,
    randomId: `${componentProp.componentName}--${Math.random().toString().slice(2)}`,
    positionPX: getPositionPX(componentProp),
  };
}


export function getPositionPX(componentProp: ComponentPropI, positionCss: PositionCssI = "absolute"): PositionPXI {
  const originPositionInfo = windowState.positionConfig[componentProp.componentName];
  // 防止修改位置配置源头数据
  const positionInfo: PositionI = deepClone(originPositionInfo);
  // const positionInfo: PositionI  = JSON.parse(JSON.stringify(originPositionInfo));
  changePosition(positionInfo);
  if (componentProp.windowSide === "right") {
    positionInfo.left = windowState.screenWidth - positionInfo.width - (positionInfo.right || 10);
  }
  windowState.zIndex++;
  return {
    position: positionCss,
    width: `${positionInfo.width}px`,
    height: `${positionInfo.height}px`,
    top: `${positionInfo.top}px`,
    left: `${positionInfo.left}px`,
    zIndex: windowState.zIndex,
  };
}
// function handleFullScreenScale(componentProp: ComponentPropI) {
//   // width: `${positionInfo.width}px`,
//   // height: `${positionInfo.height}px`,
//   // top: `${positionInfo.top}px`,
//   // left: `${positionInfo.left}px`,
//   if (componentProp.positionPX) {
//     componentProp.positionPX.top = 0
//     componentProp.positionPX.left = 0
//   }
// }
// function getFullScreenPX(componentProp) {

// }
export function changePosition(positionInfo: PositionI): void {
  const domHeight = document.documentElement.clientHeight;
  let height = SCREEN_HEIGHT;
  if (domHeight > SCREEN_HEIGHT) {
    height = SCREEN_HEIGHT;
  } else if (domHeight < MIN_SCREEN_HEIGHT) {
    height = MIN_SCREEN_HEIGHT;
  }
  const scaleNum = height / SCREEN_HEIGHT;
  positionInfo.top = positionInfo.top * scaleNum;
  positionInfo.height = positionInfo.height * scaleNum;
}
export function addComponentClass(componentProp: ComponentPropI, classNameList?: string): void {
  if (componentProp.windowSide === "left") {
    componentProp.classNameList.push("panel-container-left");
  } else if (componentProp.windowSide === "right") {
    componentProp.classNameList.push("panel-container-right");
  } else if (componentProp.windowSide === "top") {
    componentProp.classNameList.push("panel-container-top");
  } else if(componentProp.windowSide === '') {
    componentProp.classNameList.push("panel-container-pop");
  }
  if (classNameList) {
    componentProp.classNameList.push(classNameList);
  }
  // eslint-disable-next-line no-debugger
}
export function removeComponentClass(componentProp: ComponentPropI, classNameList: string): void {
  const index = componentProp.classNameList.indexOf(classNameList);
  if (index > -1) {
    componentProp.classNameList.splice(index, 1);
  }
}
