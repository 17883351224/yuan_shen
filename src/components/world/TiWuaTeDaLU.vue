<template>
    <div class="main">
        <div class="ti-wa-te">
            <div class="world-name">
                <img src="@/assets/world/tiwate_name.png" alt="name">
            </div>
            <div class="world-bar">
                <img src="@/assets/world/bar.png" alt="bar">
            </div>
            <div class="text-info">
                <p>
                    这里是七种元素交汇的幻想世界「提瓦特」。
                    <br>
                    在遥远的过去，人们藉由对神灵的信仰，获赐了驱动元素的力量，得以在荒野中筑起家园。
                    <br>
                    五百年前，古国的覆灭却使得天地变异…
                    <br>
                    如今，席卷大陆的灾难已经停息，和平却仍未如期光临。
                </p>
            </div>
            <div class="travel-notes" @click="gotoTown">
                前往游记精选
            </div>

            <div class="next" @click="changeIndex(1)">
                <div class="img-container">

                </div>

            </div>

        </div>
    </div>
</template>

<script>
import { inject } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const changeIndex = inject('changeIndex')
        const _router = useRouter()
        const gotoTown = () => {
            _router.push({
                name: 'worldTown'
            })
        }

        return {
            changeIndex,
            gotoTown
        }
    }


}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: url(@/assets/world/tiwatei.png) center center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;

    .ti-wa-te {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .world-name {
            margin-bottom: 18px;

            img {
                width: 292px;
                height: 72px;
                object-fit: cover;
            }
        }

        .world-bar {
            margin-bottom: 18px;

            img {
                width: 372px;
                height: 12px;

            }
        }

        .text-info {
            margin-bottom: 15px;

            p {
                font-size: 17px;
                letter-spacing: 0.5px;
                color: #fff;
                text-align: center;
                line-height: 32px;
            }
        }

        .travel-notes {
            height: 34px;
            line-height: 34px;
            font-family: PingFang SC;
            font-size: 20px;
            color: #fff;
            width: 500px;
            background: linear-gradient(to right, transparent, rgba(0, 0, 255, .1), transparent);
            text-align: center;
            margin-bottom: 110px;
            cursor: pointer;
            user-select: none;
        }

        .next {
            .img-container {
                width: 52px;
                height: 52px;
                background: url(@/assets/world/logo.png) center center/cover no-repeat;
                position: relative;
                z-index: 10;

                cursor: pointer;


                &::before {
                    $border: 11.6px;
                    content: "";
                    width: 0;
                    height: 0;
                    position: absolute;
                    border-top: $border solid #fff;
                    border-right: $border solid transparent;
                    border-left: $border solid transparent;
                    border-bottom: $border solid transparent;
                    left: calc(50% - $border);
                    bottom: -$border+8;
                    z-index: 22;
                    animation: move 2s linear infinite;
                }

                &::after {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    z-index: 5;
                    background: url(@/assets/world/animation.png) center center/cover no-repeat;

                    animation: opacity 2s linear infinite;
                }
            }
        }
    }

    @keyframes move {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(-6px);
        }

        100% {
            transform: translateY(0);
        }

    }

    @keyframes opacity {
        0% {
            opacity: 0;
            transform: scale(1);
        }

        50% {
            opacity: 1;
            transform: scale(2);
        }

        100% {
            opacity: 0;
            transform: scale(1);
        }

    }

}
</style>