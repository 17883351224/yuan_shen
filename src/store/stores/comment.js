import Message from "@/plugins/message"
import {
    reqCreationCommentByCreatiionId,
    reqSaveCreationComment,
    reqPostCommentBypostId,
    reqSavePostComment,
    reqUserCommentList
} from '@/api'
const actions = {
    async getCreationCommentByCreationId({ commit }, creationId) {
        const result = await reqCreationCommentByCreatiionId(creationId)
        if (result.code == 200) {
            commit('saveComment', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async saveCreationComment({ dispatch }, { creationComment, htmlObj }) {
        const result = await reqSaveCreationComment(creationComment)
        if (result.code == 204) {
            Message({ type: 'success', text: result.message, delay: 3000 })
            htmlObj.innerHTML = ""
            dispatch('getCreationCommentByCreationId', creationComment.creationId)


        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getPostCommentByPostId({ commit }, postId) {
        const result = await reqPostCommentBypostId(postId)
        if (result.code == 200) {
            commit('saveComment', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async savePostComment({ dispatch }, { postComment, htmlObj }) {
        const result = await reqSavePostComment(postComment)
        if (result.code == 204) {
            Message({ type: 'success', text: result.message, delay: 3000 })
            htmlObj.innerHTML = ""
            dispatch('getPostCommentByPostId', postComment.postId)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getUserCommentInfo({ commit }, userAccount) {
        const result = await reqUserCommentList(userAccount)
        if (result.code == 200) {
            commit('saveUserCommentInfo', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },

}

const mutations = {
    saveComment(state, value) {
        state.commentList = value
    },
    saveUserCommentInfo(state, value) {
        state.userCommentInfo = value
    }
}

const state = {
    commentList: [],
    userCommentInfo: {}

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