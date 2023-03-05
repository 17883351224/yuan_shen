import {
    reqCollectByUserAccount
} from "@/api";
import Message from "@/plugins/message";
const actions = {
    async getAllCollectByUserAccount({ commit }, userAccount) {
        const result = await reqCollectByUserAccount(userAccount);
        if (result.code == 200) {
            commit("saveUserCollect", result.data);
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },

};

const mutations = {
    saveUserCollect(state, value) {
        state.userCollect = value
    }

};

const state = {
    userCollect: {}
};

const getters = {};

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
};
