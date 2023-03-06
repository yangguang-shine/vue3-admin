<template>
  <div class="home-page" :style="homePositionStyle">
    <PositionWindow v-for="(windowItem) in allWindowList" :key="windowItem.randomId" v-bind="windowItem"></PositionWindow>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from "vue";
import PositionWindow from "@/components/PositionWindow.vue";
import { windowConfigList } from "@/config/window";
import { positionConfig } from "@/config/position";
import { storeToRefs } from "pinia";
import { useWindowStore } from "@/store/index";
import { BASE_POINT } from '@/config/global.config'
import { popWindowConfigList } from "@/config/pop";
// import { storeToRefs } from 'pinia';
const windowStore = useWindowStore();
const { allWindowList } = storeToRefs(windowStore);
const { setWindowList, setPositionConfig, setPopWindowConfigList } = windowStore;
const homePositionStyle = reactive({
  top: BASE_POINT[0] + 'px',
  left: BASE_POINT[1] + 'px',
})
onMounted(() => {
  init();
});
function init() {
  setPositionConfig(positionConfig);
  setWindowList(windowConfigList);
  setPopWindowConfigList(popWindowConfigList)
  
}
</script>
<style lang="less">
.home-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(@/image/home/bg.jpg);
  color: #fff;
}
</style>
