
<template>

    <div class="forum-header" ref="forumHeader">
        <div class="header" v-if="(asideSwiperList.length != 0)">
            <div class="swiper-container">
                <ul class="swiper">
                    <li v-for="item in asideSwiperList.slice(0, 5)" :key="item.postId">
                        <img class="img" v-lazy="JSON.parse(item.postCover || '[]')[0]" alt="cover">
                    </li>
                </ul>
                <div class="indicator-container">
                    <ul>
                        <li v-for="( item, index ) in asideSwiperList.slice(0, 5)" :key="index" :data-id="index"> </li>
                    </ul>
                </div>
                <div class="btn before">
                    <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="btn after">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
            </div>
            <div class="creation">
                <div class="head">
                    <span>创作等级:&nbsp;{{ userLevel }}</span>
                    <span>进去创作中心
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                </div>
                <div class="content">
                    <div class="tiezi">
                        <div class="inner">
                            <div class="botton" @click="gotoPostUpload">
                                <svg t="1665473346991" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="31868" width="32" height="32">
                                    <path d="M79.36 916.48h343.04v51.2H79.36z" fill="#2c2c2c" p-id="31869"></path>
                                    <path d="M550.4 916.48h376.32v51.2H550.4z" fill="#2c2c2c" p-id="31870"></path>
                                    <path
                                        d="M629.76 158.72l215.04 215.04L373.76 844.8l-215.04-215.04L629.76 158.72z m0 0"
                                        fill="#2c2c2c" p-id="31871">
                                    </path>
                                    <path d="M716.8 74.24l215.04 215.04-64 64-215.04-215.04L716.8 74.24z m0 0"
                                        fill="#2c2c2c" p-id="31872"></path>
                                    <path d="M138.24 652.8l215.04 215.04L51.2 952.32l87.04-299.52z m0 0" fill="#2c2c2c"
                                        p-id="31873"></path>
                                    <path
                                        d="M798.72 71.68L931.84 204.8c23.04 23.04 20.48 58.88-2.56 81.92-23.04 23.04-61.44 25.6-81.92 2.56l-133.12-133.12c-23.04-20.48-23.04-58.88 2.56-81.92 23.04-23.04 58.88-25.6 81.92-2.56z m0 0"
                                        fill="#2c2c2c" p-id="31874"></path>
                                </svg>
                                <span>发布帖子</span>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                            <p>讨论、分析、攻略、同人文</p>
                        </div>
                    </div>
                    <div class="photo">
                        <div class="inner">
                            <div class="botton" @click="gotoCreationUpload">
                                <svg t="1665473412167" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="33285" width="32" height="32">
                                    <path
                                        d="M938.666667 553.92V768c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v297.92z m-64-74.624V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v344.48A290.090667 290.090667 0 0 1 192 597.333333a286.88 286.88 0 0 1 183.296 65.845334C427.029333 528.384 556.906667 437.333333 704 437.333333c65.706667 0 126.997333 16.778667 170.666667 41.962667z m0 82.24c-5.333333-8.32-21.130667-21.653333-43.648-32.917333C796.768 511.488 753.045333 501.333333 704 501.333333c-121.770667 0-229.130667 76.266667-270.432 188.693334-2.730667 7.445333-7.402667 20.32-13.994667 38.581333-7.68 21.301333-34.453333 28.106667-51.370666 13.056-16.437333-14.634667-28.554667-25.066667-36.138667-31.146667A222.890667 222.890667 0 0 0 192 661.333333c-14.464 0-28.725333 1.365333-42.666667 4.053334V768a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V561.525333zM320 480a96 96 0 1 1 0-192 96 96 0 0 1 0 192z m0-64a32 32 0 1 0 0-64 32 32 0 0 0 0 64z"
                                        p-id="33286"></path>
                                </svg>
                                <span>发布图片</span>
                                <i class="fa fa-angle-right" aria-hidden="true"></i>
                            </div>
                            <p>绘画、COS、手工、表情包</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useSwiper } from '@/hooks/swiper/useSwiper'
import { computed } from '@vue/reactivity'
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

let forumHeader = ref(null)


const _router = useRouter()
const gotoPostUpload = () => {
    const router = _router.resolve({
        name: 'postUpload'
    })
    window.open(router.href, '_blank')

}
const gotoCreationUpload = () => {

    const router = _router.resolve({
        name: 'creationUpload'
    })
    window.open(router.href, '_blank')
}
const _store = useStore()
const userLevel = computed(() => _store.state.user.userInformations.userLevel || '')

const postList = computed(() => _store.state.post.postList)
const asideSwiperList = computed(() => {
    return postList.value.filter((p) => p.postCover !== '[]')
})
onMounted(() => {
    if (asideSwiperList.value.length >= 3) {
        nextTick(() => {
            let swiperList = forumHeader.value.querySelector('.swiper').getElementsByTagName('li')
            let btns = forumHeader.value.querySelectorAll('.swiper-container .btn')
            let indicator = forumHeader.value.querySelectorAll('.indicator-container ul li')
            let swiper = useSwiper(swiperList, btns, indicator, [0, 145, 290], 1.2, 4000, [' #dfe1e6', '#00c3ff'], 0.95, '55%')
        })
    }
})

watch(asideSwiperList, (newValue) => {
    if (newValue.length >= 3) {
        nextTick(() => {
            let swiperList = forumHeader.value.querySelector('.swiper').getElementsByTagName('li')
            let btns = forumHeader.value.querySelectorAll('.swiper-container .btn')
            let indicator = forumHeader.value.querySelectorAll('.indicator-container ul li')
            let swiper = useSwiper(swiperList, btns, indicator, [0, 145, 290], 1.2, 4000, [' #dfe1e6', '#00c3ff'], 0.95, '55%')
        })
    }
})
</script>

<style lang="scss" scoped>
@media screen and (max-width:768px) {
    .forum-header {
        box-sizing: border-box;
        padding: 0 .4739rem;
    }

    .header {
        justify-content: center;
        overflow-x: hidden;

        .swiper-container {
            transform: scale(0.8);
        }
    }
}

.forum-header {
    width: 100%;
    box-sizing: border-box;


    .header {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 1.5798rem;
        justify-content: center;
        gap: .316rem;
        flex-wrap: wrap;



        .swiper-container {
            position: relative;

            .swiper {
                list-style: none;
                position: relative;
                width: 11.3744rem;
                height: 3.7915rem;

                li {
                    display: inline-block;
                    transition: all 0.4s ease-in-out;
                    width: 6.7457rem;
                    height: 3.128rem;
                    border-radius: .0948rem;
                    overflow: hidden;
                    position: absolute;
                    left: 0;
                    top: 0;
                    box-shadow: 2px 2px 5px rgba(0, 0, 0, .15);



                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            }

            .indicator-container {
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);

                ul {
                    list-style: none;
                    display: flex;

                    li {
                        width: .4739rem;
                        height: .0474rem;
                        border-radius: .0632rem;
                        margin: 0 .158rem;
                        background: #dfe1e6;
                    }
                }
            }

            .btn {
                width: .7899rem;
                height: .7899rem;
                border-radius: 50%;

                text-align: center;
                line-height: .8689rem;
                background: rgba($color: #000000, $alpha: .5);
                position: absolute;
                cursor: pointer;

                &:hover {
                    background: skyblue;
                }


                z-index: 20;

                i {
                    font-size: .4423rem;
                    color: #fff;

                }
            }

            .before {
                left: .4739rem;
                top: 30%;
            }

            .after {
                right: .4739rem;
                top: 30%
            }
        }

        .creation {
            width: 4.4234rem;
            height: 3.6967rem;
            background: #fff;
            border-radius: 6px;
            display: flex;
            flex-direction: column;
            align-items: center;


            .head {
                height: .7899rem;
                width: 79%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #eee;

                span {
                    &:first-child {
                        font-size: .2212rem;
                        letter-spacing: 0.2px;
                        color: #333;

                    }

                    &:last-child {
                        font-size: .2054rem;
                        color: #999;
                        display: inline-block;
                        height: .4739rem;
                        line-height: .4739rem;
                        cursor: pointer;

                        i {
                            font-size: .2844rem;
                        }
                    }
                }
            }

            .tiezi,
            .photo {
                height: 1.0269rem;
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: .2844rem;

                .inner {
                    width: 2.5276rem;


                    .botton {
                        height: .6319rem;
                        background: #ffe14c;
                        color: #333;
                        line-height: .6319rem;
                        text-align: center;
                        border-radius: 4px;
                        cursor: pointer;

                        svg {
                            width: 23px;
                            height: 23px;
                            vertical-align: middle;
                        }

                        span {
                            margin-left: .158rem;
                            font-size: .2528rem;
                            font-family: PingFang SC00;
                        }

                        i {
                            margin-left: 24px;
                            font-size: .316rem;
                        }
                    }

                    p {
                        color: #999;
                        font-size: .2054rem;
                        letter-spacing: 0.2px;
                        line-height: .5687rem;
                        text-align: center;

                    }
                }
            }
        }
    }


}
</style>