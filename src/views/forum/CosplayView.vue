<template>
    <div class="cosplay" ref="cosplay">
        <div class="mhy-layout">
            <div class="mhy-layout-tab-list">
                <div class="mhy-layout-tab active" @click="orderByTime">最新发帖</div>
                <div class="mhy-layout-tab" @click="orderByReply">最新回复</div>
                <div class="mhy-layout-tab" @click="orderByHot">热门</div>
            </div>
            <div class="mhy-layout-upload" @click="gotoUploadCosplay">
                <svg t="1665487068022" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="1533">
                    <path
                        d="M904.448 316.8L696.96 109.248 742.144 64l207.552 207.552-45.248 45.248zM382.208 839.04l-231.232 46.272a19.2 19.2 0 0 1-22.592-22.592l46.272-231.232 467.008-467.008 207.616 207.552-467.072 467.072z m376.512-467.008l-117.056-117.056L233.6 663.04l-29.312 146.368 146.368-29.248 408.064-408.128zM960 704h-256v64h256v-64zM960 832H544v64H960v-64z"
                        fill="#000000" fill-opacity=".85" opacity=".9" p-id="1534"></path>
                </svg>
                <div>发布图片</div>
            </div>
        </div>
        <div class="cosplay-inner">

            <div class="mhy-main">
                <div class="mhy-main-card-list">
                    <div class="card" v-for="item in cosplayList" :key="item.id" @click="getCreationDetail(item.id)">
                        <div class="picture-container">
                            <img class="card-picture" v-lazy="item.coverUrl">
                        </div>
                        <div class="card-header">

                            <span>{{ item.title }}</span>
                        </div>
                        <div class="card-footer">
                            <div class="card-footer-user">
                                <img v-lazy='item.user?.userAvatar'>
                            </div>
                            <div class="card-footer-user-name"><a>{{ item.user?.userName }}</a></div>
                            <svg t="1665496508897" class="icon dianzan" viewBox="0 0 1064 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="938" width="200" height="200">
                                <path
                                    d="M204.8 440.32a30.72 30.72 0 0 0-30.72 30.72v368.64c0 16.95744 13.76256 30.72 30.72 30.72h51.2v-430.08H204.8z m-133.12 30.72A133.12 133.12 0 0 1 204.8 337.92h102.4c28.2624 0 51.2 22.9376 51.2 51.2v532.48c0 28.2624-22.9376 51.2-51.2 51.2H204.8a133.12 133.12 0 0 1-133.12-133.12v-368.64z"
                                    fill="#1D1D1F" p-id="939"></path>
                                <path
                                    d="M512.94208 140.41088c-23.18336 71.35232-57.42592 138.89536-89.45664 190.0544-16.384 26.17344-32.80896 48.98816-47.59552 66.31424-7.3728 8.6016-14.99136 16.62976-22.65088 23.26528-6.10304 5.24288-18.0224 14.82752-33.5872 18.75968a51.2 51.2 0 0 1-33.01376-96.58368c2.4576-2.12992 6.26688-5.98016 11.38688-12.00128 10.6496-12.45184 24.1664-30.88384 38.66624-54.14912 29.12256-46.4896 60.2112-108.29824 80.32256-171.86816 7.08608-22.28224 23.7568-45.99808 52.18304-56.89344 47.5136-18.18624 125.7472-27.27936 172.60544 40.50944 21.01248 30.43328 30.22848 70.41024 30.3104 117.30944 0.08192 32.11264-4.096 69.30432-12.98432 112.31232h167.1168c46.61248 0 101.82656 19.0464 130.37568 70.8608 60.66176 110.01856 85.1968 302.4896-81.79712 521.17504-32.31744 42.27072-82.3296 63.32416-131.8912 63.32416H307.2a51.2 51.2 0 1 1 0-102.4h435.77344c21.34016 0 39.7312-9.0112 50.46272-23.10144 142.9504-187.14624 114.11456-335.91296 73.5232-409.6-4.87424-8.8064-18.0224-17.85856-40.67328-17.85856H593.92a51.2 51.2 0 0 1-49.31584-64.9216c18.432-66.27328 25.1904-114.85184 25.14944-149.54496-0.08192-35.06176-7.168-52.0192-12.20608-59.35104-4.99712-7.20896-16.67072-14.58176-44.60544-5.61152zM284.672 343.81824l0.69632-0.49152a4.096 4.096 0 0 1-0.69632 0.49152z"
                                    fill="#1D1D1F" p-id="940"></path>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="mhy-main-right">
                    <div class="mhy-main-download">
                        <div>
                            <a href="www.baidu.com">
                                <div class="download">
                                    <div class="download-code">
                                        <img src="https://bbs.mihoyo.com/_nuxt/img/qrcode_ys.c265aec.png" class="code">
                                    </div>
                                    <div class="mhy-qrcode">
                                        <p class="mhy-qrcode__title">扫码下载米游社App</p>
                                        <p class="mhy-qrcode__subtitle">了解提瓦特最新资讯</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div class="mhy-main-ranking">
                        <div class="rank-header">
                            <div class="rank-header-coterie">COS榜</div>
                            <span class="rank-header-more">更多</span>
                        </div>
                        <div>
                            <div class="rank-footer" v-for="(item, index) in hotCosplayList.slice(0, 5)" :key="item.id"
                                @click="getCreationDetail(item.id)">
                                <div class="cover">
                                    <img v-lazy="item.coverUrl">
                                </div>
                                <div class="rank-table">
                                    <div class="rank-table-title">
                                        <div class="title"><span>{{ item.title }}</span></div>
                                        <div class="rank-table-user">
                                            <img class="rank-table-user-link" v-lazy="item.user?.userAvatar">
                                            <span class="rank-table-user-name">{{ item.user?.userName }}</span>
                                        </div>
                                        <div class="ranking">
                                            {{ index + 1 }}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const cosplay = ref(null)
onMounted(() => {
    const navsObj = cosplay.value.querySelectorAll('.mhy-layout-tab')
    Array.from(navsObj).forEach(item => {
        item.addEventListener('click', (e) => {
            Array.from(navsObj).forEach(nav => {
                nav.classList.remove('active')
            })
            e.currentTarget.classList.add('active')
        })
    })
    const _router = useRouter()
})
const _store = useStore()
const cosplayList = computed(() => _store.state.creation.cosplayList)

const hotCosplayList = computed(() => [...cosplayList.value].sort((item1, item2) => item2.likedTotal - item1.likedTotal))


/**
 * 获取同人信息列表
 */
const getCreationListByType = (type) => {
    if (cosplayList.value.length == 0) {
        _store.dispatch('creation/getAllCreationByType', type)
    }
}
getCreationListByType('COS')
const _router = useRouter()
const gotoUploadCosplay = () => {
    _router.push({
        name: 'creationUpload'
    })
}
const getCreationDetail = (creationId) => {
    const router = _router.resolve({
        name: 'creationDetail',
        query: {
            type: "cos",
            creationId: creationId

        }
    })
    window.open(router.href, '_blank')

}

const orderByHot = () => {
    cosplayList.value.sort((item1, item2) => item2.likedTotal - item1.likedTotal)

}
const orderByTime = () => {
    cosplayList.value.sort((item1, item2) => Date.parse(item2.publishTime.replace(/-/g, '/')) - Date.parse(item1.publishTime.replace(/-/g, '/')))

}
const orderByReply = () => {
    cosplayList.value.sort((item1, item2) => Date.parse(item2.latestReplyTime.replace(/-/g, '/')) - Date.parse(item1.latestReplyTime.replace(/-/g, '/')))
}
</script>

<style lang="scss" scoped>
.cosplay {
    padding-top: 1.1058rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    background: #F7F8FC;
    min-height: 100vh;

    .cosplay-inner {
        width: 70%;
    }

    @media screen and (max-width:1400px) {
        .cosplay-inner {
            width: 100%;
        }


    }

    @media screen and (max-width:992px) {
        .cosplay-inner {
            width: 90%;
        }


    }

    @media screen and (max-width:768px) {
        .cosplay-inner {
            width: 100%;
        }

        .mhy-main-card-list {
            justify-content: center !important;
        }
    }
}


@media screen and (min-width:1200px) {
    .mhy-main-card-list {
        width: 72%;
    }




}

@media screen and (min-width :768px) {
    .mhy-layout-tab-list {
        flex: 1;
    }
}



a {
    text-decoration: none;
}

.mhy-layout {
    display: flex;
    padding: 0 5%;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    padding: 0 14% 0 14%;
    flex-wrap: wrap;
    justify-content: center;

}

.mhy-layout-tab-list {
    display: flex;
    cursor: pointer;
    height: .7899rem;
    flex-wrap: wrap;

}



.mhy-layout-tab {
    padding: 0 .0632rem;
    height: 100%;
    line-height: .7899rem;
    margin-left: .2528rem;
    text-align: center;
    font-size: .2528rem;
    box-sizing: border-box;
    flex-shrink: 0;

    &.active {
        color: #00c3ff;
        font-weight: 560;
        border-bottom: .0474rem solid #00c3ff;

    }
}

.mhy-layout-upload {
    display: flex;
    height: .6319rem;
    justify-content: center;
    align-items: center;
    font-size: .2528rem;
    background-color: #ffe14c;
    border-radius: .079rem;
    padding: 0 .158rem;
    margin-right: .6793rem;
    cursor: pointer;
    flex-shrink: 0;
}

.icon {
    width: .3791rem;
    height: .3791rem;
}

.mhy-main {
    background-color: #F7F8FC;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: .2528rem;
    justify-content: center;

    .mhy-main-card-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px 20px;
        justify-content: flex-start;
        align-content: flex-start;

        .card {
            width: 3.5703rem;
            background-color: #FFFFFF;
            display: inline-block;
            border-radius: .0948rem;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 5px rgba(200, 200, 200, .25);
            cursor: pointer;
            height: 3.8863rem;
            overflow: hidden;

            .picture-container {
                width: 100%;
                height: 2.6224rem;
                overflow: hidden;

                >img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 0.4s ease-in-out;

                }


            }

            .card-header {

                padding: 0 .237rem 0 .237rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                span {
                    font-size: .2528rem;

                }
            }

            .card-footer {
                display: flex;
                margin: 0;
                padding: 0px .237rem 0 .237rem;
                line-height: .7899rem;
                align-items: center;

                .card-footer-user {
                    height: .5529rem;
                    width: .5529rem;

                    >img {
                        height: .5529rem;
                        width: .5529rem;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }

                .card-footer-user-name {
                    margin-left: .158rem;
                    font-size: .2212rem;
                    color: #666;
                    max-width: 1.8325rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .dianzan {
                margin: 0 .0632rem 0 auto
            }

            &:hover .card-picture {
                transform: scale(1.25);
            }
        }
    }


}

.mhy-main-right {
    width: 24%;
    min-width: 4.4234rem;
    flex-shrink: 0;
}

.mhy-main-download {
    padding-left: .158rem;
    background-color: #FFFFFF;
    padding: .2844rem .158rem;
}

.download-code {
    display: flex;
    align-items: center;
    justify-content: center;
}

.code {
    width: 1.5798rem;
}

.download {
    display: flex;
}

.mhy-qrcode {
    margin: .237rem;

    p {
        font-size: .2212rem;
    }
}

.mhy-qrcode__title {
    color: #00C3FF;
}

.mhy-qrcode__subtitle {
    color: #969799;
}



.rank-header {
    display: flex;
    align-items: center;
    margin-top: .237rem;
    background-color: #FFFFFF;
}

.rank-header-coterie {
    flex: 1;
    margin-left: .158rem;
    font-size: .316rem;
    font-weight: bold;
}

.rank-header-more {
    margin: .237rem;
    color: #999999;
    font-size: .237rem;
}

.rank-footer {
    margin: .0474rem 0;
    background-color: #FFFFFF;
    cursor: pointer;
    display: flex;
    padding: .2528rem .0948rem .2528rem .2528rem;
    box-sizing: border-box;
    align-items: center;
    cursor: pointer;

    &:nth-of-type(1) {
        .ranking {
            color: red;
        }
    }

    &:nth-of-type(2) {
        .ranking {
            color: #ffe14c;
        }
    }

    &:nth-of-type(3) {
        .ranking {
            color: skyblue;
        }
    }

    &:nth-of-type(4) {
        .ranking {
            color: gray;
        }
    }

    &:nth-of-type(5) {
        .ranking {
            color: #666;
        }
    }
}


.rank-table {
    margin-left: .2212rem;
    flex: 1;
    flex-shrink: 0;
}

.rank-table-title {
    font-size: .2212rem;

    .title {
        span {
            line-height: .4739rem;

            &:hover {
                color: #00c3ff;
            }
        }
    }

    .ranking {
        font-size: .4739rem;
        font-weight: 600;
        text-align: right;
        padding-right: .2528rem;
    }

}

.cover>img {
    width: 1.2638rem;
    height: 1.6746rem;
    object-fit: cover;
    border-radius: .0948rem;

}

.rank-table-user-link {
    width: .5055rem;
    height: .5055rem;
    border-radius: 50%;
    object-fit: cover;
    vertical-align: middle;
}

.rank-table-user-name {
    margin-left: .079rem;
    font-size: .2212rem;
    color: #666;
    max-width: 1.8325rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}
</style>