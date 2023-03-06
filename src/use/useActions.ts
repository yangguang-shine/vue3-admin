import { reactive, ref } from 'vue'
import API from '../request';

export default function useQueryData() {
    const actions = ref<any>({})
    async function getActions(systemId: string, moduleId: string) {
        const res = await API.get(`${systemId.toLowerCase()}/m/sys/${moduleId}/actions`)
        actions.value = res;
    }

    async function getActionsByModuleId(systemId: string, moduleId: string) {
        const res = await API.get(`${systemId.toLowerCase()}/m/sys/${moduleId}/actions`)
        return res
    }
    return {
        actions,
        getActions,
        getActionsByModuleId
    }
}