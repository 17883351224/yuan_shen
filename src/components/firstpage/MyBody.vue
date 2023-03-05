<template>
    <div class="first-page-body" ref="firstPageBody">
        <div class="video-container" v-show="videoIsShow" @click="closeVideo">
            <div class="left" @click.stop="beforeVideo"><img src="@/assets/firstpage/3.jpg"></div>
            <video id="v2" controls class="mp" @click.stop :src="arr[index]">
            </video>
            <div class="right" @click.stop="nextVideo"><img src="@/assets/firstpage/2.jpg"></div>
        </div>
        <div class="play-container"><button @click="playVideo"></button></div>
        <img src="@/assets/firstpage/1.jpg" alt="q" class="qq">
        <video id="v1" autoplay loop muted>
            <source :src="`${baseURL}/ys/resource/video/1.mp4`" type="video/mp4" />
        </video>
    </div>
</template>

<script>
import { nextTick, ref } from 'vue'
import { baseURL } from '@/api/request'
export default {
    setup() {
        let index = ref(0);
        const firstPageBody = ref(null)
        let videoIsShow = ref(false)
        const arr = [`${baseURL}/ys/resource/video/2.mp4`, `${baseURL}/ys/resource/video/RaidenShogun.mp4`,
        `${baseURL}/ys/resource/video/Tartaglia.mp4`, `${baseURL}/ys/resource/video/Eula.mp4`,
        `${baseURL}/ys/resource/video/Hutao.mp4`, `${baseURL}/ys/resource/video/Mona.mp4`,
        ]
        const beforeVideo = () => {
            const videoObj = firstPageBody.value.querySelector('#v2')
            if (--index.value < 0) {
                index.value = arr.length - 1
            }
            videoObj.currentTime = 0;
            nextTick(() => {
                videoObj.play()
            })


        }
        const nextVideo = () => {
            const videoObj = firstPageBody.value.querySelector('#v2')
            if (++index.value > arr.length - 1) {
                index.value = 0;
            }

            nextTick(() => {
                videoObj.currentTime = 0;
                videoObj.play()

            })

        }
        const playVideo = () => {
            const videoObj = firstPageBody.value.querySelector('#v2')
            videoIsShow.value = true
            nextTick(() => {
                videoObj.currentTime = 0;
                videoObj.play()

            })
        }
        const closeVideo = () => {
            const videoObj = firstPageBody.value.querySelector('#v2')
            videoObj.pause()
            videoIsShow.value = false
        }
        return {
            beforeVideo,
            nextVideo,
            arr,
            index,
            playVideo,
            firstPageBody,
            videoIsShow,
            closeVideo,
            baseURL
        }
    }

}
</script>

<style lang="scss" scoped>
@media screen and (max-width:768px) {
    .qq {
        width: 15% !important;
    }
}

.first-page-body {
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
    position: relative;

    .play-container {
        position: absolute;
        width: 356px;
        height: 76px;
        bottom: 28%;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        background: url(@/assets/firstpage/play_video.png) center center/ cover no-repeat;

        button {
            border: none;
            width: 48px;
            height: 48px;
            background: #fff;
            border-radius: 50%;
            position: relative;
            transition: all 0.3s linear;

            &:hover {
                background: transparent;
                cursor: pointer;
            }

            &:hover::before {
                background: url(@/assets/firstpage/play_video_inner.png) center bottom /cover no-repeat;
            }


            &::before {
                content: "";
                width: 28px;
                height: 28px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: url(@/assets/firstpage/play_video_inner.png) center top /cover no-repeat;
            }


        }
    }

    #v1 {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: -1;
        object-fit: cover;

    }
}



.video-container {
    position: fixed;
    z-index: 3;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    left: 0;
    top: 0;
}

.video-container video {
    width: 800px;
    height: 450px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    position: absolute;
}

.qq {
    position: absolute;
    width: 150px;
    object-fit: cover;
    left: 6%;
    bottom: 20%;
}

.left {
    width: 80px;
    height: 80px;
    left: 16%;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    z-index: 2;
}

.right {
    width: 100px;
    height: 100px;
    right: 16%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;

    img {
        width: 100%;
        height: 100%;
    }

    position: absolute;
}

.mp {
    position: absolute;

}
</style>