import { freezeObj } from '@/utils';
import { PositionConfigI } from "@/interface";

// const default
export const defaultPositionConfig: PositionConfigI = {
  "BaseInfo0": {
    width: 1920,
    height: 115,
    top: 0,
    left: 0,
  },
  "BaseInfo1": {
    width: 540,
    height: 297,
    top: 120,
    left: 20,
  },
  "BaseInfo2": {
    width: 540,
    height: 300,
    top: 440,
    left: 20,
  },
  "BaseInfo3": {
    width: 540,
    height: 300,
    top: 760,
    left: 20,
  },
  "BaseInfo4": {
    width: 540,
    height: 297,
    top: 120,
    right: 20,
  },
  "BaseInfo5": {
    width: 540,
    height: 300,
    top: 440,
    right: 20,
  },
  "BaseInfo6": {
    width: 540,
    height: 300,
    top: 760,
    right: 20,
  },
};

export const secondPositionConfig: PositionConfigI = {
  "second0": {
    width: 1920,
    height: 115,
    top: 0,
    left: 0,
  },
  "second1": {
    width: 540,
    height: 297,
    top: 120,
    left: 20,
  },
  "second2": {
    width: 540,
    height: 300,
    top: 440,
    left: 20,
  },
  "second3": {
    width: 540,
    height: 300,
    top: 760,
    left: 20,
  },
  "second4": {
    width: 540,
    height: 297,
    top: 120,
    right: 20,
  },
  "second5": {
    width: 540,
    height: 300,
    top: 440,
    right: 20,
  },
  "second6": {
    width: 540,
    height: 300,
    top: 760,
    right: 20,
  },
};
export const defaultBaseInfo1PositionConfig: PositionConfigI = {
  "PopWindow1": {
    width: 540,
    height: 540,
    top: 450,
    left: 100,
  },
  "PopWindow2": {
    width: 540,
    height: 540,
    top: 250,
    left: 400,
  },
  "PopWindow3": {
    width: 540,
    height: 540,
    top: 50,
    left: 600,
  },
}
export const positionConfig = freezeObj({
  ...defaultPositionConfig,
  ...secondPositionConfig,
  ...defaultBaseInfo1PositionConfig
})
// 判断是否有组件重名
const keyList = Object.keys(defaultPositionConfig).concat(Object.keys(secondPositionConfig))
if (keyList.length !== [...new Set(keyList)].length) {
  console.log(keyList)
  console.log([...new Set(keyList)])
  throw '有重名组件'
}


