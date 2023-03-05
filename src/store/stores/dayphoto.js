
import { reqDayPhotoList, reqUploadDayPhoto } from "@/api";
import Message from "@/plugins/message"
const actions = {
    async getDayPhotoList({ commit }) {
        const result = await reqDayPhotoList()
        if (result.code == 200) {
            commit('saveDayPhotoList', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },
    async uploadDayPhoto({ commit }, { formData, textObj, maskIsShow }) {
        const result = await reqUploadDayPhoto(formData)
        if (result.code == 204) {
            Message({ type: 'success', text: result.message, delay: 3000 })
            textObj.value.value = ""
            maskIsShow.value = false
            commit('saveDayPhotoList', result.data)
        } else {
            Message({ type: 'error', text: result.message, delay: 3000 })
        }
    },


}
const mutations = {
    saveDayPhotoList(state, value) {
        state.dayPhotoList = value
    },

}

const state = {
    dayPhotoList: []
}

export default {
    namespaced: true,
    actions,
    mutations,
    state
}