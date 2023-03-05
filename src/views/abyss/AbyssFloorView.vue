<template>
    <div class="abyss-floor">
        <div class="use">
            <p class="usetitle">角色使用率 - 第 {{ $route.query.floor }} 层</p>
        </div>
        <div class="rolebox">
            <div class="roleline">
                <div class="role" v-for="item in abyssRoleListInfo[`floor${$route.query.floor}RoleList`].slice(0, 8)">
                    <img class="role-img" v-lazy="item.role.roleAvatar" alt="item.role.roleName" title="Bannite">
                    <div class="desc">{{ item.roleUse }}%</div>
                </div>

            </div>
            <div class="roleline">
                <div class="role" v-for="item in abyssRoleListInfo[`floor${$route.query.floor}RoleList`].slice(8, 18)">
                    <img class="role-img" v-lazy="item.role.roleAvatar" alt="item.role.roleName" title="Bannite">
                    <div class="desc">{{ item.roleUse }}%</div>
                </div>

            </div>
            <div class="roleline">
                <div class="role" v-for="item in abyssRoleListInfo[`floor${$route.query.floor}RoleList`].slice(18, 30)">
                    <img class="role-img" v-lazy="item.role.roleAvatar" alt="item.role.roleName" title="Bannite">
                    <div class="desc">{{ item.roleUse }}%</div>
                </div>

            </div>
            <div class="roleline">
                <div class="role" v-for="item in abyssRoleListInfo[`floor${$route.query.floor}RoleList`].slice(30, 45)">
                    <img class="role-img" v-lazy="item.role.roleAvatar" alt="item.role.roleName" title="Bannite">
                    <div class="desc">{{ item.roleUse }}%</div>
                </div>
            </div>
            <div class="roleline">
                <div class="role" v-for="item in abyssRoleListInfo[`floor${$route.query.floor}RoleList`].slice(45)">
                    <img class="role-img" v-lazy="item.role.roleAvatar" alt="item.role.roleName" title="Bannite">
                    <div class="desc">{{ item.roleUse }}%</div>
                </div>
            </div>
        </div>
        <div class="teambox">
            <p class="teamtitle">
                常用阵容
            </p>
            <div class="team-container">
                <div class="team">
                    <div class="first">
                        First
                        Half
                    </div>
                    <div class="second">
                        Second
                        Half
                    </div>
                </div>
                <div class="team" v-for=" item in nowFloorRoleTeam.slice(0, 5)" :kay="item.teamId">
                    <div class="teamrank">
                        <div class="role" v-for="i in 4" :key="item[`teamRole${i}`].roleId">
                            <img class="role-img" v-lazy="item[`teamRole${i}`].roleAvatar"
                                :alt="item[`teamRole${i}`].roleName">
                        </div>

                        <div class="add">
                            +
                        </div>
                        <div class="role" v-for=" i in 4" :key="item[`teamRole${i + 4}`].roleId">
                            <img class="role-img" v-lazy="item[`teamRole${i + 4}`].roleAvatar"
                                :alt="item[`teamRole${i + 4}`].roleName">
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <div class="form-container">
            <div class="form" v-for="i in 8">
                <div class="input">
                    <input type="text" placeholder="搜索队伍" v-model.trim="keywords[`keywords${i}`]">
                    <ul class="topic">
                        <li v-for="item in filterLists[`filterList${i}`]" :key="item.roleId"
                            @mousedown="keywords[`keywords${i}`] = item.roleName">
                            {{ item.roleName }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="teambox">
            <div class="teamtitle">
                推荐阵容
            </div>
            <div class="team-container" v-if="recommendRoleTeamList.length != 0">
                <div class="team">
                    <div class="first">
                        First
                        Half
                    </div>
                    <div class="second">
                        Second
                        Half
                    </div>
                </div>
                <div class="team" v-for="item in recommendRoleTeamList">
                    <div class="role" v-for="i in 4" :key="item[`teamRole${i}`].roleId">
                        <img class="role-img" v-lazy="item[`teamRole${i}`].roleAvatar"
                            :alt="item[`teamRole${i}`].roleName">
                    </div>

                    <div class="add">
                        +
                    </div>
                    <div class="role" v-for="i in 4" :key="item[`teamRole${i + 4}`].roleId">
                        <img class="role-img" v-lazy="item[`teamRole${i + 4}`].roleAvatar"
                            :alt="item[`teamRole${i + 4}`].roleName">
                    </div>
                </div>
            </div>
            <NoData v-if="(recommendRoleTeamList.length == 0)"></NoData>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, reactive, watch, ref } from 'vue'
import { useStore } from 'vuex';
import NoData from '@/components/nodata/NoData.vue';


const _store = useStore()
const _router = useRouter()
const _route = useRoute()
const abyssRoleListInfo = computed(() => _store.state.abyss.abyssRoleListInfo)
const getAbyssRoleListInfo = () => {
    if (abyssRoleListInfo.value[`floor${_route.query.floor}RoleList`].length === 0)
        _store.dispatch('abyss/getAbyssRoleListByFloor', _route.query.floor)
}
getAbyssRoleListInfo()

const roleTeamListInfo = computed(() => _store.state.abyss.abyssRoleTeamListInfo)

const getAbyssRoleTeamList = () => {
    if (roleTeamListInfo.value.allRoleTeamList.length === 0) {
        _store.dispatch('abyss/getAbyssRoleTeamList')
    }
}
getAbyssRoleTeamList()

const nowFloorRoleTeam = computed(() => {
    return roleTeamListInfo.value[`roleTeamList${_route.query.floor}`].sort((item1, item2) => item2.teamRank - item1.teamRank)
})

/**
 * 获取角色列表
 */
const roleList = computed(() => _store.state.role.roleList)
if (roleList.value.length === 0) {
    _store.dispatch('role/getRoleList')
}

const keywords = reactive({
    keywords1: '',
    keywords2: '',
    keywords3: '',
    keywords4: '',
    keywords5: '',
    keywords6: '',
    keywords7: '',
    keywords8: '',
})
const filterLists = reactive({
})
const filterListInit = () => {
    for (let i = 1; i <= 8; i++) {
        filterLists[`filterList${i}`] = computed(() => {
            if (keywords[`keywords${i}`]) return roleList.value.filter(p => p.roleName.includes(keywords[`keywords${i}`]))
            return []
        })
    }
}
filterListInit()

const recommendRoleTeamList = ref([])
watch(keywords, (newValue) => {
    recommendRoleTeamList.value = []
    const keys = []
    Object.keys(newValue).forEach(item => {
        if (keywords[item]) keys.push(keywords[item])
    })
    if (keys.length !== 0) {
        roleTeamListInfo.value.allRoleTeamList.forEach(item => {
            const names = []
            for (let i = 1; i <= 8; i++) {
                names.push(item[`teamRole${i}`].roleName)
            }

            if (keys.every(item => names.includes(item))) {
                recommendRoleTeamList.value.push(item)
            }
        });
    } else {
        recommendRoleTeamList.value = []
    }

})


</script>

<style lang="scss" scoped>
.abyss-floor {
    $imgSize: 1.0427rem;

    .role-img {
        width: $imgSize;
        height: $imgSize;
        object-fit: cover;
    }

    .use {
        width: 100%;
        display: flex;
        justify-content: center;

        .usetitle {
            text-align: center;
            font-size: 35px;
            line-height: 1.2638rem;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            color: #d3bc8d;
        }

    }

    .rolebox {
        width: 90%;
        margin: 0 auto;
        background: gray;
        padding: .4739rem 0;
        border-radius: .1264rem;


        .roleline {
            width: 100%;
            height: auto;
            margin-bottom: 10px;
            display: flex;
            justify-content: center;

            .desc {
                display: inline;
                position: absolute;
                left: 0;
                bottom: 3px;
                width: 100%;
                height: 13px;
                text-align: center;
                font-size: 80%;
                background: #666;
                color: #ccc;
            }



        }
    }

    .role {
        display: inline;
        margin-right: 20px;
        position: relative;
    }


    .form-container {
        width: 90%;
        display: flex;
        margin: 0 auto;
        flex-wrap: wrap;
        gap: .316rem 0;
        margin-top: .5687rem;

        .form {
            width: 25%;
            height: auto;
            display: flex;
            justify-content: center;


            .input {
                width: 60%;
                height: 44.31px;
                border: 1px solid #ebebeb;
                border-radius: 4.0006px;
                position: relative;

                input:focus+ul {
                    display: flex !important;
                }

                input {
                    display: inline-block;
                    box-sizing: border-box;
                    width: 100%;
                    height: 100%;
                    padding-left: .2528rem;
                    border: none;
                    outline: none;
                    background-color: transparent;
                    color: #fff;

                }

                ul {
                    list-style: none;
                    display: flex;
                    position: absolute;
                    flex-direction: column;
                    width: 100%;
                    top: 0.7109rem;
                    left: 0;
                    border: .0158rem solid #eee;
                    border-radius: .0948rem;
                    background-color: #fff;
                    max-height: calc(.6319rem * 6);
                    overflow-y: auto;
                    display: none;
                    z-index: 22;

                    li {
                        width: 100%;
                        height: .6319rem;
                        padding-left: .2528rem;
                        box-sizing: border-box;
                        line-height: .6319rem;
                        color: gray;
                        cursor: pointer;

                        &:hover {
                            background-color: rgba(200, 200, 200, .1);
                        }
                    }

                }
            }
        }
    }

    .teambox {
        position: relative;
        width: 90%;
        margin: 0 auto;

        .teamtitle {
            text-align: center;
            font-size: 35px;
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            color: #d3bc8d;
            line-height: 1.5798rem;
        }

        .team-container {
            background: gray;
            padding: .4739rem 0;
            border-radius: .1264rem;

            .team {
                margin-bottom: .1264rem;
                width: 100%;
                font-size: 30px;
                display: flex;
                align-items: center;
                justify-content: center;

                .first,
                .second {
                    width: 50%;
                    line-height: .4739rem;
                    font-size: .3791rem;
                    text-align: center;
                    color: #333;
                    font-family: 'Times New Roman', Times, serif;
                }

                .add {
                    width: 25%;
                    text-align: center;
                    font-size: .3791rem;
                    line-height: $imgSize;
                }

                .teamrank {
                    width: 100%;
                    height: auto;
                    display: flex;
                    justify-content: center;


                }



            }


        }
    }
}
</style>