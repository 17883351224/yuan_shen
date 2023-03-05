
import Message from "@/plugins/message"
import { reqBanner, reqRecommendPlayList, reqRecommendMV, reqRecommendLatestMusic } from "@/api/music"
import store from "@/store"
const actions = {
    async getBannerList({ commit }, type) {
        const result = await reqBanner(type)
        if (result.code == 200) {
            commit('saveBannerList', result.banners)
        } else {
            Message({ type: 'error', text: '发生错误', delay: 3000 })
        }
    },
    async getRecommendPlayList({ commit }, limt) {
        const result = await reqRecommendPlayList(limt)
        if (result.code == 200) {
            commit('saveRecommendPlayList', result.result)
        } else {
            Message({ type: 'error', text: '发生错误', delay: 3000 })
        }
    },
    async getRecommendMVList({ commit }) {
        const result = await reqRecommendMV()
        if (result.code == 200) {
            commit('saveRecommendMVList', result.result)
        } else {
            Message({ type: 'error', text: '发生错误', delay: 3000 })
        }
    },
    async getRecommendLatestMusicList({ commit }, limit) {
        const result = await reqRecommendLatestMusic(limit)
        if (result.code == 200) {
            commit('saveRecommendLatestMusicList', result.result)
        } else {
            Message({ type: 'error', text: '发生错误', delay: 3000 })
        }
    },
}

const mutations = {
    saveBannerList(state, value) {
        state.bannerList = value
    },
    saveRecommendPlayList(state, value) {
        state.recommendPlayList = value
    },
    saveRecommendMVList(state, value) {
        state.recommendMVList = value
    },
    saveRecommendLatestMusicList(stare, value) {

        state.recommendLatestMusicList = value

    }

}

const state = {
    bannerList: [],
    recommendPlayList: [],
    recommendMVList: [],
    recommendLatestMusicList: [],

}

export default {
    namespaced: true,
    actions,
    mutations,
    state
};