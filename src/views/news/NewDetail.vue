<template>
    <MyHeader />
    <div class="main">
        <div class="detail">
            <header>
                <span @click="gobackToHome">首页</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span @click="gobackToNews">新闻</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <span @click="gobackToNewsType">{{ type }}</span>
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <p>{{ newsDetail.newsName }}</p>
                <span class="collect">收藏:{{ collectInformation.totalCount }}</span>
                <svg @click="collectUpdate" t="1667916473271" class="icon" viewBox="0 0 1026 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="6150" width="32" height="32">
                    <path
                        d="M1019.109859 384c-11.286261-32.01113-39.713391-55.05113-74.195478-60.126609L701.69212 288.233739l-105.627826-216.019478c-15.270957-31.276522-48.261565-51.489391-84.057043-51.489391-35.706435 0-68.652522 20.21287-83.968 51.489391l-105.672348 216.041739L79.166902 323.940174c-34.504348 4.964174-62.953739 27.981913-74.24 60.17113-11.264 32.50087-2.871652 67.806609 21.882435 92.137739l178.509913 175.638261-41.405217 243.378087c-5.810087 33.925565 9.282783 68.719304 38.555826 88.687304 28.627478 19.255652 67.005217 21.370435 97.836522 5.164522l211.745391-112.39513 211.878957 112.417391c13.712696 7.234783 29.094957 11.063652 44.521739 11.063652 19.010783 0 37.420522-5.609739 53.337043-16.317217 29.139478-19.878957 44.210087-54.650435 38.4-88.576l-41.382957-243.400348 178.532174-175.638261C1022.048294 451.917913 1030.440641 416.589913 1019.109859 384zM966.062207 444.527304l-195.094261 191.955478 45.278609 266.329043c2.938435 17.096348-4.585739 34.05913-19.478261 44.232348-15.248696 10.24-35.817739 11.330783-52.045913 2.782609L512.00725 826.323478l-232.537043 123.436522c-16.406261 8.637217-36.997565 7.479652-52.045913-2.671304-15.048348-10.262261-22.572522-27.247304-19.634087-44.343652l45.30087-266.284522-195.072-191.955478c-12.377043-12.154435-16.606609-29.718261-11.063652-45.723826 5.765565-16.384 20.524522-28.182261 38.622609-30.786783l266.48487-39.112348 115.97913-237.122783c7.880348-16.11687 25.154783-26.534957 43.987478-26.534957 18.899478 0 36.173913 10.395826 44.054261 26.512696l115.95687 237.122783 266.418087 39.023304c18.075826 2.671304 32.901565 14.514087 38.64487 30.809043C982.668815 414.786783 978.43925 432.328348 966.062207 444.527304zM509.046555 376.898783c-45.590261 0-82.320696 13.913043-109.122783 41.316174-44.744348 45.746087-43.78713 112.194783-43.720348 115.021913 0.26713 12.109913 10.173217 21.726609 22.238609 21.726609 0.133565 0 0.289391 0 0.422957 0 12.265739-0.222609 22.016-10.373565 21.837913-22.639304 0-0.512-0.400696-51.066435 31.254261-83.18887 18.098087-18.387478 44.054261-27.692522 77.06713-27.692522 12.288 0 22.26087-9.97287 22.26087-22.26087S521.334555 376.898783 509.046555 376.898783z"
                        p-id="6151" fill="#cdcdcd"></path>
                </svg>
                <span @click="gobackToNews">返回新闻列表</span>

            </header>
            <div class="detail-inner">
                <div class="left">
                    <div class="article">
                        <div class="title">
                            <span class="title-text">{{ newsDetail.newsName }}</span>
                            <div class="news-info">
                                <span class="time">发布时间：{{ newsDetail.publishTime }}</span>
                                <span class="publisher">发布人：{{ newsDetail.user?.userName }}</span>
                            </div>
                        </div>
                        <div class="news-content" v-html="newsDetail.newsContent">

                        </div>

                        <div class="change-page">
                            <div class="btn before" @click="preOrNext(-1)"><i class="fa fa-chevron-left"
                                    aria-hidden="true"></i></div>
                            <div class="btn next" @click="preOrNext(1)"><i class="fa fa-chevron-right"
                                    aria-hidden="true"></i></div>
                        </div>

                    </div>
                </div>
                <div class="right">
                    <div class="the-hot-new">
                        <div class="title">最新资讯</div>
                        <ul>
                            <li v-for="item in latestNewsList" :key="item.newsId" @click="getNewsDetail(item.newsId)">
                                <div class="hot-new">
                                    <div class="hot-img"><img v-lazy="item.coverUrl" alt="cover"></div>
                                    <div class="hot-text">
                                        <p>{{ item.newsName }}</p>
                                        <span>{{ item.publishTime }}</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>

    </div>
    <div class="goto-top" v-show="goToTopIsShow" @click="goToTop">
        <img src="@/assets/news/jiantou.png" alt="回到顶部">
    </div>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, watch, ref, onBeforeUnmount } from 'vue';
import { useStore } from 'vuex';
import MyHeader from '@/components/firstpage/MyHeader.vue';
const _route = useRoute()
const _store = useStore()
const _router = useRouter()
const collect = {
    id: _route.query.newsId,
    type: 'news',
    collectId: null,
    userAccount: null
}
if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).userAccount) {
    collect.userAccount = JSON.parse(localStorage.getItem('token')).userAccount
}

onMounted(() => {
    _store.dispatch('news/getNewsDetail', _route.query.newsId)
    _store.dispatch('news/getCollectInfo', collect)

    if (latestNewsList.value.length === 0) {
        _store.dispatch('news/getNewsByType', _route.query.type)
    }
})
const newsDetail = computed(() => _store.state.news.newsDetail)
const types = {
    activity: '活动',
    news: '新闻',
    notice: '公告'
}
const type = computed(() => types[newsDetail.value.type])
const latestNewsList = computed(() => _store.state.news.newsInformation[_route.query.type].slice(0, 5))
const getNewsDetail = (newsId) => {
    _router.push({
        name: 'newsDetail',
        query: {
            newsId: newsId,
            type: _route.query.type
        }
    })

}

const gobackToNews = () => {
    _router.push({
        name: 'newsNews'
    })
}
const gobackToHome = () => {
    _router.push({
        name: 'home'
    })
}
const gobackToNewsType = () => {
    let pathName;
    if (newsDetail.value.type == 'news') {
        pathName = 'newsNews'
    } else {
        pathName = newsDetail.value.type
    }
    _router.push({
        name: pathName
    })

}
let goToTopIsShow = ref(false)
let pageHeight = document.documentElement.clientHeight
const changeShow = () => {
    document.documentElement.scrollTop > pageHeight ? goToTopIsShow.value = true : goToTopIsShow.value = false
}
const goToTop = () => {
    document.documentElement.scrollTop = 0;
}
onMounted(() => {
    window.addEventListener("scroll", changeShow)
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', changeShow)
})

const fillColor = computed(() => collectInformation.value.isCollect === false ? '#cdcdcd' : 'blue')

const collectUpdate = () => {
    _store.dispatch('news/updateCollectInfo', collect)
}

/**
 * 
 * @param {1/-1} value 
 * 上一个或者下一个新闻的切换
 */
const preOrNext = (value) => {
    const newsList = computed(() => _store.state.news.newsInformation[_route.query.type])
    let index = 0;
    for (index; index < newsList.value.length; index++) {
        if (_route.query.newsId == newsList.value[index].newsId) {
            break;
        }

    }
    index += value
    if (index < 0) {
        index = newsList.value.length - 1
    } else if (index >= newsList.value.length) {
        index = 0
    }
    _router.push({
        name: 'newsDetail',
        query: {
            newsId: newsList.value[index].newsId,
            type: _route.query.type
        }
    })

}
const collectInformation = computed(() => _store.state.news.collectInformation)
watch(_route, (newValue) => {
    _store.dispatch('news/getNewsDetail', _route.query.newsId)
}, { deep: true })
</script>

<style lang="scss" scoped>
@media screen and (max-width:768px) {
    .main {
        header {
            width: 96% !important;
        }

        .detail {
            width: 92% !important;

            .detail-inner {
                flex-wrap: wrap;

                .left {
                    width: 100% !important;
                }

                .right {
                    width: 100% !important;
                }
            }


        }

    }
}


.main {
    width: 100%;
    background: #4d6e80 url(@/assets/news/new_detail_background.jpg) no-repeat top center;
    background-size: 100% auto;
    display: flex;
    justify-content: center;


    .detail {
        width: 85%;
        margin-bottom: 200px;
        margin-top: 120px;


        header {
            font-size: 16px;
            min-height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            width: 70%;
            flex-wrap: wrap;
            cursor: pointer;
            gap: .316rem 0;

            span {
                margin-right: 10px;

                @for $i from 1 through 3 {
                    &:nth-of-type(#{$i}) {
                        color: #808080;
                    }

                    &:nth-of-type(#{$i}):hover {
                        color: #fff;
                    }
                }

                &:last-of-type {
                    color: #ccc;
                    margin-left: auto;

                    &:hover {
                        color: #fff;
                    }
                }
            }

            .collect {
                color: #cfcfcf;
                margin-left: .0948rem;

                &+svg {
                    width: .4423rem;
                    height: .4423rem;

                    path {
                        fill: v-bind(fillColor);
                    }
                }
            }

            i {
                font-size: 20px;
                color: #aaa;
                margin-right: 10px;
            }

            p {
                color: #cfcfcf;
            }
        }

        .detail-inner {
            display: flex;

            gap: .4739rem .416rem;

            .left {
                border-top: #e8cba7 solid 6px;
                width: calc(70% - .416rem);
                box-sizing: border-box;
                display: flex;
                justify-content: center;
                background-color: #f0f0f0;

                .article {
                    width: 84%;


                    .title {
                        display: flex;
                        flex-direction: column;
                        min-height: 160px;
                        justify-content: center;

                        .title-text {
                            font-size: 32px;
                            color: #333333;
                            font-weight: 400;

                        }

                        .news-info {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            height: 60px;

                            span {
                                font-size: 16px;
                                color: #999999;
                                margin-top: 16px;

                            }
                        }


                    }

                    .news-content {
                        background-color: #f0f0f0;
                        box-sizing: border-box;
                        min-height: 80vh;
                        word-wrap: break-word;
                        white-space: pre-wrap;

                        :deep(img) {

                            max-width: 100%;
                            box-sizing: border-box;
                            margin: 20px 0 35px 0;
                        }

                        :deep(video) {
                            max-width: 100%;
                            object-fit: cover;
                            box-sizing: border-box;
                        }

                        :deep(p) {
                            line-height: 40px;
                            color: #7d7d7d;
                            font-size: 14px;
                        }

                        :deep(span) {
                            color: #7d7d7d;
                        }


                        :deep(table) {
                            border-collapse: collapse;
                            box-sizing: border-box;
                            margin: 0;
                            outline: none;
                            padding: 0;
                            border-spacing: 2px;
                            border-color: grey;
                        }

                        :deep(table td) {
                            border: 1px solid #ccc;

                            line-height: 1.5;
                            min-width: 30px;
                            padding: 3px 5px;
                        }
                    }










                    .change-page {
                        height: 120px;
                        display: flex;
                        align-items: center;
                        color: #ccc;
                        font-size: 24px;
                        justify-content: space-between;

                        .btn {
                            padding: 7px 30px;
                            background-color: #9ea1a8;
                            border-radius: 6px;
                            cursor: pointer;

                            &:hover {
                                background: #565961;
                            }
                        }
                    }

                }
            }

            .right {

                box-sizing: border-box;
                border-top: #e8cba7 solid 6px;
                width: 30%;
                background-color: #f0f0f0;
                height: 690px;
                overflow-y: auto;
                min-width: 4.6234rem;

                .the-hot-new {
                    .title {
                        width: 100%;
                        height: 34px;
                        background-color: rgba(18, 18, 18, 0.04);
                        line-height: 34px;
                        color: black;
                        font-size: 16px;
                        font-family: PingFang SC0;
                        text-align: center;
                        margin: 26px 0 20px 0;
                    }

                    ul {
                        list-style: none;

                        li {
                            height: 105px;
                            display: flex;
                            justify-content: center;
                            cursor: pointer;



                            &:hover {
                                background-color: #e3e3e5;

                            }

                            .hot-new {
                                display: flex;
                                height: 100%;
                                width: 90%;
                                align-items: center;

                                .hot-img {
                                    width: 140px;
                                    height: 70px;
                                    flex-shrink: 0;
                                    // #393b40;

                                    img {
                                        width: 100%;
                                        height: 100%;
                                        object-fit: cover;
                                    }
                                }

                                .hot-text {
                                    flex: 1;
                                    margin-left: 8px;

                                    p {
                                        color: #393b40;
                                        font-size: 16px;

                                    }

                                    span {
                                        color: #999999;
                                        font-size: 14px;
                                        margin-top: 5px
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }


    }
}

.goto-top {
    position: fixed;
    padding: 15px 15px;
    background-color: #fff;
    cursor: pointer;
    right: 50px;
    bottom: 120px;

    img {
        width: 28px;
        height: 28px;
        object-fit: cover;
        user-select: none;
    }
}
</style>