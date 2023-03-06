<template>
  <!-- <div></div> -->
  <div v-if="scaleStatus" class="scale-overlay" :style="{'z-index' : positionPX.zIndex}"></div>
  <div class="panel-container flex-row flex-center" :class="[...classNameList, scaleStatus ? 'panel-container-scale' : '']" :style="{ ...positionPX, display: showFlag ? '' : 'none' }" :id="randomId">
    <component :is="component" v-bind="prop"></component>
    <div v-if="control.includes('close')" class="control-box pop-control flex-center" @mouseenter="toShowControlFlag" @mouseleave="toCloseControlFlag" >
      <img v-if="showControlFlag" class="control-img" src="@/image/control/icon-close.png" alt="" @click="closeComponent" />
      <!-- <div v-else-if="control.includes('close')"></div> -->
    </div>
    <div v-if="control.includes('fullScreen') && !scaleStatus" class="control-box flex-center" :class="windowSide === 'left' ? 'window-control-left' : 'window-control-right'" @mouseenter="toShowControlFlag" @mouseleave="toCloseControlFlag">
      <img v-if="showControlFlag" class="control-img" src="@/image/control/icon-fullscreen.png" alt="" @click="toSetFullScreenStatus(componentName, true)" />
      <!-- <div v-else-if="control.includes('close')"></div> -->
    </div>
    <div v-else-if="control.includes('fullScreen') && scaleStatus" class="control-box flex-center" :class="windowSide === 'left' ? 'window-control-left' : 'window-control-right'" >
      <img   class="control-img" src="@/image/control/icon-fullscreen-exit.png" alt="" @click="toSetFullScreenStatus(componentName, false)" />
      <!-- <div v-else-if="control.includes('close')"></div> -->
    </div>
  </div>
</template>
<script lang="ts"></script>

<script setup lang="ts">
import { ObjectI, PositionPXI, WindowTypeI, ControlStringI, WindowSideI } from "@/interface";
import { useWindowStore } from "@/store";
import { shallowRef, onMounted, ref } from "vue";
export interface ComponentPropI {
  path: string;
  windowType: WindowTypeI;
  showFlag: boolean;
  componentName: string;
  basic: {
    title: string;
  };
  windowSide: WindowSideI;
  id: string;
  name: string;
  sourceWindow: {
    name: string;
    id: string;
  };
  control: ControlStringI[];
  classNameList: string[];
  scaleStatus?: boolean;
  randomId?: string;
  positionPX?: PositionPXI;
  extraInfo?: ObjectI;
}
// 这个接口类型只能是字面量 不能使用合并类型
const showControlFlag = ref(false);
// const showCloseFlag = computed(() => {
//   return showControlFlag.value && prop.control.includes('close')
// })
// const showFullScreenFlag = computed(() => {
//   return showControlFlag.value && prop.control.includes('fullScreen')
// })
const prop = withDefaults(defineProps<ComponentPropI>(), {
  positionPX: () => ({
    position: "absolute",
    width: "0",
    height: "0",
    top: "0",
    zIndex: 0,
  }),
  extraInfo: () => ({}),
});
const { closePopWindow, setFullScreenStatus } = useWindowStore();
const component = shallowRef<any>(null);
// let component = shallowRef<any>(null)
onMounted(async () => {
  let importComponent = null;
  if (prop.windowType === "headerWindow") {
    importComponent = await import(`@/pages/home/headerWindow/${prop.componentName}.vue`);
    // component.value =markRaw((await import(`@/pages/home/popWindow/${prop.componentName}.vue`)).default)
  } else if (prop.windowType === "defaultWindow") {
    importComponent = await import(`@/pages/home/defaultWindow/${prop.componentName}.vue`);
  } else if (prop.windowType === "secondWindow") {
    importComponent = await import(`@/pages/home/secondWindow/${prop.componentName}.vue`);
  } else if (prop.windowType === "popWindow") {
    importComponent = await import(`@/pages/home/popWindow/${prop.componentName}.vue`);
    // component.value =markRaw((await import(`@/pages/home/popWindow/${prop.componentName}.vue`)).default)
  }
  component.value = importComponent.default;
  console.log(prop.control);
  // component.value = markRaw(importComponent.default)
});
function toSetFullScreenStatus(componentName: string, flag: boolean) {
  toCloseControlFlag();
  setFullScreenStatus(componentName, flag);
}
function toShowControlFlag() {
  showControlFlag.value = true;
}
function toCloseControlFlag() {
  showControlFlag.value = false;
}
function closeComponent() {
  closePopWindow(prop.componentName);
}
</script>
<!-- secondWindow -->
<style lang="scss" scoped>
.panel-container {
  /* border: 2px solid red; */
  .control-box {
    position: absolute;
    top: 0;
    width: 32px;
    height: 32px;
    // background-color: red;
    .control-img {
      width: 24px;
      height: 24px;
    }
  }

  .pop-control {
    right: 5px;
  }
  .window-control-left {
    top: 0;
    left: 120px;
  }
  .window-control-right {
    top: 0;
    right: 120px;
  }
}
.panel-container-scale {
  // transform-origin: top left;

  border: 1px solid #0ff;
  background-color: #0a1b41;
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) scale(3);

}
.scale-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
  }
</style>
