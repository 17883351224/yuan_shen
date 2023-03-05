<template>
    <div class="main" :style="`background:url(${cityInfo.cityBackground})`">
        <div class="world">
            <div class="logo-img">
                <img :src="cityInfo.cityLogo" alt="logo">
            </div>
            <div class="world-name">
                {{ cityInfo.cityName }}
            </div>
            <div class="text-info">
                <p>{{ cityInfo.cityIntroduce }}</p>
            </div>
            <div class="details" @click="changeDetailShow(true)">
                <div class="img-container">
                    <img src="@/assets/world/详情.png" alt="detalis">
                </div>
                <span>查看详情</span>
            </div>
        </div>
        <DaLuDetail class="mask-detali" v-show="detailIsShow" :cityInfo="cityInfo" />
    </div>
</template>

<script>
import DaLuDetail from './DaLuDetail.vue'
import { provide, ref } from 'vue'
export default {
    props: ["cityInfo"],
    components: { DaLuDetail },
    setup(props) {
        const detailIsShow = ref(false)
        const changeDetailShow = (value) => {
            detailIsShow.value = value;
        }
        provide('changeDetailShow', changeDetailShow)
        return {

            detailIsShow,
            changeDetailShow
        };
    },

}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;


    .mask-detali {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(18, 18, 18, 0.76);
        z-index: 2022;

    }

    .world {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .logo-img {
            width: 86px;
            height: 86px;
            margin-bottom: 10px;

            img {
                width: 100%;
                object-fit: cover;
                height: 100%;
            }
        }

        .world-name {
            position: relative;
            font-size: 38px;
            color: #fff;
            font-family: PingFang SC0;
            letter-spacing: 2px;
            margin-bottom: 30px;

            &::before {
                content: "";
                position: absolute;
                top: 50%;
                left: 0;
                width: 254px;
                height: 9.5px;
                background: url(@/assets/world/name_left.png)center center /cover no-repeat;
                transform: translate(-110%, -50%);
            }

            &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: 0;
                width: 254px;
                height: 9.5px;
                background: url(@/assets/world/name_right.png)center center /cover no-repeat;
                transform: translate(110%, -50%) rotateZ(180deg);

            }
        }

        .text-info {
            margin-bottom: 80px;

            p {
                font-size: 14px;
                color: #fff;
                line-height: 25px;
                letter-spacing: 0.5px;
                text-align: center;
                white-space: pre-line;
            }
        }

        .details {
            display: flex;
            flex-direction: column;
            align-items: center;

            .img-container {
                width: 55px;
                height: 55px;
                position: relative;
                cursor: pointer;

                &::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: url(@/assets/world/world_animation.png)center center/cover no-repeat;
                    animation: bounce 1s ease-in-out infinite;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            span {
                display: inline-block;
                color: #fff;
                margin-top: 16px;
                cursor: pointer;

            }
        }
    }

    @keyframes bounce {
        0% {
            transform: scale(1);
            opacity: 0;
        }

        50% {
            transform: scale(1.6);
            opacity: 1;
        }

        100% {
            transform: scale(1);
            opacity: 0;
        }

    }

}
</style>