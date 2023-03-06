<template>
  <div class="panel-header-box flex-row flex-a-center flex-j-between">
    <div class="left">left</div>
    <div class="header-right flex-row">
      <div class="header-tab-item cursor-pointer flex-row flex-center" @click="changeScreenMode">
        <img class="tab-img" src="@/image/header/头部-icon-切换.png" alt="" />
        切换
      </div>
      <div class="header-tab-item cursor-pointer flex-row flex-center" @click="removeAllPopList">
        <img class="tab-img" src="@/image/header/头部-icon-主页.png" alt="" />
        主页
      </div>
      <div class="header-tab-item cursor-pointer flex-row flex-center">
        <img class="tab-img" src="@/image/header/头部-icon-退出.png" alt="" />
        退出
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WindowSideI } from '@/interface';
import { useWindowStore } from '@/store';
const windowSore = useWindowStore()
const { changeScreenMode, removeAllPopList} = windowSore
interface ProsI {
  basic: {
    title: string;
  };
  windowSide: WindowSideI;
}
defineProps<ProsI>();
</script>
<style lang="scss" scoped>
.panel-header-box {
  width: 100%;
  height: 100%;
  .header-right {
    position: relative;
    z-index: 5;
    .header-tab-item {
      font-size: 13px;
      width: 100px;
      height: 44px;
    }

    .tab-img {
      width: 26px;
      height: 26px;
      margin-right: 6px;
    }
  }
}
</style>
