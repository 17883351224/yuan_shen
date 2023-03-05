<template>
    <div class="main">
        <div class="more-activity-container">
            <img src="@/assets/home/home6_more_activity.webp" alt="更多活动" />
        </div>
        <div class="activity-container">
            <ul class="activity-list">
                <li class="item" v-for="(p, index) in activityInfo.activityList" :key="index">
                    <div class="img-container">
                        <img :src="index == activityInfo.index ? p.activeSrc : p.logoSrc" alt="logo"
                            @click.stop="changeIndex(index, $event)" />
                        <div class="activity-info" v-show="index == activityInfo.index">
                            <img :src="p.infoSrc" alt="info" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
    setup() {
        const data = reactive({
            activityInfo: {
                index: 0,
                activityList: [
                    {
                        logoSrc: require("@/assets/home/home6_diaozhuotongxin.webp"),
                        activeSrc: require("@/assets/home/home6_diaozhuotongxin_active.webp"),
                        infoSrc: require("@/assets/home/home6_diaozhuotongxin_background.webp"),
                    },
                    {
                        logoSrc: require("@/assets/home/home6_mibaomizong.webp"),
                        activeSrc: require("@/assets/home/home6_mibaomizong_active.webp"),
                        infoSrc: require("@/assets/home/home6_mibaomizong_background.webp"),
                    },
                    {
                        logoSrc: require("@/assets/home/home6_pianjishenyan.webp"),
                        activeSrc: require("@/assets/home/home6_pianjishenyan_active.webp"),
                        infoSrc: require("@/assets/home/home6_pianjishenyan_background.webp"),
                    },
                    {
                        logoSrc: require("@/assets/home/home6_yishendelunzheng.webp"),
                        activeSrc: require("@/assets/home/home6_yishendelunzheng_active.webp"),
                        infoSrc: require("@/assets/home/home6_yishendelunzheng_background.webp"),
                    },
                ],
            },
        });
        const changeIndex = (index, e) => {
            data.activityInfo.index = index;
        };

        return {
            ...toRefs(data),
            changeIndex,
        };
    },
};
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    position: relative;
    min-width: 1400px;
    background: url("@/assets/home/home6_background.webp") center center / cover no-repeat;

    .more-activity-container {
        position: absolute;
        right: 12%;

        >img {
            width: 109px;
            height: 407px;
        }
    }

    .activity-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        .activity-list {
            list-style: none;
            display: flex;

            .item {
                .img-container {
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;

                    >img {
                        width: 117px;
                        height: 510px;
                    }

                    .activity-info {
                        img {
                            display: block;
                            width: 410px;
                            height: 316px;
                        }
                    }
                }
            }
        }
    }
}
</style>
