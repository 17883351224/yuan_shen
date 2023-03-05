import { reqEmotions } from '@/api'
import Message from "@/plugins/message"
const actions = {
    async getAllEmotions({ commit }) {
        const result = await reqEmotions()
        if (result.code === 200) {
            commit('GET_ALL_EMOTIONS', result.data)
        }
        else {
            console.log(result.message)
        }
    }
}

const mutations = {
    GET_ALL_EMOTIONS(state, value) {
        state.emotions = value;
    }
}

const state = {
    emotions: []
}

const getters = {}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters

};