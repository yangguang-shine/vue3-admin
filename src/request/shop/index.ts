import { ObjectI } from '@/interface/index';
import post from '../post'

const shop = {
    async getShopList(query: ObjectI = {}) {
        const res = await post("/manage/shop/list", query)
        return res
    }
}
export default shop