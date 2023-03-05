<template>
    <div class="mask" @wheel.stop>
        <div class="world-detail">
            <div class="world-name">
                <div class="name"><span>{{ cityInfo.cityName }}</span></div>
                <div class="close" @click="changeDetailShow(false)">
                    <svg t="1665409940926" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="3338" width="32" height="32">
                        <path
                            d="M727 676.05a36.11 36.11 0 0 1 0 50.95 36.11 36.11 0 0 1-50.91 0L512 562.91 348 727a36.11 36.11 0 0 1-51 0 36.11 36.11 0 0 1 0-50.91l164-164L297 348a36.11 36.11 0 0 1 0-51 36.11 36.11 0 0 1 51 0l164 164.09 164-164a36.11 36.11 0 0 1 51-0.09 36.11 36.11 0 0 1 0 51L562.91 512z"
                            p-id="3339" fill="#ffffff"></path>
                    </svg>
                </div>
            </div>
            <div class="content">
                <div class="inner" v-for="(item) in cityInfo.sites" :key="item.siteId">
                    <div class="area-name">
                        <span>{{ item.siteName }}</span>
                    </div>
                    <div class="info">
                        <p>{{ item.siteIntroduce }}</p>
                        <img :src="item.siteImage" alt="siteImage">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { inject } from 'vue';


export default {
    props: ['cityInfo'],
    setup() {
        const details = {
            name: '蒙德',
            area: [
                {
                    name: '果酒湖',
                    info: '环绕蒙德城的天然淡水湖泊。\n宽广的湖面和粼粼的波光历经千百年不变，水澈见底，入口清冽甘甜。正是这样的水源成就了蒙德美酒\n的盛名，也让果酒湖成为了蒙德的重要标志之一。',
                    imgSrc: require('@/assets/world/果酒湖.jpg')
                },
                {
                    name: '鹰翔海滩',
                    info: '从风起地往东延伸至海边，鹰翔海滩与誓言岬共同围成三面环海的陆地，环绕着蒙德东面的海湾。\n鉴于海岸线较长且地处浅海位置，经常有蒙德市民前来游玩。偶尔可见苍鹰翱翔于碧浪白沙之上。',
                    imgSrc: require('@/assets/world/鹰翔海滩.jpg')
                },
                {
                    name: '誓言岬',
                    info: '位于蒙德城东南角、风啸山坡边缘的海岬。\n传说曾有一对恋人在此许下誓言，并留下一个感人至深的故事。至今此地仍被认为是恋人的好去处。\n除了观看海上日出日落外，由于地势的落差，在这里也可以轻松望到海湾对面的风起地。',
                    imgSrc: require('@/assets/world/誓言岬.jpg')
                }
            ]
        }
        const changeDetailShow = inject('changeDetailShow')
        return {
            details,
            changeDetailShow
        }
    }


}
</script>

<style lang="scss" scoped>
.mask {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;

    justify-content: center;
    align-items: center;


    .world-detail {
        display: flex;
        flex-direction: column;
        width: 720px;
        height: 100vh;
        box-sizing: border-box;
        padding: 60px 0;

        .world-name {
            display: flex;
            height: 60px;
            line-height: 60px;

            .name {
                width: 636px;
                padding-left: 20px;
                letter-spacing: 0.5px;
                background: rgba(128, 128, 128, 0.1) url(@/assets/world/detail_name_background.png) no-repeat left center/auto 100%;


                span {
                    font-size: 28px;
                    color: #fff;
                }
            }

            .close {
                width: 60px;
                height: 60px;
                text-align: center;
                background: rgba(128, 128, 128, 0.1);
                margin-left: 20px;
                cursor: pointer;


                svg {
                    width: 45px;
                    height: 45px;
                    vertical-align: middle;
                }
            }
        }

        .content {
            width: 100%;
            max-height: 586px;
            overflow-y: auto;
            margin-top: 20px;



            .inner {
                width: 636px;
                margin-bottom: 40px;

                .area-name {
                    font-size: 28px;
                    letter-spacing: 0.5px;
                    color: #fff;
                    margin-top: 10px;
                    height: 66px;
                    width: 636px;
                    position: relative;
                    border-bottom: 3px solid rgba(255, 255, 255, 0.1);

                    &::after {
                        content: "";
                        width: 13%;
                        height: 3px;
                        position: absolute;
                        background-color: #cca574;
                        left: 0;
                        bottom: -3px;

                    }

                }

                .info {
                    width: 100%;
                    margin-top: 25px;

                    P {
                        font-size: 14px;
                        line-height: 28px;
                        letter-spacing: 0.1px;
                        color: #fff;
                        white-space: pre-line;
                    }

                    img {
                        margin-top: 20px;
                        display: inline-block;
                        width: 100%;
                        height: 353px;
                        object-fit: cover;
                    }
                }
            }


        }

    }

    ::-webkit-scrollbar {
        width: 4px;
        background: rgba(128, 128, 128, 0.1);
    }

    ::-webkit-scrollbar-thumb {
        height: 30px;
        width: 4px;
        border-radius: 5px;
        background-color: #BEBCB5;
    }

    &::-webkit-scrollbar-corner {
        background-color: transparent;

    }

}
</style>