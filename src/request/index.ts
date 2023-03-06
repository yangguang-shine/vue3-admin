import router from "@/router";
import { error } from "@/utils/message";
import axios from "axios";
import { rootUrl } from "../utils";
import onePicture from "./onePicture";
import sysuser from "./sysuser";
import org from "./org";
axios.defaults.baseURL = import.meta.env.MODE === "development" ? rootUrl + "api/" : rootUrl;
// axios.defaults.baseURL = rootUrl;

// 请求超时时间
axios.defaults.timeout = 60 * 1000;
// post请求头
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
axios.defaults.withCredentials = true; // 请求带上cookie
const noErrorInfoUrlList = ["ps/m/economicOrganization/excel/import"];
const custom418ResponseUrlList = [`${rootUrl}pm/m/sysuser/n/valid`, `${rootUrl}pb/sysuser/n/valid`];
axios.interceptors.response.use(
  (response: any) => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      if (response.status === 401) {
        response401();
      } else {
        if (!noErrorInfoUrlList.includes(response.config.url)) {
          error(response.data.error);
        }
      }
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  (error) => {
    if (error.response.status) {
      if (error.response.status === 401) {
        response401();
      } else if (error.response.status === 418) {
        if (!custom418ResponseUrlList.includes(error.response.config.url)) {
          response418();
        }
      } else {
        error(error.response.data.error);
      }
      return Promise.reject(error.response);
    }
  }
);

function response401() {
  router.replace({
    name: "login",
  });
  // const top = window.top
  // if (document.location.pathname === "/s/index.html" && top) {
  //   top.location.href = "/s/login.html";
  // } else if (document.location.pathname === "/s/index/index.html" && top) {
  //   top.location.href = "/s/base/login.html";
  // } else {
  //   var prefix = ["s/partybuild", "s/redprop", "s/marketManage"];
  //   var bol = false;
  //   for (var i = 0; i < prefix.length; i++) {
  //     if (document.location.pathname.indexOf(prefix[i]) > -1 && top) {
  //       top.location.href = rootUrl + prefix[i] + "/login.html";
  //       bol = true;
  //     }
  //   }
  //   if (!bol && top) {
  //     // top.location.href = "/s/base/login.html";
  //     top.location.href = "/s/login.html";
  //   }
  // }
}

function response418() {
  const top = window.top;
  error("您没有使用此系统的权限");
  if (window.location.pathname !== "/s/index.html" && window.location.pathname !== "/" && top) {
    top.location.href = "/";
  }
}

export function setBaseUrl(url: string) {
  axios.defaults.baseURL = url;
}
/**
 * get方法，对应get请求
 * param {String} url 请求的url地址
 * param {Object} params 请求时携带的参数
 * @param  {string} url
 * @param  {any={}} params
 */
export function get(url: string, params: any = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    // document.cookie = `auth-token=${getRequest().token}`;
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        // console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * param {String} url 请求的url地址
 * param {Object} params 请求时携带的参数
 * arrayFormat?: "indices" | "brackets" | "repeat" | "comma";
 * @param  {string} url
 * @param  {any={}} params
 * @param  {'json'|'form'|'file'='form'} type
 * @param  {Object} headerConfig?
 */
export function post(url: string, params: any = {}, type: "json" | "form" | "file" = "form", headerConfig?: any): Promise<any> {
  let query: any;
  let header = {};
  if (type === "form") {
    query = new URLSearchParams(params);
  } else if (type === "json") {
    header = { headers: { "Content-Type": "application/json" } };
  } else if (type === "file") {
    query = params;
    header = { headers: { "Content-Type": "multipart/form-data" } };
  }
  if (headerConfig) {
    Object.assign(header, headerConfig);
  }
  return new Promise((resolve, reject) => {
    axios
      .post(url, query, header) // 参数序列化
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
export function put(url: string, params: any = {}, type: "json" | "form" | "file" = "form", headerConfig?: any): Promise<any> {
  let query: any;
  let header = {};
  if (type === "form") {
    query = new URLSearchParams(params);
  } else if (type === "json") {
    header = { headers: { "Content-Type": "application/json" } };
  } else if (type === "file") {
    query = params;
    header = { headers: { "Content-Type": "multipart/form-data" } };
  }
  if (headerConfig) {
    Object.assign(header, headerConfig);
  }
  return new Promise((resolve, reject) => {
    axios
      .post(url, query, header) // 参数序列化
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
export function remove(url: string, params: any = {}): Promise<any> {
  return new Promise((resolve, reject) => {
    // document.cookie = `auth-token=${getRequest().token}`;
    axios
      .get(url, {
        params: params,
      })
      .then((res) => {
        // console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
export default {
  get,
  post,
  setBaseUrl,
  put,
  remove,
  onePicture,
  sysuser,
  org,
};
