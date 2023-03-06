import { defineStore } from "pinia";
import { toRefs } from "vue";
import action from './action'
import state  from "./state";
import getter  from "./getter";
export * from './state'
export * from './action'
export * from './action'
export const useWindowStore = defineStore("window", () => {
    return { ...toRefs(state),...getter, ...action };
});