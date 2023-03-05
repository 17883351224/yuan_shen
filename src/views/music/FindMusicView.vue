<template>
    <div class="find-music-app">
        <nav class="nav-bar">
            <ul>
                <li class="active">个性推荐</li>
                <li>专属定制</li>
                <li>歌单</li>
                <li>排行榜</li>
                <li>歌手</li>
                <li>最新音乐</li>
            </ul>
        </nav>
        <section class="swiper-container">
            <n-carousel autoplay effect="card" prev-slide-style="transform: translateX(-120%) translateZ(-250px);"
                next-slide-style="transform: translateX(20%) translateZ(-250px);" style="height: 223px"
                :dot-type="'dot'" class="swiper">
                <n-carousel-item :style="{ width: '53%' }" v-for="item in bannerList" :key="item.imageUrl"
                    class="carousel-img">
                    <img v-lazy="item.imageUrl">
                </n-carousel-item>

            </n-carousel>
        </section>
        <section class="recommend-song-list">
            <div class="bar">
                <span>推荐歌单</span>
                <svg t="1668479998518" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2680" width="32" height="32">
                    <path
                        d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z"
                        p-id="2681" fill="#333333"></path>
                </svg>
            </div>
            <div class="recommend-list-container">
                <ul class="recommend-list">
                    <li v-for="item in recommendPlayList.slice(0, 10)" :key="item.id" @click="gotoSongList(item.id)">
                        <div class="img-cover">
                            <img v-lazy="item.picUrl" alt="">
                            <div class="play-count">
                                <svg t="1668487481569" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5463" width="16" height="16">
                                    <path
                                        d="M839.164908 557.578058 240.50216 941.694459c-32.559867 21.048385-76.198502 11.69332-76.198502-19.264762L164.303659 102.006232c0-35.897581 40.684228-38.282908 76.198502-19.23304L839.164908 466.842521C863.815318 491.907383 863.815318 532.528546 839.164908 557.578058zM227.422748 865.160365l568.042125-352.942401L227.422748 159.290913C227.422748 215.621872 227.422748 850.38894 227.422748 865.160365z"
                                        p-id="5464" fill="#ffffff"></path>
                                </svg>
                                <span>123万</span>
                            </div>
                            <div class="play">
                                <svg t="1668484980230" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="4293" width="32" height="32">
                                    <path
                                        d="M852.5 533.9L279 864.7c-11.9 6.9-27.2 2.8-34.1-9.1-2.2-3.8-3.3-8.1-3.3-12.5V181.5c0-13.8 11.2-24.9 24.9-24.9 4.4 0 8.7 1.2 12.5 3.3l573.4 330.8c11.9 6.9 16 22.1 9.1 34.1-2.1 3.8-5.2 6.9-9 9.1z"
                                        p-id="4294" fill="#d81e06"></path>
                                </svg>
                            </div>
                        </div>
                        <p>{{ item.name }}</p>
                    </li>
                </ul>

            </div>
        </section>
        <!-- 推荐MV -->
        <section class="recommend-mv">
            <div class="bar">
                <span>推荐MV</span>
                <svg t="1668479998518" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2680" width="32" height="32">
                    <path
                        d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z"
                        p-id="2681" fill="#333333"></path>
                </svg>
            </div>
            <div class="recommend-list-container">
                <ul class="recommend-list">
                    <li v-for="item in recommendMVList.slice(0, 4)" :key="item.id">
                        <div class="img-cover">
                            <img v-lazy="item.picUrl" alt="cover">
                            <div class="play-count">
                                <svg t="1668487481569" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="5463" width="16" height="16">
                                    <path
                                        d="M839.164908 557.578058 240.50216 941.694459c-32.559867 21.048385-76.198502 11.69332-76.198502-19.264762L164.303659 102.006232c0-35.897581 40.684228-38.282908 76.198502-19.23304L839.164908 466.842521C863.815318 491.907383 863.815318 532.528546 839.164908 557.578058zM227.422748 865.160365l568.042125-352.942401L227.422748 159.290913C227.422748 215.621872 227.422748 850.38894 227.422748 865.160365z"
                                        p-id="5464" fill="#ffffff"></path>
                                </svg>
                                <span>{{ item.playCount }}</span>
                            </div>
                        </div>
                        <p>{{ item.name }}</p>
                        <p>{{ item.artistName }}</p>
                    </li>
                </ul>
            </div>
        </section>
        <!-- 推荐最新音乐 -->
        <section class="recommend-latest-music">
            <div class="bar">
                <span>最新音乐</span>
                <svg t="1668479998518" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2680" width="32" height="32">
                    <path
                        d="M761.055557 532.128047c0.512619-0.992555 1.343475-1.823411 1.792447-2.848649 8.800538-18.304636 5.919204-40.703346-9.664077-55.424808L399.935923 139.743798c-19.264507-18.208305-49.631179-17.344765-67.872168 1.888778-18.208305 19.264507-17.375729 49.631179 1.888778 67.872168l316.960409 299.839269L335.199677 813.631716c-19.071845 18.399247-19.648112 48.767639-1.247144 67.872168 9.407768 9.791372 21.984142 14.688778 34.560516 14.688778 12.000108 0 24.000215-4.479398 33.311652-13.439914l350.048434-337.375729c0.672598-0.672598 0.927187-1.599785 1.599785-2.303346 0.512619-0.479935 1.056202-0.832576 1.567101-1.343475C757.759656 538.879828 759.199462 535.391265 761.055557 532.128047z"
                        p-id="2681" fill="#333333"></path>
                </svg>
            </div>
            <div class="recommend-list-container">
                <ul class="recommend-list">
                    <li v-for="item in recommendLatestMusicList" :key="item.id">
                        <div class="img-cover">
                            <img v-lazy="item.picUrl" alt="cover">
                        </div>
                        <div class="info">
                            <p>{{ item.name }}</p>
                            <p>
                                <span v-for="(p, index) in item.song.artists" :key="p.id">
                                    {{ p.name }}
                                    <span v-show="index < item.song.artists.length - 1" class="ge">/</span>
                                </span>
                            </p>
                        </div>
                    </li>
                </ul>

            </div>
        </section>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { reqRecommendLatestMusic } from "@/api/music"
import { useRouter } from 'vue-router';
const _store = useStore()
const _router = useRouter()
const bannerList = computed(() => _store.state.find_music.bannerList)
const recommendPlayList = computed(() => _store.state.find_music.recommendPlayList)
const recommendMVList = computed(() => _store.state.find_music.recommendMVList)
const recommendLatestMusicList = ref(null)

onMounted(() => {
    _store.dispatch('find_music/getBannerList', 0)
    _store.dispatch('find_music/getRecommendPlayList', 20)
    _store.dispatch('find_music/getRecommendMVList')
    // _store.dispatch('find_music/getRecommendLatestMusicList', 12)
    reqRecommendLatestMusic(12).then((res) => {
        recommendLatestMusicList.value = res.result
    })
})
const gotoSongList = (id) => {
    _router.push({
        name: 'musicList',
        query: {
            id
        }
    })
}
</script>

<style lang="scss" scoped>
.find-music-app {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .nav-bar {
        width: 100%;
        box-sizing: border-box;
        padding-left: 29.9979px;

        ul {
            min-height: 50.0007px;
            list-style: none;
            display: flex;
            height: 100%;
            gap: 23.997px;
            align-items: center;

            li {
                color: #444;
                letter-spacing: .3988px;
                cursor: pointer;
                box-sizing: border-box;
                height: 46.0001px;
                line-height: 46.0001px;

                &.active {
                    font-size: .2844rem;
                    color: #111;
                    font-family: 'PingFang SC00';
                    border-bottom: 3.165px solid #EC4141;

                }
            }
        }
    }

    .bar {
        width: 100%;
        height: .6319rem;
        display: flex;
        align-items: center;
        margin-bottom: .158rem;
        cursor: pointer;

        span {
            font-size: .2844rem;
            letter-spacing: .0063rem;
            font-family: PingFang SC00;
            color: #111;
        }

        svg {
            width: .3476rem;
            height: .3476rem;
        }
    }

    .swiper-container {
        width: 85%;
        margin-top: .316rem;

        overflow: hidden;
        padding-bottom: 60.0021px;

        :deep(.n-carousel.n-carousel--card .n-carousel__slide.n-carousel__slide--next),
        :deep(.n-carousel.n-carousel--card .n-carousel__slide.n-carousel__slide--prev) {
            opacity: 0.9;
            border-radius: 8.0011px;
            overflow: hidden;
        }

        :deep(.n-carousel) {
            overflow: visible;

        }

        :deep(.n-carousel .n-carousel__dots.n-carousel__dots--dot .n-carousel__dot.n-carousel__dot--active) {
            background-color: #EC4141;
        }

        :deep(.n-carousel .n-carousel__dots.n-carousel__dots--dot .n-carousel__dot) {
            background-color: #E6E6E6;
        }

        :deep(.n-carousel.n-carousel--bottom .n-carousel__dots) {
            bottom: -29.9979px;
        }

        .swiper {
            width: 100%;


        }

        .carousel-img {
            border-radius: .1264rem;
            overflow: hidden;

            img {
                margin: 0 auto;
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: .1264rem;

            }

        }
    }

    .recommend-song-list {
        width: 85%;

        .recommend-list-container {
            width: 100%;

            .recommend-list {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                list-style: none;
                gap: .4739rem .316rem;

                li {

                    width: calc(20% - (1.2638rem / 5));
                    min-width: 3.2543rem;
                    cursor: pointer;

                    &:hover .play {
                        display: flex !important;
                        opacity: 1 !important;
                    }


                    .img-cover {
                        width: 100%;
                        height: 3.3175rem;
                        border-radius: .0948rem;
                        overflow: hidden;
                        position: relative;
                        filter: brightness(90%);

                        .play-count {
                            position: absolute;
                            top: .0632rem;
                            right: .079rem;
                            color: #fff;
                            display: flex;
                            align-items: center;
                            background-color: rgba(100, 100, 100, .5);
                            border-radius: .0632rem;

                            svg {
                                width: .2054rem;
                                height: .2054rem;
                                margin-right: .0474rem;
                            }

                            span {
                                font-size: .2054rem;
                            }

                        }

                        .play {
                            position: absolute;
                            bottom: .079rem;
                            right: .079rem;
                            background-color: #fff;
                            width: .5rem;
                            height: .5rem;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                            opacity: 0;
                            display: none;
                            transition: opacity 0.4s ease-in-out;

                            svg {
                                width: .32rem;
                                height: .32rem;
                            }
                        }

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            display: inline-block;
                        }
                    }

                    p {
                        width: 100%;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        line-height: .4739rem;
                    }
                }
            }
        }

    }

    .recommend-mv {
        width: 85%;
        margin-top: .5687rem;

        .recommend-list-container {
            width: 100%;

            .recommend-list {
                width: 100%;
                display: flex;
                gap: .4739rem .316rem;
                align-items: center;
                flex-wrap: wrap;
                list-style: none;

                li {
                    width: calc(25% - (.9479rem / 4));
                    min-width: 3.7915rem;
                    cursor: pointer;

                    .img-cover {
                        width: 100%;
                        height: 2.5276rem;
                        position: relative;
                        border-radius: .0948rem;
                        overflow: hidden;

                        .play-count {
                            position: absolute;
                            top: .0632rem;
                            right: .079rem;
                            color: #fff;
                            display: flex;
                            align-items: center;
                            background-color: rgba(100, 100, 100, .5);
                            border-radius: .0632rem;

                            svg {
                                width: .2054rem;
                                height: .2054rem;
                                margin-right: .0474rem;
                            }

                            span {
                                font-size: .2054rem;
                            }

                        }

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    p {
                        width: 100%;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        line-height: .4739rem;

                        &:nth-of-type(2) {
                            font-size: .2054rem;
                            color: gray;
                            line-height: .316rem;
                        }
                    }
                }
            }
        }
    }

    .recommend-latest-music {
        width: 85%;
        margin-top: .5687rem;

        .recommend-list-container {
            width: 100%;

            .recommend-list {
                width: 100%;
                display: flex;
                align-items: center;
                list-style: none;
                flex-wrap: wrap;
                gap: .316rem .2528rem;

                li {
                    width: calc(33.3% - (.5055rem / 3));
                    height: .8531rem;
                    display: flex;
                    align-items: center;
                    cursor: pointer;
                    min-width: 4.1074rem;
                    border-radius: .0948rem;

                    &:hover {
                        background-color: rgba(100, 100, 100, .1);
                    }

                    .img-cover {
                        height: 100%;
                        width: .8531rem;
                        border-radius: .0948rem;
                        overflow: hidden;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .info {
                        p {
                            font-size: .2212rem;
                            text-indent: .2528rem;

                            span {
                                font-size: .2212rem;
                            }

                            &:nth-of-type(2) {
                                color: gray;
                                letter-spacing: .0047rem;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>