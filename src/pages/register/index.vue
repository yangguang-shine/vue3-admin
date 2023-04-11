<template>
  <div class="login-page flex-row flex-center">
    <el-form ref="refForm" label-width="100px" :rules="rules" :model="loginInfo" style="max-width: 460px" size="large">
      <el-form-item prop="phone" label="昵称">
        <el-input v-model="loginInfo.nickname" placeholder="请输入昵称" />
      </el-form-item>
      <el-form-item prop="phone" label="手机号">
        <el-input v-model="loginInfo.phone" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="loginInfo.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="toRegister()">注册</el-button>
        <el-button type="primary" @click="toLogin()">去登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { useRouter } from "vue-router";
import fetch from "@/request";
const router = useRouter();
const refForm = ref<FormInstance>();
const loginInfo = reactive({
  phone: "13429808281",
  password: "13429808281",
  nickname: '13429808281'

});
const rules = reactive<FormRules>({
  phone: [{ required: true, min: 11, max: 11, message: "请输入正确的手机号", trigger: "blur" }],
  password: [{ required: true, min: 8, max: 13, message: "请输入正确的密码", trigger: "blur" }],
});

async function toRegister() {
  if (!refForm.value) return;
  const res = await refForm.value.validate();
  if (res) {
    await fetch("/manage/account/register", {
      ...loginInfo,
    });
    ElMessage.success('注册成功')

    router.replace({
      name: "home",
    });
  }
}
function toLogin() {
  router.replace({
    name: "login",
  });
}
</script>
<style>
.login-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
</style>
