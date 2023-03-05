import {
    reqGetAllCreationByType,
    reqGetCreationDetailByCreationId,
    reqLikedInfo,
    reqLikedUpdate,
    reqCollectUpdate,
    reqGetCollectInfo,
    reqUserCreation
} from "@/api";
import Message from "@/plugins/message";
const actions = {
    async getAllCreationByType({ commit }, type) {
        const result = await reqGetAllCreationByType(type);
        if (result.code == 200) {
            commit("saveAllCreation", { data: result.data, type });
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },
    async getCreationDetailByCreationId({ commit }, creationId) {
        const result = await reqGetCreationDetailByCreationId(creationId);
        if (result.code == 200) {
            commit("saveCreationDetail", result.data);
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },
    async getCreationLikedInfo({ commit }, likedInfo) {
        const result = await reqLikedInfo(likedInfo);
        if (result.code == 200) {
            commit("saveCreationLikedInfo", result.data);
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },
    async updateLikedInfo({ commit }, likedInfo) {
        const result = await reqLikedUpdate(likedInfo);
        if (result.code == 202) {
            commit("saveCreationLikedInfo", result.data);
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },
    async getCollectInfo({ commit }, collectInfo) {
        const result = await reqGetCollectInfo(collectInfo)
        if (result.code == 200) {
            commit('saveCollectInfo', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async updateCollectInfo({ commit }, collectInfo) {
        const result = await reqCollectUpdate(collectInfo)
        if (result.code == 202) {
            commit('saveCollectInfo', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getUserCreation({ commit }, userAccount) {
        const result = await reqUserCreation(userAccount)
        if (result.code == 200) {
            commit('saveUserCreationList', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    }
};

const mutations = {
    saveAllCreation(state, { data, type }) {
        if (type.toLowerCase() == 'cos') {
            state.cosplayList = data;
        } else {
            state.somepersonList = data;
        }

    },
    saveCreationDetail(state, value) {
        state.creationDetail = value;
    },
    saveCreationLikedInfo(state, value) {
        state.creationLikedInfo = value;
    },
    saveNewCommentTotal(state) {
        state.creationDetail.commentTotal++;
    },
    saveCollectInfo(state, value) {
        state.collectInformation = value
    },
    saveUserCreationList(state, value) {
        state.userCreationList = value
    }
};

const state = {
    cosplayList: [],
    somepersonList: [],
    creationDetail: {},
    creationLikedInfo: {},
    collectInformation: {},
    userCreationList: []
};

const getters = {};

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
};
