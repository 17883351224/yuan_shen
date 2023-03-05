<template>
    <div class="main">
        <div class="inner-container">
            <nav>
                <ul class="nav-list">
                    <li v-for="(item, index) in topClass" :key="index" @click="changeNewsType(item.pathName)"
                        :class="{ active: item.pathName == $route.name }">{{ item.title }}
                    </li>
                </ul>
            </nav>
            <ul class="new-list">
                <li class="new" v-for="(item) in newsList" :key="item.newsId" @click="gotoNewsDetail(item.newsId)">
                    <div class="new-inner">
                        <div class="img-container">
                            <img v-lazy="item.coverUrl" alt="coverImage">
                        </div>
                        <div class="text">
                            <h3>{{ item.newsName }}</h3>
                            <div class="time">
                                <span>{{ item.publishTime }}</span>
                                <span>新闻</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="last">加载更多</li>

            </ul>


        </div>


    </div>
</template>

<script>
import { onMounted, computed, ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router'
export default {
    setup() {
        const topClass = [
            {
                title: '最新',
                type: 'news',
                pathName: 'latest'
            },
            {
                title: '新闻',
                type: 'news',
                pathName: 'newsNews'
            },
            {
                title: '活动',
                type: 'activity',
                pathName: 'activity'

            },
            {
                title: '公告',
                type: 'notice',
                pathName: 'notice'

            }
        ];
        const _store = useStore()
        const _router = useRouter()
        const _route = useRoute()
        const newsList = computed(() => _store.state.news.newsInformation[_route.meta.type])
        onMounted(() => {
            if (newsList.value.length === 0) {
                _store.dispatch('news/getNewsByType', _route.meta.type)
            }
        })

        const changeNewsType = (pathName) => {
            _router.push({
                name: pathName
            })
        }
        const gotoNewsDetail = (newsId) => {
            _router.push({
                name: 'newsDetail',
                query: {
                    newsId: newsId,
                    type: _route.meta.type
                }
            })
        }
        return { topClass, newsList, changeNewsType, gotoNewsDetail }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    position: relative;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;

    @media screen and (max-width:768px) {
        .inner-container {
            nav {
                .nav-list {
                    width: 100% !important;

                }
            }
        }

    }

    .inner-container {
        width: 85%;
        box-sizing: border-box;

        nav {
            .nav-list {
                list-style: none;
                display: flex;
                width: 60%;
                height: 100px;
                justify-content: space-between;
                align-items: center;

                gap: 0 .158rem;

                li {
                    background: rgba(57, 59, 64, 0.18);
                    cursor: pointer;
                    color: #393b40;
                    font-size: 14px;
                    width: 155px;
                    height: 36px;
                    line-height: 36px;
                    text-align: center;
                    border-radius: 6px;

                    &:hover {
                        color: #f4d8a8;
                        background-color: #393b40;

                    }

                    &.active {
                        color: #f4d8a8;
                        background-color: #393b40;
                    }

                }
            }
        }

        .new-list {
            list-style: none;
            width: 100%;


            .new {
                width: 100%;
                padding: 15px 0;
                background-color: #fafafa;
                transition: all 0.2s ease;
                margin-bottom: 16px;
                cursor: pointer;
                position: relative;

                &:hover {
                    background-color: #fff;
                }

                &::before {
                    content: '';
                    position: absolute;
                    z-index: 1;
                    top: -3px;
                    bottom: -3px;
                    left: -3px;
                    right: -3px;
                    border: 3px solid rgba(57, 59, 64, 0.15);
                    display: none;
                    opacity: 0;
                    border-radius: 4px;
                }

                &:hover::before {
                    display: block;
                    opacity: 1;
                    transition: opacity 0.2s linear;
                }


                .new-inner {
                    width: 100%;
                    padding: 0 16px;
                    min-height: 2.2117rem;
                    display: flex;
                    box-sizing: border-box;
                    flex-wrap: wrap;


                    .img-container {
                        img {
                            width: 265px;
                            height: 140px;
                            object-fit: cover;
                        }
                    }

                    .text {
                        padding-left: 30px;
                        display: flex;
                        flex-direction: column;
                        flex: 1;
                        box-sizing: border-box;

                        h3 {
                            font-size: 24px;
                            font-weight: 400;
                            color: #393b40;
                            flex: 1;
                        }

                        .time {
                            display: flex;
                            justify-content: flex-end;

                            span {
                                color: #999;
                                font-size: 16px;
                                letter-spacing: 0.2px;

                                &:last-child {
                                    color: #ffc000;
                                    margin-left: 40px
                                }
                            }
                        }
                    }
                }
            }

            .last {
                background-color: #393b40;
                height: 40px;
                width: 100%;
                color: #fff;
                text-align: center;
                line-height: 40px;
                font-size: 17px;
                margin: 40px 0 100px 0;
                font-family: "PingFang SC0";
                transition: all 0.2s ease;
                border-radius: 6px;
                cursor: pointer;

                &:hover {
                    background-color: #565961;

                }
            }
        }
    }



}
</style>