<template>
  <div class="panel-box">
    <div class="panel-title">
      <div class="panel-title-text">{{ basic.title }}{{ extraInfo.count }}</div>
      <div class="icon-border" :class="windowSide === 'left' ? 'icon-border-right' : 'icon-border-left'">
        <div class="img-pre" @click="setBaseData"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ObjectI, WindowSideI } from "@/interface";
import API from "@/request/";
import { ref, onMounted } from "vue";
// import ContentMixin from "@mixin/content.mixin";
interface ProsI {
  basic: {
    title: string;
  };
  windowSide: WindowSideI;
  extraInfo: ObjectI;
}

const prop2 = defineProps<ProsI>();
console.log("prop2");
console.log(prop2);
const list = ref<any[]>([[], []]);
onMounted(() => {
  init();
});
function init() {
  getBaseInfo();
  // propChange()
}
async function getBaseInfo() {
  const res: any = await API.onePicture.getBaseInfo();
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
        const dataCount = (item.dataCount / 10000).toFixed(1);
        list1.push({
          dataName: item.dataName,
          dataCount,
          unit: "万" + info1[item.dataName],
          hoverTitle: item.dataCount,
        });
      } else {
        list1.push({
          dataName: item.dataName,
          dataCount: item.dataCount,
          unit: info1[item.dataName],
          hoverTitle: item.dataCount,
        });
      }
    }
    if (info2[item.dataName]) {
      if (item.dataCount > 10000) {
        const dataCount = (item.dataCount / 10000).toFixed(1);
        list2.push({
          dataName: item.dataName,
          dataCount,
          unit: "万" + info2[item.dataName],
          hoverTitle: item.dataCount,
        });
      } else {
        list2.push({
          dataName: item.dataName,
          dataCount: item.dataCount,
          unit: info2[item.dataName],
          hoverTitle: item.dataCount,
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

<!-- <style lang="less" scoped>
.icon-border {
  position: absolute;
  right: 26px;
  width: 70px;
  cursor: pointer;
  height: 32px;

  .img-pre {
    display: none;
    position: absolute;
    right: 0;
    width: 70px;
    cursor: pointer;
    height: 32px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-image: url("~@image/base-info/设置-默认.png");
  }
}

.icon-border-right {
  right: 26px;
}

.icon-border-left {
  left: 26px;
}

.icon-border:hover {
  .img-pre {
    display: flex;
    background-image: url("~@image/base-info/设置-默认.png");
  }
}

.panel-box .panel-content {
  padding: 0 12px;

  .panel-content-header {
    display: flex;
    margin-top: 25px;

    .header-list {
      width: 137px;
      height: 72px;
      border-radius: 10px;
      border: solid 2px #00bbff;
      margin-right: 10px;

      .list-content {
        height: 41px;
        line-height: 44px;
        color: #b1c0c9;
        text-align: center;

        .total {
          font-family: ElementFont;
          font-size: 28px;
          color: #ffa800;
        }
      }

      .list-title {
        background-color: rgba(0, 187, 255, 0.5);
        line-height: 30px;
        height: 28px;
        border-radius: 0 0 10px 10px;
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }

  .panel-content-bottom {
    overflow: hidden;

    .people-box-top {
      display: flex;
      flex-wrap: wrap;

      .box-content {
        text-align: center;
        width: 135px;
        color: #fff;
        position: relative;
        margin-top: 12px;
        padding-bottom: 8px;
        // border-bottom: 1px rgba(255, 255, 255, 0.5) dashed;
        margin-right: 10px;

        .box-line {
          position: absolute;
          right: -5px;
          top: 11px;
          width: 1px;
          border-right: 1px rgba(255, 255, 255, 0.5) dashed;
          height: 15px;
        }

        .box-total {
          color: #b1c0c9;
          line-height: 15px;

          .total {
            font-size: 24px;
            font-family: ElementFont;
            color: #00bbff;
          }
        }

        .list-title {
          font-size: 12px;
          line-height: 18px;
        }
      }
    }

    .line-bar {
      border-bottom: 1px rgba(255, 255, 255, 0.5) dashed;
    }
  }
}

.panel-box .panel-content .panel-content-header .header-list:last-child {
  margin-right: 0;
}

.panel-box .panel-content .panel-content-bottom .box-content:last-child {
  margin-right: 0;
}
</style> -->
