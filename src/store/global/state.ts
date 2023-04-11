import { PositionConfigI, WindowTypeI } from '@/interface';
import { ComponentPropI } from '@/components/PositionWindow.vue';
import { reactive } from "vue";
export interface WindowStateI {
  singlePageFlag: boolean
}
// export type ShopStateG = {
//     [T in keyof ShopStateI]: RefI<ShopStateI[T]>
// }
const windowState = reactive<WindowStateI>({
  singlePageFlag: false
})

export default windowState;