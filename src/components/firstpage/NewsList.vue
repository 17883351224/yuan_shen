<template>
    <div class="news-list" ref="newsListObj">
        <div class="title">
            <h3>新闻资讯</h3>
        </div>
        <div class="news-container">
            <div class="left swiper">
                <n-carousel trigger="hover" autoplay>
                    <img src="@/assets/firstpage/news_list1.jpg" alt="">
                    <img src="@/assets/firstpage/news_list2.jpg" alt="">
                    <img src="@/assets/firstpage/news_list3.jpg" alt="">
                    <img src="@/assets/firstpage/news_list4.jpg" alt="">
                </n-carousel>
            </div>
            <div class="right list">
                <ul class="top">
                    <li v-for="(item, index) in topClass" :key="index" @click="changeNewsType(index, item.type)">
                        {{ item.title }}</li>

                    <li class="sliding-block"></li>
                </ul>
                <ul class="list-body">
                    <li v-for="(item) in newsList" :key="item.newsId" @click="getNewsDetail(item.newsId)">
                        <p>{{ item.newsName }}</p> <span>{{ item.publishTime }}</span>
                    </li>
                </ul>
                <div class="more">
                    <span @click="getmoreNews">+</span>
                    <span @click="getmoreNews">查看全部资讯</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { ref, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const newsListObj = ref(null)
const topClass = [
    {
        title: '最新',
        type: 'news'
    },
    {
        title: '新闻',
        type: 'news'
    },
    {
        title: '活动',
        type: 'activity'


    },
    {
        title: '公告',
        type: 'notice'

    }
];

let clickIndex = ref(0)
const selectedType = ref('news')
const _store = useStore()
const _router = useRouter()
const newsList = computed(() => _store.state.news.newsInformation[selectedType.value].slice(0, 5))
watch(() => clickIndex.value, (newValue) => {
    newsListObj.value.querySelector('.sliding-block').style.transform = `translateX(${newValue * 95}px)`
})
onMounted(() => {
    _store.dispatch('news/getNewsByType', 'news')
})
const changeNewsType = (index, type) => {
    clickIndex.value = index
    selectedType.value = type
    if (_store.state.news.newsInformation[type].length == 0) {
        _store.dispatch('news/getNewsByType', type)
    }

}

const getmoreNews = () => {
    _router.push({
        name: 'newsNews'
    })
}
const getNewsDetail = (newsId) => {
    _router.push({
        name: 'newsDetail',
        query: {
            newsId: newsId,
            type: selectedType.value
        }
    })
}


</script>

<style lang="scss" scoped>
@media screen and (max-width:768px) {
    .title {

        &::before,
        &::after {
            display: none;
        }
    }

    .news-container {
        width: 97% !important;



        .left,
        .right {
            width: 100% !important;

        }
    }



}

.news-list {
    width: 100%;
    min-height: 100vh;
    background: url(@/assets/firstpage/news_list_background.jpg) center center / cover no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .title {
        position: relative;
        width: 70%;

        h3 {
            font-size: 50px;
            font-weight: 400;
            text-align: center;
            color: #fff;
        }

        &::before {
            content: '';
            position: absolute;
            top: 50%;
            width: 385px;
            height: 14px;
            background: url(@/assets/firstpage/news_left.png) no-repeat right center/cover;
        }

        &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            width: 385px;
            height: 14px;
            transform: rotateZ(180deg);
            background: url(@/assets/firstpage/news_list_right.png) no-repeat right center/cover;
        }
    }

    .news-container {
        width: 86%;
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .left,
        .right {
            width: 50%;
            box-sizing: border-box;
            margin-bottom: .4739rem;
        }

        .swiper {
            height: 400px;

            :deep(img) {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        .list {
            background: rgba(38, 18, 12, 0.62);
            padding: 30px 30px 0 30px;

            ul {
                list-style: none;

            }

            .top {
                display: flex;
                align-items: center;
                height: 50px;
                border-bottom: 3px solid rgba(255, 255, 255, 0.1);
                position: relative;

                li {
                    color: #fff;
                    font-size: 18px;
                    width: 55px;
                    text-align: center;
                    letter-spacing: 1px;
                    margin-right: 40px;
                    height: 40px;
                    line-height: 40px;
                    cursor: pointer;
                }

                .sliding-block {
                    position: absolute;
                    height: 3px;
                    background-color: #ffd49f;
                    left: 0;
                    bottom: -3px;
                    transition: all 0.2s ease-in;
                }
            }

            .list-body {
                li {
                    display: flex;
                    height: 50px;
                    align-items: center;
                    border-bottom: 2px solid rgba(255, 255, 255, 0.1);

                    &:hover {
                        background: rgba(255, 212, 159, 0.06);
                        cursor: pointer;
                    }

                    P {
                        font-size: 16px;
                        letter-spacing: 0.2px;
                        color: #fff;
                        flex: 1;
                    }

                    span {
                        font-size: 16px;
                        letter-spacing: 0.5px;
                        color: #ccc;
                    }
                }
            }

            .more {
                display: flex;
                align-items: center;
                margin-top: 10px;
                justify-content: right;
                font-size: 16px;

                span {
                    &:first-of-type {
                        color: rgba(255, 212, 159, 0.75);
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        text-align: center;
                        font-size: 18px;
                        font-weight: 600;
                        margin-right: 8px;
                        border: 1px solid rgba(255, 212, 159, 0.75);
                        cursor: pointer;
                    }

                    &:last-of-type {
                        font-size: 18px;
                        letter-spacing: 1px;
                        color: rgba(255, 255, 255, 0.75);
                        cursor: pointer;

                        &:hover {
                            color: rgba(255, 212, 159, 0.75);
                        }
                    }
                }
            }
        }

    }
}
</style>