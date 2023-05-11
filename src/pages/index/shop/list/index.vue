<template>
  <div class="home-page">
    店铺列表
    <el-table :data="shopList" border style="width: 100%">
      <el-table-column fixed prop="imgUrl" align="center" label="店铺图片" width="100" />
      <el-table-column fixed prop="shopName" align="center" label="店铺名称" />
      <el-table-column prop="openTime" align="center" label="营业时间" width="120" />
      <el-table-column prop="minusStr" align="center" label="店铺满减" show-overflow-tooltip />
      <el-table-column prop="address" align="center" label="店铺地址" show-overflow-tooltip />
      <el-table-column prop="description" align="center" label="店铺简介" show-overflow-tooltip />
      <el-table-column prop="modeStr" align="center" label="店铺模式" width="90" />
      <el-table-column prop="mainColor" align="center" label="店铺色调" width="90">
        <template v-slot="scope">
          <div :style="{ 'background-color': scope.row.mainColor }">{{ scope.row.mainColor }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="businessTypesStr" align="center" label="店铺业务" width="120" />
      <el-table-column prop="startDeliverPrice" align="center" label="起送价格" width="90" />
      <el-table-column prop="deliverPrice" align="center" label="配送费" width="90" />
      <el-table-column fixed="right" align="center" label="店铺操作">
        <template v-slot="scope">
          <el-row class="operator-row" :gutter="0">
            <el-col :span="12" @click="toDetail(scope.row)"><el-button type="primary" size="small" >店铺详情</el-button></el-col>
            <el-col :span="12" @click="toMenu(scope.row)"><el-button type="primary" size="small"  color="skyblue">菜品分类</el-button></el-col>
          </el-row>
          <el-row class="operator-row" :gutter="0">
            <el-col :span="12" @click="toEdit(scope.row)"><el-button type="primary" size="small" color="orange">编辑店铺</el-button></el-col>
            <el-col :span="12" @click="toDelete(scope.row)"><el-button type="primary" size="small" color="red">删除店铺</el-button></el-col>
          </el-row>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<!-- <script>
interface TableItemI {
  
}
</script> -->
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { MinusItemI, ShopItemOriginI, ShopItemI } from "@/interface";
import API from "@/request";
onMounted(() => {
  init();
});
const router = useRouter()
const shopList = ref<ShopItemI[]>([]);
async function init() {
  shopList.value = await getShopList();
}
async function getShopList() {
  const shopListOrigin: ShopItemOriginI[] = await API.shop.getShopList();
  console.log(shopListOrigin);
  const shopList: ShopItemI[] = shopListOrigin.map((item): ShopItemI => {
    const minusList = JSON.parse(item.minus);
    const businessTypesList = JSON.parse(item.businessTypes);
    return {
      ...item,
      openTime: `${item.startTime}-${item.endTime}`,
      minusList,
      minusStr: getMinusStr(minusList),
      modeStr: item.mode === "vertical" ? "垂直" : "水平",
      businessTypesList,
      businessTypesStr: getBusinessTypesStr(businessTypesList),
    };
  });
  return shopList;
}
function getMinusStr(minusList: MinusItemI[]): string {
  const minusStr: string = minusList.reduce((str: string, item: MinusItemI) => {
    const reach = item.reach;
    const reduce = item.reduce;
    return str ? `${str},满${reach}减${reduce}` : `满${reach}减${reduce}`;
  }, "");
  return minusStr;
}
function getBusinessTypesStr(businessTypesList: string[]): string {
  const businessTypesStr = businessTypesList.reduce((str, item) => {
    let type = "";
    if (item === "1") {
      type = "堂食";
    } else if (item === "2") {
      type = "外卖";
    } else if (item === "3") {
      type = "自提";
    }
    if (type) {
      return str ? `${str},${type}` : `${type}`;
    } else {
      return str;
    }
  }, "");
  return businessTypesStr;
}
function toDetail(shopItem: ShopItemI){
  router.push({
    name: 'shop/list/detail',
    query: {
      shopID: shopItem.shopID
    }
  })
}
function toEdit(shopItem: ShopItemI){
  router.push({
    name: 'shop/list/edit'
  })
}
function toMenu(shopItem: ShopItemI){
  router.push({
    name: 'shop/menu',
    query: {
      shopID: shopItem.shopID
    }
  })
}
function toDelete(shopItem: ShopItemI){
  console.log('delete');
}
</script>
<style>
.operator-row {
  margin-top: 6px;
}
</style>