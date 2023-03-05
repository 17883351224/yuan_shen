<template>
    <div class="main">
        <ul class="hot-new-list">
            <li v-for="(item) in latestNewsList" :key="item.newsId" @click="getNewsDetail(item.newsId)">
                <div class="hot-new">
                    <div class="img-container"><img :src="item.coverUrl" alt="newsImage"></div>
                    <div class="text">
                        <p>{{ item.newsName }}</p>
                    </div>
                    <div class="time">
                        <span>{{ item.publishTime }}</span>
                        <h6>新闻</h6>
                    </div>
                </div>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const _store = useStore()
const _router = useRouter()
const _route = useRoute()
onMounted(() => {
    _store.dispatch('news/getNewsByType', 'news')

})
const getNewsDetail = (newsId) => {
    _router.push(
        {
            name: 'newsDetail',
            query: {
                newsId: newsId,
                type: _route.meta.type
            }
        }
    )
}
const latestNewsList = computed(() => _store.state.news.newsInformation.news.slice(0, 3))
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    min-height: 100vh;
    background: url(@/assets/news/background.jpg) center center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    filter: brightness(90%);

    @media screen and (max-width:768px) {
        .hot-new-list {
            width: 95% !important;
            align-content: flex-start;


            li {

                width: 100% !important;
                max-width: 6.6351rem;


                .hot-new {
                    width: 100% !important;

                    .img-container {
                        width: 80% !important;
                        height: auto !important;

                    }

                    .text {
                        width: 90% !important;
                    }

                    .time {
                        width: 90% !important;
                    }
                }
            }
        }

    }

    .hot-new-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: .4739rem 0;



        li {
            .hot-new {
                width: 6.6351rem;
                min-height: 7.109rem;
                background: rgba(0, 0, 0, .6);
                margin-right: 30px;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;

                &:hover .img-container img {
                    transform: scale(1.2);
                }

                .img-container {
                    width: 380px;
                    height: 190px;
                    margin-top: 18px;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: all 0.5s;
                    }

                }

                .text {
                    margin-top: 20px;
                    width: 386px;

                    p {
                        text-indent: 6px;
                        color: #fefefe;
                        font-size: 24px;
                        font-weight: 500;
                    }
                }

                .time {
                    width: 388px;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 110px;


                    span {
                        color: #808080;
                        font-size: 16px;
                    }

                    h6 {
                        color: #ffc000;
                        font-size: 16px;
                    }
                }
            }

        }
    }
}
</style>