import {
    reqGetAllPost,
    reqPostDetailByPostId,
    reqLikedInfo,
    reqLikedUpdate,
    reqCollectUpdate,
    reqGetCollectInfo,
    reqGetPostByUserAccount
} from '@/api'
import Message from "@/plugins/message"
const actions = {
    async getAllPost({ commit }) {
        const result = await reqGetAllPost()
        if (result.code == 200) {
            commit('saveAllPost', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getPostDetailByPostId({ commit }, postId) {
        const result = await reqPostDetailByPostId(postId)
        if (result.code == 200) {
            commit('savePostDetail', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getPostLikedInfo({ commit }, likedInfo) {
        const result = await reqLikedInfo(likedInfo)
        if (result.code == 200) {
            commit('savePostLikedInfo', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async updateLikedInfo({ commit }, likedInfo) {
        const result = await reqLikedUpdate(likedInfo)
        if (result.code == 202) {
            commit('savePostLikedInfo', result.data)
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
    },
    async getPostByUserAccount({ commit }, userAccount) {
        const result = await reqGetPostByUserAccount(userAccount)
        if (result.code == 200) {
            commit('saveMyPostList', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    }


}

const mutations = {
    saveAllPost(state, value) {
        state.postList = value
    },
    savePostDetail(state, value) {
        state.postDetail = value
    },
    savePostLikedInfo(state, value) {
        state.postLikedInfo = value;
    },
    saveNewCommentTotal(state) {
        state.postDetail.commentTotal++
    },
    saveCollectInfo(state, value) {
        state.collectInformation = value
    },
    saveMyPostList(state, value) {
        state.myUploadPostList = value
    }

}

const state = {
    postList: [],
    postDetail: {},
    postLikedInfo: {},
    collectInformation: {},
    myUploadPostList: []
}

const getters = {

}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters

};