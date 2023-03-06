<template>
  <div class="login-container">
    <div class="one-picture-title">数据驾驶舱</div>
    <div class="login-box">
      <div class="login-title">欢迎登录</div>
      <div class="login-item">
        <div class="item-input">
          <img class="item-ico" src="@/image/login/user.png" />
          <input type="text" placeholder="请输入用户名" maxlength="11" v-model="loginInfo.username" @keyup.enter="login" />
        </div>
      </div>
      <div class="login-item">
        <div class="item-input">
          <img class="item-ico" src="@/image/login/password.png" />
          <input type="password" autocomplete="on" placeholder="请输入密码" maxlength="20" v-model="loginInfo.password" @keyup.enter="login" />
        </div>
      </div>
      <div class="login-item">
        <div class="item-input">
          <img class="item-ico" src="@/image/login/code.png" />
          <input type="text" placeholder="请输入验证码" maxlength="4" v-model="loginInfo.imageCode" @keyup.enter="login" />
          <img class="img-code" @click="getImageCode" :src="loginInfo.codeImgUrl" />
        </div>
      </div>
      <div class="login-item">
        <div class="item-title remember-password">
          <div class="check-box" :class="{ 'check-box_checked': loginInfo.isRememberAccount }" @click="rememberAccountChange"></div>
          <span @click="rememberAccountChange">记住账号</span>
        </div>
      </div>
      <div class="login-btn" @click="login">立即登录</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import API from "@/request";
import router from "@/router";
import {  warning } from "@/utils";
import { reactive, onMounted } from "vue";
import JSEncrypt from "jsencrypt";
interface LoginInfoI {
  username: string;
  password: string;
  imageCode: string;
  isRememberAccount: boolean;
  codeImgUrl: string;
  codeKey: string;
}
const loginInfo: LoginInfoI = reactive({
  username: "",
  password: "",
  imageCode: "",
  isRememberAccount: true,
  codeImgUrl: "",
  codeKey: "",
});
onMounted(() => {
  init();
});
function init() {
  getImageCode();
  initUserInfo();
}
function initUserInfo() {
  loginInfo.username = localStorage.getItem("inputStr") || "";
}
function rememberAccountChange() {
  loginInfo.isRememberAccount = !loginInfo.isRememberAccount;
}
async function getImageCode() {
  const res = await API.sysuser.getImageCode(loginInfo.codeKey);
  loginInfo.imageCode = "";
  loginInfo.codeImgUrl = "data:image/jpg;base64," + res.imageCode;
  loginInfo.codeKey = res.codekey;
}

async function login() {
  if (!loginInfo.username) {
    warning("请输入用户名");
    return;
  }
  if (!loginInfo.password) {
    warning("请输入密码");
    return;
  }
  if (!loginInfo.imageCode) {
    warning("请输入验证码");
    return;
  }
  // const loading = self.$loading({
  //     lock: true,
  //     text: "登录中...",
  //     // spinner: "el-icon-loading",
  //     background: "rgba(0, 0, 0, 0.7)",
  // });
  // eslint-disable-next-line
  var encryptor = new JSEncrypt(); // 创建加密对象实例
  var pubKey = "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBANz6aufP2ZKuAMZUcngLW5+KcAwiyuiF/FoOZfOeh53pcXonWtwDaoHtthbZxqSfwSLgHF+vBuRzLkYBlRmQbGsCAwEAAQ==";
  encryptor.setPublicKey(pubKey); //设置公钥
  // return

  const query = {
    inputStr: encryptor.encrypt(loginInfo.username),
    password: encryptor.encrypt(loginInfo.password),
    code: loginInfo.imageCode,
    codekey: loginInfo.codeKey,
  };
  const res = await API.sysuser.login(query);
  if (res.message === "login_success") {
    API.org.getCurUserTypeNames().then(() => {
      router.replace({
        name: "home",
      });
      // if (res1 && res1[0] && res1[0]["typeName"] && res1[0]["typeName"] === (<any>window).onePictureType) {
      //     success("登录成功");
      //     if (loginInfo.isRememberAccount) {
      //         localStorage.setItem("inputStr", loginInfo.username);
      //     } else {
      //         localStorage.setItem("inputStr", "");
      //     }
      //     router.replace({
      //         name: 'home'
      //     })
      // } else {
      //     console.error();
      //     ("没有使用此系统的权限");
      //     getImageCode();
      // }
    });
  } else {
    getImageCode();
  }
}
</script>

<style lang="less" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
  background-image: url("@/image/login/loginBg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  color: rgba(255, 255, 255, 1);
  font-family: MicrosoftYaHei;

  .login-box {
    width: 545px;
    height: 516px;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-image: url("@/image/login/border.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 70px 75px;

    .login-title {
      font-size: 30px;
      text-align: center;
    }

    .login-item {
      margin-top: 20px;
      margin-left: 15px;

      .item-ico {
        position: absolute;
        left: 10px;
        top: 10px;
      }

      .remember-password {
        display: flex;
        align-items: center;
        height: 20px;
        font-size: 14px;
        padding-left: 0;

        .check-box {
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 1);
          width: 14px;
          height: 14px;
          margin-right: 4px;
          box-sizing: border-box;
        }

        .check-box_checked {
          position: relative;

          &::before {
            content: "";
            position: absolute;
            width: 7.5px;
            height: 7.5px;
            left: 2px;
            top: 2.5px;
            background-color: #00a8f9;
          }
        }

        span {
          cursor: pointer;
          font-size: 12px;
          margin-left: 6px;
        }
      }

      .item-input {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;

        img {
          width: 24px;
          height: 24px;
        }

        input {
          background-color: rgba(0, 0, 0, 0.2);
          height: 50px;
          padding: 0 0 0 50px;
          width: 380px;
          outline: none;
          color: white;
          font-size: 20px;
          border: 1px rgba(108, 178, 214, 0.7) solid;
          border-radius: 5px;

          &:focus {
            border: solid 0.1vw;
            opacity: 0.9;
            transition: border linear 0.2s, -webkit-box-shadow linear 0.5s;
            border-color: rgba(0, 210, 255, 0.8);
            box-shadow: 0 0 18px rgba(0, 210, 255, 3);
          }
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .img-code {
          position: absolute;
          cursor: pointer;
          width: 100px;
          height: 40px;
          right: 6px;
          border-radius: 3px;
          top: 5px;
        }
      }
    }

    .login-btn {
      height: 50px;
      width: 380px;
      margin-left: 20px;
      border-radius: 5px;
      border: none;
      line-height: 55px;
      font-size: 20px;
      margin-top: 20px;
      text-align: center;
      background-image: linear-gradient(0deg, #0176e4 0%, #00b8ff 100%), linear-gradient(#00b8ff, #00b8ff);
      cursor: pointer;
    }
  }
}

.one-picture-title {
  top: 12px;
  font-size: 50px;
  margin: 0 auto;
  position: absolute;
  left: 50%;
  z-index: 10;
  color: white;
  transform: translateX(-50%);
}
</style>
