<template>
    <div class="main">
        <div class="biography-container">
            <div class="logo-container">
                <img src="@/assets/role/zhuanji_icon.png" alt="">
            </div>
            <div class="biography-text">
                <div class="role-avatar-img">
                    <img v-lazy="roleDetail.roleBackgroundImg" alt="roleimg">
                </div>
                <div class="center-container">
                    <p v-if="biographyList.length !== 0">{{ biographyList[index].content }}</p>
                </div>
                <div class="right-container">
                    <div class="img-yushu-logo">
                    </div>
                    <div class="right-text-container">
                        <h6>{{ roleDetail.roleName }}</h6>
                        <span @click="index = 0" :class="{ 'active': index == 0 }">传记一</span>
                        <span @click="index = 1" :class="{ 'active': index == 1 }"
                            v-if="biographyList.length == 2">传记二</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';

const index = ref(0)
const _store = useStore()
const roleDetail = computed(() => _store.state.role.roleDetail)
const biographyList = computed(() => _store.state.role.roleDetail.biographies || [])

const backgroundPosition = computed(() => {
    if (roleDetail.value.roleAttribute == '冰')
        return '12px - 300px'
    if (roleDetail.value.roleAttribute == '岩')
        return '-167px -300px'
    if (roleDetail.value.roleAttribute == '风')
        return '-310px -300px'
    if (roleDetail.value.roleAttribute == '草')
        return '-466px -300px'
    if (roleDetail.value.roleAttribute == '水')
        return '-419px -300px'
    if (roleDetail.value.roleAttribute == '火')
        return '-771px -300px'
    if (roleDetail.value.roleAttribute == '雷')
        return '-924px -300px'


})


</script>

<style lang="scss" scoped>
.main {
    background: #fff;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;

    @media screen and (max-width:768px) {
        .logo-container {
            height: 1.2638rem !important;
        }

    }

    @media screen and (max-width:1200px) {
        .logo-container {
            height: 1.8838rem !important;
        }

    }


    .biography-container {
        margin-left: 9.5%;

        .logo-container {


            img {
                height: 3.0016rem;
            }
        }
    }

    .biography-text {
        background: url(@/assets/role/jinglingtu.png);
        background-position: 0px -458px;
        position: relative;
        width: 1078px;
        height: 427px;
        margin-left: 114px;
        display: flex;
        justify-content: right;
        align-items: center;
        background-repeat: no-repeat;

        .role-avatar-img {
            width: 126px;
            height: 126px;
            border-radius: 50%;
            margin: 0 85px 233px 0px;
            box-shadow: 2px 2px 4px rgba(200, 200, 200, .5);

            &:hover>img {
                animation-play-state: paused;
                cursor: pointer;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
                animation: rotate 60s linear infinite;

            }
        }

        .right-container {
            position: relative;
            height: 85%;
            width: 86px;


            border-left: 1px solid black;

            .img-yushu-logo {
                position: absolute;
                top: -25px;
                left: -5px;
                width: 1.4218rem;
                height: 85px;
                transform: scale(0.5);
                background: url(@/assets/role/shuxingjinglingtu_2.png);
                background-repeat: no-repeat;
                background-position: v-bind(backgroundPosition)
            }

            .right-text-container {
                margin-top: 40px;
                display: flex;
                flex-direction: column;
                align-items: center;
                height: 100%;

                h6,
                span {
                    display: inline-block;
                    writing-mode: vertical-rl;
                    margin-top: 25px;
                    font-family: PingFang SC0;
                    cursor: pointer;

                }

                h6 {
                    color: #bb391c;
                    font-size: 17px;
                    letter-spacing: 4px;
                }


                span {
                    font-size: 15px;
                    letter-spacing: 1px;


                    &.active {
                        font-weight: 600;
                        color: #74a2bd;
                    }
                }
            }
        }

        .center-container {
            display: flex;
            height: 85%;


            p {
                display: inline-block;
                height: 100%;
                line-height: 53px;
                writing-mode: vertical-rl;
                max-width: 600px;
                letter-spacing: 2.5px;
                overflow-x: auto;
                font-size: 14px;
                white-space: pre-line;

            }
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
</style>