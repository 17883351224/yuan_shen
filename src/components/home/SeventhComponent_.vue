<template>
    <div class="main">
        <div class="geme-feature-logo">
            <img src="@/assets/home/home7_youxitese.webp" alt="游戏特色">
        </div>
        <div class="game-feature-container" ref="swiperContainer">
            <div class="game-feature">
                <ul class="game-feature-list">
                    <li class="item" v-for="(g, index) in gameFeatureList" :key="index">
                        <img :src="g.imgSrc" alt="游戏特色">
                    </li>
                </ul>
                <div class="btn before">
                    <img src="@/assets/home/home7_left.webp" alt="上一页">
                </div>
                <div class="btn next">
                    <img src="@/assets/home/home7_right.webp" alt="下一页">
                </div>
                <div class="indicator-container">
                    <ul>
                        <li v-for="(p, index) in gameFeatureList.length">
                            <div class="indicator" :key="index" :data-id="index"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="official-logo">
            <ul>
                <li v-for="(p, index) in officialLogoList" :key="index">
                    <a :href="p.href" target="_blank"><img :src="p.imgSrc" alt="官方入口"></a>
                </li>

            </ul>
        </div>

    </div>

</template>

<script>
import { reactive, toRefs, ref, onMounted } from "vue"
import { useSwiper } from "@/hooks/swiper/useSwiper";
export default {
    setup() {
        const gameFeatureInfo = reactive({
            index: 0,
            gameFeatureList: [
                {
                    imgSrc: require("@/assets/home/home7_qiguowangxiang_swiper.webp")
                },
                {
                    imgSrc: require("@/assets/home/home7_qinduomeigui_swiper.webp")
                },
                {
                    imgSrc: require("@/assets/home/home7_shenmingdeshixian_swiper.webp")
                },
                {
                    imgSrc: require("@/assets/home/home7_sijiebuhui_swiper.webp")
                },
                {
                    imgSrc: require("@/assets/home/home7_yuanduchongtian_swiper.webp")
                },
            ]

        })
        const officialLogoList = reactive([
            {
                imgSrc: require('@/assets/home/home7_weibo.webp'),
                href: "https://weibo.com/ysmihoyo"
            },
            {
                imgSrc: require('@/assets/home/home7_weixin.webp'),
                href: ""
            },
            {
                imgSrc: require('@/assets/home/home7_bilibili.webp'),
                href: "https://space.bilibili.com/401742377/"
            },
            {
                imgSrc: require('@/assets/home/home7_shequ.webp'),
                href: "https://bbs.mihoyo.com/ys/"
            },
        ]

        )
        let swiperContainer = ref(null)
        let btn = ref(null)
        onMounted(() => {
            let bottons = swiperContainer.value.querySelectorAll(".btn")
            let swiperList = swiperContainer.value.querySelectorAll(".item")
            let indicatorList = swiperContainer.value.querySelectorAll(".indicator")
            console.log(swiperList, bottons, indicatorList)
            let swiper = useSwiper(swiperList, bottons, indicatorList, [0, 145, 295], 1.18, 4000, ["#294547", "#C0C3A9"], 0.8, '90%')
        })


        return {
            ...toRefs(gameFeatureInfo),
            swiperContainer,
            officialLogoList
        }
    }
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    background: url("@/assets/home/home7_background.webp") center center / cover no-repeat;
    box-sizing: border-box;
    position: relative;

    .geme-feature-logo {
        position: absolute;

        right: 11%;

        img {
            width: 102px;
            height: 379px;
        }
    }

    .game-feature {
        position: absolute;
        width: 840px;
        height: 304px;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, .3);
        padding: 6px;


        .game-feature-list {
            list-style: none;
            position: relative;
            width: 100%;
            height: 100%;


            li {
                display: inline-block;
                position: absolute;
                left: 0;
                transition: all 0.4s ease-in-out;

                &:hover {
                    cursor: pointer;
                }

                img {
                    width: 540px;
                    height: 304px;
                }
            }
        }

        .btn {
            position: absolute;
            z-index: 50;

            &:hover {
                cursor: pointer;
            }

            img {
                width: 98px;
                height: 97px;
            }
        }

        .before {
            left: -5px;
            top: 50%;
            transform: translateY(-50%);

            &:hover>img {
                content: url("@/assets/home/home7_left_active.webp");
            }
        }

        .next {
            right: 0;
            top: 50%;
            transform: translateY(-50%);

            &:hover>img {
                content: url("@/assets/home/home7_right_active.webp");
            }
        }

        .indicator-container {
            ul {
                position: absolute;
                list-style: none;
                display: flex;
                align-items: center;
                left: 50%;
                bottom: -80px;
                transform: translateX(-50%);

                li {
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    padding: 3px;
                    margin-right: 45px;
                    box-sizing: border-box;
                    border: 1px solid #C0C3A9;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    &:hover {
                        cursor: pointer;
                    }

                    .indicator {
                        width: 9px;
                        height: 9px;
                        border-radius: 50%;
                        color: #294547;
                    }
                }
            }
        }

    }

    .official-logo {
        position: absolute;

        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);

        ul {
            display: flex;
            list-style: none;

            li {
                margin-right: 50px;

                &:hover {
                    cursor: pointer;
                }

                img {
                    width: 65px;
                    height: 90px;
                    object-fit: cover;
                }

            }
        }
    }
}
</style>


