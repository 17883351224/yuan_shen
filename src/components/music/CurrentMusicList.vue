<template>
    <div class="current-music-list" @click.stop>
        <header>
            <p class="title">当前播放</p>
            <p class="info">
                <span class="count">总{{ currentMusicList.length }}首</span>
                <svg t="1668836582740" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="10939" width="32" height="32">
                    <path
                        d="M743.424 964.608c-14.336 0-26.624-4.096-38.912-10.24l-188.416-104.448-188.416 104.448c-26.624 14.336-59.392 12.288-86.016-4.096-26.624-18.432-38.912-51.2-34.816-83.968l36.864-221.184v-2.048l-153.6-155.648c-22.528-22.528-30.72-55.296-20.48-86.016s34.816-51.2 65.536-55.296L348.16 311.296l94.208-200.704c14.336-28.672 43.008-47.104 73.728-47.104 32.768 0 59.392 18.432 73.728 47.104l94.208 200.704 210.944 32.768c30.72 4.096 55.296 26.624 65.536 55.296 10.24 30.72 2.048 63.488-20.48 86.016l-153.6 155.648v2.048l36.864 221.184c6.144 32.768-8.192 63.488-34.816 83.968-12.288 10.24-28.672 16.384-45.056 16.384z m-227.328-819.2l-94.208 200.704c-12.288 24.576-34.816 43.008-61.44 47.104L147.456 423.936v4.096l153.6 155.648c18.432 18.432 26.624 47.104 22.528 73.728L286.72 878.592v2.048l188.416-104.448c24.576-14.336 53.248-14.336 77.824 0l188.416 104.448v-2.048l-36.864-221.184c-4.096-26.624 4.096-53.248 22.528-73.728l153.6-155.648v-2.048-2.048l-210.944-32.768c-26.624-4.096-49.152-20.48-61.44-47.104l-92.16-198.656z"
                        fill="#8a8a8a" p-id="10940"></path>
                    <path
                        d="M516.096 698.368c-67.584 0-122.88-55.296-122.88-122.88 0-22.528 18.432-40.96 40.96-40.96s40.96 18.432 40.96 40.96 18.432 40.96 40.96 40.96 40.96-18.432 40.96-40.96 18.432-40.96 40.96-40.96 40.96 18.432 40.96 40.96c0 67.584-55.296 122.88-122.88 122.88z"
                        fill="#8a8a8a" p-id="10941"></path>
                </svg>
                <span class="collect">收藏全部</span>
                <span class="clean">清空列表</span>
            </p>
        </header>
        <div class="line"></div>
        <div class="list-container">
            <table>
                <tr v-for="(item, index) in currentMusicList" :key="item.id"
                    :class="{ 'active': currentInfo.playIndex == index }" @click="changePlayIndex(index)">
                    <td>{{ item.name }}</td>
                    <td>
                        <span v-for="(auth, index) in item.ar" :key="auth.id">
                            {{ auth.name }}
                            <span v-if="index < item.ar.length - 1">/</span>
                        </span>
                    </td>
                    <td>
                        <div :title="item.source">
                            <svg t="1668837033491" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="15714" width="32" height="32">
                                <path
                                    d="M704 605.866667c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733334l251.733334-251.733333c8.533333-8.533333 12.8-17.066667 12.8-29.866667 0-12.8-4.266667-25.6-12.8-34.133333l-119.466667-119.466667c-17.066667-17.066667-46.933333-17.066667-64 0l-251.733333 251.733334c-17.066667 17.066667-42.666667 17.066667-59.733334 0s-17.066667-42.666667 0-59.733334L682.666667 38.4c51.2-51.2 132.266667-51.2 183.466666 0l119.466667 119.466667c25.6 25.6 38.4 55.466667 38.4 93.866666 0 34.133333-12.8 68.266667-38.4 93.866667L733.866667 597.333333c-8.533333 4.266667-17.066667 8.533333-29.866667 8.533334zM251.733333 1024c-34.133333 0-68.266667-12.8-93.866666-38.4L38.4 866.133333C12.8 840.533333 0 810.666667 0 772.266667c0-34.133333 12.8-68.266667 38.4-93.866667L290.133333 426.666667c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733333l-251.733334 251.733333c-8.533333 12.8-12.8 21.333333-12.8 34.133334 0 12.8 4.266667 25.6 12.8 34.133333l119.466667 119.466667c17.066667 17.066667 46.933333 17.066667 64 0l251.733333-251.733334c17.066667-17.066667 42.666667-17.066667 59.733334 0s17.066667 42.666667 0 59.733334L341.333333 985.6c-25.6 25.6-55.466667 38.4-89.6 38.4z"
                                    p-id="15715" fill="#8a8a8a"></path>
                                <path
                                    d="M337.066667 729.6c-12.8 0-21.333333-4.266667-29.866667-12.8-17.066667-17.066667-17.066667-42.666667 0-59.733333l349.866667-349.866667c17.066667-17.066667 42.666667-17.066667 59.733333 0s17.066667 42.666667 0 59.733333l-349.866667 349.866667c-8.533333 8.533333-17.066667 12.8-29.866666 12.8z"
                                    p-id="15716" fill="#8a8a8a"></path>
                            </svg>
                        </div>
                    </td>
                    <td>
                        <span>{{ timeFormate(item.dt) }}</span>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script setup>
import { timeFormate } from '@/hooks/format';
import { useStore } from 'vuex';
import { computed, onBeforeUnmount } from 'vue';

const _store = useStore()
const currentMusicList = computed(() => _store.state.music.currentMusicList)
const currentInfo = computed(() => _store.state.music.currentInfo)
/**
 * 关闭当前播放列表
 */
const closeCurrentList = () => {
    _store.commit('music/changeCurrentListDrawerIsShow', false)
}
document.body.addEventListener('click', closeCurrentList)

onBeforeUnmount(() => {
    document.body.removeEventListener('click', closeCurrentList)
})


const changePlayIndex = (index) => {
    _store.commit('music/changePlayIndex', index)
}
</script>

<style lang="scss" scoped>
.current-music-list {
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 1.2638rem;
    height: 100%;
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

    header {

        .title {
            font-size: .2844rem;
            font-weight: 560;
            letter-spacing: .0079rem;
            color: #333;
            text-indent: .316rem;
            line-height: .6319rem;
        }

        .info {
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding: 0 .316rem;
            height: .6319rem;

            .count {
                font-size: .2054rem;
                color: gray;
            }

            svg {
                margin-left: auto;
                width: .316rem;
                height: .316rem;
                margin-right: .0948rem;
            }

            .collect,
            .clean {
                font-size: .2212rem;
                cursor: pointer;
            }

            .clean {
                color: skyblue;
                margin-left: .258rem;
            }

        }
    }

    .line {
        width: 90%;
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
        margin: .158rem auto;

    }

    table {
        width: 100%;
        box-sizing: border-box;
        border-collapse: collapse;
        table-layout: fixed;
        user-select: none;

        tr {
            height: .6319rem;
            width: 100%;

            &:hover {
                background-color: rgba(100, 100, 100, 0.09) !important;

                td {
                    &:nth-of-type(4) {

                        opacity: 1;
                    }
                }
            }

            &.active {
                td {

                    &:nth-of-type(1),
                    &:nth-of-type(2) {
                        color: #ED4A4A;

                        span {
                            color: #ED4A4A;
                        }
                    }


                }
            }


            &:nth-of-type(2n-1) {
                background-color: #FAFAFA;
            }


            td {
                overflow: hidden;
                height: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: .2054rem;
                color: #444;
                box-sizing: border-box;
                cursor: pointer;



                svg {
                    width: .2844rem;
                    height: .2844rem;
                }

                span {
                    font-size: .2054rem;
                    color: #444;

                }

                &:nth-of-type(1) {
                    width: 35%;
                    padding-left: .316rem;
                }

                &:nth-of-type(2) {
                    width: 35%;
                    text-align: center;
                }

                &:nth-of-type(3) {
                    width: 10%;
                    text-align: center;
                }

                &:nth-of-type(4) {
                    width: 20%;
                    text-align: center;
                    opacity: 0.6;
                }
            }
        }
    }

}
</style>