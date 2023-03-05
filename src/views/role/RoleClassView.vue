<template>
    <div class="role-class">
        <MyHeader></MyHeader>
        <div class="background"></div>
        <div class="role-class-container" ref="roleClass">
            <div class="role-class-left">
                <ul class="class-list">
                    <li class="one-class" v-for="(p, index) in classList" :key="index">
                        <div class="one-class-text" @click="changeIndex(index, $event)"><img
                                src="@/assets/role/role_class_xiaodian_icon.png" alt=""><span>{{ p.oneClass }}</span>
                        </div>
                        <transition name="bounce">
                            <ul class="second-class" v-show="index == nowIndex">
                                <li class="item" v-for="item in p.secondList"
                                    @click="roleListFilter(item.condition, item.cValue, $event)">
                                    <span>{{ item.secondClass }}</span>
                                </li>
                            </ul>
                        </transition>
                    </li>

                </ul>
            </div>
            <div class="role-class-right">
                <div class="search-container">
                    <div class="search-input" :class="{ 'active': inputIsActive }">
                        <input type="text" placeholder="查询角色名" @focus="inputIsActive = true"
                            @blur="inputIsActive = false" @keydown.enter="searchByName" @input="searchByName"
                            v-model.trim="roleName">
                        <svg t="1669367147925" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="4428" width="32" height="32" @click="searchByName">
                            <path
                                d="M912.072815 946.738335c-4.78498 0-9.56996-1.824555-13.220093-5.475711L650.662083 693.076078c-0.285502-0.285502-0.561795-0.579191-0.827855-0.883113l-6.979972-7.948019c-6.671956-7.594979-6.096858-19.11843 1.297552-26.012444 32.130791-29.958312 57.424874-65.413825 75.181283-105.379049 18.374486-41.35692 27.691689-85.472674 27.691689-131.122363 0-86.355787-33.628912-167.542854-94.691639-228.604558-61.062727-61.062727-142.249795-94.691639-228.604558-94.691639s-167.541831 33.628912-228.604558 94.691639c-61.062727 61.062727-94.691639 142.249795-94.691639 228.604558s33.628912 167.542854 94.691639 228.604558c61.062727 61.062727 142.249795 94.691639 228.604558 94.691639 26.15059 0 52.16508-3.130294 77.326133-9.301853 5.090948-1.353834 73.4038-19.189038 120.842229-14.809287 10.282181 0.948605 17.847483 10.05296 16.899902 20.335141s-10.047844 17.853623-20.335141 16.899902c-41.659819-3.845585-107.272165 13.571087-107.930151 13.747095-0.125867 0.033769-0.251733 0.065492-0.3776 0.097214-28.132734 6.91755-57.20998 10.425444-86.425372 10.425444-48.684816 0-95.922676-9.538237-140.402727-28.352745-42.953278-18.166755-81.523735-44.172035-114.644063-77.290317-33.119305-33.119305-59.123562-71.691809-77.29134-114.644063-18.813484-44.479027-28.352745-91.716888-28.352745-140.401704s9.53926-95.922676 28.352745-140.402727c18.167778-42.953278 44.172035-81.524758 77.29134-114.644063 33.119305-33.119305 71.690786-59.123562 114.644063-77.29134 44.480051-18.813484 91.717911-28.352745 140.402727-28.352745s95.922676 9.53926 140.401704 28.352745c42.953278 18.167778 81.524758 44.173059 114.644063 77.29134 33.118282 33.119305 59.123562 71.690786 77.29134 114.644063 18.813484 44.480051 28.351722 91.717911 28.351722 140.402727 0 50.912553-10.399861 100.136651-30.91101 146.305157-17.285688 38.906102-40.96704 73.973782-70.526263 104.47547l242.313791 242.310721c7.302313 7.30129 7.302313 19.138896 0.001023 26.440186C921.642774 944.912757 916.857794 946.738335 912.072815 946.738335z"
                                p-id="4429" fill="#ffffff"></path>
                            <path
                                d="M165.576059 421.887656c-0.696872 0-1.400906-0.038886-2.110057-0.118704-10.260691-1.152243-17.645892-10.404977-16.493649-20.666692 4.838192-43.080168 17.974373-83.934644 39.046295-121.429607 5.058203-9.002025 16.457834-12.19781 25.458835-7.139607 9.002025 5.058203 12.19781 16.45681 7.139607 25.458835-18.605753 33.108049-30.207999 69.202105-34.484396 107.282399C183.060269 414.827867 174.967964 421.887656 165.576059 421.887656z"
                                p-id="4430" fill="#ffffff"></path>
                        </svg>
                    </div>
                </div>

                <div class="role-list-show">
                    <ul>
                        <li v-for="p in filterList" :key="p.roleId" @click="gotoRoleDetail(p.roleId)">
                            <div class="avatar-container">
                                <div class="avatar">
                                    <div>
                                    </div>
                                    <img v-lazy="p.roleAvatar" :alt="p.roleName">
                                </div>
                                <span>{{ p.roleName }}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="empty" title="搜索为空" v-if="filterList.length == 0">
                    <img src="@/assets/role/noData.png" alt="搜索为空">
                    <h6>没找到o(╥﹏╥)o,换个别的吧!</h6>
                </div>

            </div>

        </div>
    </div>
</template>
<script>
import { ref, reactive, onMounted, toRefs, computed } from "vue";
import RoleClass2 from '@/views/role/RoleClass2.vue'
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MyHeader from "@/components/firstpage/MyHeader.vue";
export default {
    components: { RoleClass2, MyHeader },
    setup() {
        const _store = useStore()
        //全部角色信息
        const roleList = computed(() => _store.state.role.roleList)
        if (roleList.value.length == 0) {
            _store.dispatch('role/getRoleList')
        }
        const inputIsActive = ref(false)

        let nowIndex = ref(null)


        //菜单栏
        const classList = [
            {
                oneClass: "星级",
                secondList: [
                    {
                        condition: "roleStar",
                        cValue: 5,
                        secondClass: "5星角色"
                    },
                    {
                        condition: "roleStar",
                        secondClass: "4星角色",
                        cValue: 4
                    },

                ]
            },
            {
                oneClass: "角色定位",
                secondList: [
                    {
                        condition: "roleType",
                        secondClass: "单手剑",
                        cValue: "单手剑",
                    },
                    {
                        condition: "roleType",
                        secondClass: "双手剑",
                        cValue: "双手剑",
                    },
                    {
                        condition: "roleType",
                        secondClass: "长柄武器",
                        cValue: "长柄武器"
                    }, {
                        condition: "roleType",
                        secondClass: "法器",
                        cValue: "法器"
                    }, {
                        condition: "roleType",
                        secondClass: "弓箭",
                        cValue: "弓箭"
                    },


                ]
            },
            {
                oneClass: "角色属性",
                secondList: [
                    {
                        condition: "roleAttribute",
                        secondClass: "火属性",
                        cValue: "火"
                    },
                    {
                        condition: "roleAttribute",
                        secondClass: "水属性",
                        cValue: "水"
                    },
                    {
                        condition: "roleAttribute",
                        secondClass: "风属性",
                        cValue: "风",
                    },
                    {
                        condition: "roleAttribute",
                        secondClass: "雷属性",
                        cValue: "雷"
                    },
                    {
                        condition: "roleAttribute",
                        secondClass: "岩属性",
                        cValue: "岩"
                    },
                    {
                        condition: "roleAttribute",
                        secondClass: "冰属性",
                        cValue: "冰"
                    },

                ]
            },
            {
                oneClass: "地域",
                secondList: [
                    {
                        condition: "roleNation",
                        secondClass: "蒙德城",
                        cValue: "蒙德城"
                    },
                    {
                        condition: "roleNation",
                        secondClass: "璃月港",
                        cValue: "璃月港"
                    },
                    {
                        condition: "roleNation",
                        secondClass: "稻妻城",
                        cValue: "稻妻城"
                    },
                    {
                        condition: "roleNation",
                        secondClass: "须弥城",
                        cValue: "须弥城"
                    },
                    {
                        condition: "roleNation",
                        secondClass: "敬请期待",
                        cValue: ""
                    },

                ]
            },
        ]
        //点击一级菜单触发的函数
        const changeIndex = (index, e) => {
            if (index == nowIndex.value) {
                nowIndex.value = null

            } else {
                nowIndex.value = index
            }

        }
        let roleClass = ref(null)
        //除去激活态
        function removeActive() {
            let item = roleClass.value.querySelectorAll(".item");
            Array.from(item).forEach((e) => {
                e.classList.remove("active")
            })
        }
        //添加激活态
        function active(e) {
            removeActive()
            e.classList.add("active")
        }
        //特定角色信息
        const roleFilterList = reactive({
            filterList: roleList.value,
            condition: '',
            cValue: '',
            roleName: ''
        });

        //根据用于的选择过滤
        const rolesFilter = (condition, value) => {
            return roleList.value.filter(p => p[condition].toString().includes(value.toString()))
        }
        roleFilterList.filterList = computed(() => {
            if (roleFilterList.condition && roleFilterList.cValue) {
                return rolesFilter(roleFilterList.condition, roleFilterList.cValue)
            }
            return roleList.value
        })
        //用户点击选择改变的总函数
        const roleListFilter = (condition, cValue, event) => {
            roleFilterList.condition = condition
            roleFilterList.cValue = cValue
            active(event.currentTarget)
        }
        const searchByName = () => {
            roleFilterList.condition = 'roleName'
            roleFilterList.cValue = roleFilterList.roleName
            removeActive()
        }

        // 进入详情页
        const _router = useRouter()
        const gotoRoleDetail = (roleId) => {
            _router.push({
                name: 'roleDetail',
                query: {
                    roleId
                }

            })

        }

        return {
            nowIndex,
            classList,
            changeIndex,
            roleClass,
            inputIsActive,
            roleListFilter,
            ...toRefs(roleFilterList),
            searchByName,
            gotoRoleDetail

        }
    }
}
</script>

<style lang="scss" scoped>
.role-class {

    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .background {
        position: absolute;
        width: 100%;
        height: 100vh;
        left: 0;
        top: 0;
        filter: brightness(90%);
        z-index: -1;
        animation: changeBackground 200s linear infinite;

    }

    @keyframes changeBackground {


        0% {
            background: url(@/assets/role/2.png) center center /cover no-repeat;
        }

        30% {
            background: url(@/assets/role/3.png) center center /cover no-repeat;
        }

        60% {
            background: url(@/assets/role/4.png) center center /cover no-repeat;
        }

        80% {
            background: url(@/assets/role/5.png) center center /cover no-repeat;
        }

        100% {
            background: url(@/assets/role/1.png) center center /cover no-repeat;
        }

    }


    .role-class-container {
        display: flex;
        height: 100%;



        .role-class-left {
            position: relative;
            height: 100%;


            &::before {
                content: '';
                position: absolute;
                display: block;
                width: 3px;
                height: 100vh;
                left: 18px;
                background: rgba(255, 255, 255, 0.14);
            }

            .class-list {

                list-style: none;
                width: 200px;
                margin-top: 120px;

                .one-class {
                    .one-class-text {
                        display: flex;
                        align-items: center;
                        height: 56px;
                        cursor: pointer;

                        img {
                            width: 40px;
                        }

                        span {
                            color: white;
                            font-size: 19px;
                            font-family: "PingFang SC";
                            letter-spacing: 0.3px;

                        }
                    }

                    .second-class {
                        list-style: none;
                        margin-left: 32px;

                        .item {

                            height: 40px;
                            line-height: 40px;
                            background: url(@/assets/role/role_class_xiaodian_icon.png) -14px center no-repeat;
                            background-size: 40px;
                            padding-left: 28px;
                            cursor: pointer;

                            &:hover {
                                background: url(@/assets/role/role_class_dian_icon.png) -27px center no-repeat;
                            }

                            &.active {
                                background: url(@/assets/role/role_class_dian_icon.png) -27px center no-repeat;
                            }


                            span {
                                font-size: 16px;
                                color: white;
                                letter-spacing: 0.3px;

                            }
                        }

                    }



                }
            }

        }

        .role-class-right {
            width: calc(100% - 200px);
            padding: .9479rem 0;
            height: 100%;
            box-sizing: border-box;
            overflow-y: auto;


            &::-webkit-scrollbar {
                width: .079rem;
                border-radius: .079rem;
                background-color: rgba(100, 100, 100, 0.4);
            }

            &::-webkit-scrollbar-thumb {
                background-color: skyblue;
                border-radius: .079rem;
                width: .079rem;
            }

            .search-container {
                width: 100%;
                height: 1.5798rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                box-sizing: border-box;
                padding-right: 7%;


                .search-input {
                    width: 3.1596rem;
                    height: .4739rem;
                    border: .0158rem solid #fff;
                    border-radius: .237rem;
                    position: relative;
                    transition: all 0.3s linear;

                    &.active {
                        box-shadow: 2px 2px 4px rgba(255, 20, 255, .8),
                            -2px -2px 4px rgba(255, 20, 255, .8);
                    }

                    input {
                        background-color: transparent;
                        width: 100%;
                        height: 100%;
                        box-sizing: border-box;
                        display: inline-block;
                        padding-left: .1264rem;
                        color: #fff;
                        border: none;
                        outline: none;
                        font-size: .2212rem;
                        letter-spacing: .0079rem;

                    }

                    ::-webkit-input-placeholder {
                        color: #fff;
                    }

                    svg {
                        position: absolute;
                        top: 2px;
                        right: .2528rem;
                        width: .4423rem;
                        height: .4423rem;
                        cursor: pointer;
                    }
                }

            }

            .role-list-show {
                width: 100%;

                ul {
                    width: 100%;
                    height: 100%;
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;

                    gap: .4739rem .6319rem;

                    li {
                        height: 165px;


                        .avatar-container {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            cursor: pointer;



                            .avatar {
                                width: 120px;
                                height: 120px;

                                margin-bottom: 10px;
                                position: relative;

                                div {
                                    position: absolute;
                                    background: url(@/assets/role/role_yuan_jinglingtu.png);
                                    background-position: -103px 0;
                                    background-repeat: no-repeat;
                                    width: 100%;
                                    height: 100%;
                                    left: 0;
                                    right: 0;

                                }

                                img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    border-radius: 50%;

                                }
                            }

                            span {
                                font-size: 16px;
                                color: white;
                                letter-spacing: 0.3px;
                                font-family: PingFang SC;

                            }
                        }
                    }
                }

            }

            .empty {
                width: 5.5292rem;
                margin: .4739rem auto;

                h6 {
                    color: #fff;
                    text-align: center;
                    font-size: .3949rem;
                }

                img {
                    width: 100%;
                }
            }

        }

    }

    .bounce-enter-active {
        animation: move 0.5s ease-out;
    }

    .bounce-leave-active {
        animation: move 0.1s reverse;
    }

    @keyframes move {
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }

    }
}
</style>
