<template>
  <el-menu active-text-color="#ffd04b" unique-opened background-color="#545c64" text-color="#fff" :default-active="defaultActive" class="el-menu-box" :collapse="isCollapse" @open="handleOpen" @close="handleClose" @select="handleSelect">
    <template v-for="menuItem in menuList" :key="menuItem.name">
      <el-sub-menu v-if="menuItem.children && menuItem.children.length" :index="menuItem.name">
        <template #title>
            <span>{{ menuItem.title }}</span>
          </template>
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
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/store";
import { storeToRefs } from "pinia";
import {pathInfo} from '@/config/nav'
// import { useGlobalStore } from "@/store";
const globalStore = useGlobalStore()
const { menuList }  = storeToRefs(globalStore) 
const {setModuleNameActive, setMenuList} = globalStore
const router = useRouter();
const route = useRoute();
const defaultActive = ref("");
const isCollapse = ref(false);
getCurrentActive();
watch(route, () => {
  console.log('router change');
  getCurrentActive();
});
watch(menuList, () => {
  console.log('menuList change');
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
  const path = route.path
  const name = pathInfo[path]
  console.log("name");
  console.log(name);
  if (!name) {
    router.replace({
      name: 'people/overview/peopleOverview'
    })
    return
  } else {
    const moduleName = name.split('/')[0]
    setModuleNameActive(moduleName)
    setMenuList()
    setDefaultActive(name)
  }

  // defaultActive.value = name;
  // if (nameList.find((item) => name.startsWith(item))) {
  //   router.push({
  //     name,
  //   });
  // }
}
function setDefaultActive(name: string) {
  defaultActive.value = name
}
</script>

<style>
.el-menu-box {
  height: 100%;
}
</style>
