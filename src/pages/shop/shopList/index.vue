<template>
  <div class="home-page">
    店铺列表
    <el-table :data="tableData" border  style="width: 100%">
    <el-table-column fixed prop="imgUrl" label="店铺图片"  />
    <el-table-column fixed prop="shopName" label="店铺名称"  />
    <el-table-column prop="openTiming" label="营业时间"  />
    <el-table-column prop="minusInfo" label="店铺满减" show-overflow-tooltip  />
    <el-table-column prop="address" label="店铺地址" show-overflow-tooltip  />
    <el-table-column prop="description" label="店铺简介" show-overflow-tooltip  />
    <el-table-column prop="modeText" label="店铺模式"  />
    <el-table-column prop="mainColor" label="店铺色调"  />
    <el-table-column prop="businessTypesInfo" label="店铺业务"  />
    <el-table-column prop="startDeliverPrice" label="起送价格"  />
    <el-table-column prop="deliverPrice" label="配送费"  />
    <el-table-column fixed="right" label="店铺操作" >
      <!-- <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >Detail</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
      </template> -->
    </el-table-column>
  </el-table>
  </div>
</template>
<!-- <script>
interface TableItemI {
  
}
</script> -->
<script setup lang="ts">
import {onMounted, ref} from 'vue'
import fetch from '@/request'
import { useRouter } from 'vue-router';
onMounted(() => {
  init()
})
const tableData = ref<any[]>([])
async function init() {
  tableData.value = await fetch('/manage/shop/list')
  console.log(tableData.value);
}
</script>
