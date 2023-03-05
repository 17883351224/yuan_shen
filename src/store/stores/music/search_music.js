import { reqHotSearchList, reqRecommendSearchKeyworlds, reqSearchSingleListInfo, reqSearchMultiMatch } from "@/api/music"
import Message from "@/plugins/message"
const actions = {
    async getHotSearchList({ commit }) {
        const result = await reqHotSearchList()
        if (result.code == 200) {
            commit('saveHotSearchList', result.data)
        } else {
            console.log('getHotSearchList发生错误')
        }
    },
    async getRecommendSearchKeyworlds({ commit }, keywords) {

        const result = await reqRecommendSearchKeyworlds(keywords)
        if (result.code == 200) {
            commit('saveRecommendSearchKeyworlds', result.result)
        } else {
            console.log('getRecommendSearchKeyworlds发生错误')
        }
    },
    async getSearchSingleListInfo({ commit }, { limit, keywords }) {
        const result = await reqSearchSingleListInfo(keywords, limit)
        if (result.code == 200) {
            commit('saveSearchSingleListInfo', result.result)
        } else {
            console.log('getHotSearchList发生错误')
        }
    },
    async getSearchHeaderInfo({ commit }, keywords) {
        const result = await reqSearchMultiMatch(keywords)
        if (result.code == 200) {
            commit('saveSearchHeaderInfo', result.result)
        } else {
            console.log('getSearchHeaderInfo发生错误')
        }
    },
}

const mutations = {
    saveHotSearchList(state, value) {
        state.hotSearchList = value
    },
    saveRecommendSearchKeyworlds(state, value) {
        state.recommendSearchKeyworlds = value
    },
    saveSearchSingleListInfo(state, value) {
        state.searchSingleListInfo = value
    },
    saveSearchHeaderInfo(state, value) {
        state.searchHeaderInfo = value
    }
}

const state = {

    hotSearchList: [],
    recommendSearchKeyworlds: {},
    searchSingleListInfo: {},
    searchHeaderInfo: {}

}

export default {
    namespaced: true,
    actions,
    mutations,
    state
};