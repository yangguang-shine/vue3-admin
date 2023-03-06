import { ref } from 'vue'
export interface PageInfoI {
    pageSize: number,
    pageNum: number,
}
export default function usePagination() {
    const pageSize = ref(10)
    const pageNum = ref(1)
    const total = ref(0)
    function pageInfoChange(pageInfo: PageInfoI) {
        pageSize.value = pageInfo.pageSize
        pageNum.value = pageInfo.pageNum
    }
    return {
        pageSize,
        pageNum,
        total,
        pageInfoChange,
    }
}