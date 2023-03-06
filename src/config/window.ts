import { freezeObj } from "@/utils";
import { ComponentPropI } from "@/components/PositionWindow.vue";
//componentName 使用全大写形式 BaseInfo
//positionName 使用横杠形式 base-info

export const headerWindowList: ComponentPropI[] = [
  {
    path: "",
    windowType: "headerWindow",
    showFlag: true,
    componentName: "BaseInfo0",
    basic: {
      title: "BaseInfo0",
    },
    windowSide: "top",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: [],
    classNameList: [],
  },
];
export const defaultWindowList: ComponentPropI[] = [
  {
    path: "",
    windowType: "defaultWindow",
    showFlag: false,
    componentName: "BaseInfo1",
    basic: {
      title: "BaseInfo1",
    },
    windowSide: "left",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "defaultWindow",
    showFlag: false,
    componentName: "BaseInfo2",
    basic: {
      title: "概览2",
    },
    windowSide: "left",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "defaultWindow",
    showFlag: false,
    componentName: "BaseInfo3",
    basic: {
      title: "BaseInfo3",
    },
    windowSide: "left",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "defaultWindow",
    showFlag: false,
    componentName: "BaseInfo4",
    basic: {
      title: "BaseInfo4",
    },
    windowSide: "right",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "defaultWindow",
    showFlag: false,
    componentName: "BaseInfo5",
    basic: {
      title: "BaseInfo5",
    },
    windowSide: "right",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "defaultWindow",
    showFlag: false,
    componentName: "BaseInfo6",
    basic: {
      title: "BaseInfo6",
    },
    windowSide: "right",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
];
export const secondWindowList: ComponentPropI[] = [
  {
    path: "",
    windowType: "secondWindow",
    showFlag: false,
    componentName: "second1",
    basic: {
      title: "second1",
    },
    windowSide: "left",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "secondWindow",
    showFlag: false,
    componentName: "second2",
    basic: {
      title: "second2",
    },
    windowSide: "left",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "secondWindow",
    showFlag: false,
    componentName: "second3",
    basic: {
      title: "second3",
    },
    windowSide: "left",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "secondWindow",
    showFlag: false,
    componentName: "second4",
    basic: {
      title: "second4",
    },
    windowSide: "right",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "secondWindow",
    showFlag: false,
    componentName: "second5",
    basic: {
      title: "second5",
    },
    windowSide: "right",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
  {
    path: "",
    windowType: "secondWindow",
    showFlag: false,
    componentName: "second6",
    basic: {
      title: "second6",
    },
    windowSide: "right",
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['fullScreen'],
    classNameList: [],
  },
];
export const windowConfigList = freezeObj([...headerWindowList, ...defaultWindowList, ...secondWindowList]);
