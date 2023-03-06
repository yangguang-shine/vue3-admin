import { getSessionData } from "./sessionStorage";
export function asyncDelay(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
}
export function isFromDetailPage(name: string) {
  const historyData = getSessionData("historyData") || [];
  return name === historyData[historyData.length - 2];
}
/**
 * 深拷贝
 * param obj   拷贝对象
 * return {any[] | {}}   返回拷贝对象
 */

export function deepClone(obj: any) {
  const objClone: any = Array.isArray(obj) ? [] : {};
  // eslint-disable-next-line no-debugger
  if (obj && typeof obj === "object") {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        // 判断ojb子元素是否为对象，如果是，递归复制
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          // 如果不是，简单复制
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
/**
 * 获取地址栏key的值
 * @param {string} key
 */
export function getQueryString(key: string) {
  let url = ""; // url中"?"符后的字串
  if (location.search && location.search !== "") {
    url = location.search;
  } else if (location.hash) {
    url = location.hash;
  }
  const theRequest: any = {};
  if (url.indexOf("?") != -1) {
    const str = url.split("?")[1];
    const strArr = str.split("&");
    for (let i = 0; i < strArr.length; i++) {
      theRequest[strArr[i].split("=")[0]] = decodeURI(strArr[i].split("=")[1]);
    }
  }
  return theRequest[key];
}
// 不允许修改对象任何属性
export function freezeObj(obj: any) {
  return new Proxy (obj, {
    get: function (target, property) {
      let value = Reflect.get(target, property)
      if (typeof value === 'object') {
        value = freezeObj(value)
      } 
      return value
    },
    set (target, property) {
      try {
        const objJSON = JSON.stringify(target)
        throw `${objJSON} 中的 ${String(property)} 不允许修改`
      } catch (error) {
        console.log(error)
      }
      return false
    }
  })
}
