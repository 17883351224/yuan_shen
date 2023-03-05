<template>
    <div class="search-Detail">
        <header>
            <p>搜索&nbsp;{{ $route.query.keywords }}</p>
        </header>
        <section class="intersting">
            <p>你可能感兴趣</p>
            <ul class="music-list">
                <li v-for="item in searchHeaderInfo.playlist" :key="item.id">
                    <div class="cover-img">
                        <img :src="item.coverImgUrl" alt="cover">
                    </div>
                    <div class="info">
                        <p>歌单：<span>{{ item.name }}</span></p>
                        <p>歌曲：<span>{{ item.trackCount }}</span>,播放：{{ numberFormat(item.playCount) }}</p>
                    </div>
                </li>
                <li v-for="item in searchHeaderInfo.artist" :key="item.id">
                    <div class="cover-img avatar">
                        <img :src="item.picUrl" alt="cover">
                    </div>
                    <div class="info">
                        <p>歌手：<span>{{ item.name }}</span></p>
                        <p>歌曲：<span>{{ item.musicSize }}</span>,粉丝：{{ numberFormat(item.fansSize) }}</p>
                    </div>
                </li>

            </ul>
            <ul>

            </ul>
        </section>
        <section class="bar">
            <ul>
                <li class="active">单曲</li>
                <li>歌手</li>
                <li>专辑</li>
                <li>视频</li>
                <li>歌单</li>
                <li>歌词</li>
                <li>播客</li>
                <li>声音</li>
                <li>用户</li>
            </ul>
            <p>找到{{ searchSingleListInfo.songCount }}首单曲</p>
        </section>
        <section class="operation">
            <div class="play-all">
                <svg t="1668526711937" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3788" width="16" height="16">
                    <path
                        d="M870.2 466.333333l-618.666667-373.28a53.333333 53.333333 0 0 0-80.866666 45.666667v746.56a53.206667 53.206667 0 0 0 80.886666 45.666667l618.666667-373.28a53.333333 53.333333 0 0 0 0-91.333334z"
                        fill="#ffffff" p-id="3789"></path>
                </svg>
                <span>播放全部</span>
                <svg t="1668526763060" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="4851" width="16" height="16">
                    <path
                        d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z"
                        fill="#ffffff" p-id="4852"></path>
                </svg>
            </div>
            <div class="download">
                <svg t="1668527025878" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="15219" width="16" height="16">
                    <path
                        d="M646.791 799v-31.447c0-8.837 7.164-16 16-16H735c88.127 0 159.569-71.46 159.569-159.61 0-88.15-71.442-159.61-159.569-159.61-11.454 0-26.738 2.548-45.854 7.645a7.931 7.931 0 0 1-9.616-10.01c7.907-25.529 11.861-45.89 11.861-61.083 0-99.1-80.316-179.438-179.391-179.438-99.075 0-179.391 80.337-179.391 179.438 0 15.193 3.954 35.554 11.861 61.083a7.929 7.929 0 0 1-9.616 10.01c-19.116-5.097-34.4-7.646-45.854-7.646-88.127 0-159.569 71.46-159.569 159.61 0 88.15 71.442 159.61 159.569 159.61h73.2c8.837 0 16 7.164 16 16V799c0 8.837-7.163 16-16 16H289c-123.16 0-223-99.866-223-223.058 0-116.51 89.304-212.156 203.18-222.188-0.002-0.29-0.002-0.58-0.002-0.87C269.178 234.745 377.893 126 512 126s242.822 108.743 242.822 242.885l-0.001 0.869C868.696 379.786 958 475.432 958 591.942 958 715.134 858.16 815 735 815h-72.209c-8.836 0-16-7.163-16-16zM545.87 717.848l79.364-69.93c13.636-11.031 33.643-8.931 44.685 4.691 11.043 13.622 8.94 33.607-4.696 44.638L538.526 805.466c-11 11.252-28.92 12.857-41.826 3.141L359.653 698.03c-14.014-10.55-16.814-30.449-6.253-44.447 10.56-14 30.48-16.796 44.494-6.247l84.431 70.973v-286.57c0-17.529 14.225-31.738 31.772-31.738 17.547 0 31.772 14.21 31.772 31.738v286.11z"
                        p-id="15220" fill="#8a8a8a"></path>
                </svg>
                <span>下载全部</span>
            </div>
        </section>

        <section class="list">

            <table>
                <tr>
                    <th>操作</th>
                    <th>音乐标题</th>
                    <th>歌手</th>
                    <th>专辑</th>
                    <th>时长</th>
                    <th>热度</th>
                </tr>
                <tbody>
                    <tr class="item" v-for="(item, index) in searchSingleList" :key="item.id"
                        @click="pushSongToCurrentMusicList(item)">
                        <td>
                            <span>{{ numberFormat0(index + 1) }}</span>
                            <svg t="1668580945804" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4577" width="16" height="16">
                                <path
                                    d="M953.903525 374.597607c-0.539282 7.172353-1.065262 14.34573-1.620917 21.517059-2.868327 36.999682-13.000082 72.074525-29.305443 105.235786-26.372647 53.638641-59.652612 102.738919-98.68765 148.022265-42.319851 49.093115-88.287789 94.559633-136.064932 138.256854-45.841048 41.926902-93.324502 81.921801-141.966339 120.555703-12.014638 9.54233-25.199938 14.910595-40.799218 13.325493-10.536984-1.070378-19.735483-5.29254-27.90863-11.768021-86.809111-68.778456-170.041768-141.531434-246.068302-222.239594-43.699268-46.390563-82.991156-96.128361-114.648157-151.665235-18.669198-32.750915-34.576493-66.61928-41.974997-103.814414-2.946099-14.811334-4.137227-29.971615-6.131651-44.972261-0.206708-1.553379-0.448208-3.101641-0.673335-4.652973 0-8.378831 0-16.757662 0-25.136493 0.286526-1.685385 0.677429-3.361561 0.843204-5.059226 0.701988-7.181563 1.02126-14.415314 2.045589-21.548782 7.463995-51.965535 26.5374-99.119485 59.960627-139.835815 43.541679-53.043077 98.837052-85.024465 167.968549-91.090625 35.568077-3.121084 69.935816 2.306532 103.06433 15.488763 37.759999 15.025205 69.594031 38.372959 96.105848 69.071122 4.311189 4.992711 8.40953 10.168594 12.904914 15.621792 1.2689-1.573845 2.355651-2.871397 3.387144-4.209882 21.905916-28.40084 48.380894-51.52449 79.980589-68.560492C640.726803 102.114702 690.157609 93.252871 742.156914 102.019535c60.551074 10.208503 109.529579 40.862663 148.105153 88.101547 36.941354 45.237297 57.025785 97.480148 62.065568 155.578358 0.60989 7.024997 1.054005 14.06432 1.574868 21.097504C953.903525 369.396141 953.903525 371.997386 953.903525 374.597607zM898.728902 371.052874c-0.6191-8.346085-0.99363-16.718777-1.89721-25.03314-5.063319-46.553269-22.228257-88.057545-53.768601-122.822326-42.201148-46.514383-94.556563-69.004607-157.803026-62.721507-43.496653 4.320399-80.099293 23.566742-111.041002 54.027497-20.995173 20.669762-36.102243 45.25367-47.571459 72.210625-2.979868 7.003508-7.963369 11.42726-15.755846 11.453866-7.812943 0.026606-12.828167-4.431939-15.813151-11.397584-9.66615-22.556739-21.629623-43.738154-38.071084-62.10343-35.843346-40.037878-79.982636-63.324234-134.297682-65.148789-50.1594-1.684362-94.006024 15.162328-129.962957 49.536206-59.815317 57.181327-79.199807 127.835504-64.35061 208.373795 5.638417 30.582529 19.49296 58.090023 34.577516 84.993766 30.517037 54.429657 69.413929 102.484116 112.274086 147.477866 71.876004 75.453483 150.243863 143.722332 231.604892 208.66646 3.069919 2.450818 4.858658 2.50403 7.960299 0.030699 45.74895-36.479843 90.509387-74.122161 133.786029-113.508193 47.140647-42.902112 92.65833-87.404676 134.357034-135.719054 37.751812-43.741223 69.933769-91.109044 94.385671-143.530974C891.321188 435.866019 898.244878 404.190599 898.728902 371.052874z"
                                    p-id="4578" fill="#8a8a8a"></path>
                            </svg>
                            <svg t="1668580980689" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="5764" width="16" height="16">
                                <path
                                    d="M897.706667 989.866667H126.293333c-51.2 0-92.16-40.96-92.16-92.16V512c0-13.653333 11.946667-25.6 25.6-25.6S85.333333 498.346667 85.333333 512v385.706667C85.333333 919.893333 104.106667 938.666667 126.293333 938.666667h769.706667c22.186667 0 40.96-18.773333 40.96-40.96V512c0-13.653333 11.946667-25.6 25.6-25.6s27.306667 11.946667 27.306667 25.6v385.706667c0 51.2-40.96 92.16-92.16 92.16z"
                                    fill="#8a8a8a" p-id="5765"></path>
                                <path
                                    d="M512 738.986667c-6.826667 0-13.653333-1.706667-18.773333-6.826667L267.946667 505.173333c-10.24-10.24-10.24-25.6 0-35.84s25.6-10.24 35.84 0L512 677.546667l208.213333-208.213334c10.24-10.24 25.6-10.24 35.84 0s10.24 25.6 0 35.84L530.773333 730.453333c-5.12 5.12-11.946667 8.533333-18.773333 8.533334z"
                                    fill="#8a8a8a" p-id="5766"></path>
                                <path
                                    d="M512 738.986667c-13.653333 0-25.6-11.946667-25.6-25.6V59.733333c0-13.653333 11.946667-25.6 25.6-25.6s25.6 11.946667 25.6 25.6v653.653334c0 13.653333-11.946667 25.6-25.6 25.6z"
                                    fill="#8a8a8a" p-id="5767"></path>
                            </svg>
                        </td>
                        <td>
                            <span>{{ item.name }}</span>
                        </td>
                        <td>
                            <span v-for="i in item.ar" style="margin-right:.158rem">
                                {{ i.name }}
                            </span>
                        </td>
                        <td><span>{{ item.al.name }}</span></td>
                        <td><span>{{ timeFormate(item.dt) }}</span></td>
                        <td><span>{{ item.pop }}</span></td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { numberFormat0, timeFormate } from '@/hooks/format/index'
import { useRoute } from 'vue-router';
import { numberFormat } from '@/hooks/format/index';

const _store = useStore()
const _route = useRoute()

onMounted(() => {
    _store.dispatch('search_music/getSearchSingleListInfo', { keywords: _route.query.keywords, limit: 100 })
    _store.dispatch('search_music/getSearchHeaderInfo', _route.query.keywords)
})
const searchHeaderInfo = computed(() => _store.state.search_music.searchHeaderInfo)
const searchSingleListInfo = computed(() => _store.state.search_music.searchSingleListInfo)

const searchSingleList = computed(() => {
    if (searchSingleListInfo.value.songs) {
        return searchSingleListInfo.value.songs
    } else {
        return []
    }
})
const pushSongToCurrentMusicList = (item) => {
    item.source = '搜索'
    _store.commit('music/pushSongToCurrentMusicList', item)
}

</script>

<style lang="scss" scoped>
.search-Detail {
    width: 100%;
    box-sizing: border-box;

    padding: 0 .4107rem .9479rem .4107rem;

    header {
        height: 1.1058rem;
        display: flex;
        align-items: center;

        p {
            font-size: .316rem;
            font-weight: 560;
            letter-spacing: .0079rem;
            color: #333;

        }
    }

    .intersting {
        >p {
            font-size: .2212rem;
            color: gray;
            letter-spacing: .0063rem;
            line-height: .4739rem;
        }

        .music-list {
            display: flex;
            list-style: none;
            align-items: center;
            flex-wrap: wrap;
            gap: .2528rem;

            li {
                display: flex;
                height: 1.1058rem;
                background-color: #F5F5F5;
                align-items: center;
                width: calc(25% - .2528rem);
                min-width: 4.7393rem;
                box-sizing: border-box;
                padding-left: .1896rem;
                border-radius: .0126rem;
                cursor: pointer;

                .cover-img {
                    width: .7899rem;
                    height: .7899rem;
                    border-radius: .0632rem;
                    overflow: hidden;
                    flex-shrink: 0;
                    align-items: center;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }

                .avatar {
                    border-radius: 50%;
                }

                .info {
                    width: calc(100% - 0.1896rem - .1264rem - .7899rem);
                    margin-left: .1264rem;
                    box-sizing: border-box;



                    p {
                        font-size: .2212rem;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;

                        &:nth-of-type(2) {
                            color: #aaa;
                            font-size: .2054rem;

                            span {
                                font-size: .2054rem;
                            }
                        }

                        span {
                            font-size: .2212rem;
                        }


                    }
                }
            }
        }
    }

    .bar {
        display: flex;
        align-items: center;
        min-height: .7899rem;
        padding-left: .5055rem;
        width: 100%;
        box-sizing: border-box;

        >p {
            text-align: right;
            font-size: .2054rem;
            color: #aaa;
            line-height: .7899rem;
            margin-left: auto;
        }

        ul {
            list-style: none;
            display: flex;
            gap: .4107rem;
            align-items: center;


            li {
                font-size: .237rem;
                color: gray;
                cursor: pointer;

                &.active {
                    font-size: .316rem;
                    color: #111;
                    font-weight: 560;
                    border-bottom: .0458rem solid #EC4141;
                }
            }


        }

    }

    .operation {
        display: flex;
        align-items: center;
        height: 1.1058rem;

        gap: .316rem;

        .play-all {
            background-color: #EC4141;
            border-radius: .237rem;
            display: flex;
            align-items: center;
            gap: .2rem;
            color: #fff;
            width: 2.37rem;

            height: .4739rem;
            padding: 0 .2528rem 0 .158rem;
            box-sizing: border-box;
            cursor: pointer;
            flex-shrink: 0;
            opacity: 0.8;

            &:hover {
                opacity: 1;
            }

            span {
                font-size: .237rem;
            }

            svg {
                &:nth-of-type(2) {
                    margin-left: auto;
                }
            }
        }

        .download {
            height: .4739rem;
            border-radius: .237rem;
            border: 1px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.7378rem;
            cursor: pointer;
            opacity: 0.9;
            box-sizing: border-box;
            flex-shrink: 0;

            &:hover {
                opacity: 1;
            }

            span {
                font-size: .2212rem;
                left: .0079rem;
                color: gray;

            }

            svg {
                width: .3rem;
                height: .3rem;
                margin-right: .1264rem;
            }
        }
    }

    .list {


        table {
            width: 100%;
            box-sizing: border-box;
            border-collapse: collapse;
            table-layout: fixed;

            span {
                font-family: 'Courier New', Courier, monospace;
            }

            th {
                text-align: left;
                font-size: .2528rem;
                font-weight: 400;
                color: gray;
                height: .6319rem;

                &:nth-of-type(1) {
                    text-align: center;
                    width: 13.3%;
                }

                &:nth-of-type(2) {

                    width: 20%;
                }

                &:nth-of-type(3) {

                    width: 20%;
                }

                &:nth-of-type(4) {

                    width: 20%;
                }

                &:nth-of-type(5) {

                    width: 13.3%;
                }

                &:nth-of-type(5) {

                    width: 13.3%;
                }
            }

            tr {
                line-height: .5687rem;

                td {
                    cursor: pointer;
                    border: none;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;


                    span {
                        font-size: .2212rem;
                        color: gray;
                        letter-spacing: .0047rem;
                    }

                    &:nth-of-type(1) {
                        text-align: center;

                        svg {
                            margin-left: .2528rem;
                            width: .2844rem;
                            height: .2844rem;
                        }
                    }
                }
            }

            .item {
                td {
                    &:nth-of-type(2) {

                        span {
                            color: #111;
                        }
                    }

                    &:nth-of-type(3) {

                        span {
                            color: #333;
                        }
                    }

                    &:nth-of-type(4) {

                        span {
                            color: #333;
                        }
                    }
                }

                &:hover {
                    background-color: #F5F5F5 !important;
                }

                &:nth-of-type(2n-1) {
                    background-color: #FAFAFA;
                }

                &:nth-of-type(2n) {
                    background-color: #fff;
                }
            }
        }
    }

}
</style>