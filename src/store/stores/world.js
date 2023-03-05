import { reqWorldInfo } from "@/api";
import Message from "@/plugins/message"
const actions = {
    async getworldInfo({ commit }) {
        const result = await reqWorldInfo()
        if (result.code == 200) {
            commit('saveWorldInfo', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    }

}
const mutations = {
    saveWorldInfo(state, value) {
        state.worldInformation = value
    }
}

const state = {
    worldInformation: []
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}