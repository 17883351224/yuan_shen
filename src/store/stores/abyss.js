import {
    reqAbyssRoleListByFloor,
    reqAbyssRoleTeamList
} from "@/api";
import Message from "@/plugins/message";
const actions = {
    async getAbyssRoleListByFloor({ commit }, floor) {
        const result = await reqAbyssRoleListByFloor(floor);
        if (result.code == 200) {
            commit("saveAbyssRoleListInfo", { data: result.data, floor });
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },
    async getAbyssRoleTeamList({ commit }) {
        const result = await reqAbyssRoleTeamList();
        if (result.code == 200) {
            commit("saveAbyssRoleTeamInfo", result.data);
        } else {
            Message({ type: "error", text: result.message, delay: 3000 });
        }
    },

};

const mutations = {
    saveAbyssRoleListInfo(state, { data, floor }) {
        state.abyssRoleListInfo[`floor${floor}RoleList`] = data
    },
    saveAbyssRoleTeamInfo(state, value) {
        state.abyssRoleTeamListInfo.allRoleTeamList = value
        value.forEach(item => {
            state.abyssRoleTeamListInfo[`roleTeamList${item.floor}`].push(item)
        })
    }
};

const state = {
    abyssRoleListInfo: {
        floor9RoleList: [],
        floor10RoleList: [],
        floor11RoleList: [],
        floor12RoleList: []
    },
    abyssRoleTeamListInfo: {
        allRoleTeamList: [],
        roleTeamList9: [],
        roleTeamList10: [],
        roleTeamList11: [],
        roleTeamList12: [],

    }
};

const getters = {};

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters,
};
