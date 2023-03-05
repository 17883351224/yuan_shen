<template>
    <div class="main">
        <div class="master-introduce">
            <img src="@/assets/home/home4_quanxinguaiwu.webp" alt="全新怪物">
        </div>
        <div class="master-avatar-container">
            <div class="master-avatar" v-for="(p, index) in masterInfo.masterList" :key="index"
                @click="changeIndex(index, $event)">
                <img :src="p.imgAvatar" :alt="p.imgAlt">
            </div>
        </div>
        <div class="video-container">
            <video :src="masterInfo.masterList[masterInfo.index].videSrc" autoplay muted loop></video>
            <img :src="masterInfo.masterList[masterInfo.index].imgInfo" alt="简介">
        </div>
    </div>
</template>

<script>
import { reactive, toRefs, onMounted, nextTick } from 'vue'

export default {
    setup() {
        const data = reactive({
            masterInfo: {
                index: 0,
                masterList: [{
                    imgAvatar: require('@/assets/home/home4_chedianshu_avatar.webp'),
                    imgAlt: "掣电树",
                    imgInfo: require("@/assets/home/home4_chedianshu_info.webp"),
                    videSrc: require("@/assets/home/home4_chedianshu.mp4")
                },
                {
                    imgAvatar: require('@/assets/home/home4_cuilingkongxun_avatar.webp'),
                    imgAlt: "翠翎恐蕈",
                    imgInfo: require("@/assets/home/home4_cuilingkongxun_info.webp"),
                    videSrc: require("@/assets/home/home4_cuilingkongxun.mp4")
                }
                ]
            }
        })
        const changeIndex = (param, event) => {
            data.masterInfo.index = param
            Array.from(event.target.parentNode.getElementsByTagName("div")).forEach((e) => {
                e.classList.remove("active")
            })
            event.target.classList.add("active")
        }
        onMounted(() => {
            document.querySelector('.master-avatar').classList.add("active")
        })

        return {
            ...toRefs(data),
            changeIndex
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    min-width: 1400px;
    overflow: hidden;
    height: 100vh;
    position: relative;
    background: url(@/assets/home/home4_background.webp) center center / cover no-repeat;
    box-sizing: border-box;

    .master-introduce {
        position: absolute;

        left: 12%;

        img {
            width: 110px;
            height: 408px;
        }
    }

    .master-avatar-container {
        position: absolute;
        top: 50%;
        left: 20%;

        .master-avatar {
            margin-bottom: 6px;
            opacity: 0.7;

            &.active {
                opacity: 1 !important;
            }

            &:hover {
                opacity: 1;
            }

            img {
                height: 104px;
                width: 104px;
                pointer-events: none;
            }
        }
    }

    .video-container {
        position: absolute;
        width: 558px;
        height: 558px;
        border-radius: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -52.5%);


        video {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;

        }

        img {
            position: absolute;
            width: 483px;
            height: 140px;
            bottom: 0;
            left: 0;
            transform: translate(39px, 4px);
        }
    }
}

// .active {
//     opacity: 1 !important;
// }
</style>