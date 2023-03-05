import { reqLatestNews, reqNewsByType, reqNewsDetail, reqCollectUpdate, reqGetCollectInfo } from '@/api'
import Message from "@/plugins/message"
const actions = {
    async getNewsByType({ commit }, type) {
        const result = await reqNewsByType(type)
        if (result.code == 200) {

            commit('changeNews', { data: result.data, type })

        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getNewsDetail({ commit }, newsId) {
        const result = await reqNewsDetail(newsId)
        if (result.code == 200) {
            commit('changeNewsDetail', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
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
    }



}

const mutations = {
    changeNews(state, { data, type }) {
        state.newsInformation[type] = data

    },
    changeNewsDetail(state, value) {
        state.newsDetail = value;
    },
    saveCollectInfo(state, value) {
        state.collectInformation = value
    }
}

const state = {
    newsDetail: {},
    newsInformation: {
        news: [],
        activity: [],
        notice: []
    },
    collectInformation: {}
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
};