import { MenuItemI } from '@/interface';

import { reactive } from "vue";
export interface WindowStateI {
  moduleNameActive: string
  menuList: MenuItemI[]
}
// export type ShopStateG = {
//     [T in keyof ShopStateI]: RefI<ShopStateI[T]>
// }
const windowState = reactive<WindowStateI>({
  moduleNameActive: '',
  menuList: []
})

export default windowState;