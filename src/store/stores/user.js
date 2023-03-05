import {
    reqUserInfo,
    reqLogin,
    reqAuthCode,
    reqRegister,
    reqUpdatePassword,
    reqUpadatePasswordAuthCode,
    reqUpdateUserInfo,
    reqChangeUserAvatar
} from "@/api"

import Message from "@/plugins/message"
const actions = {
    async getUserInformations({ commit }, userAccount) {
        const result = await reqUserInfo(userAccount)
        if (result.code === 200) {
            commit('saveUserInformation', result.data)
        } else {
            Message({ type: "error", text: result.message, delay: 3000 })
        }

    },
    async gotoLogin({ commit }, { user, close }) {

        let result = await reqLogin(user)
        if (result.code === 202) {
            Message({ type: "success", text: result.message, delay: 3500 })
            commit('saveUserInformation', result.data)
            close()
        } else {
            Message({ type: 'error', text: result.message, delay: 3500 })
        }
    },
    async getAuthCode(context, message) {
        const result = await reqAuthCode(message)
        if (result.code === 202) {
            Message({ type: 'success', text: result.message, delay: 3000 })
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }

    },
    async gotoRegister({ commit }, { userRegisterInfo, close }) {
        const result = await reqRegister(userRegisterInfo)
        if (result.code === 204) {
            Message({ type: 'success', text: result.message, delay: 3000 })
            commit('saveUserInformation', result.data)
            close()
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getUpdatePasswordAuthCode(context, message) {
        const result = await reqUpadatePasswordAuthCode(message)
        if (result.code === 202) {
            Message({ type: 'success', text: result.message, delay: 3000 })
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async updatePassword({ commit }, updatePasswordInfo) {
        let result = await reqUpdatePassword(updatePasswordInfo)
        if (result.code === 202) {
            Message({ type: 'success', text: result.message, delay: 3000 })
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async updateUserInfo({ commit }, user) {
        let result = await reqUpdateUserInfo(user)
        if (result.code === 202) {
            Message({ type: 'success', text: result.message, delay: 3000 })
            commit('saveUserInformation', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async updateUserAvatar({ commit }, formData) {
        let result = await reqChangeUserAvatar(formData)
        if (result.code === 202) {
            Message({ type: 'success', text: result.message, delay: 3000 })
            commit('saveUserInformation', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    }


}

const mutations = {
    saveUserInformation(state, userInfo) {
        state.userInformations = userInfo
        localStorage.setItem('token', JSON.stringify({ userAccount: userInfo.userAccount, userName: userInfo.userName }))
    },
    changeUserInformation(state, value) {
        state.userInformations = value
    }
}

const state = {
    userInformations: {},
    reg: {
        userAccount: /^1\d{10}$/,
        phoneNumber: /^1\d{10}$/,
        userPassword: /^[(^\u4e00-\u9fa5)\S]{6,18}$/,
        authCode: /^\d{6}$/,
        nickName: /^\S{2,16}$/
    }

}

const getters = {

}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}