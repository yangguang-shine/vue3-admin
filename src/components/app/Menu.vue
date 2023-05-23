<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" :default-active="defaultActive" class="el-menu-box" :collapse="isCollapse" @open="handleOpen" @close="handleClose" @select="handleSelect">
    <template v-for="menuItem in menuList" :key="menuItem.name">
      <el-sub-menu v-if="menuItem.children && menuItem.children.length" :index="menuItem.name">
        <el-menu-item v-for="subMenuItem in menuItem.children" :key="subMenuItem.name" :index="subMenuItem.name">
          <template #title>
            <span>{{ subMenuItem.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { menuList } from "@/config";
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/store";
const nameList: string[] = getNameList();
const router = useRouter();
const route = useRoute();
const defaultActive = ref("home");
const isCollapse = ref(false);
getCurrentActive();
watch(route, () => {
  console.log('router change');
  getCurrentActive();
});
function handleOpen() {
  console.log("handleOpen");
}
function handleClose() {
  console.log("handleClose");
}
function handleSelect(name: string) {
  console.log(name);
  router.push({
    name,
  });
}
function getCurrentActive() {
  const name = route.path.slice(1);
  console.log("name");
  console.log(name);
  
  // if (!name) {

  // }
  // defaultActive.value = name;
  // if (nameList.find((item) => name.startsWith(item))) {
  //   router.push({
  //     name,
  //   });
  // }
}

function getNameList() {
  const nameList: string[] = [];
  menuList.forEach((item) => {
    if (item.children && item.children.length) {
      item.children.forEach((childItem) => {
        nameList.push(childItem.name);
      });
    } else {
      nameList.push(item.name);
    }
  });
  return nameList;
}
</script>

<style>
.el-menu-box {
  height: 100%;
}
</style>
