<template>
  <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" :default-active="defaultActive" class="el-menu-box" :collapse="isCollapse" @open="handleOpen" @close="handleClose" @select="handleSelect">
    <template v-for="menuItem in menuList" :key="menuItem.name">
      <el-sub-menu v-if="menuItem.children && menuItem.children.length" :index="menuItem.name">
        <template #title>
          <el-icon>
            <component :is="menuItem.icon"></component>
          </el-icon>
          <span>{{ menuItem.title }}</span>
        </template>
        <el-menu-item v-for="subMenuItem in menuItem.children" :key="subMenuItem.name" :index="subMenuItem.name">
          <template #title>
            <el-icon>
              <component :is="subMenuItem.icon"></component>
            </el-icon>
            <span>{{ subMenuItem.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item v-else :index="menuItem.name" :key="menuItem.name">
        <template #title>
          <el-icon>
            <component :is="menuItem.icon"></component>
          </el-icon>
          <span>{{ menuItem.title }}</span>
        </template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { menuList } from "@/config";
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/store";
const { setSinglePageFlag } = useGlobalStore();
const nameList: string[] = getNameList();

const router = useRouter();
const route = useRoute();
console.log(route.path);
console.log(route.path === '/');
if (route.path === '/') {
  router.replace({
    name: 'home'
  })
}
console.log("router");
console.log(router);
console.log(route);
const defaultActive = ref("");
const isCollapse = ref(false);
const handleOpen = () => {
  console.log("handleOpen");
};
const handleClose = () => {
  console.log("handleClose");
};
const handleSelect = (name: string) => {
  console.log(name);
  router.push({
    name,
  });
};
watch(route, (routeInfo) => {
  const name = routeInfo.path.slice(1) || "home";
  console.log("route");
  console.log(name);
  defaultActive.value = name;
  console.log(nameList);
  if (nameList.find(item => item.startsWith(name))) {
    console.log(nameList.find(item => item.startsWith(name)));
    router.push({
      name,
    });
  }
});
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
