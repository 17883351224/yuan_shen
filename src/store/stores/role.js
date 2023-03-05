import { reqGetRoleList, reqRoleDetailByRoleId } from "@/api";
import Message from "@/plugins/message"
const actions = {
    async getRoleList({ commit }) {
        const result = await reqGetRoleList()
        if (result.code == 200) {
            commit('saveRoleList', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async getRoleDetailByRoleId({ commit }, roleId) {
        const result = await reqRoleDetailByRoleId(roleId)
        if (result.code == 200) {
            commit('saveRoleDetail', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    }

}
const mutations = {
    saveRoleList(state, value) {
        state.roleList = value
    },
    saveRoleDetail(state, value) {
        state.roleDetail = value
    }
}

const state = {
    roleList: [],
    roleDetail: {

    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}