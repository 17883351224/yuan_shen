<template>
    <div class="main">
        <div class="new-play">
            <img src="@/assets/home/home5_quanxinjizhi.webp" alt="全新机制" />
        </div>
        <div class="video-container">
            <img alt="videoBackground" class="video-background">
            <div class="video">
                <video autoplay muted loop class="new_play_video">
                </video>
            </div>
            <ul class="new-play-list">
                <li v-for="(p, index) in newPlayInfo.nameList" :key="index" @click="changeIndex(index, $event)"><img
                        :src="p.nameSrc" alt="机制名称"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";

export default {
    setup() {
        const data = reactive({
            newPlayInfo: {
                videoList: [
                    {
                        videoSrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/08/16/dbf1cb7bfa6abae5cd4a930e37e26bdb_633285267510277095.mp4",
                        videoBackgroundSrc: require('@/assets/home/home5_caozhongzi_background.webp')
                    },
                    {
                        videoSrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/08/16/d90de20689297916ad197f6f6f48bb49_3700354761240458221.mp4",
                        videoBackgroundSrc: require('@/assets/home/home5_siyu_background.webp')
                    },
                    {
                        videoSrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/08/16/b41dc3cba12303cfab4bf130930eebc4_6662504832412034066.mp4",
                        videoBackgroundSrc: require('@/assets/home/home5_zhanfang_background.webp')
                    },
                    {
                        videoSrc: "https://uploadstatic.mihoyo.com/puzzle/upload/puzzle/2022/08/16/b93ad5de8cd1515681501d09a12c443f_2184563095678811226.mp4",
                        videoBackgroundSrc: require('@/assets/home/home5_yuansujihua_background.webp')
                    },

                ],
                nameList: [
                    {
                        nameSrc: require("@/assets/home/home5_caozhongzi.webp")
                    },
                    {
                        nameSrc: require("@/assets/home/home5_siyu.webp")
                    },
                    {
                        nameSrc: require("@/assets/home/home5_yuansufanying_zhanfang.webp")
                    },
                    {
                        nameSrc: require("@/assets/home/home5_yuansufanying_jihua.webp")
                    }
                ]

            }
        });
        onMounted(() => {
            document.querySelector(".new-play-list li").classList.add("active")
            document.querySelector(".video-background").src = data.newPlayInfo.videoList[0].videoBackgroundSrc
            document.querySelector(".new_play_video").src = data.newPlayInfo.videoList[0].videoSrc
        })
        const changeIndex = (index, event) => {
            Array.from(event.target.parentNode.querySelectorAll("li")).forEach((e) => {
                e.classList.remove("active")
            })
            event.target.classList.add("active")
            document.querySelector(".video-background").src = data.newPlayInfo.videoList[index].videoBackgroundSrc
            document.querySelector(".new_play_video").src = data.newPlayInfo.videoList[index].videoSrc
        }
        return {
            ...toRefs(data),
            changeIndex
        };
    },
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
    min-width: 1400px;
    background: url("@/assets/home/home5_background.webp") center center / cover no-repeat;

    .new-play {
        position: absolute;

        left: 11%;

        img {
            width: 110px;
            height: 408px;
        }
    }

    .video-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -54%);
        width: 938px;
        height: 599px;
        box-sizing: border-box;

        .video-background {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .video {
            width: 626px;
            height: 316px;
            position: absolute;
            top: 21%;
            left: 18%;

            video {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                object-fit: cover
            }
        }

        .new-play-list {
            list-style: none;
            position: absolute;
            right: -7%;

            top: 37%;
            transform: translateX(-4px);

            li {
                margin-bottom: 8px;
                opacity: 0.5;

                &:hover {
                    opacity: 1 !important;
                }

                &.active {
                    opacity: 1 !important;
                }

                img {
                    width: 121px;
                    height: 39px;
                    pointer-events: none;
                }
            }
        }
    }
}
</style>