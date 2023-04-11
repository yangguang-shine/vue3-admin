import { defineStore } from "pinia";
import { toRefs } from "vue";
import action from './action'
import state  from "./state";
export const useGlobalStore = defineStore("global", () => {
    return { ...toRefs(state), ...action };
});