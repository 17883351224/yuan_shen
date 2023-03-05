<!-- <template>
    <div class="main">
        <div class="role-class-container" ref="roleClass">
            <div class="role-class-left">
                <ul class="class-list">
                    <li class="one-class" v-for="(p, index) in classList" :key="index">
                        <div class="one-class-text" @click="changeIndex(index, $event)">
                            <span>{{ p.oneClass }}</span>
                        </div>
                        <transition name="bounce">
                            <ul class="second-class" v-show="index == nowIndex">
                                <li class="item" v-for="i in p.secondList" :condition="i.condition" :cValue="i.cValue">
                                    <svg t="1664541763186" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="5420" width="35" height="48">
                                        <path
                                            d="M853.333333 507.733333H128v42.666667h733.866667l-145.066667 145.066667 29.866667 29.866666 192-192L746.666667 341.333333l-29.866667 29.866667 136.533333 136.533333z"
                                            fill="#2c2c2c" p-id="5421"></path>
                                    </svg>
                                    <span>{{ i.secondClass }}</span>
                                </li>
                            </ul>
                        </transition>
                    </li>
                    <li class="one-class">
                        <div class="serch-container">
                            <input type="text" placeholder="输入角色名字" />
                            <svg t="1664544548733" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="1377" width="28" height="28">
                                <path
                                    d="M865.2 830.1L745.5 710.5c21.4-25.5 38.8-53.9 51.8-84.7 17.5-41.3 26.3-85.2 26.3-130.4s-8.9-89.1-26.3-130.4c-16.9-39.9-41-75.7-71.8-106.4-30.7-30.7-66.6-54.9-106.4-71.8-41.3-17.5-85.2-26.3-130.4-26.3s-89.1 8.9-130.4 26.3c-39.9 16.9-75.7 41-106.4 71.8-30.7 30.7-54.9 66.6-71.8 106.4-17.5 41.3-26.3 85.2-26.3 130.4s8.9 89.1 26.3 130.4c16.9 39.9 41 75.7 71.8 106.4 30.7 30.7 66.6 54.9 106.4 71.8 41.3 17.5 85.2 26.3 130.4 26.3s89.1-8.9 130.4-26.3c33.6-14.2 64.2-33.6 91.4-57.7l119.2 119.2c4.9 4.9 11.3 7.3 17.7 7.3s12.8-2.4 17.7-7.3c9.8-9.8 9.8-25.6 0.1-35.4z m-376.4-49.8c-157 0-284.8-127.8-284.8-284.9s127.8-284.9 284.9-284.9 284.9 127.8 284.9 284.9-127.9 284.9-285 284.9z"
                                    p-id="1378" fill="#515151"></path>
                            </svg>
                        </div>
                    </li>


                </ul>
            </div>
            <div class="role-class-right">
                <div class="role-list-show">
                    <ul>
                        <li v-for="(p, index) in roleCardListSlice" :key="index">
                            <div class="avatar-container">
                                <div class="avatar">
                                    <div>
                                    </div>
                                    <img :src="p.imgSrc" :alt="p.name">
                                </div>
                                <span>{{ p.name }}</span>
                            </div>
                        </li>

                    </ul>
                </div>
                <div class="operation-container">
                    <div class="cut-page-container" v-show="totalCount > pageSize">
                        <n-pagination :display-order="['pages', 'quick-jumper']" :item-count="totalCount"
                            :default-page-size="pageSize" show-quick-jumper show-size-picker class="cut-page"
                            v-model:page="nowPage">
                            <template #suffix>
                                <div style="text-align: center; padding:0 6px ;font-size: 13px;">页</div>
                            </template>
                            <template #goto>
                                <div style="font-size: 13px;">跳转到</div>
                            </template>
                        </n-pagination>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { ref, reactive, onMounted, toRefs, computed } from "vue";
export default {
    setup() {
        //全部角色信息
        const roleCardList = reactive([
            {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            },
            {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }, {
                imgSrc: require("../../assets/role/bachongshenzi.jpeg"),
                name: "八重神子",
                nickName: '狐狸小姐',
                introduction: "鸣神大社的大巫女、狐之血脉的延续者、「永恒」的眷属与友人…以及，轻小说出版社「八重堂」的恐怖总编。有着多重身份的神秘宫司，凡人或许永远无法了解她的真面目与真心",
                herf: "#",
                sex: "女",
                starts: 5,
                roleDefinition: 'C位',
                territory: "稻妻城",
                property: "雷属性",
            }

        ])
        //特定角色信息
        const roleCardFilterList = reactive({
            filterList: roleCardList
        });
        let nowIndex = ref(null)
        //分页信息
        const cutPage = reactive({
            pageSize: 5,
            nowPage: 1,
            totalCount: roleCardFilterList.filterList.length,
            roleCardListSlice: []
        })
        //计算总条数
        cutPage.totalCount = computed(() => roleCardFilterList.filterList.length)
        //当前页展示的片段
        cutPage.roleCardListSlice = computed(() => roleCardFilterList.filterList.slice((cutPage.nowPage - 1) * cutPage.pageSize, (cutPage.nowPage - 1) * cutPage.pageSize + cutPage.pageSize))
        //菜单栏
        const classList = [
            {
                oneClass: "星级",
                secondList: [
                    {
                        condition: "starts",
                        cValue: 5,
                        secondClass: "5星角色"
                    },
                    {
                        condition: "starts",
                        secondClass: "4星角色",
                        cValue: 4
                    },

                ]
            },
            {
                oneClass: "角色定位",
                secondList: [
                    {
                        condition: "roleDefinition",
                        secondClass: "单手剑",
                        cValue: "单手剑",
                    },
                    {
                        condition: "roleDefinition",
                        secondClass: "双手剑",
                        cValue: "双手剑",
                    },
                    {
                        condition: "roleDefinition",
                        secondClass: "长柄武器",
                        cValue: "长柄武器"
                    }, {
                        condition: "roleDefinition",
                        secondClass: "法器",
                        cValue: "法器"
                    }, {
                        condition: "roleDefinition",
                        secondClass: "弓箭",
                        cValue: "弓箭"
                    },


                ]
            },
            {
                oneClass: "角色属性",
                secondList: [
                    {
                        condition: "property",
                        secondClass: "火属性",
                        cValue: "火属性"
                    },
                    {
                        condition: "property",
                        secondClass: "水属性",
                        cValue: "水属性"
                    },
                    {
                        condition: "property",
                        secondClass: "风属性",
                        cValue: "风属性",
                    },
                    {
                        condition: "property",
                        secondClass: "雷属性",
                        cValue: "雷属性"
                    },
                    {
                        condition: "property",
                        secondClass: "岩属性",
                        cValue: "岩属性"
                    },
                    {
                        condition: "property",
                        secondClass: "冰属性",
                        cValue: "冰属性"
                    },

                ]
            },
            {
                oneClass: "地域",
                secondList: [
                    {
                        condition: "territory",
                        secondClass: "蒙德城",
                        cValue: "蒙德城"
                    },
                    {
                        condition: "territory",
                        secondClass: "璃月港",
                        cValue: "璃月港"
                    },
                    {
                        condition: "territory",
                        secondClass: "稻妻城",
                        cValue: "稻妻城"
                    },
                    {
                        condition: "territory",
                        secondClass: "须弥城",
                        cValue: "须弥城"
                    },
                    {
                        condition: "territory",
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
            let itemSvg = Array.from(roleClass.value.querySelectorAll(".item svg"))
            let itemSpan = Array.from(roleClass.value.querySelectorAll(".item span"))
            itemSvg.concat(itemSpan).forEach((e) => {
                e.classList.remove("active")
            })
        }
        //添加激活态
        function active() {
            removeActive()
            this.querySelector('span').classList.add('active')
            this.querySelector('svg').classList.add("active")
        }
        //二级菜单添加点击事件
        onMounted(() => {
            let item = roleClass.value.querySelectorAll(".item");
            Array.from(item).forEach((e) => {
                e.addEventListener("click", roleListFilter)
            })
        })
        //根据用于的选择过滤
        const rolesFilter = (originalList, condition, value) => {
            return Array.from(originalList).filter(p => p[condition] == value)
        }
        //用户点击选择改变的总函数
        function roleListFilter() {
            active.apply(this)
            cutPage.nowPage = 1
            roleCardFilterList.filterList = rolesFilter(roleCardList, this.getAttribute("condition"), this.getAttribute("cValue"))
        }

        return {
            nowIndex,
            classList,
            changeIndex,
            roleClass,
            ...toRefs(cutPage),
            ...toRefs(roleCardFilterList)
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    // background: url(@/assets/role/background_3jpg.jpg) bottom center no-repeat;
    // background: url(@/assets/world/tiwatei.png) center center/ cover no-repeat;
    width: 100%;
    height: 100vh;
    overflow: hidden;



    .role-class-container {
        display: flex;
        height: 100%;

        .role-class-left {
            position: relative;
            height: 100%;
            margin-left: 180px;



            .class-list {

                list-style: none;
                width: 180px;
                margin-top: 100px;


                .one-class {
                    margin-left: 20px;

                    .one-class-text {
                        display: flex;
                        align-items: center;
                        height: 56px;
                        cursor: pointer;

                        &::before {
                            content: "";
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            background-color: rgba($color: gray, $alpha: 0.5);
                            margin-right: 8px;
                        }

                        span {
                            color: white;
                            font-size: 19px;
                            font-family: "PingFang SC";
                            letter-spacing: 0.3px;
                            color: black
                        }
                    }

                    .serch-container {
                        display: flex;
                        align-items: center;
                        margin-right: 10px;
                        border-radius: 6px;
                        margin-top: 30px;
                        border: 1px solid rgba($color: gray, $alpha: 0.5);

                        input {
                            border: none;
                            outline: none;
                            width: 120px;
                            height: 25px;
                            padding-left: 8px;
                            background-color: transparent;
                        }

                        svg {
                            opacity: 0.4;
                            cursor: pointer;

                            &:hover {
                                opacity: 1;
                            }
                        }
                    }

                    .second-class {
                        list-style: none;


                        .item {

                            height: 40px;
                            line-height: 40px;
                            background-size: 40px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;

                            svg {
                                margin-left: 8px;
                                opacity: 0;
                                transition: opacity 0.5s;

                                &.active {
                                    opacity: 1;
                                }
                            }


                            &:hover svg {
                                opacity: 1;
                            }

                            &:hover span {
                                transform: scale(1.2)
                            }





                            span {
                                font-size: 16px;

                                letter-spacing: 0.3px;
                                color: black;
                                margin-left: 8px;
                                transition: all 0.5s;

                                &.active {
                                    transform: scale(1.2)
                                }
                            }
                        }

                    }



                }
            }

        }

        .role-class-right {
            width: calc(100% - 200px);
            height: 100%;
            padding: 30px 20px 30px 30px;
            box-sizing: border-box;

            .role-list-show {
                width: 100%;
                height: 85%;

                ul {
                    width: 100%;
                    height: 100%;
                    list-style: none;

                    li {
                        height: 165px;
                        margin-bottom: 30px;
                        margin-right: 30px;
                        display: inline-block;


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
                                font-size: 17px;
                                color: white;
                                letter-spacing: 0.3px;
                                font-family: PingFang SC;
                                color: black;
                            }
                        }
                    }
                }

            }

            .operation-container {
                width: 100%;
                height: 15%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;

                .cut-page-container {
                    transform: scale(1.5);

                    // :deep(.n-pagination .n-pagination-item.n-pagination-item--button) {
                    //     color: white;
                    // }

                    // :deep(.n-pagination .n-pagination-item) {
                    //     color: white;
                    // }

                    // :deep(.n-pagination .n-pagination-item.n-pagination-item--disabled) {
                    //     background-color: red;
                    // }

                    // :deep(.n-pagination .n-pagination-item:not(.n-pagination-item--disabled).n-pagination-item--active) {
                    //     border: 1px solid #fff;
                    // }
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
</style> -->
