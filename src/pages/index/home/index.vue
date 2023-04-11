<template>
  <div class="home-page">
    <el-button type="primary" @click="toPage('shop/list')">店铺列表</el-button>
    <el-button type="primary" @click="toPage('shop/info')">店铺信息</el-button>
    <el-button type="primary" @click="toPage('setting/center')">个人中心</el-button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
function toPage(name: string) {
  router.push({
    name
  })
}
</script>
