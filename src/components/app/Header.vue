<template>
  <div class="header flex-row flex-a-center flex-j-between">
    <div class="produce-name-box flex-center">综治管理中心</div>
    <div class="nav-box flex-item flex-row">
      <div class="nav-item flex-col flex-a-center cursor-pointer" :class="moduleNameActive === navItem.moduleName ? 'nav-item-active' : ''" v-for="(navItem, index) in navList" :key="index" @click="changeNav(navItem)">
        <el-image class="nav-img" :src="moduleNameActive === navItem.moduleName ? navItem.iconActive : navItem.icon"></el-image>
        <div class="nav-name">{{ navItem.navTitle }}</div>
      </div>
    </div>
    <div class="user-info-box">
      <el-icon><SwitchButton @click="logout" /></el-icon>
    </div>
  </div>
</template>

<script lang="ts" setup>
import fetch from "@/request";
import { SwitchButton } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { confirm } from "@/utils";
import { navList } from "@/config/nav";
import { useGlobalStore } from "@/store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { NavItemI } from "@/interface";
const globalStore = useGlobalStore()
const { moduleNameActive  } = storeToRefs(globalStore)
const router = useRouter()
async function logout() {
  await confirm({
    message: "确认注销吗",
  });
  // await fetch("/manage/account/logout");
  ElMessage.success("注销成功");
  router.replace({
    name: "login",
  });
}
// 切换模块时，跳转该模块的第一个菜单
function changeNav(navItem: NavItemI) {
  try {
    const name = navItem.menuList[0].children[0].name
    router.push({
      name
    })
  } catch (e) {
    console.error(e);
  }

}

</script>
<style lang="less">
.el-header {
  background-color: #4480d5;
  padding: 0;
  height: 90px;
}
</style>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 14px;
  color: #fff;
  .produce-name-box {
    height: 100%;
  width: 250px;
    font-size: 20px;
  }
  .nav-box {
    overflow-x: auto;
    .nav-item {
      position: relative;
      width: 70px;
      height: 70px;
      margin-right: 10px;
      background-color: #5990da;
      border-radius: 12px;
      .nav-img {
        width: 50px;
        height: 50px;
      }
      .nav-name {
        position: absolute;
        bottom: 6px;
        left: 0;
        width: 100%;
        text-align: center;
      }
    }
    .nav-item-active {
      background-color: #dee5fa;
      color: #0066ff;
    }
  }
}
</style>
