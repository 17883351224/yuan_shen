<template>
    <div class="main">
        <div class="logo-container">
            <img src="@/assets/home/home1_logo.webp" alt="原神Logo">
        </div>
        <div class="enter-container" @click="enterOfficialWebsite">
            <img src="@/assets/home/home1_enter.webp" alt="进入官网">
        </div>
        <div class="play-conrainer" @click="openVideo">
            <img src="@/assets/home/home1_play.webp" alt="播放">
        </div>
        <div class="age-container">
            <img src="@/assets/home/home1_age.webp" alt="年龄建议">
        </div>
        <div class="downloand-container">
            <div class="item first"><a href="#"></a></div>
            <div class="item second"><a href="#"></a></div>
            <div class="item third"><a href="#"></a></div>
        </div>
        <!-- -->
        <div class="mask" v-show="mask.isShow" @click="closeVideo">
            <div class="video-container" @click.stop>
                <video controls ref="myVideo"
                    src="https://webstatic.mihoyo.com/upload/static-resource/2022/08/13/66ab78529ed42e68e8a30fc5207d85b6_290673737464782301.mp4">
                </video>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, ref, } from '@vue/reactivity'
import { useRouter } from "vue-router"
export default {
    setup() {
        const data = reactive({
            mask: {
                isShow: false
            },
        })
        let myVideo = ref(null)
        const closeVideo = () => {
            data.mask.isShow = false
            myVideo.value.pause()

        }
        const openVideo = () => {
            data.mask.isShow = true
            myVideo.value.currentTime = 0
            myVideo.value.play()
        }
        const _router = useRouter();
        const enterOfficialWebsite = () => {
            _router.push({
                name: 'home'

            })

        }
        return {
            ...toRefs(data),
            openVideo,
            closeVideo,
            myVideo,
            enterOfficialWebsite
        }
    }

}
</script>

<style lang="scss" scoped>
.main {
    height: 100vh;
    width: 100%;
    box-sizing: border-box;
    min-width: 1400px;
    background: url("@/assets/home/home1.webp") center center / cover no-repeat;
    position: relative;



    .logo-container {
        position: absolute;
        top: 18px;
        left: 10%;

        img {
            height: 77px;
            width: 96px;
        }
    }

    .enter-container {
        position: absolute;
        top: 38px;
        right: 150px;

        &:hover img {
            content: url("@/assets/home/home1_enter_hover.webp");
            cursor: pointer;
        }


        img {
            width: 109px;
            height: 29px;
        }
    }



    .play-conrainer {
        position: absolute;
        top: 43%;
        left: 39%;
        transform: translate(10px, -10px);

        &:hover img {
            content: url("@/assets/home/home1_play_hover.webp");
            cursor: pointer;
        }

        img {
            width: 60px;
            height: 60px;
        }

    }

    .age-container {
        position: absolute;

        bottom: 7%;
        left: 11%;

        &:hover {
            cursor: pointer;
        }

        img {
            width: 65px;
            height: 84px;
        }
    }

    .downloand-container {
        position: absolute;
        bottom: 11%;
        left: 44%;
        transform: translateX(-5px);

        .item {
            width: 128px;
            height: 30px;
            margin-bottom: 6px;

            &:hover {
                cursor: pointer;
            }

            a {
                display: block;
                width: 100%;
                height: 100%;
            }

        }

        .first a {
            background: url("@/assets/home/home1_pc_downlonad.webp") center/cover no-repeat;
        }

        .second a {
            background: url("@/assets/home/home1_other_downlonad.webp") center/cover no-repeat;
        }

        .third a {
            background: url("@/assets/home/home1_yun_downloand.webp") center/cover no-repeat;
        }

        .first:hover a {
            background: url("@/assets/home/home1_pc_hover.webp") center/cover no-repeat
        }

        .second:hover a {

            background: url("@/assets/home/home1_other_hover.webp") center/cover no-repeat
        }

        .third:hover a {
            background: url("@/assets/home/home1_yun_hover.webp") center/cover no-repeat
        }

    }

    .mask {
        width: 100%;
        height: 100%;
        position: relative;
        background: rgba(0, 0, 0, .5);

        .video-container {
            width: 496px;
            height: 278px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            video {
                display: block;
                width: 100%;
                height: 100%;
            }

        }
    }

}
</style>