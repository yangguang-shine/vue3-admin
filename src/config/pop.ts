import { freezeObj } from "@/utils";
import { ComponentPropI } from "@/components/PositionWindow.vue";

const defaultBaseInfo1Pop: ComponentPropI[] = [
  {
    path: "",
    windowType: "popWindow",
    showFlag: false,
    componentName: "PopWindow1",
    basic: {
      title: "PopWindow1",
    },
    windowSide: "",
    classNameList: [],
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['close'],
    
  },
  {
    path: "",
    windowType: "popWindow",
    showFlag: false,
    componentName: "PopWindow2",
    basic: {
      title: "PopWindow2",
    },
    windowSide: "",
    classNameList: [],
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['close'],
    
  },
  {
    path: "",
    windowType: "popWindow",
    showFlag: false,
    componentName: "PopWindow3",
    basic: {
      title: "PopWindow3",
    },
    windowSide: "",
    classNameList: [],
    id: "",
    name: "",
    sourceWindow: {
      name: "",
      id: "",
    },
    control: ['close'],
    
  },
];
export const popWindowConfigList = freezeObj([...defaultBaseInfo1Pop]);
