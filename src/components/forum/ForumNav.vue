<template>
    <div class="forum-nav" ref="forumNav">
        <div class="inner">
            <div class="logo-container">
                <img src="@/assets/forum/logo.png" alt="米游社">
            </div>
            <div class="selcet">
                <select name="model">
                    <option value="米游社•原神" selected>酒馆•原神</option>
                </select>
            </div>
            <ul class="nav">
                <li @click="gotoHome" :class="{ 'active': $route.name =='forumHome'}">首页</li>
                <li @click="gotoSomePerson" :class="{ 'active': $route.name == 'somePerson' }">同人</li>
                <li @click="gotoCosplay" :class="{ 'active': $route.name == 'cosplay' }">COS</li>
                <li @click="gotoYS" :class="{ 'active': $route.name == 'home' }">官网</li>
            </ul>
            <div class="more">
                <select @change="alert($event)">
                    <option value="">更多</option>
                    <option value="photo">每日一图</option>
                    <option value="findMusic">原音厅</option>
                </select>
            </div>
            <div class="serch">
                <input type="text">
                <svg t="1666618536743" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="2544" width="32" height="32">
                    <path
                        d="M889.7 933.8c-4.9 0-9.8-1.9-13.4-5.8L681 721.6c-7-7.4-6.7-19.1 0.7-26.1s19.1-6.7 26.1 0.7l195.3 206.4c7 7.4 6.7 19.1-0.7 26.1-3.6 3.4-8.1 5.1-12.7 5.1z"
                        fill="#ffffff" p-id="2545"></path>
                    <path
                        d="M446.4 821.6c-99.6 0-198.9-39.3-272.6-117.1-68.8-72.8-105.2-168-102.5-268.2 2.8-100.2 44.4-193.2 117.2-262.1C338.7 32.1 576.6 38.6 718.8 188.9 861 339.1 854.4 577 704.1 719.2 631.8 787.7 539 821.6 446.4 821.6z m-0.3-713.1c-86.8 0-168.9 32.7-232.2 92.5-65.6 62.1-103.1 146-105.6 236.3-2.5 90.3 30.3 176.2 92.4 241.8 128.2 135.5 342.7 141.4 478.1 13.2S820.2 349.7 692 214.2c-62.1-65.6-146-103.1-236.3-105.6-3.2-0.1-6.4-0.1-9.6-0.1z"
                        fill="#ffffff" p-id="2546"></path>
                </svg>
            </div>
        </div>
        <div class="user-login" v-if="!isLogin">
            <span @click="loginIsShow = true">登录</span>
            <div class="login-icon" @click="loginIsShow = true">
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
            <MyLogin v-show="loginIsShow" @closeLogin="closeLogin"></MyLogin>
        </div>
        <div class="user-info" v-if="isLogin">
            <UserInfo />
            <span>{{ userInfo.userName }}</span>
        </div>
    </div>


</template >

<script setup>
import UserInfo from '@/components/user/UserInfo.vue';
import MyLogin from '@/components/user/MyLogin.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { useUserInformation, useIsLogin } from '@/hooks/user/useUserInformation'
const _store = useStore()
const _router = useRouter()
const loginIsShow = ref(false)
const _route = useRoute()
const closeLogin = (isShow) => {

    loginIsShow.value = isShow;


}
useUserInformation()
const alert = (e) => {
    if (e.target.value) {
        _router.push({
            name: e.target.value
        })
    }
    e.target.selectedIndex = 0
}

const isLogin = useIsLogin()
const userInfo = computed(() => _store.state.user.userInformations);
const gotoSomePerson = () => {
    _router.push({
        name: 'somePerson'
    })
}

const gotoYS = () => {
    _router.push({
        name: 'home'
    })
}
const gotoCosplay = () => {
    _router.push({
        name: 'cosplay'
    })
}
const gotoHome = () => {
    _router.push({
        name: 'forumHome'
    })
}
const forumNav = ref(null)



</script>

<style lang="scss" scoped>
@media screen and (max-width:769px) {
    .user-info {
        span {
            display: none;
        }
    }

}

.forum-nav {
    height: 1.0269rem;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    background: #1f2233;
    z-index: 2022;
    color: white;
    font-size: .2528rem;
    box-sizing: border-box;
    align-items: center;

    .inner {
        display: flex;
        overflow-x: auto;
        height: 100%;
        overflow-y: hidden;
        align-items: center;
        flex: 1;

        &::-webkit-scrollbar {
            display: none;
        }

        .logo-container {
            height: 100%;
            margin-left: 10%;

            img {
                height: 100%;
            }
        }

        .selcet {
            select {
                border: none;
                background: transparent;
                color: #fff;
                font-size: .2528rem;

            }
        }

        .nav {
            display: flex;
            height: 100%;
            list-style: none;
            gap: 0 .316rem;
            flex-shrink: 0;
            margin-left: 10%;


            li {
                height: 100%;
                padding: 0 .2844rem;
                line-height: 1.0427rem;
                cursor: pointer;
                flex-shrink: 0;

                &:hover {
                    background: rgba(255, 255, 255, .18);
                }

                &.active {
                    background-color: rgba(255, 255, 255, .18);
                }
            }
        }

        .more {
            margin-left: .316rem;

            select {

                background-color: transparent;
                color: #fff;

                outline: none;
                border: none;

                option {

                    background-color: #1f2233;



                }
            }
        }

        .serch {
            background: rgba(255, 255, 255, .22);
            padding: .0316rem .1264rem .0316rem .0316rem;
            border-radius: .237rem;
            display: flex;
            margin-left: .6319rem;
            align-items: center;


            input {
                outline: none;
                border: none;
                padding-left: .1264rem;
                height: .4107rem;
                width: 1.2638rem;
                background: none;
                transition: all 0.3s ease-in;
                transform-origin: left;

                &:focus {
                    width: 1.5798rem;
                }
            }

            svg {
                width: .316rem;
                height: .316rem;
                vertical-align: middle;
            }
        }
    }

    .user-login {
        margin-right: 7%;
        display: flex;
        align-items: center;
        cursor: pointer;
        flex-shrink: 0;

        &:hover span {
            color: #fff;

        }

        &:hover svg {
            background-color: #fff;

        }

        span {
            color: #ccc;
            font-size: .2844rem;
            letter-spacing: .0316rem;
        }

        .login-icon {
            margin-left: .158rem;

            svg {

                border-radius: 50%;
                width: .4739rem;
                height: .4739rem;
                vertical-align: middle;

            }
        }
    }

    .user-info {
        margin: 0 1.1058rem 0 auto;
        display: flex;
        gap: 0 .6319rem;
        align-items: center;
        flex-shrink: 0;

    }
}
</style>