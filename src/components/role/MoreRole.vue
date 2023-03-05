<template>
    <div class="more-role-app" ref="moreRole">
        <div class="logo-container">
            <img src="@/assets/role/gengduojuese_icon.png" alt="">
        </div>
        <div class="more-role-container">
            <div class="inner">
                <div class="more-role">
                    <button @click="gotoRoleClass">更多角色</button>
                </div>
                <div class="swiper-container">
                    <div class="before-btn btn" @click="beforePage">
                    </div>
                    <div class="swiper">
                        <ul class="roleList">
                            <li class="item" v-for="item in roleList" :key="item.roleId"
                                @click="gotoRoleDetail(item.roleId)">
                                <img v-lazy="item.roleAvatar" :alt="item.roleName">
                                <span>{{ item.roleName }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="next-btn btn" @click="nextPage">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Message from '@/plugins/message';
import { computed, onMounted, ref, watch } from 'vue'
import throttle from 'lodash/throttle';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';



const moreRole = ref(null)

let nowLeft = 0;

const beforePage = throttle(() => {
    // 30是间距
    const moveWidth = moreRole.value.querySelector('.swiper').offsetWidth + 30
    const allWidth = moreRole.value.querySelector('.roleList').offsetWidth - moveWidth
    const ulObj = moreRole.value.querySelector('.roleList')
    if (nowLeft >= 0) {
        Message({ type: 'warning', text: '到底了', delay: 2000 })
    } else {
        nowLeft += moveWidth
        ulObj.style.left = nowLeft + 'px'
    }

})
const nextPage = throttle(() => {
    const moveWidth = moreRole.value.querySelector('.swiper').offsetWidth + 30
    const allWidth = moreRole.value.querySelector('.roleList').offsetWidth - moveWidth
    const ulObj = moreRole.value.querySelector('.roleList')
    if (nowLeft <= -allWidth) {
        Message({ type: 'warning', text: '到底了', delay: 2000 })
    } else {
        nowLeft -= moveWidth
        ulObj.style.left = nowLeft + 'px'
    }

}, 500, { leadinig: true })

const _store = useStore()
const roleList = computed(() => _store.state.role.roleList)
if (roleList.value.length === 0) {
    _store.dispatch('role/getRoleList')
}

const _router = useRouter()
const gotoRoleClass = () => {
    _router.push({
        name: 'roleClass'
    })
}
const gotoRoleDetail = (roleId) => {
    _router.push({
        name: 'roleDetail',
        query: { roleId }
    })
}
const _route = useRoute()
watch(_route, () => {
    _store.dispatch('role/getRoleDetailByRoleId', _route.query.roleId)
}, { deep: true })

</script>

<style lang="scss" scoped>
.more-role-app {
    width: 100%;
    padding-bottom: 1.5798rem;

    .logo-container {
        margin-left: 9.5%;
        height: 3.0016rem;

        img {
            height: 100%;
        }
    }

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

    .more-role-container {
        display: flex;
        justify-content: center;
        width: 100%;

        .inner {
            width: 74%;
            box-sizing: border-box;

            .more-role {
                width: 100%;
                display: flex;
                justify-content: flex-end;

                button {
                    width: 1.5798rem;
                    height: .4107rem;
                    text-align: center;
                    color: gray;
                    border: 1px solid gray;
                    border-radius: .05rem;
                    font-size: .2212rem;
                    cursor: pointer;
                    margin-bottom: .4739rem;
                    background-color: whitesmoke;


                    &:hover {
                        background-color: wheat;

                    }
                }
            }

            .swiper-container {
                width: 100%;
                display: flex;
                align-items: center;
                gap: 1.0427rem;

                .before-btn {
                    background: url(@/assets/role/jinglingtu.png);
                    background-position: -1410px -609px;


                }

                .next-btn {
                    background: url(@/assets/role/jinglingtu.png);
                    background-position: -1078px -755px;

                }

                .btn {
                    width: 46px;
                    height: 92px;
                    background-repeat: no-repeat;
                    z-index: 22;
                    cursor: pointer;
                    flex-shrink: 0;

                }

                .swiper {
                    max-width: calc(1.8641rem * 6 + .4739rem * 5);
                    overflow-x: hidden;
                    flex-shrink: 0;

                    .roleList {
                        display: flex;
                        list-style: none;
                        position: relative;
                        height: 157px;
                        transition: all 0.8s ease-out;
                        left: 0;
                        gap: .4739rem;
                        width: max-content;

                        .item {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            cursor: pointer;
                            width: 1.8641rem;
                            flex-shrink: 0;

                            &:hover span {
                                color: #c09a77;
                            }

                            img {
                                width: 100%;
                                height: 1.8641rem;
                                border-radius: 50%;
                                object-fit: cover;
                                background-color: transparent;

                            }

                            span {
                                display: inline-block;
                                font-size: 15px;
                                letter-spacing: 0.8px;
                                margin-top: 15px;
                            }
                        }


                    }
                }
            }
        }


    }
}
</style>