import { ComponentPropI } from '@/components/PositionWindow.vue';
import {computed } from 'vue'
import state from './state'
const allWindowList = computed((): ComponentPropI[] => {
  return state.windowList.concat(state.popWindowList)
})

// export interface WindowGetterI {
//   allWindowList: ComputedRef<ComponentPropI[]>,
// }
const getter = {
  allWindowList
}
export default getter
