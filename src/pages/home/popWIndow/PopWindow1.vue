<template>
  <div class="panel-box">
    <div class="panel-title">
      <div class="panel-title-text">{{ basic.title }}</div>
      <div class="icon-border" :class="windowSide === 'left' ? 'icon-border-right' : 'icon-border-left'">
        <div class="img-pre" @click="setBaseData"></div>
      </div>
    </div>
    <div class="panel-content">{{ extraInfo.count }}</div>
  </div>
</template>

<script setup lang="ts">
import { ObjectI, WindowSideI } from "@/interface";
import API from "@/request/";
import { ref, onMounted } from 'vue'
// import ContentMixin from "@mixin/content.mixin";
interface ProsI {
  basic: {
    title: string,
      };
  windowSide: WindowSideI;

  extraInfo: ObjectI
}


const prop1 = defineProps<ProsI>()

const list = ref<any[]>([[], []])
onMounted(() => {
  console.log('prop1')
  console.log(prop1)
  init()
})
function init() {
  getBaseInfo()
  // propChange()
}
// function openPop () {
// }
async function getBaseInfo() {
  const res: any = await API.onePicture.getBaseInfo()
  let systemList: any = [];
    let formList: any = [];
    if (res) {
      systemList = res.filter((item: any) => {
        return item.isSystem == 1;
      });
      formList = res.filter((item: any) => {
        return item.isSystem == 0;
      });
    }
    systemList.forEach((outerItem: any) => {
      formList.forEach((item: any) => {
        if (outerItem.dataName === item.dataName) {
          outerItem.dataCount = item.dataCount;
          outerItem.isSystem = item.isSystem;
        }
      });
    });
    showData(systemList);
}
function showData(res: any) {
  const info1: any = {
    实有人口: "人",
    户籍人口: "人",
    流动人口: "人",
  };
  const info2: any = {
    社区数量: "人",
    小区数量: "个",
    房屋数量: "间",
  };
  const list1: any = [];
  const list2: any = [];
  res.forEach((item: any) => {
    if (info1[item.dataName]) {
      if (item.dataCount > 10000) {
        const dataCount = (item.dataCount / 10000).toFixed(1)
        list1.push({
          dataName: item.dataName,
          dataCount,
          unit: '万' + info1[item.dataName],
          hoverTitle: item.dataCount
        });
      } else {
        list1.push({
          dataName: item.dataName,
          dataCount: item.dataCount,
          unit: info1[item.dataName],
          hoverTitle: item.dataCount
        });
      }
    }
    if (info2[item.dataName]) {

      if (item.dataCount > 10000) {
        const dataCount = (item.dataCount / 10000).toFixed(1)
        list2.push({
          dataName: item.dataName,
          dataCount,
          unit: '万' + info2[item.dataName],
          hoverTitle: item.dataCount
        });
      } else {
        list2.push({
          dataName: item.dataName,
          dataCount: item.dataCount,
          unit: info2[item.dataName],
          hoverTitle: item.dataCount
        });
      }
    }
  });
  list.value = [list1, list2];
}
function setBaseData() {
  // this.openWindow({}, "base-info-set");
}

</script>

<style lang="less" scoped>

.panel-title {

}
</style>
