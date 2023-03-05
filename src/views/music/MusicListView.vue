<template>
    <div class="music-list-app">
        <header v-if="Object.keys(songListInfo).length !== 0">
            <div class="cover-img">
                <img v-lazy="songListInfo.coverImgUrl" alt="cover">
            </div>
            <div class="info">
                <div class="title">
                    <span>歌单</span>
                    <p>{{ songListInfo.name }}</p>
                </div>
                <div class="create-info">
                    <div class="auth-avatar">
                        <img v-lazy="songListInfo.creator.avatarUrl" alt="">
                    </div>
                    <span class="nick-name">{{ songListInfo.creator.nickname }}</span>
                    <span title="创建时间">{{ dateformate(songListInfo.createTime) }}创建</span>
                </div>
                <div class="operate">
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
                    <div class="collect">

                        <svg t="1668526852464" class="icon" viewBox="0 0 1026 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="8203" width="16" height="16">
                            <path
                                d="M1019.109859 384c-11.286261-32.01113-39.713391-55.05113-74.195478-60.126609L701.69212 288.233739l-105.627826-216.019478c-15.270957-31.276522-48.261565-51.489391-84.057043-51.489391-35.706435 0-68.652522 20.21287-83.968 51.489391l-105.672348 216.041739L79.166902 323.940174c-34.504348 4.964174-62.953739 27.981913-74.24 60.17113-11.264 32.50087-2.871652 67.806609 21.882435 92.137739l178.509913 175.638261-41.405217 243.378087c-5.810087 33.925565 9.282783 68.719304 38.555826 88.687304 28.627478 19.255652 67.005217 21.370435 97.836522 5.164522l211.745391-112.39513 211.878957 112.417391c13.712696 7.234783 29.094957 11.063652 44.521739 11.063652 19.010783 0 37.420522-5.609739 53.337043-16.317217 29.139478-19.878957 44.210087-54.650435 38.4-88.576l-41.382957-243.400348 178.532174-175.638261C1022.048294 451.917913 1030.440641 416.589913 1019.109859 384zM966.062207 444.527304l-195.094261 191.955478 45.278609 266.329043c2.938435 17.096348-4.585739 34.05913-19.478261 44.232348-15.248696 10.24-35.817739 11.330783-52.045913 2.782609L512.00725 826.323478l-232.537043 123.436522c-16.406261 8.637217-36.997565 7.479652-52.045913-2.671304-15.048348-10.262261-22.572522-27.247304-19.634087-44.343652l45.30087-266.284522-195.072-191.955478c-12.377043-12.154435-16.606609-29.718261-11.063652-45.723826 5.765565-16.384 20.524522-28.182261 38.622609-30.786783l266.48487-39.112348 115.97913-237.122783c7.880348-16.11687 25.154783-26.534957 43.987478-26.534957 18.899478 0 36.173913 10.395826 44.054261 26.512696l115.95687 237.122783 266.418087 39.023304c18.075826 2.671304 32.901565 14.514087 38.64487 30.809043C982.668815 414.786783 978.43925 432.328348 966.062207 444.527304zM509.046555 376.898783c-45.590261 0-82.320696 13.913043-109.122783 41.316174-44.744348 45.746087-43.78713 112.194783-43.720348 115.021913 0.26713 12.109913 10.173217 21.726609 22.238609 21.726609 0.133565 0 0.289391 0 0.422957 0 12.265739-0.222609 22.016-10.373565 21.837913-22.639304 0-0.512-0.400696-51.066435 31.254261-83.18887 18.098087-18.387478 44.054261-27.692522 77.06713-27.692522 12.288 0 22.26087-9.97287 22.26087-22.26087S521.334555 376.898783 509.046555 376.898783z"
                                p-id="8204" fill="#8a8a8a"></path>
                        </svg>
                        <span>{{ numberFormat(songListInfo.subscribedCount) }}</span>
                    </div>
                    <div class="share">
                        <svg t="1668526945981" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="9326" width="16" height="16">
                            <path
                                d="M512 939.804444c-57.612929 0-113.570909-11.274343-166.322424-33.616161-50.889697-21.514343-96.504242-52.337778-135.809293-91.539394C170.666667 775.447273 139.843232 729.729293 118.328889 678.839596 96.193939 626.191515 84.816162 570.233535 84.816162 512.620606s11.274343-113.570909 33.616161-166.322424c21.514343-50.889697 52.337778-96.504242 91.539394-135.809293 39.201616-39.201616 84.919596-70.025051 135.809293-91.539394 52.648081-22.238384 108.606061-33.616162 166.322424-33.616162h1.034344l-0.103435 57.923233h-0.930909c-98.676364 0-191.353535 38.374141-261.068282 108.192323-69.818182 69.818182-108.295758 162.495354-108.295758 261.171717s38.374141 191.353535 108.192323 261.068283c69.714747 69.818182 162.495354 108.192323 261.068283 108.192323 98.572929 0 191.250101-38.374141 261.068283-108.088889C842.78303 704.077576 881.260606 611.400404 881.260606 512.827475h57.923232c0 57.612929-11.377778 113.570909-33.616161 166.21899-21.514343 50.889697-52.337778 96.504242-91.539394 135.705858s-84.919596 69.921616-135.705859 91.43596c-52.751515 22.341818-108.606061 33.616162-166.322424 33.616161zM938.149495 352.711111h-57.923232V145.73899H672.530101v-57.923232H938.149495V352.711111z m0 0"
                                fill="#8a8a8a" p-id="9327"></path>
                            <path
                                d="M888.371717 96.012929l40.96 40.96L560.484848 505.806869l-40.96-40.96L888.371717 96.012929z m0 0"
                                fill="#8a8a8a" p-id="9328"></path>
                        </svg>
                        <span>{{ numberFormat(songListInfo.shareCount) }}</span>
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
                </div>
                <div class="tags">
                    <span>标签:</span>
                    <span v-for="item in songListInfo.tags" :key="item">{{ item }}</span>

                </div>
                <div class="muisc-info">
                    <span> 歌曲:</span>
                    <span>{{ songList.length }}</span>
                    <span>播放:</span>
                    <span>{{ numberFormat(songListInfo.playCount) }}</span>
                </div>
                <div class="description">
                    <p>
                        简介： <span>{{ songListInfo.description }}</span>
                    </p>
                </div>


            </div>
        </header>
        <section class="bar">
            <ul>
                <li class="active">歌曲列表</li>
                <li>收藏者</li>
                <li>评论</li>
            </ul>
            <div class="serch">
                <input type="text" placeholder="搜索歌单歌曲">
                <svg t="1668578960046" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3421" width="16" height="16">
                    <path
                        d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                        p-id="3422" fill="#8a8a8a"></path>
                </svg>
            </div>
        </section>
        <section class="music-list">
            <table>
                <tr>
                    <th>操作</th>
                    <th>标题</th>
                    <th>歌手</th>
                    <th>专辑</th>
                    <th>时间</th>
                </tr>
                <tbody>
                    <tr class="item" v-for="(item, index) in songList" :key="item.id" @click="cutSong(index)">
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
                    </tr>
                </tbody>
            </table>
        </section>

    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { dateformate, numberFormat, numberFormat0, timeFormate } from '@/hooks/format'
const _route = useRoute()
const _store = useStore()
const songListInfo = computed(() => _store.state.music_list.songListInfo)
const songList = computed(() => _store.state.music_list.songList)
onMounted(() => {
    _store.dispatch('music_list/getSongListInfo', _route.query.id)
    _store.dispatch('music_list/getSongList', _route.query.id)

})
const cutSong = (index) => {
    _store.commit('music/changeCurrentMusicList', { index, list: songList.value, songListInfo: songListInfo.value })
}

</script>

<style lang="scss" scoped>
header {
    width: 100%;
    box-sizing: border-box;
    padding-left: .5087rem;
    display: flex;
    align-items: center;
    gap: .316rem;
    min-height: 3.7915rem;
    flex-wrap: wrap;

    .cover-img {
        width: 2.9226rem;
        border-radius: .0948rem;
        overflow: hidden;
        height: 2.9226rem;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        width: calc(100% - 2.9226rem - .316rem);
        height: 2.9226rem;
        flex-shrink: 1;

        .title {
            display: flex;
            align-items: center;
            gap: .2528rem;


            span {
                font-size: .2054rem;
                width: .5339rem;
                height: .37rem;
                text-align: center;
                line-height: .37rem;
                color: #EC4141;
                border: .0158rem solid #EC4141;
                border-radius: .0632rem;
            }

            p {
                font-size: .32rem;
                font-weight: 560;
                letter-spacing: .0047rem;
                color: #111;
                width: calc(100% - .2528rem - .5339rem);
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }

        .create-info {
            display: flex;
            align-items: center;
            line-height: .4739rem;
            gap: .158rem;

            .auth-avatar {
                width: .4423rem;
                height: .4423rem;
                border-radius: 50%;
                overflow: hidden;
                flex-shrink: 0;


                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

            }

            span {
                font-size: .2054rem;
                color: gray;
            }

            .nick-name {
                color: skyblue;
            }

        }

        .operate {
            display: flex;
            min-height: .82rem;
            align-items: center;
            gap: .316rem;
            flex-wrap: wrap;
        }

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

            span {
                font-size: .237rem;
            }

            svg {
                &:nth-of-type(2) {
                    margin-left: auto;
                }
            }
        }

        .collect,
        .share,
        .download {
            height: .4739rem;
            border-radius: .237rem;
            border: 1px solid gray;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 1.7378rem;
            cursor: pointer;
            opacity: 0.8;
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

        .tags,
        .muisc-info {
            min-height: .316rem;
            display: flex;
            align-items: center;
            gap: .2212rem;

            span {
                font-size: .2212rem;
                letter-spacing: .0063rem;
                color: gray;
            }
        }

        .description {
            p {
                width: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                font-size: .237rem;
                color: gray;

                span {
                    font-size: .237rem;
                    flex-shrink: 0;
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

    .serch {
        width: 15%;
        height: .4423rem;
        min-width: 2.2117rem;
        margin-left: auto;
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-radius: .237rem;
        background-color: #F7F7F7;
        margin-right: .5055rem;
        justify-content: space-between;


        svg {
            width: .4107rem;
            height: .4107rem;
            margin-right: .0948rem;
            cursor: pointer;
        }

        input {
            width: 1.8957rem;
            height: 80%;
            padding-left: .1264rem;
            outline: none;
            border: none;
            font-size: .2212rem;
            background-color: transparent;

        }
    }
}

.music-list {
    width: 100%;
    padding: 0 .158rem 0 .158rem;
    box-sizing: border-box;

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
                width: 15%;
            }

            &:nth-of-type(2) {

                width: 25%;
            }

            &:nth-of-type(3) {

                width: 25%;
            }

            &:nth-of-type(4) {

                width: 25%;
            }

            &:nth-of-type(5) {

                width: 10%;
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
                background-color: #E5E5E5 !important;
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
</style>