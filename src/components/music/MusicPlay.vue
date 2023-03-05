<template>
    <div class="music-play" tabindex="1">
        <header class="bar">
            <div title="收起音乐详情页" class="close" @click="closeMusicDetail">
                <svg t="1668652903922" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2677" width="32" height="32">
                    <path
                        d="M512.726547 675.318646c-8.063653 0-15.790638-3.245927-21.435195-9.006118L231.175103 400.906809c-11.603269-11.837606-11.410887-30.840402 0.427742-42.442648 11.837606-11.601222 30.841426-11.410887 42.442648 0.427742l238.681054 243.534596L751.407602 358.891903c11.601222-11.839653 30.602995-12.033058 42.442648-0.427742 11.839653 11.603269 12.031011 30.605042 0.427742 42.442648L534.161742 666.312528C528.517185 672.072719 520.791224 675.318646 512.726547 675.318646z"
                        p-id="2678" fill="#8a8a8a"></path>
                </svg>
            </div>
            <div class="serch">
                <svg @click="searchByKeywords" t="1668653422092" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="6439" width="32" height="32">
                    <path
                        d="M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0"
                        p-id="6440" fill="#8a8a8a"></path>
                </svg>
                <input type="text" placeholder="大家都在搜" maxlength="30" @focus="showRecommend" @click.stop
                    @input="getRecommendSearchKeyworlds($event)" ref="keywordsObj" @keydown.enter="searchByKeywords">
                <div class="recommend" ref="recommendObj" @click.stop>
                    <div class="hot-recommend" v-show="hotRecommendIsShow">
                        <p class="search-bar">
                            <span>搜索历史</span>
                            <svg t="1668658466761" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="12623" width="32" height="32">
                                <path
                                    d="M202.666667 256h-42.666667a32 32 0 0 1 0-64h704a32 32 0 0 1 0 64H266.666667v565.333333a53.333333 53.333333 0 0 0 53.333333 53.333334h384a53.333333 53.333333 0 0 0 53.333333-53.333334V352a32 32 0 0 1 64 0v469.333333c0 64.8-52.533333 117.333333-117.333333 117.333334H320c-64.8 0-117.333333-52.533333-117.333333-117.333334V256z m224-106.666667a32 32 0 0 1 0-64h170.666666a32 32 0 0 1 0 64H426.666667z m-32 288a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z m170.666666 0a32 32 0 0 1 64 0v256a32 32 0 0 1-64 0V437.333333z"
                                    p-id="12624" fill="#8a8a8a"></path>
                            </svg>
                        </p>
                        <ul class="history">
                            <li class="item" v-for="i in 6">
                                <span>许嵩</span>
                                <svg t="1668658665859" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="13742" width="16" height="16">
                                    <path
                                        d="M512 482.133333l196.266667-196.266666c8.533333-8.533333 21.333333-8.533333 29.866666 0 8.533333 8.533333 8.533333 21.333333 0 29.866666L541.866667 512l196.266666 196.266667c8.533333 8.533333 8.533333 21.333333 0 29.866666-8.533333 8.533333-21.333333 8.533333-29.866666 0L512 541.866667l-196.266667 196.266666c-8.533333 8.533333-21.333333 8.533333-29.866666 0-8.533333-8.533333-8.533333-21.333333 0-29.866666l196.266666-196.266667-200.533333-196.266667c-8.533333-8.533333-8.533333-21.333333 0-29.866666 8.533333-8.533333 21.333333-8.533333 29.866667 0l200.533333 196.266666z"
                                        p-id="13743" fill="#8a8a8a"></path>
                                </svg>
                            </li>
                        </ul>
                        <div class="hot">
                            <p>热搜榜</p>
                            <ul>
                                <li v-for="(item, index) in hotSearchList" :key="item.searchWord + index">
                                    <div class="left">
                                        {{ index + 1 }}
                                    </div>
                                    <div class="right">
                                        <p class="info">
                                            <span class="serch-word">{{ item.searchWord }}</span>
                                            <img :src="item.iconUrl" alt="hot" v-if="item.iconType == 1">
                                            <span class="count">{{ item.score }}</span>
                                        </p>
                                        <p class="description">
                                            {{ item.content }}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="keyworld-recommend" v-show="!hotRecommendIsShow">
                        <p class="guess">
                            <svg t="1668832921742" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="8642" width="32" height="32">
                                <path
                                    d="M480.071312 702.877305c-7.090489 0-14.06125-0.314155-20.907169-0.943488-28.380374-2.606361-54.631248-10.593266-78.021981-23.735587-40.074717-22.51683-57.772798-52.31039-58.506509-53.570079-2.848884-4.881171-1.201361-11.146874 3.679809-13.994736 4.871961-2.843768 11.127432-1.207501 13.982456 3.65525 0.249687 0.419556 16.298198 26.953885 51.834552 46.604434 47.832402 26.448372 106.644879 28.664853 174.800142 6.588045 5.377474-1.738597 11.148921 1.205455 12.889565 6.581905s-1.205455 11.146874-6.581905 12.889565C540.539498 697.54281 509.29796 702.877305 480.071312 702.877305z"
                                    p-id="8643" fill="#8a8a8a"></path>
                                <path
                                    d="M886.950136 897.583822c-2.648316 0-5.29254-1.02126-7.296173-3.057639L709.233572 721.28556c-3.963265-4.02978-3.910053-10.507308 0.118704-14.470573 4.02978-3.965312 10.507308-3.90903 14.471596 0.11768l170.420391 173.240623c3.963265 4.02978 3.910053 10.509355-0.118704 14.47262C892.132158 896.604518 889.540124 897.583822 886.950136 897.583822z"
                                    p-id="8644" fill="#8a8a8a"></path>
                                <path
                                    d="M472.20618 828.28655c-46.64025 0-91.889827-9.287527-134.493134-27.607778-41.133839-17.685801-78.0711-43.00035-109.786429-75.238588-65.200978-66.279542-101.109816-154.387229-101.109816-248.093425 0-93.704149 35.907815-181.809789 101.109816-248.086262 31.715329-32.238238 68.65259-57.552787 109.787452-75.238588 42.603307-18.318204 87.852884-27.605731 134.493134-27.605731 46.6556 0 91.917456 9.287527 134.526903 27.605731 41.138956 17.685801 78.081333 42.999326 109.798708 75.238588 65.198931 66.272379 101.105722 154.37802 101.105722 248.087285 0 4.39203-0.079818 8.989745-0.237407 13.664208-0.191358 5.64865-4.946662 10.086729-10.571776 9.882068-5.649674-0.190335-10.073426-4.924149-9.882068-10.5728 0.149403-4.445242 0.226151-8.809643 0.226151-12.973476 0-182.219111-145.778154-330.464457-324.96521-330.464457-179.163519 0-324.923254 148.245346-324.923254 330.464457 0 182.224228 145.759735 330.473667 324.923254 330.473667 81.524758 0 159.491481-30.827099 219.538065-86.800925 2.232854-2.078335 4.422729-4.177136 6.516414-6.244214 4.019547-3.971451 10.498098-3.931542 14.471596 0.092098 3.970428 4.021593 3.929496 10.501168-0.093121 14.47262-2.234901 2.206248-4.571109 4.445242-6.945179 6.655584C641.850905 795.509029 558.928311 828.28655 472.20618 828.28655z"
                                    p-id="8645" fill="#8a8a8a"></path>
                            </svg>
                            <span>猜你想搜</span>
                        </p>
                        <div class="single">
                            <p>
                                <span>单曲</span>
                                <svg t="1668757431060" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2447" width="32" height="32">
                                    <path
                                        d="M875.52 433.152q-7.168-1.024-12.8-10.24t-8.704-33.792q-5.12-39.936-26.112-58.88t-65.024-27.136q-46.08-9.216-81.408-37.376t-58.88-52.736q-22.528-21.504-34.816-15.36t-12.288 22.528l0 44.032 0 96.256q0 57.344-0.512 123.904t-0.512 125.952l0 104.448 0 58.368q1.024 24.576-7.68 54.784t-32.768 56.832-64 45.568-99.328 22.016q-60.416 3.072-109.056-21.504t-75.264-61.952-26.112-81.92 38.4-83.456 81.92-54.272 84.992-16.896 73.216 5.632 47.616 13.312l0-289.792q0-120.832 1.024-272.384 0-29.696 15.36-48.64t40.96-22.016q21.504-3.072 35.328 8.704t28.16 32.768 35.328 47.616 56.832 52.224q30.72 23.552 53.76 33.792t43.008 18.944 39.424 20.992 43.008 39.936q23.552 26.624 28.672 55.296t0.512 52.224-14.848 38.4-17.408 13.824z"
                                        p-id="2448" fill="#8a8a8a"></path>
                                </svg>
                            </p>
                            <ul>
                                <li v-for="item in recommendSearchKeyworlds.songs" :key="item.id">
                                    <p>
                                        <span>{{ item.name }}-</span>
                                        <span v-for="auth in item.artists" :key="auth.id">
                                            {{ auth.name }}&nbsp;
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="album">
                            <p>
                                <span>专辑</span>
                                <svg t="1668758138206" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3865" width="32" height="32">
                                    <path
                                        d="M510.2 670.5c-88.2 0-160-71.8-160-160s71.8-160 160-160 160 71.8 160 160-71.7 160-160 160z m0-238c-43 0-78 35-78 78s35 78 78 78 78-35 78-78-34.9-78-78-78z"
                                        p-id="3866" fill="#8a8a8a"></path>
                                    <path
                                        d="M915 339.5c-15.3-36.1-35.1-69.7-59.2-100.4L873 104.2c2.9-22.5-13-43-35.5-45.9-22.5-2.9-43 13-45.9 35.5l-9.1 71.8c-30.8-24.4-64.7-44.5-101.2-59.9-54.2-22.9-111.7-34.5-171-34.5s-116.8 11.6-171 34.5c-52.3 22.1-99.3 53.8-139.6 94.1s-72 87.3-94.1 139.6c-22.9 54.2-34.5 111.7-34.5 171s11.6 116.8 34.5 171c22.1 52.3 53.8 99.3 94.1 139.6s87.3 72 139.6 94.1c54.2 22.9 111.7 34.5 171 34.5s116.8-11.6 171-34.5c52.3-22.1 99.3-53.8 139.6-94.1s72-87.3 94.1-139.6c22.9-54.2 34.5-111.7 34.5-171 0.1-59.1-11.6-116.7-34.5-170.9zM510.2 867.9c-197 0-357.3-160.3-357.3-357.3s160.3-357.3 357.3-357.3c102.1 0 194.4 43.1 259.5 112l-40.3 316.4-68.2 42.6c-19.2 12-25.1 37.3-13.1 56.5C656 693.2 669.4 700 683 700c7.4 0 14.9-2 21.7-6.2l84.7-52.9c0.1-0.1 0.2-0.2 0.4-0.2 0.3-0.2 0.7-0.4 1-0.7 0.2-0.2 0.5-0.3 0.7-0.5 0.3-0.2 0.5-0.4 0.8-0.6 0.3-0.2 0.6-0.4 0.8-0.6 0.2-0.1 0.4-0.3 0.5-0.4 0.3-0.3 0.7-0.5 1-0.8 0 0 0.1 0 0.1-0.1 1.7-1.5 3.3-3.2 4.7-4.9 0.1-0.1 0.2-0.2 0.3-0.4 0.3-0.3 0.5-0.7 0.8-1 0.1-0.2 0.3-0.4 0.4-0.6l0.6-0.9c0.2-0.3 0.4-0.5 0.5-0.8 0.2-0.2 0.3-0.5 0.5-0.7 0.2-0.3 0.4-0.7 0.6-1l0.3-0.6c0.2-0.4 0.4-0.8 0.7-1.2 0.1-0.1 0.1-0.3 0.2-0.4 0.2-0.5 0.5-1 0.7-1.5 0-0.1 0.1-0.2 0.1-0.2 0.2-0.5 0.5-1.1 0.7-1.7v-0.1l0.6-1.8v-0.1c0.2-0.6 0.4-1.2 0.5-1.8v-0.1c0.1-0.5 0.3-1.1 0.4-1.6 0-0.1 0.1-0.2 0.1-0.3 0.1-0.4 0.2-0.9 0.3-1.3 0-0.2 0.1-0.4 0.1-0.7 0.1-0.3 0.1-0.6 0.1-0.9 0.1-0.4 0.1-0.7 0.2-1.1v-0.1L839 370.7c18.4 43 28.5 90.3 28.5 139.9 0.1 197-160.2 357.3-357.3 357.3z"
                                        p-id="3867" fill="#8a8a8a"></path>
                                </svg>
                            </p>
                            <ul>
                                <li v-for="item in recommendSearchKeyworlds.albums" :key="item.id">
                                    <p>
                                        <span>{{ item.name }}-</span>
                                        <span>
                                            {{ item.artist.name }}
                                        </span>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="singer">
                            <p>
                                <span>歌手</span>
                                <svg t="1668758555503" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="14261" width="32" height="32">
                                    <path
                                        d="M586 659.1c0-9.6-12.1-25.3-31.8-51h-84.6c-19.6 25.6-31.7 41.4-31.7 51 0.8 10.5 23.5 56.5 44.2 83.1-17.7 78.8-38.5 137.5-38.5 206.2 0 23.5 51.9 72.3 67.5 73.6h1.7c15.5-1.2 67.5-50.1 67.5-73.6 0-68.7-20.9-127.4-38.5-206.2 20.8-26.8 43.4-72.7 44.2-83.1zM512 63.5c59.9 0 116.2 23.3 158.6 65.7 42.4 42.4 65.7 98.7 65.7 158.6S712.9 404 670.6 446.3C628.2 488.7 571.9 512 512 512s-116.2-23.3-158.6-65.7-65.7-98.7-65.7-158.6 23.3-116.2 65.7-158.6c42.4-42.3 98.7-65.6 158.6-65.6M512 0C353.1 0 224.3 128.8 224.3 287.7S353.1 575.5 512 575.5s287.7-128.8 287.7-287.7S670.9 0 512 0z"
                                        fill="#8a8a8a" p-id="14262"></path>
                                    <path
                                        d="M1024 1024h-63.8c0-247.1-201.1-448.2-448.2-448.2S63.8 776.9 63.8 1024H0c0-69.1 13.5-136.2 40.2-199.3C66 763.7 103 709 150 662s101.8-83.9 162.7-109.7C375.8 525.5 442.9 512 512 512s136.2 13.5 199.3 40.2C772.3 578 827 615 874 662s83.9 101.8 109.7 162.7c26.8 63.1 40.3 130.2 40.3 199.3z"
                                        fill="#8a8a8a" p-id="14263"></path>
                                </svg>
                            </p>
                            <ul>
                                <li v-for="item in recommendSearchKeyworlds.artists" :key="item.id">
                                    <p><span>{{ item.name }}</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="identy-music">
                <svg t="1668653652146" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="11507" width="32" height="32">
                    <path
                        d="M511.999762 652.57394c130.500404 0 235.650867-105.138556 235.650867-235.650867V235.639436A235.186495 235.186495 0 0 0 511.999762 0.000476a235.162681 235.162681 0 0 0-235.650867 235.63896v181.27173A235.174588 235.174588 0 0 0 511.999762 652.57394zM348.850442 235.639436c0-90.623958 72.513455-163.137412 163.14932-163.137412s163.149319 72.513455 163.149319 163.137412v181.27173c0 90.635865-72.513455 163.149319-163.149319 163.14932a162.470622 162.470622 0 0 1-163.14932-163.14932V235.639436z"
                        p-id="11508" fill="#8a8a8a"></path>
                    <path
                        d="M887.224145 478.553556c0-1.80986 1.80986-5.441486 1.80986-7.251345a36.36389 36.36389 0 0 0-36.256727-36.256728c-18.12241 0-34.434961 14.502691-36.244821 32.625101C791.146795 614.507353 664.26611 725.087395 511.999762 725.087395S232.852729 614.51926 207.467066 467.670584c-1.80986-18.12241-18.134317-32.625101-36.24482-32.625101a36.36389 36.36389 0 0 0-36.256727 36.256728v5.429578c29.005382 170.388758 168.578898 302.722836 340.777516 319.035387v170.06727H245.902769a29.076824 29.076824 0 1 0 0 58.153647h532.205892a29.076824 29.076824 0 1 0 0-58.153647H548.256489V795.779083c172.210525-16.312551 311.784041-148.646629 338.967656-317.225527z"
                        p-id="11509" fill="#8a8a8a"></path>
                </svg>

            </div>
        </header>
        <section class="music-display">
            <div class="player-box">
                <div class="cizhen" :class="{ 'acvtive': currentInfo.isPlaying }">
                    <img src="@/assets/music/icon/needle-ab.png" alt="磁针">
                </div>
                <div class="cipan-container"
                    :class="{ 'play': currentInfo.isPlaying, 'pause': !currentInfo.isPlaying }">
                    <img class="cover" :src="coverUrl" alt="">
                    <img class="cipan" src="@/assets/music/icon/cipan.png" alt="cipan">
                </div>
            </div>
            <div class="lyric-display">
                <div class="music-info" v-if="currentMusicList.length !== 0">
                    <p class="song-name">
                        {{ currentMusicList[currentInfo.playIndex].name }}
                    </p>
                    <p class="source">
                        <span class="auth">歌手：{{ currentMusicList[currentInfo.playIndex].ar[0].name }}</span>
                        <span>专辑：{{ currentMusicList[currentInfo.playIndex].al.name }}</span>
                        <span>来源：{{ currentMusicList[currentInfo.playIndex].source }}</span>
                    </p>
                </div>
                <div class="lyric-list-container" @wheel.stop="lookLyric">
                    <ul class="lyric-list" ref="lyricListObj">
                        <li class="lyric" v-for="(item, index ) in lyricList" :key="item + index"
                            :class="{ 'active': index == 0 }">
                            {{ item.lyric }}
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import { debounce } from 'lodash';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const _router = useRouter()
const _store = useStore()
const hotSearchList = computed(() => _store.state.search_music.hotSearchList)
const currentInfo = computed(() => _store.state.music.currentInfo)
const currentMusicList = computed(() => _store.state.music.currentMusicList)
const recommendSearchKeyworlds = computed(() => _store.state.search_music.recommendSearchKeyworlds)

const lyricList = computed(() => {
    if (!currentInfo.value.lyricInfo.lyric) {
        return []
    } else {
        return lyricFormate(currentInfo.value.lyricInfo.lyric).slice(0, -1)
    }
})
const coverUrl = computed(() => {
    if (currentMusicList.value.length == 0) {
        return ''
    }
    return currentMusicList.value[currentInfo.value.playIndex].al.picUrl
})
onMounted(() => {
    _store.dispatch('search_music/getHotSearchList')

})
const closeMusicDetail = () => {
    _store.commit('music/changeDrawerIsShow', false)
}
/**
 * 
 * @param {歌词字符串} lyric 
 * 将歌词格式化为对象数组
 */
const lyricFormate = (lyric) => {
    const lyricList = lyric.split(/[(\r\n)\r\n]+/).map((item) => {
        const m = item.slice(1, 3)
        const s = item.slice(4, 6)
        const index = item.indexOf(']')
        const mm = item.slice(7, index)
        const time = parseInt(+m * 60) + parseInt(+s) + Number((+mm / 1000).toFixed(3))
        const lyric = item.slice(index + 1)
        return {
            time, lyric
        }
    })

    return lyricList

}
const lyricListObj = ref(null)
/**
 * 
 * @param {当前时间} currentTime 
 * 简单的歌词适配
 */
const lyricScroll = (currentTime) => {
    const container = lyricListObj.value.parentNode
    const lis = lyricListObj.value.querySelectorAll('li')
    const liOffsetHeight = lis[0].offsetHeight
    let index = lis.length - 1;
    for (let i = 0; i < lyricList.value.length; i++) {
        if (lyricList.value[i].time > currentTime) {
            index = i - 1
            break
        }
    }
    lyricListObj.value.querySelector('li.active')?.classList.remove('active')
    if (lis[index]) {
        lis[index].classList.add('active')
        container.scrollTop = index * liOffsetHeight
    }


}

watch(() => currentInfo.value.currentTime, (newValue) => {
    if (scrollLock.value)
        lyricScroll(newValue)
})
const scrollLock = ref(true)
const lookLyric = debounce(() => {
    scrollLock.value = !scrollLock.value
}, 3000, { leading: true, trailing: true })

const recommendObj = ref(null)
const showRecommend = () => {
    recommendObj.value.classList.add('active')
}
const hiddenRecommend = () => {
    recommendObj.value.classList.remove('active')
}
document.body.addEventListener('click', hiddenRecommend)
onBeforeUnmount(() => {
    document.body.removeEventListener('click', hiddenRecommend)
})

const hotRecommendIsShow = ref(true)
const getRecommendSearchKeyworlds = debounce((e) => {
    if (e.target.value) {
        _store.dispatch('search_music/getRecommendSearchKeyworlds', e.target.value)
        hotRecommendIsShow.value = false
    } else {
        hotRecommendIsShow.value = true
    }
}, 600, { leading: false, trailing: true })
const keywordsObj = ref(null)
const searchByKeywords = () => {
    if (keywordsObj.value.value != "") {
        _router.push({
            name: 'searchDetail',
            query: {
                keywords: keywordsObj.value.value
            }
        })
    }
    _store.commit('music/changeDrawerIsShow', false)
}
</script>




<style lang="scss" scoped>
.music-play {
    width: 100%;

    min-height: 11.2796rem;
    overflow-y: auto;
    outline: none;
    box-sizing: border-box;
    background: linear-gradient(to bottom, #E5E3DF, #EDEBE8, #EEECEC, #FFFFFF, #FFFFFF, #FFFFFF);

    .bar {
        width: 100%;
        min-height: .9479rem;
        display: flex;
        align-items: center;

        .close,
        .serch svg,
        .identy-music svg,
        .close svg {
            width: .3949rem;
            height: .3949rem;
            cursor: pointer;
        }

        .close {
            margin-left: 2.8%;
        }

        .serch {
            width: 2.8436rem;
            height: .4739rem;
            border-radius: .237rem;
            background-color: #DDDBD6;
            display: flex;
            gap: .079rem;
            align-items: center;
            margin-left: 14%;
            cursor: pointer;
            position: relative;

            >svg {
                width: .3476rem;
                height: .3476rem;
            }



            input {
                display: inline-block;
                height: 100%;
                outline: none;
                width: calc(100% - .3949rem - 0.316rem);
                box-sizing: border-box;
                background-color: transparent;
                border: none;
                font-size: .2rem;
                color: #333;

            }

            >svg {
                flex-shrink: 0;
                margin-left: .158rem;
            }

            .recommend {
                display: none;
                opacity: 0;
                position: absolute;
                width: 5.5292rem;
                background-color: #fff;
                min-height: 20vh;
                max-height: 80vh;
                left: 50%;
                bottom: 0;
                z-index: 22;
                overflow-y: scroll;
                border-radius: .1264rem;
                transform: translate(-50%, calc(100% + .4107rem));
                box-sizing: border-box;
                box-shadow: .0316rem .0316rem .06rem rgba(100, 100, 100, .1),
                    -.0316rem -.0316rem .06rem rgba(100, 100, 100, .1);
                transition: opacity 0.5s linear;

                &.active {
                    display: block;
                    opacity: 1;
                }

                &::-webkit-scrollbar {
                    width: .079rem;
                    border-radius: .079rem;
                    background-color: rgba(100, 100, 100, .1);

                }

                &::-webkit-scrollbar-thumb {
                    background-color: #FF6767;
                    border-radius: .079rem;
                }

                .hot-recommend {
                    .search-bar {
                        display: flex;
                        align-items: center;
                        color: gray;
                        height: .6319rem;
                        text-indent: .316rem;

                        svg {
                            margin-left: .2528rem;
                        }
                    }

                    .history {
                        list-style: none;
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: .158rem;
                        box-sizing: border-box;
                        padding: 0 .2528rem;

                        li {
                            padding: .0395rem .2212rem;
                            border-radius: .158rem;
                            display: flex;
                            align-items: center;
                            border: 1px solid #DDDBD6;
                            position: relative;

                            &:hover {
                                background-color: rgba(100, 100, 100, .1);

                                svg {
                                    display: inline-block;
                                }
                            }

                            svg {
                                width: .2528rem;
                                height: .2528rem;
                                position: absolute;
                                right: 0;
                                top: 50%;
                                transform: translateY(-50%);
                                display: none;

                            }

                            span {
                                font-size: .1896rem;
                                color: #333;
                            }
                        }
                    }

                    .hot {

                        >p {
                            color: #aaa;
                            text-indent: .316rem;
                            line-height: .9479rem;
                            letter-spacing: .0047rem;
                        }

                        ul {
                            list-style: none;
                            width: 100%;

                            li {
                                width: 100%;
                                height: .9479rem;
                                display: flex;
                                align-items: center;

                                &:hover {
                                    background-color: rgba(100, 100, 100, .05);
                                }

                                &:nth-of-type(1),
                                &:nth-of-type(2),
                                &:nth-of-type(3) {
                                    .left {
                                        color: #FF6767;
                                    }

                                    .right {
                                        .serch-word {
                                            color: #111;
                                            font-weight: 560;
                                        }
                                    }
                                }

                                .left {
                                    height: 100%;
                                    line-height: .9479rem;
                                    color: #aaa;
                                    width: .9479rem;
                                    text-align: center;
                                    flex-shrink: 0;
                                }

                                .right {
                                    width: calc(100% - .9479rem);

                                    p,
                                    span {
                                        font-size: .2054rem;

                                        img {
                                            width: .4739rem;
                                            vertical-align: middle;

                                        }
                                    }

                                    p {
                                        line-height: .3633rem;
                                        white-space: nowrap;
                                        text-overflow: ellipsis;
                                        overflow: hidden;
                                        width: 100%;
                                    }

                                    .serch-word {
                                        margin-right: .1264rem;
                                    }

                                    .count {
                                        margin-left: .1264rem;
                                    }

                                    .description,
                                    .count {
                                        color: #aaa;
                                    }
                                }
                            }
                        }
                    }
                }

                .keyworld-recommend {
                    width: 100%;
                    box-sizing: border-box;
                    padding: .158rem 0 .4107rem 0;

                    .guess {
                        display: flex;
                        align-items: center;
                        gap: .2528rem;
                        padding-left: .2528rem;

                        height: .9479rem;

                        span {
                            color: gray;
                        }
                    }

                    .single,
                    .album,
                    .singer {
                        width: 100%;
                        box-sizing: border-box;
                        margin-bottom: .158rem;

                        ul {
                            list-style: none;
                            width: 100%;

                            li {
                                display: flex;
                                align-items: center;
                                width: 100%;
                                height: .6319rem;
                                box-sizing: border-box;


                                p {
                                    width: 100%;
                                    box-sizing: border-box;
                                    padding-left: .6319rem;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                }

                                &:hover {
                                    background-color: rgba(100, 100, 100, .05);
                                }

                                span {
                                    font-size: .2054rem;
                                    color: #333;

                                    &:first-of-type {
                                        color: #979effd8;
                                    }
                                }
                            }

                        }



                        p {
                            width: 100%;
                            text-indent: .2528rem;

                            span {
                                color: gray;
                            }

                            svg {
                                width: .237rem;
                                height: .237rem;
                                margin-left: .1264rem;
                            }

                        }
                    }
                }
            }
        }

        .identy-music {
            margin-left: 2%;
        }
    }



    .music-display {
        width: 100%;
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        cursor: pointer;


        .player-box {
            position: relative;
            margin-top: 1.8957rem;



            .cizhen {
                height: 2.6856rem;
                position: absolute;
                z-index: 2;
                right: calc(50% - 1.1474rem);
                top: -1.66rem;
                transform-origin: 0 0;
                transform: rotateZ(-30deg);
                transition: transform 1s ease-in-out;



                &.acvtive {
                    transform: rotateZ(0) !important;
                }

                img {
                    height: 100%;
                }
            }

            .cipan-container {
                width: 4.8973rem;
                height: 4.8973rem;
                background-color: #DBDAD9;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                position: relative;
                animation: rotate 60s linear infinite;
                flex-shrink: 0;

                &.play {
                    animation-play-state: running;
                }

                &.pause {
                    animation-play-state: paused;
                }

                .cipan {
                    width: 95%;
                    height: 95%;
                }

                .cover {
                    position: absolute;
                    width: 3.1596rem;
                    height: 3.1596rem;
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);

                }

            }

            @keyframes rotate {
                0% {
                    transform: rotateZ(0deg);
                }

                100% {
                    transform: rotateZ(360deg);
                }
            }
        }

        .lyric-display {
            width: 6.951rem;
            box-sizing: border-box;
            margin-left: 5%;

            .music-info {
                width: 100%;

                p {
                    width: 100%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .song-name {
                    font-size: .3676rem;
                    letter-spacing: .0158rem;
                    font-family: 'PingFang SC00';
                    color: #333;
                }

                .source {
                    color: #aaa;
                    line-height: .4739rem;

                    span {
                        font-size: .2054rem;
                        margin-right: .3791rem;
                    }
                }


            }

            .lyric-list-container {
                width: 100%;
                margin-top: .3791rem;
                max-height: 5.5292rem;
                overflow-y: auto;

                &::-webkit-scrollbar {
                    width: .0632rem;
                    background-color: transparent;
                }

                &::-webkit-scrollbar-thumb {
                    width: .0632rem;
                    border-radius: .0632rem;
                    background-color: rgba(100, 100, 100, .1);
                }

                .lyric-list {
                    list-style: none;
                    padding-top: 2.1169rem;


                    li {
                        height: .5687rem;
                        line-height: .5687rem;
                        font-size: .2212rem;
                        color: gray;
                        letter-spacing: .0047rem;
                        width: 100%;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;

                        &.active {
                            font-size: .2686rem;
                            font-weight: 560;
                            color: #333;
                        }

                    }
                }
            }
        }

    }

}
</style>