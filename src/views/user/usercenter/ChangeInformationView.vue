<template>
    <div class="change-information">
        <header><span></span><span>我的信息</span></header>
        <div class="user-info-container">
            <div class="item avatar">
                <span>头像：</span>
                <label for="avatar">
                    <img v-lazy="myInformation.userAvatar" alt="">
                    <input type="file" id="avatar" style="display: none;" @change="changeAvatar($event)">
                </label>
            </div>
            <div class="item nick-name">
                <span>昵称：</span>
                <input type="text" v-model="userName">
            </div>
            <div class="user-account item">
                <span>用户名：</span>
                <p>{{ userAccount }}</p>
            </div>
            <div class="item sig">
                <span>我的签名：</span>
                <div class="content" contenteditable="true" :data-placeholder="placeholder" v-text="motto"
                    @input="changeInput" ref="mottoObj">
                </div>
            </div>
            <div class="gender item">
                <span>性别：</span>
                <div class="gender-select">
                    <label for="nan" :class="{ active: gender == '男' }" @click="gender = '男'">
                        男
                        <input type="radio" name="gender" value="男" id="nan">
                    </label>
                    <label for="nv" :class="{ active: gender == '女' }" @click="gender = '女'">
                        女
                        <input type="radio" name="gender" value="女" id="nv">
                    </label>
                    <label for="baomi" :class="{ active: gender == '保密' }" @click="gender = '保密'">
                        保密
                        <input type="radio" name="gender" value="保密" id="baomi">
                    </label>
                </div>
            </div>
            <div class="item birthday">
                <span>出生日期：</span>
                <input type="date" v-model="birthday">
            </div>

        </div>
        <div class="save">
            <button @click="updateUserInfo">保存</button>
        </div>
    </div>
</template>

<script setup>

import { computed, reactive, ref, toRefs, watch } from 'vue'
import { useStore } from 'vuex';
import Message from '@/plugins/message';
const _store = useStore()
const mottoObj = ref(null)

const userInformations = reactive({
    gender: null,
    birthday: null,
    motto: null,
    userAccount: null,
    userName: null,

})


const myInformation = computed(() => {
    const x = _store.state.user.userInformations
    userInformations.gender = x.gender
    userInformations.birthday = x.birthday
    userInformations.motto = x.motto
    userInformations.userAccount = x.userAccount
    userInformations.userName = x.userName
    return x
})





watch(() => userInformations.motto, (newValue) => {
    if (newValue) {
        placeholder.value = ""
    } else {
        placeholder.value = "设置你的专属签名吧(*^▽^*)"
    }
})

const placeholder = ref('设置你的专属签名吧(*^▽^*)')
const changeInput = (e) => {
    if (e.target.innerHTML != "") {
        placeholder.value = ""
    } else {
        placeholder.value = "设置你的专属签名吧(*^▽^*)"
    }
}

const changeAvatar = (e) => {
    const formData = new FormData();
    const files = e.target.files;
    formData.append("avatar", files[0]);
    _store.dispatch('user/updateUserAvatar', formData)
    e.target.value = "";
};



const updateUserInfo = () => {
    const userNameReg = _store.state.user.reg.nickName
    if (userNameReg.test(userInformations.userName)) {
        userInformations.motto = mottoObj.value.innerText
        _store.dispatch('user/updateUserInfo', userInformations)
    } else {
        Message({ type: 'warning', text: '昵称为2-16位字符(非空格)', delay: 2500 })
    }


}
const { gender, motto, birthday, userAccount, userName } = toRefs(userInformations)

</script>

<style lang="scss" scoped>
.change-information {
    position: relative;

    header {
        height: .7899rem;
        padding-left: .316rem;
        display: flex;
        color: #333;
        align-items: center;
        border-bottom: .0158rem solid #eee;
        gap: .4107rem;
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 20;
        background-color: #fff;

    }

    .user-info-container {
        .item {
            display: flex;
            align-items: flex-start;
            margin-top: .4739rem;

            span {
                &:first-of-type {
                    display: inline-block;
                    min-width: 1.5798rem;
                    text-align: right;
                }
            }
        }

        .avatar {
            margin-left: .2528rem;

            label {
                display: inline-block;
                width: max(7vw, 1.5798rem);
                height: max(7vw, 1.5798rem);
                border-radius: 50%;
                overflow: hidden;
                position: relative;

                &:hover::before {
                    display: block;
                }

                &::before {
                    content: '切换头像';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    color: #fff;
                    text-align: center;
                    line-height: max(7vw, 1.5798rem);
                    background-color: rgba($color: #000000, $alpha: 0.4);
                    cursor: pointer;
                    display: none;
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        .sig {
            .content {
                width: 60%;
                min-height: 1.3902rem;
                border-radius: .1264rem;
                border: 1px solid#bfcbd9;
                outline-color: #00a1d6;
                position: relative;
                padding: .0948rem;
                color: gray;

                &::before {
                    content: attr(data-placeholder);
                    position: absolute;
                    color: gray;
                    left: .0948rem;

                }
            }
        }

        .gender {
            label {
                display: inline-block;
                border-radius: .0632rem;
                border: 1px solid#bfcbd9;
                padding: .0158rem .0727rem;
                margin-right: .2528rem;
                cursor: pointer;

                &.active {
                    background-color: #00a1d6;
                    color: #fff;
                    border: 1px solid #00a1d6;
                }
            }

            input {
                display: none;
            }
        }

        .nick-name {
            input {
                outline-color: #00a1d6;
                width: 20%;
                padding-left: .0948rem;
                border-radius: .0632rem;
                border: 1px solid gray;
            }
        }

        .birthday {
            input {
                font-size: .237rem;
                outline-color: #00a1d6;
                border-radius: .0632rem;
                color: gray;
                border: 1px solid #bfcbd9;
                width: 16%;
                height: .3791rem;
            }

        }
    }

    .save {
        display: flex;
        justify-content: center;
        height: .9479rem;

        button {
            border-radius: .0948rem;
            height: .5529rem;
            width: 1.9273rem;
            color: #fff;
            background-color: #00a1d6;
            border: none;
            cursor: pointer;
            transition: all 0.4s linear;

            &:hover {
                background: linear-gradient(45deg, #00a1d6, #fff, #eee);
                color: gray;
            }

        }
    }
}
</style>