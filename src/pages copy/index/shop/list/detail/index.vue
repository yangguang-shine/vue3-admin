<template>
  <div class="home-page">
    详情
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
