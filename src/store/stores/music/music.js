
import Message from "@/plugins/message"
import { reqMusicLyric } from '@/api/music'
import { START_YEAR } from "naive-ui/es/date-picker/src/config"
const actions = {
    async getMusicLyric({ commit }, id) {
        const result = await reqMusicLyric(id)
        if (result.code === 200) {
            commit('saveMusciLyric', { id, lyric: result.lrc.lyric })
        } else {
            Message({ 'type': 'error', text: '获取歌词错误', delay: 2000 })
        }
    }
}

const mutations = {
    changeSataus(state, value) {
        state.currentInfo.isPlaying = value;
    },
    changeCurrentMusicList(state, { list, index, songListInfo }) {
        state.currentMusicList = list.map((item) => {
            item.source = songListInfo.name
            return item
        })

        state.currentInfo.playIndex = index
        state.songListInfo = songListInfo
    },
    changeDrawerIsShow(state, value) {
        state.currentInfo.drawerIsShow = value
    },
    saveMusciLyric(state, value) {
        state.currentInfo.lyricInfo = value
    },
    saveCurrentTime(state, value) {
        state.currentInfo.currentTime = value
    },
    addOrSubPlayIndex(state, value) {
        let index = state.currentInfo.playIndex + value
        if (index < 0) {
            state.currentInfo.playIndex = state.currentMusicList.length - 1;
        } else if (index >= state.currentMusicList.length) {
            state.currentInfo.playIndex = 0
        } else {
            state.currentInfo.playIndex = index
        }

    },
    changePlayIndex(state, value) {
        state.currentInfo.playIndex = value
    },
    pushSongToCurrentMusicList(state, value) {

        state.currentMusicList = state.currentMusicList.filter((item) => item.id !== value.id)
        state.currentMusicList.push(value)
        state.currentInfo.playIndex = state.currentMusicList.length - 1
    },
    changeCurrentListDrawerIsShow(state, value) {
        state.currentInfo.currentListDrawerIsShow = value
    }

}

const state = {

    currentMusicList: [],
    currentInfo: {
        isPlaying: false,
        playIndex: -1,
        drawerIsShow: false,
        currentListDrawerIsShow: false,
        lyricInfo: {},
        currentTime: 0,
        // 0 单曲循环，1表示列表循环
        playMethod: 1
    }

}

export default {
    namespaced: true,
    actions,
    mutations,
    state
};