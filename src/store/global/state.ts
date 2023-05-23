
import { reactive } from "vue";
export interface WindowStateI {
  navNameActive: string
}
// export type ShopStateG = {
//     [T in keyof ShopStateI]: RefI<ShopStateI[T]>
// }
const windowState = reactive<WindowStateI>({
  navNameActive: ''
})

export default windowState;