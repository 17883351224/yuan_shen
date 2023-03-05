<template>
    <div class="ys-header" ref="ysHeader">
        <div class="inner">
            <div class="ys-logo">
                <div class="img-play-audio">
                    <img src="@/assets/firstpage/stop_play.png" alt="pause" v-show="backgroundMusicObj.paused"
                        :title="backgroundMusicObj.paused" @click="backgroundMusicObj.playAudio">
                    <img src="@/assets/firstpage/play.png" alt="play" @click="backgroundMusicObj.pauseAudio"
                        v-show="!backgroundMusicObj.paused">
                </div>
            </div>
            <ul class="nav" @mouseleave="backOriginal">
                <li v-for="(item, index) in navList" :key="index" @mouseover="hoverIndex = index"
                    @click="changeClickIndex(item.pathName)" :class="{ active: $route.name == item.pathName }">{{
                            item.name
                    }}
                </li>
                <li class="sliding-block"></li>
            </ul>
            <div class="user-login" v-if="!isLogin" @click="loginIsShow = true">
                <span>登录</span>
                <div class="login-icon">
                    <svg t="1666170206728" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="7819" width="32" height="32">
                        <path
                            d="M575.215 547.318c53.367-24.316 90.562-78.011 90.562-140.522 0-85.257-69.149-154.383-154.406-154.383-85.299 0-154.427 69.126-154.427 154.383 0 62.49 37.172 116.185 90.562 140.522-87.156 27.24-150.586 108.698-150.586 204.715 0 12.071 9.779 21.827 21.827 21.827s21.827-9.756 21.827-21.827c0-94.161 76.613-170.774 170.776-170.774 94.184 0 170.797 76.613 170.797 170.774 0 12.071 9.756 21.827 21.827 21.827 12.07 0 21.827-9.756 21.827-21.827 0.021-95.994-63.43-177.475-150.586-204.715zM400.621 406.817c0-61.072 49.678-110.729 110.773-110.729 61.072 0 110.75 49.657 110.75 110.729 0 61.094-49.678 110.794-110.75 110.794-61.095 0-110.773-49.7-110.773-110.794z"
                            p-id="7820" fill="#cccccc"></path>
                        <path
                            d="M511.371 960.81c-246.951 0-447.869-200.918-447.869-447.891 0-246.93 200.919-447.871 447.869-447.871 246.973 0 447.892 200.919 447.892 447.871 0 246.973-200.919 447.891-447.892 447.891z m0-854.269c-224.098 0-406.398 182.301-406.398 406.377s182.3 406.397 406.398 406.397c224.099 0 406.42-182.321 406.42-406.397S735.47 106.541 511.371 106.541z"
                            p-id="7821" fill="#cccccc"></path>
                    </svg>
                </div>

            </div>
        </div>
        <div class="user-info" v-if="isLogin">
            <UserInfo />
            <span>{{ userInfo.userName }}</span>
        </div>
        <MyLogin v-show="loginIsShow" @closeLogin="closeLogin"></MyLogin>
    </div>
</template>

<script>

import { reactive, watch, ref, onMounted, computed, inject, } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import UserInfo from '../user/UserInfo.vue';
import MyLogin from '@/components/user/MyLogin.vue';
import { useIsLogin, useUserInformation } from '@/hooks/user/useUserInformation'
export default {
    setup() {
        const navList = reactive([
            { name: "首页", type: 'home', pathName: 'home' },
            { name: '新闻', type: 'news', pathName: 'latest' },
            { name: '角色', type: 'role', pathName: 'roleClass' },
            { name: '世界', type: 'world', pathName: 'world' },
            { name: '深渊', type: 'abyss', pathName: 'abyssFloor' },
            { name: '论坛', type: 'forum', pathName: 'forumHome' }
        ]);
        const hoverIndex = ref(0);
        const clickIndex = ref(0);
        const ysHeader = ref(null);
        const _store = useStore();
        const _router = useRouter();
        const _route = useRoute()
        const loginIsShow = ref(false)
        watch(() => hoverIndex.value, (newValue) => {
            ysHeader.value.querySelector(".nav .sliding-block").style.transform = `translateX(${hoverIndex.value * 100}px)`;
        });
        const changeClickIndex = (pathName) => {
            if (pathName == 'forumHome') {
                const router = _router.resolve({
                    name: pathName
                })
                window.open(router.href, '_blank')
            } else if (pathName == 'abyssFloor') {
                _router.push({
                    name: pathName,
                    query: {
                        floor: 9
                    }
                })
            }
            else {
                _router.push({
                    name: pathName
                })
            }



        };
        const userInfo = computed(() => _store.state.user.userInformations);
        const backOriginal = () => {
            let index;
            for (let i = 0; i < navList.length; i++) {
                if (navList[i].type == _route.meta.type) {
                    index = i;
                    break;
                }
            }
            ysHeader.value.querySelector(".nav .sliding-block").style.transform = `translateX(${index * 100}px)`;
        }
        const closeLogin = (isShow) => {

            loginIsShow.value = isShow;


        }
        onMounted(() => {
            backOriginal()
        })
        const backgroundMusicObj = inject('backgroundMusicObj')

        const isLogin = useIsLogin()
        useUserInformation()

        return {
            navList,
            hoverIndex,
            ysHeader,
            clickIndex,
            changeClickIndex,
            userInfo,
            backOriginal,
            loginIsShow,
            closeLogin,
            backgroundMusicObj,
            isLogin
        };
    },
    components: { UserInfo, MyLogin }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width:769px) {
    .user-info {
        span {
            display: none;
        }
    }

}

.ys-header {
    height: 66px;
    background-color: rgba(17, 17, 17, 0.8);
    box-shadow: 0px 0px 5px rgba(17, 17, 17, .2);
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2022;
    display: flex;
    align-items: center;
    user-select: none;


    .inner {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;

        &::-webkit-scrollbar {
            display: none;
        }

        .ys-logo {
            height: 100%;
            line-height: 66px;
            width: 320px;
            box-sizing: border-box;
            padding-left: 50px;

            .img-play-audio {
                width: 32px;
                height: 32px;

                img {
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                    object-fit: cover;
                }
            }

            background: url(@/assets/firstpage/logo.png) left center /cover no-repeat;
        }

        .nav {
            list-style: none;
            display: flex;
            flex: 1;
            font-size: 17px;
            letter-spacing: 0.4px;
            color: #ccc;
            height: 100%;

            position: relative;

            li {
                height: 66px;
                width: 45px;
                margin-right: 55px;
                line-height: 66px;
                text-align: center;
                cursor: pointer;
                flex-shrink: 0;

                &:hover {
                    text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
                    color: #fff;
                }

                &.active {
                    text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
                    color: #fff;
                }

                &:last-of-type {
                    left: 0;
                    top: 0;
                    position: absolute;
                    height: 3px;
                    background-color: #69e0ff;
                    transition: all 0.3s ease-in;
                }
            }

        }

        .user-login {
            margin-right: 7%;
            display: flex;
            align-items: center;
            cursor: pointer;
            flex-shrink: 0;
            height: 100%;


            &:hover span {
                color: #fff;

            }

            &:hover svg {
                background-color: #fff;

            }

            span {
                color: #ccc;
                font-size: 18px;
                letter-spacing: 2px;
            }

            .login-icon {
                margin-left: 10px;

                svg {

                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    vertical-align: middle;

                }
            }
        }


    }



    .user-info {
        display: flex;
        height: 50px;
        align-items: center;
        margin: 0 7% 0 auto;
        cursor: pointer;
        flex-shrink: 0;

        span {
            margin-left: 30px;
            font-size: 17px;
            letter-spacing: 0.3px;
            color: #ccc;
            text-shadow: 2px 2px 5px rgba(17, 17, 17, .2);

            &:hover {
                color: #fff;
            }
        }
    }




}
</style>