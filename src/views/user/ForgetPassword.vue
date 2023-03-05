<template>
    <div class="main" ref="updatePasswordObj">
        <div class="forget-password">
            <div class="item">
                <input type="text" placeholder="手机号" v-model="phoneNumber">
            </div>
            <div class="item">
                <input type="text" placeholder="验证码" v-model="verificationCode">
                <span v-show="isShow" class="get-auth-code" @click="getAuthCode">获取验证码</span>
                <span v-show="!isShow" class="get-auth-code">已发送({{ countDown }}s)</span>
            </div>
            <div class="item">
                <input type="password" placeholder="新密码" class="password" v-model="password">
                <svg @click="changeType('password')" v-show="!eyeIsClose" t="1665126254096" class="icon eye open"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3361" width="28"
                    height="28">
                    <path
                        d="M500.662857 219.428571a407.405714 407.405714 0 0 1 164.937143 36.571429 595.748571 595.748571 0 0 1 159.451429 103.862857 964.022857 964.022857 0 0 1 109.714285 117.394286 29.257143 29.257143 0 0 1 0 39.862857 758.125714 758.125714 0 0 1-84.114285 102.765714 611.474286 611.474286 0 0 1-141.531429 109.714286 416.914286 416.914286 0 0 1-144.091429 49.737143 379.611429 379.611429 0 0 1-185.051428-20.48 565.028571 565.028571 0 0 1-167.131429-104.228572 957.074286 957.074286 0 0 1-131.657143-140.434285 25.234286 25.234286 0 0 1 0-36.571429A721.188571 721.188571 0 0 1 245.028571 310.125714a491.154286 491.154286 0 0 1 138.24-71.314285A381.074286 381.074286 0 0 1 500.662857 219.428571zM694.857143 329.142857a216.137143 216.137143 0 0 1-47.542857 268.068572 212.845714 212.845714 0 0 1-256 16.091428 208.091429 208.091429 0 0 1-90.697143-131.657143 214.674286 214.674286 0 0 1 25.234286-157.622857 632.685714 632.685714 0 0 0-190.537143 170.057143 1080.32 1080.32 0 0 0 76.8 85.942857A651.337143 651.337143 0 0 0 292.571429 647.68a402.285714 402.285714 0 0 0 167.131428 73.142857 320.731429 320.731429 0 0 0 118.125714 0 409.234286 409.234286 0 0 0 157.988572-73.142857 670.354286 670.354286 0 0 0 146.285714-146.285714 4.754286 4.754286 0 0 0 0-6.948572c-15.36-17.188571-30.72-36.571429-46.445714-51.931428a640.365714 640.365714 0 0 0-117.76-99.84L694.857143 329.142857z m-334.262857 115.2a73.142857 73.142857 0 0 0 4.022857 12.8 22.674286 22.674286 0 0 0 41.325714-11.337143 238.445714 238.445714 0 0 1 6.948572-36.571428 101.668571 101.668571 0 0 1 90.697142-73.142857 24.137143 24.137143 0 0 0 22.308572-25.234286 18.651429 18.651429 0 0 0-20.48-18.285714h-14.262857a157.622857 157.622857 0 0 0-73.142857 32.548571 168.96 168.96 0 0 0-55.954286 119.222857z"
                        p-id="3362" fill="#cdcdcd"></path>
                </svg>
                <svg @click="changeType('text')" v-show="eyeIsClose" t="1665126334628" class="icon eye close"
                    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3708" width="28"
                    height="28">
                    <path
                        d="M962.41027 511.792269 905.058051 443.432345c30.108738-36.255739 55.207369-77.30362 74.140581-122.626875 6.777357-16.22759-0.870834-34.859949-17.098423-41.637306-16.290011-6.797823-34.859949 0.8913-41.637306 17.098423C853.249081 457.180464 696.791703 557.13906 512.148379 557.13906c-186.156794 0-342.67557-100.186793-408.499741-261.452687-6.632047-16.290011-25.181519-24.124444-41.491996-17.450441-16.290011 6.632047-24.103978 25.222451-17.450441 41.49302 19.34765 47.403636 46.134737 90.343611 78.658478 128.121006l-53.6632 63.942311c-11.295254 13.45136-9.534144 33.533744 3.937682 44.850487 5.948479 4.994758 13.223163 7.440459 20.435425 7.440459 9.077749 0 18.114566-3.875261 24.415063-11.378142l49.720402-59.244312c34.487465 30.608112 73.528644 56.220443 115.855658 76.374458l-30.384008 83.471087c-6.031367 16.518209 2.486634 34.777061 19.026332 40.787962 3.585665 1.305739 7.254218 1.927909 10.880815 1.927909 12.994965 0 25.201985-8.020674 29.907147-20.953218l29.694299-81.572854c43.456744 14.417361 89.441055 23.432689 137.125077 26.191522l0 96.624664c0 17.575284 14.258749 31.834033 31.834033 31.834033 17.575284 0 31.834033-14.258749 31.834033-31.834033l0-96.589872c50.570769-2.822278 98.975199-12.387122 144.327106-27.960819l30.326702 83.307358c4.705162 12.932544 16.912182 20.953218 29.907147 20.953218 3.626597 0 7.29515-0.62217 10.880815-1.927909 16.538675-6.009877 25.056676-24.269753 19.026332-40.787962l-31.321356-86.041632c41.663912-20.509103 79.855746-46.515407 113.648386-77.547167l52.844555 62.987566c6.300496 7.502881 15.315824 11.378142 24.415063 11.378142 7.212262 0 14.46648-2.445702 20.435425-7.440459C971.944414 545.326013 973.705524 525.263072 962.41027 511.792269z"
                        p-id="3709" fill="#cdcdcd"></path>
                </svg>
            </div>
            <div class="item update-password" @click="updatePassword">
                重置密码
            </div>
        </div>

    </div>
</template>

<script>
import Message from "@/plugins/message";
import { ref, reactive, toRefs } from "vue";
import { useStore } from "vuex";
export default {

    setup() {
        const _store = useStore()
        let eyeIsClose = ref(true)
        let updatePasswordObj = ref(null)
        const changeType = (type) => {
            updatePasswordObj.value.querySelector('.password').type = type
            eyeIsClose.value = !eyeIsClose.value
        }
        const message = reactive({
            countDown: 60,
            origionCountDown: 60,
            isShow: true
        })
        const getAuthCode = () => {
            let reg = _store.state.user.reg;
            if (!reg.phoneNumber.test(updatePasswordInfo.phoneNumber)) {
                Message({ type: 'warning', text: '请输入正确的手机号', delay: 3000 })
                return ""
            }
            _store.dispatch('user/getUpdatePasswordAuthCode', updatePasswordInfo)
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


        const updatePasswordInfo = reactive({
            phoneNumber: '',
            verificationCode: '',
            password: ''
        })

        const updatePassword = () => {
            let reg = _store.state.user.reg;

            if (!reg.userAccount.test(updatePasswordInfo.phoneNumber)) {
                Message({ type: 'error', text: '请输入正确的手机号', delay: 3000 })
                return ""
            }
            if (!reg.userPassword.test(updatePasswordInfo.password)) {
                Message({ type: 'error', text: '密码格式错误', delay: 3000 })
                return ""
            }
            if (!reg.authCode.test(updatePasswordInfo.verificationCode)) {
                Message({ type: 'error', text: '验证码为6位数字', delay: 3000 })
                return ""
            }

            _store.dispatch('user/updatePassword', updatePasswordInfo)

        }

        return {
            eyeIsClose,
            changeType,
            updatePasswordObj,
            ...toRefs(message),
            getAuthCode,
            ...toRefs(updatePasswordInfo),
            updatePassword

        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, white, skyblue);

    .forget-password {
        width: 300px;
        height: 400px;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;



        .item {
            width: 78%;
            height: 35px;
            border: 1px solid gray;
            margin-bottom: 30px;
            border-radius: 6px;
            position: relative;


            .get-auth-code {
                position: absolute;
                font-size: 14px;
                right: 8px;
                top: 8px;
                cursor: pointer;

                &:hover {
                    color: gray;
                }

            }

            .eye {
                position: absolute;
                right: 8px;
                top: 3px;

            }


            input {
                height: 95%;
                width: 90%;
                background: none;
                outline: none;
                border: none;
                padding-left: 8px;
            }

        }

        .update-password {
            text-align: center;
            line-height: 35px;
            font-size: 16px;
            font-family: PingFang SC0;
            transition: all 0.5s;
            cursor: pointer;
            color: #333;
            user-select: none;

            &:hover {
                color: gray;
                border: 1px solid #fff;
                background: linear-gradient(to bottom right, white, skyblue);
            }
        }
    }
}
</style>