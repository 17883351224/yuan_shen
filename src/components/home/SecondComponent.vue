<template>
    <div class="main">
        <div class="info-container">
            <img src="@/assets/home/home2_info.webp" alt="简介">
        </div>
        <div class="swiper-container">
            <div class="item" v-for="(imgItem, index) in swiper.imgList" :key="index" v-show="index == swiper.index">
                <img :src=imgItem.src :alt=imgItem.alt>
            </div>
            <div class="left-container btn" @click="chageIndex(-1)">
                <img src="@/assets/home/home2_left.webp" alt="上一页">
            </div>
            <div class="right-container btn" @click="chageIndex(1)">
                <img src="@/assets/home/home2_right.webp" alt="上一页">
            </div>
        </div>

    </div>
</template>
<script>
import { onBeforeUnmount, onMounted, reactive, toRefs, watch } from 'vue'
export default {
    name: "SecondComponent",
    setup() {
        const data = reactive({
            swiper: {
                isShow: false,
                index: 0,
                timer: null,
                imgList: [
                    {
                        src: require("@/assets/home/home2_channayuan.webp"),
                        alt: "禅那园"
                    },
                    {
                        src: require("@/assets/home/home2wuyuchoulin.webp"),
                        alt: "无郁稠林"
                    }
                ]
            }
        })

        const chageIndex = (param) => {
            clearInterval(data.swiper.timer);
            data.swiper.index += param
            autoPlay()
        }
        const autoPlay = () => {
            data.swiper.timer = setInterval(() => {
                data.swiper.index++;
            }, 4000);
        }
        watch(() => data.swiper.index, (newValue) => {
            if (newValue >= data.swiper.imgList.length) {
                data.swiper.index = 0
            }
            if (newValue < 0) {
                data.swiper.index = data.swiper.imgList.length - 1
            }

        })

        onMounted(() => {
            autoPlay()
        })

        onBeforeUnmount(() => {
            clearInterval(data.swiper.timer);
        })

        return {
            ...toRefs(data),
            chageIndex
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background: url("@/assets/home/home2.webp") center center / cover no-repeat;
    position: relative;
    min-width: 1400px;

    .info-container {
        position: absolute;
        right: 14%;

        img {
            height: 376px;
            width: 101px;
        }
    }

    .swiper-container {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 863px;
        height: 573px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .item {
            position: absolute;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .left-container {
            position: absolute;
            left: 24%;
            bottom: -2%;

            &:hover img {
                content: url("@/assets/home/home2_left_hover.webp");
            }
        }

        .right-container {
            position: absolute;
            right: 31%;
            bottom: -2%;

            &:hover img {
                content: url("@/assets/home/home2_right_hover.webp");
            }
        }

        .btn img {
            width: 79px;
            height: 57px;
        }
    }
}
</style>