<template>
    <div class="main" ref="loginObj" @click="close">
        <div class="login-container" @click.stop>
            <div class="gotoLogin">
                <div class="item">
                    <span>已有账号？</span>
                    <button @click="gotoLogin">去登录</button>
                </div>
            </div>
            <div class="gotoRegister">
                <div class="item">
                    <span>没有账号？</span>
                    <button @click="gotoRegister">去注册</button>
                </div>
            </div>

            <div class="move">
                <form>
                    <div class="login">
                        <div class="login-log"><img src="@/assets/login/login.png" alt="login-logo"></div>
                        <div class="item">
                            <input type="text" placeholder="账号" v-model.trim="userAccount">
                        </div>
                        <div class="item">
                            <input type="password" autocomplete placeholder="密码" class="passwordLogin"
                                v-model.trim="userPassword">
                            <svg v-show="!eyeIsCloseForLogin" @click="changeType('password', 'passwordLogin')"
                                class="eye open icon" t="1665069384521" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4315" width="28" height="28">
                                <path
                                    d="M779.3 312.3c-80-51.1-172.5-78-267.3-78-94.8 0-187.3 27-267.3 78-76.8 49-139.3 118-181 199.7 41.8 81.8 104.3 150.8 181 199.7 80 51.1 172.5 78 267.3 78 94.8 0 187.3-27 267.3-78 76.8-49 139.3-118 181-199.7-41.7-81.8-104.2-150.8-181-199.7z m-360.2 12.8c45.8 0 82.9 37.1 82.9 82.9 0 45.8-37.1 82.9-82.9 82.9s-82.9-37.1-82.9-82.9c0-45.8 37.1-82.9 82.9-82.9zM742 653.2c-68.9 43.9-148.4 67.1-230 67.1s-161.1-23.2-230-67.1c-54.3-34.6-101.3-81.9-136-136.8l-2.8-4.4 2.8-4.4c34.7-54.9 81.8-102.2 136-136.8 3.3-2.1 6.8-4.3 10.8-6.7l19.8-11.8-7.9 21.6c-8.8 24.2-13.3 49.6-13.3 75.5 0 58.9 22.9 114.3 64.6 156 41.7 41.7 97.1 64.6 156 64.6 58.9 0 114.3-22.9 156-64.6 41.7-41.7 64.6-97.1 64.6-156 0-25.9-4.5-51.3-13.3-75.5l-7.9-21.6 19.8 11.8c3.9 2.4 7.5 4.5 10.8 6.7 54.3 34.6 101.3 81.9 136 136.8l2.8 4.4-2.8 4.4c-34.7 54.9-81.7 102.2-136 136.8z"
                                    fill="#cdcdcd" p-id="4316"></path>
                            </svg>
                            <svg v-show="eyeIsCloseForLogin" @click="changeType('text', 'passwordLogin')"
                                t="1665069866047" class="icon eye close" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7594" width="28" height="28">
                                <path
                                    d="M161.706667 286.506667C201.386667 417.066667 344.746667 512 512.554667 512c166.4 0 309.034667-93.44 349.866666-222.72a43.733333 43.733333 0 0 1 54.485334-28.074667c22.997333 6.954667 35.84 30.848 28.757333 53.333334a361.685333 361.685333 0 0 1-74.752 130.474666l77.952 92.928a43.093333 43.093333 0 0 1-5.973333 60.714667c-17.066667 14.336-41.770667 13.568-57.344-1.066667l-3.413334-3.626666-75.605333-90.154667a471.552 471.552 0 0 1-140.373333 70.442667l48.64 133.504c8.533333 23.637333-2.773333 49.450667-25.386667 57.642666-20.992 7.68-44.288-2.56-54.4-22.954666l-2.133333-4.906667-52.565334-144.554667a526.506667 526.506667 0 0 1-136.533333-0.128l-52.608 144.682667-2.090667 4.906667c-10.112 20.394667-33.408 30.634667-54.4 22.954666-21.077333-7.68-32.426667-30.677333-26.837333-52.906666l1.493333-4.736 48.64-133.76a471.253333 471.253333 0 0 1-139.989333-70.613334L141.909333 593.92l-3.413333 3.626667a43.264 43.264 0 0 1-57.386667 1.066666 43.264 43.264 0 0 1-9.130666-56.362666l3.2-4.352 78.464-93.44a360.789333 360.789333 0 0 1-75.392-133.674667 42.538667 42.538667 0 0 1 29.312-53.034667 43.690667 43.690667 0 0 1 54.186666 28.714667z"
                                    p-id="7595" fill="#bfbfbf"></path>
                            </svg>
                        </div>
                        <div class="item login" @click="userLogin">登录</div>

                        <div class="forgetPassword"><span @click="forgetPassword">忘记密码？</span></div>
                    </div>
                </form>
                <form>
                    <div class="register hidden">
                        <div class="register-logo">
                            <img src="@/assets/login/register2.png" alt="register-logo">
                        </div>
                        <div class="item">
                            <input type="text" placeholder="手机号码" v-model.trim="msg.phoneNumber">
                        </div>
                        <div class="item get-code">
                            <input type="text" placeholder="验证码" v-model.trim="verificationCode">
                            <span v-show="isShow" @click="getAuthCode">获取验证码</span>
                            <span v-show="!isShow">已发送({{ countDown }}s)</span>
                        </div>
                        <div class="item">
                            <input type="text" placeholder="昵称" v-model.trim="nickName">
                        </div>
                        <div class="item">
                            <input type="password" autocomplete placeholder="密码(6-18位非空格)" class="passwordRegister"
                                v-model="password">
                            <svg v-show="!eyeIsCloseForRegister" @click="changeType('password', 'passwordRegister')"
                                class="eye open icon" t="1665069384521" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="4315" width="28" height="28">
                                <path
                                    d="M779.3 312.3c-80-51.1-172.5-78-267.3-78-94.8 0-187.3 27-267.3 78-76.8 49-139.3 118-181 199.7 41.8 81.8 104.3 150.8 181 199.7 80 51.1 172.5 78 267.3 78 94.8 0 187.3-27 267.3-78 76.8-49 139.3-118 181-199.7-41.7-81.8-104.2-150.8-181-199.7z m-360.2 12.8c45.8 0 82.9 37.1 82.9 82.9 0 45.8-37.1 82.9-82.9 82.9s-82.9-37.1-82.9-82.9c0-45.8 37.1-82.9 82.9-82.9zM742 653.2c-68.9 43.9-148.4 67.1-230 67.1s-161.1-23.2-230-67.1c-54.3-34.6-101.3-81.9-136-136.8l-2.8-4.4 2.8-4.4c34.7-54.9 81.8-102.2 136-136.8 3.3-2.1 6.8-4.3 10.8-6.7l19.8-11.8-7.9 21.6c-8.8 24.2-13.3 49.6-13.3 75.5 0 58.9 22.9 114.3 64.6 156 41.7 41.7 97.1 64.6 156 64.6 58.9 0 114.3-22.9 156-64.6 41.7-41.7 64.6-97.1 64.6-156 0-25.9-4.5-51.3-13.3-75.5l-7.9-21.6 19.8 11.8c3.9 2.4 7.5 4.5 10.8 6.7 54.3 34.6 101.3 81.9 136 136.8l2.8 4.4-2.8 4.4c-34.7 54.9-81.7 102.2-136 136.8z"
                                    fill="#cdcdcd" p-id="4316"></path>
                            </svg>
                            <svg v-show="eyeIsCloseForRegister" @click="changeType('text', 'passwordRegister')"
                                t="1665069866047" class="icon eye close" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="7594" width="28" height="28">
                                <path
                                    d="M161.706667 286.506667C201.386667 417.066667 344.746667 512 512.554667 512c166.4 0 309.034667-93.44 349.866666-222.72a43.733333 43.733333 0 0 1 54.485334-28.074667c22.997333 6.954667 35.84 30.848 28.757333 53.333334a361.685333 361.685333 0 0 1-74.752 130.474666l77.952 92.928a43.093333 43.093333 0 0 1-5.973333 60.714667c-17.066667 14.336-41.770667 13.568-57.344-1.066667l-3.413334-3.626666-75.605333-90.154667a471.552 471.552 0 0 1-140.373333 70.442667l48.64 133.504c8.533333 23.637333-2.773333 49.450667-25.386667 57.642666-20.992 7.68-44.288-2.56-54.4-22.954666l-2.133333-4.906667-52.565334-144.554667a526.506667 526.506667 0 0 1-136.533333-0.128l-52.608 144.682667-2.090667 4.906667c-10.112 20.394667-33.408 30.634667-54.4 22.954666-21.077333-7.68-32.426667-30.677333-26.837333-52.906666l1.493333-4.736 48.64-133.76a471.253333 471.253333 0 0 1-139.989333-70.613334L141.909333 593.92l-3.413333 3.626667a43.264 43.264 0 0 1-57.386667 1.066666 43.264 43.264 0 0 1-9.130666-56.362666l3.2-4.352 78.464-93.44a360.789333 360.789333 0 0 1-75.392-133.674667 42.538667 42.538667 0 0 1 29.312-53.034667 43.690667 43.690667 0 0 1 54.186666 28.714667z"
                                    p-id="7595" fill="#bfbfbf"></path>
                            </svg>
                        </div>
                        <div class="item" @click="userRegister">
                            注册
                        </div>
                    </div>
                </form>
            </div>
        </div>

    </div>
</template>

<script>

import Message from '@/plugins/message'
import { reactive, toRefs, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    emits: ['closeLogin'],
    setup(props, context) {

        const message = reactive({
            countDown: 60,
            origionCountDown: 60,
            isShow: true
        })
        const getAuthCode = () => {
            let reg = _store.state.user.reg;
            console.log(msg.phoneNumber)
            if (reg.phoneNumber.test(msg.phoneNumber)) {
                _store.dispatch('user/getAuthCode', msg)
            } else {
                Message({ type: 'warning', text: '请填写正确的手机号', delay: 3000 })
                return ""
            }
            message.isShow = false
            let timer = setInterval(() => {
                message.countDown--
                if (message.countDown < 0) {
                    message.countDown = message.origionCountDown
                    clearInterval(timer)
                    message.isShow = true
                }
            }, 1000);


        }
        const gotoRegister = () => {
            move.style.transform = "translateX(300px)"
            register.classList.remove('hidden')
            login.classList.add("hidden")

        }

        const close = () => {
            context.emit('closeLogin', false)
        }
        const gotoLogin = () => {
            move.style.transform = "translateX(0px)"
            login.classList.remove('hidden')
            register.classList.add("hidden")
        }
        let passwordLogin;
        let passwordRegister;
        let move;
        let login;
        let register;
        onMounted(() => {
            passwordLogin = loginObj.value.querySelector('.passwordLogin')
            passwordRegister = loginObj.value.querySelector('.passwordRegister')
            move = loginObj.value.querySelector(".move")
            login = loginObj.value.querySelector(".login")
            register = loginObj.value.querySelector(".register")
        })

        let eyeIsClose = reactive({
            eyeIsCloseForLogin: true,
            eyeIsCloseForRegister: true
        })

        let loginObj = ref(null)

        const changeType = (type, obj) => {
            if (obj == "passwordLogin") {
                passwordLogin.type = type
                eyeIsClose.eyeIsCloseForLogin = !eyeIsClose.eyeIsCloseForLogin
            } else if (obj == "passwordRegister") {
                passwordRegister.type = type
                eyeIsClose.eyeIsCloseForRegister = !eyeIsClose.eyeIsCloseForRegister
            }
        }


        const user = reactive({
            userAccount: '',
            userPassword: ''
        })
        //派发登录请求
        const _store = useStore()
        const userLogin = () => {
            if (checkLogin()) {
                _store.dispatch('user/gotoLogin', { user, close })
            }

        }
        const checkLogin = () => {
            let reg = _store.state.user.reg;
            if (!(reg.userAccount.test(user.userAccount) && reg.userPassword.test(user.userPassword))) {
                Message({ type: 'warning', text: '账号或密码格式不正确', delay: 3500 })
                return false;
            }
            return true

        }
        const msg = reactive({
            phoneNumber: '',
            phonePrefix: '86'
        })
        const checkRegister = () => {
            let reg = _store.state.user.reg;
            userRegisterInfo.phoneNumber = msg.phoneNumber
            if (!reg.userAccount.test(userRegisterInfo.phoneNumber)) {
                Message({ type: 'error', text: '请输入正确的手机号', delay: 3000 })
                return false
            }
            if (!reg.userPassword.test(userRegisterInfo.password)) {
                Message({ type: 'error', text: '密码格式错误', delay: 3000 })
                return false
            }
            if (!reg.authCode.test(userRegisterInfo.verificationCode)) {
                Message({ type: 'error', text: '验证码为6位数字', delay: 3000 })
                return false
            }
            if (!reg.nickName.test(userRegisterInfo.nickName)) {
                Message({ type: 'error', text: '昵称为2-16位非空格的字符', delay: 3000 })
                return false
            }
            return true
        }
        const userRegisterInfo = reactive({
            phoneNumber: "",
            password: '',
            nickName: '',
            verificationCode: ''
        })
        const userRegister = () => {
            if (checkRegister()) {
                _store.dispatch('user/gotoRegister', { userRegisterInfo, close })
            }


        }
        const _router = useRouter()
        const forgetPassword = () => {
            _router.push({
                path: '/user/update_password'
            })
        }

        return {
            gotoRegister,
            gotoLogin,
            ...toRefs(message),
            getAuthCode,
            ...toRefs(eyeIsClose),
            loginObj,
            changeType,
            ...toRefs(user),
            userLogin,
            msg,
            ...toRefs(userRegisterInfo),
            userRegister,
            forgetPassword,
            close
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: rgba($color: #000000, $alpha: 0.75);
    position: fixed;
    top: 0;
    left: 0;

    .login-container {
        position: relative;
        display: flex;
        border-radius: 8px;
        animation: chageBackground 120s linear infinite;

        &::before {
            content: "";
            width: 100%;
            height: 100%;
            border-radius: 8px;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(transparent, rgba(0, 0, 0, .5))
        }


    }

    .gotoLogin {
        width: 320px;
        height: 360px;
        position: relative;


        .item {
            position: absolute;
            bottom: 26px;
            left: 50%;
            display: flex;
            flex-direction: column;
            transform: translateX(-50%);
            align-items: center;

            button {
                background: none;
                font-size: 16px;
                color: #fff;
                padding: 8px 25px;
                border: none;

                &:hover {
                    color: skyblue;
                    cursor: pointer;
                }
            }

            span {
                color: #fff;
            }
        }
    }

    .gotoRegister {
        width: 320px;
        height: 360px;
        position: relative;

        .item {
            position: absolute;
            bottom: 26px;
            left: 50%;
            display: flex;
            align-items: center;
            flex-direction: column;
            transform: translateX(-50%);

            button {
                background: none;
                font-size: 16px;

                color: #fff;
                padding: 8px 25px;
                border: none;

                &:hover {
                    color: skyblue;
                    cursor: pointer;
                }
            }

            span {
                color: #fff;
            }
        }

    }

    .move {
        position: absolute;
        top: -30px;
        left: 20px;
        width: 290px;
        height: 420px;
        transition: all 0.8s ease;
        border-radius: 8px;
        overflow: hidden;

        .login {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #f0f0f0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .login-log {
                width: 90%;
                height: 50px;
                margin-bottom: 30px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            input {
                width: 85%;
                height: 90%;
                outline: none;
                border: none;
                background: none;
                padding-left: 8px;
            }

            .item {
                width: 85%;
                height: 35px;
                margin-bottom: 30px;
                border: 1px solid gray;
                border-radius: 6px;
                position: relative;

                .eye {
                    position: absolute;
                    right: 8px;
                    top: 2px
                }


            }

            .login {
                display: block;
                line-height: 35px;
                text-align: center;
                font-size: 16px;
                font-family: PingFang SC0;
                color: #333;
                cursor: pointer;
                user-select: none;
                transition: 0.6s all ease;

                &:hover {
                    color: gray;
                    border: 1px solid #fff;
                    background: linear-gradient(to bottom right, whitesmoke, skyblue);
                }
            }

            .forgetPassword {
                width: 85%;
                height: 35px;
                display: flex;
                justify-content: center;
                align-items: center;

                span {
                    color: #333;
                    font-size: 16px;

                    &:hover {
                        color: rgba(255, 0, 0, .9);
                        cursor: pointer;
                    }
                }
            }

        }

        .register {
            position: absolute;
            background-color: #f0f0f0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .register-logo {
                width: 98%;
                height: 50px;
                margin-bottom: 18px;

                img {
                    width: 100%;
                }
            }

            .get-code {
                span {
                    color: #333;
                }
            }

            .item {
                width: 85%;
                height: 35px;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                border-radius: 6px;
                position: relative;

                .eye {
                    position: absolute;
                    right: 8px;
                    top: 2px
                }

                &:last-of-type {
                    display: block;
                    text-align: center;
                    line-height: 35px;
                    font-size: 16px;
                    font-family: PingFang SC0;
                    color: #333;
                    user-select: none;
                    cursor: pointer;
                    transition: 0.6s all ease;

                    &:hover {
                        color: gray;
                        border: 1px solid #fff;
                        background: linear-gradient(to bottom right, whitesmoke, skyblue);
                    }
                }

                span {
                    font-size: 14px;
                    position: absolute;
                    right: 8px;

                    &:hover {
                        color: gray;
                        cursor: pointer;
                    }
                }

                input {
                    height: 90%;
                    outline: none;
                    border: none;
                    background: none;
                    width: 85%;
                    padding-left: 8px;
                }

                border:1px solid gray;
            }

        }
    }


    .hidden {
        display: none !important;
    }

    @keyframes chageBackground {
        0% {
            background: url(@/assets/news/hot2.jpg) center center /cover no-repeat;
        }

        30% {
            background: url(@/assets/news/hot3.jpg) center center /cover no-repeat;
        }

        60% {
            background: url(@/assets/news/hot4.jpg) center center /cover no-repeat;
        }

        100% {
            background: url(@/assets/news/hot2.jpg) center center /cover no-repeat;
        }
    }

}
</style>