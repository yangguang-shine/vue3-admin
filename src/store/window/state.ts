import { PositionConfigI, WindowTypeI } from '@/interface';
import { ComponentPropI } from '@/components/PositionWindow.vue';
import { reactive } from "vue";
export interface WindowStateI {
  windowList: ComponentPropI[],
  popWindowList: ComponentPropI[],
  popWindowConfigList: ComponentPropI[],
  positionConfig: PositionConfigI,
  screenWidth: number,
  screenHeight: number,
  windowType: WindowTypeI
  zIndex: number,
}
// export type ShopStateG = {
//     [T in keyof ShopStateI]: RefI<ShopStateI[T]>
// }
const windowState = reactive<WindowStateI>({
  windowList: [],
  popWindowList: [],
  popWindowConfigList: [],
  positionConfig: {},
  screenWidth: 1920,
  screenHeight: 1080,
  windowType: 'defaultWindow',
  zIndex: 50
})

export default windowState;