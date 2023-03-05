<template>
    <div class="my-level">
        <header>
            <span class="active">我的等级</span>
        </header>
        <section class="level-info">
            <div class="left">
                <div class="levle-container">
                    <img :src="require(`@/assets/user/levelMark${userInfo.userLevel}.png`)" alt="level">
                </div>
                <div class="text-container">
                    <p><span>今日获得经验</span> <span>+0</span></p>
                    <p class="detail">获取明细></p>
                </div>
            </div>
            <div class="right">
                <div class="now-level-text"><span>单前等级</span> <span>升级还需：24经验值</span></div>
                <div class="now-level-icon">
                    <span :style="`background-color:${useUserLevelColor(userInfo.userLevel)}`">Lv.{{ userInfo.userLevel
                    }}</span>
                    <div class="process-container">
                        <div class="process"></div>
                    </div>
                    <span :style="`background-color:${useUserLevelColor(userInfo.userLevel + 1)}`">Lv.{{
                            userInfo.userLevel + 1
                    }}</span>
                </div>
            </div>
        </section>
        <section class="how-process">
            <p>如何成长</p>
            <table>
                <tr>
                    <th>任务</th>
                    <th>经验值</th>
                    <th>今日进度</th>
                </tr>
                <tbody>
                    <tr v-for="item in list" :key="item.name">
                        <td>{{ item.name }}</td>
                        <td>+{{ item.value }}</td>
                        <td>
                            <div class="process-container">
                                <div class="process"></div>
                            </div>
                            <span>0/{{ item.count }}次</span>
                        </td>
                    </tr>
                </tbody>

            </table>
        </section>

        <section class="level-class">
            <p>等级成长</p>
            <table>
                <tr>
                    <th>等级</th>
                    <th>升级所需经验值</th>
                </tr>
                <tbody>
                    <tr v-for="item in levelList" :key="item.level">
                        <td><span :style="`background-color:${useUserLevelColor(item.level)}`">Lv.{{ item.level
                        }}</span>
                        </td>
                        <td>+{{ item.need }}</td>
                    </tr>
                </tbody>

            </table>
        </section>
    </div>
</template>

<script setup>
import { useUserLevelColor } from '@/hooks/user/useUserInformation';
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
const _store = useStore()
const userInfo = computed(() => _store.state.user.userInformations)
const list = [
    {
        name: '签到',
        value: 5,
        count: 1,
    },
    {
        name: '发帖',
        value: 5,
        count: 2,
    },

    {
        name: '发评论',
        value: 3,
        count: 3,
    },

    {
        name: '点赞',
        value: 1,
        count: 10,
    },
    {
        name: '被点赞',
        value: 2,
        count: 10,
    },
    {
        name: '被回复',
        value: 2,
        count: 10,
    },

    {
        name: '被收藏',
        value: 2,
        count: 10,
    },
]
const levelList = [
    {
        level: 1,
        need: 0
    },
    {
        level: 2,
        need: 30
    },
    {
        level: 3,
        need: 110
    },
    {
        level: 4,
        need: 290
    },
    {
        level: 5,
        need: 592
    },
    {
        level: 6,
        need: 1168
    },
    {
        level: 7,
        need: 2190
    },
    {
        level: 8,
        need: 2200
    },
    {
        level: 9,
        need: 2300
    },
    {
        level: 10,
        need: 2400
    },
    {
        level: 11,
        need: 2600
    },
    {
        level: 12,
        need: 2800,
    },
    {
        level: 13,
        need: 3400
    },
    {
        level: 14,
        need: 3800
    },
    {
        level: 15,
        need: 4400
    },
    {
        level: 16,
        need: 5000
    },
]

</script>

<style lang="scss" scoped>
.my-level {
    header {
        height: .7899rem;
        padding-left: .316rem;
        display: flex;
        color: #333;
        align-items: center;
        border-bottom: .0158rem solid #eee;
        gap: .4107rem;
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 20;
        background-color: #fff;

        span {
            cursor: pointer;
            display: inline-block;
            height: 100%;
            box-sizing: border-box;
            line-height: .7899rem;
            padding: 0 .0474rem;

            &.active {
                color: #00c3ff;
                font-weight: 560;
                border-bottom: .0474rem solid #00c3ff;
            }

        }
    }

    .level-info {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        min-height: 2.5276rem;


        .left {
            display: flex;
            width: 50%;
            box-sizing: border-box;
            gap: .4107rem;
            border-right: .0158rem solid #eee;

            .levle-container {
                width: 1.1532rem;
                height: 1.2638rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            p {
                line-height: .4739rem;
            }

            .text-container {
                span {
                    font-size: .237rem;
                    color: gray;

                    &:last-of-type {
                        margin-left: .1264rem;
                        color: orange;
                    }
                }

                .detail {
                    font-size: .2212rem;
                    color: #00c3ff;
                    cursor: pointer;
                }
            }
        }

        .right {
            width: 50%;
            padding: 0 3%;
            display: flex;
            box-sizing: border-box;
            flex-direction: column;
            align-items: center;
            gap: .2528rem;

            .now-level-text {
                width: 100%;
                display: flex;
                justify-content: space-around;

                span {
                    font-size: .2212rem;

                    &:last-of-type {
                        color: gray;
                    }
                }
            }

            .now-level-icon {
                width: 100%;
                display: flex;
                align-items: center;


                .process-container {
                    margin: 0 .158rem;
                    flex: 1;
                    height: .158rem;
                    border-radius: .158rem;
                    overflow: hidden;
                    background-color: rgba(200, 200, 200, .5);

                    .process {
                        height: 100%;
                        width: 50%;
                        border-radius: .158rem;
                        background-color: #FFBF00;
                    }
                }

                span {
                    font-size: .1896rem;
                    color: #fff;
                    background-color: #00c3ff;
                    padding: 0 .0395rem;
                    border-radius: .0158rem;
                }
            }
        }
    }

    .how-process,
    .level-class {
        width: 90%;
        margin: 0 auto;

        >p {
            line-height: .9479rem;
        }

        table {
            width: 100%;
            box-sizing: border-box;
            border-collapse: collapse;
            table-layout: fixed;
            border-bottom: .0158rem solid #eee;
            border-right: .0158rem solid #eee;

            tr {
                width: 100%;

                th {
                    height: .6319rem;
                    background-color: #EFF6FF;
                    box-sizing: border-box;
                    border-left: 1px solid #eee;
                    border-top: 1px solid #eee;

                    &:nth-of-type(1) {
                        width: 30%;


                    }

                    &:nth-of-type(2) {
                        width: 20%;

                    }

                    &:nth-of-type(3) {
                        width: 50%;

                    }
                }
            }

            tbody {
                tr {
                    width: 100%;

                    &:nth-child(2n) {
                        background-color: #FAFBFF;
                    }
                }
            }

            td {
                box-sizing: border-box;
                text-align: center;
                height: .6319rem;
                border-left: 1px solid #eee;
                border-top: 1px solid #eee;


                span {
                    font-size: .2212rem;
                }

                &:nth-of-type(2) {

                    color: orange;

                }

                .process-container {
                    display: inline-block;
                    width: 35%;
                    height: .0948rem;
                    margin-right: .1264rem;
                    background-color: rgba(200, 200, 200, .5);
                    border-radius: .237rem;
                    overflow: hidden;

                    .process {
                        height: 100%;
                        width: 0%;
                        border-radius: .158rem;
                        background-color: #FFBF00;
                    }
                }
            }
        }
    }

    .level-class {
        margin-top: .4739rem;

        td,
        th {
            width: 50% !important;

            span {
                font-size: .1896rem;
                padding: 0 .0395rem;
                border-radius: .0158rem;
                color: #fff;
            }
        }

    }
}
</style>