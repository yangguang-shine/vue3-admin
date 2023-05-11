<template>
  <div class="home-page">
    <el-button type="primary" @click="toPage('shop/list')">店铺列表</el-button>
    <el-button type="primary" @click="toPage('shop/menu')">店铺菜品</el-button>
    <el-button type="primary" @click="toPage('shop/statistics')">店铺统计</el-button>
    <el-button type="primary" @click="toPage('setting/center')">个人中心</el-button>
    <el-button type="primary" @click="getTwoMinTime">最短时间</el-button>
  </div>
</template>
<script setup lang="ts">
import { getTwoMinTime } from '@/utils/专利算法';
import { useRouter } from 'vue-router';
const router = useRouter()
function toPage(name: string) {
  router.push({
    name
  })
}
</script>
