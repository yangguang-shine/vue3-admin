<template>
    <el-container>
      <el-header><Header></Header></el-header>
      <el-container>
        <el-aside width="200px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>
<script setup lang="ts">
import Menu from "@/components/app/Menu.vue";
import Header from "@/components/app/Header.vue";
 
</script>
<style>
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  height: 100%;
  width: 250px;
}
</style>
<style scoped></style>
