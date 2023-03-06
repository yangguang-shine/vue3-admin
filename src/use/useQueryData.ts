import { ref, onBeforeMount } from 'vue'
import { getSessionData, setSessionData } from '../utils';
export interface QueryDataI {
    pageSize?: number,
    pageNum?: number,
    query: any,
}
export default function useQueryData() {
    onBeforeMount(() => {
        // 页面返回加载数据
        setTimeout(() => {
            window.addEventListener("pageshow", function () {
                // 重新加载
                window.location.reload();
                // 只更新数据
                // this.init()
            });
        }, 1000);
        // 存储进入的页面信息
        const historyData = getSessionData("historyData") || [];
        if (historyData.length > 100) {
            historyData.shift();
        }
        const pathname = window.location.pathname;
        if (pathname) {
            const pathArr = pathname.split("/");
            const path = pathArr[pathArr.length - 1].split(".")[0];
            historyData.push(path);
        }
        setSessionData("historyData", historyData);
    })
    function getQueryData(key: string): QueryDataI {
        const data = getSessionData(key) || {};
        return {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            query: data.query,
        };
    }
    function setQueryData(key: string, data: QueryDataI) {
        setSessionData(key, data);
    }
    return {
        getQueryData,
        setQueryData
    }
}