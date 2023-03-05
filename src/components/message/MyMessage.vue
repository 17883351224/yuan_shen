<template>
    <transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInDownBig"
        leave-active-class="animate__backInDown">
        <div class="message" v-show="isShow">
            <div class="message-inner">
                <div class="img-container">
                    <img alt="avatar" :src="avatar[type]">
                </div>
                <div class="logo-container">
                    <img src="@/assets/message/logo2.webp" alt="logo">
                </div>
                <div class="text-container">
                    <p>{{text}}</p>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import "animate.css"
import { onMounted, ref } from 'vue';

export default {
    props: {
        text: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "success",
        },
        delay: {
            type: Number,
            default: 3000
        }
    },
    setup(props) {

        const isShow = ref(false)
        onMounted(() => {
            isShow.value = true;
        })
        const avatar = {
            success: require('@/assets/message/success_icon.webp'),
            warning: require('@/assets/message/warning_icon.webp'),
            error: require('@/assets/message/error_icon.webp')
        }

        return {
            isShow,
            avatar
        }
    }
}
</script>

<style lang="scss" scoped>
.message {
    position: fixed;
    top: 40px;
    left: calc(50% - 180px);
    box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: .2);
    z-index: 2022;
    border-radius: 8px;
    overflow: hidden;
    // background: linear-gradient(to bottom right, #9FA5DA, #E8F5C8);
    // background: linear-gradient(to bottom, #eebd89, #d13abd);
    background: linear-gradient(to bottom right, #ef33b1, #f6e6bc);

    .message-inner {
        display: flex;
        height: 120px;
        width: 360px;
        align-items: center;
        position: relative;
        border-radius: 8px;

        .img-container {
            width: 110px;
            height: 110px;
            flex-shrink: 0;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .logo-container {
            right: 0;
            top: 0;
            position: absolute;

            img {
                width: 70px;
                height: 60px;
                object-fit: cover;
            }
        }

        .text-container {

            width: 250px;
            height: 100%;

            p {
                padding: 6px 70px 6px 10px;
                box-sizing: border-box;
                width: 100%;
                height: 100%;
                display: block;
                color: white;
                font-size: 17px;
                line-height: 26px;
                display: flex;
                align-items: center;
                letter-spacing: 0.4px;
                white-space: pre-line;
            }
        }
    }
}
</style>