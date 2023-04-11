<template>
  <div class="header flex-row flex-a-center flex-j-between">
    头部
    <el-icon><SwitchButton @click="logout" /></el-icon>
  </div>
</template>

<script lang="ts" setup>
import fetch from "@/request";
import { SwitchButton } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { confirm } from "@/utils";
import router from "@/router";
async function logout() {
  await confirm({
    message: "确认注销吗",
  });
  // await fetch("/manage/account/logout");
  ElMessage.success("注销成功");
  router.replace({
    name: 'login'
  })
}
</script>
<style lang="less">
.el-header {
  background-color: #337ecc;
}
</style>
<style scoped>
.header {
  width: 100%;
  height: 100%;
  color: #fff;
}
</style>
