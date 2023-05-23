<template>
    <div class="page-404" >
      404
    </div>
  </template>
  <script setup lang="ts">
  import { onMounted, reactive } from "vue";
  import PositionWindow from "@/components/PositionWindow.vue";
  import { windowConfigList } from "@/config/window";
  import { positionConfig } from "@/config/position";
  import { popWindowConfigList } from "@/config/pop";
  // import { storeToRefs } from 'pinia';

  onMounted(() => {
    init();
  });
  function init() {
    try {
      console.log(12);
    } catch (e) {
      console.log(e);
    }

  }
  </script>
  <style lang="less">
  .page-404 {
    font-size: 30px;
  }
  </style>
  