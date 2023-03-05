<template>
    <div class="information-app">
        <header><span></span><span>我的信息</span></header>
        <div class="user-info-container">
            <div class="item nick-name">
                <span>昵称：</span>
                <input type="text" value="逝雪深，笑意浅">
            </div>
            <div class="user-account item">
                <span>用户名：</span>
                <p>17883351224</p>
            </div>
            <div class="item sig">
                <span>我的签名：</span>
                <div class="content" contenteditable="true" :data-placeholder="placeholder"
                    @input="changeInput($event)">

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
                <input type="date">
            </div>

        </div>
        <div class="save">
            <button>保存</button>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
const gender = ref('保密')
const placeholder = ref('设置你的专属签名吧(*^▽^*)')
const changeInput = (e) => {
    if (e.target.innerHTML != "") {
        placeholder.value = ""
    } else {
        placeholder.value = "设置你的专属签名吧(*^▽^*)"
    }
}
</script>

<style lang="scss" scoped>
.information-app {
    header {
        height: .8531rem;
        display: flex;
        align-items: center;
        padding-left: .316rem;
        border: .0158rem solid #eee;

        span {
            font-size: .2528rem;
            color: #00a1d6;

            &:nth-child(1) {
                display: inline-block;
                height: .316rem;
                width: .0632rem;
                background: #00a1d6;
                border-radius: .0474rem;
                margin-right: .2528rem;
            }
        }
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

        .sig {
            .content {
                width: 60%;
                min-height: 1.3902rem;
                border-radius: .1264rem;
                border: 1px solid#bfcbd9;
                outline-color: #00a1d6;
                position: relative;

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
                width: 15%;
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
                width: 13%;
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