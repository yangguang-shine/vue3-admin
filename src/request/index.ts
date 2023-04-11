import { useGlobalStore } from "./../store/global/index";
import { ObjectI } from "@/interface/index";
import axios from "axios";
import { baseServerUrl } from "@/config";
import router from "@/router";
import { ElMessage } from "element-plus";
// http://hx.com:7777/api/user/address/list
axios.defaults.baseURL = baseServerUrl;
async function fetch(url: string, params?: ObjectI, options?: ObjectI) {
  // const router = useRouter()
  const res = await axios({
    url,
    method: "post",
    data: params,
  });
  const code = res.data.code;
  const data = res.data.data;
  const msg = res.data.msg;
  if (code === "000") {
    return data;
  } else {
    ElMessage.error(msg);
    if (code === "200") {
      router.replace({
        name: "login",
      });
    }
    throw msg;
  }
}
export default fetch
// export default ferch (url, params, options = {}){
//     const history = useHistory()
//     console.log(history)
//     const defaultOptions = {
//         autoLoginFlag: true
//     }
//     const fetchOptions = {
//         ...defaultOptions,
//         ...options
//     }
//     return new Promise((resolve, reject) => {
//         axios({
//             url,
//             method: 'post',
//             data: params
//         }).then((result) => {
//             const code = result.data.code
//             const data = result.data.data
//             const msg = result.data.msg
//             if (code === '000') {
//                 resolve(data)
//             } else if (code === '200' && fetchOptions.autoLoginFlag) {
//                 history.replace('/login')
//                 reject(msg)
//             } else {
//                 reject(msg)
//             }
//         }).catch((err) => {
//             reject(err)
//         });
//     })
// }
