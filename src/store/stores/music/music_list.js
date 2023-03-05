import { reqSongListInfo, reqSongList } from "@/api/music"
import Message from "@/plugins/message"
const actions = {
    async getSongListInfo({ commit }, id) {
        const result = await reqSongListInfo(id)
        if (result.code == 200) {
            commit('saveSongListInfo', result.playlist)
        } else {
            Message({ type: 'error', text: '发生错误', delay: 3000 })
        }
    },
    async getSongList({ commit }, id) {
        const result = await reqSongList(id)
        if (result.code == 200) {
            commit('saveSongList', result.songs)
        } else {
            Message({ type: 'error', text: '发生错误', delay: 3000 })
        }
    },

}

const mutations = {
    saveSongListInfo(state, value) {
        state.songListInfo = value
    },
    saveSongList(state, value) {
        state.songList = value

    },
}

const state = {
    songListInfo: {},
    songList: []

}

export default {
    namespaced: true,
    actions,
    mutations,
    state
};