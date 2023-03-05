<template>
    <div class="error">
        <div class="error-404">
            <img src="@/assets/error/404.png" alt="404">
        </div>
        <div class="text">
            <h6>这个页面找不到了</h6>
            <p>
                可能跟温迪一起出游了吧
                <br>
                可能登上天空岛也说不一定...
                <br>
                可能去了很远的地方...
            </p>
        </div>
        <div class="lingxing">
            <img src="@/assets/error/logo.png" alt="">
        </div>
        <div class="goback" @click="goback">
            <span>返回首页</span>
            <svg t="1667908399794" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="2536" width="32" height="32">
                <path
                    d="M516.266667 494.933333l-192 192-29.866667-29.866666 162.133333-162.133334-162.133333-162.133333 29.866667-29.866667 192 192z m256 0l-192 192-29.866667-29.866666 162.133333-162.133334-162.133333-162.133333 29.866667-29.866667 192 192z"
                    fill="#ffffff" p-id="2537"></path>
            </svg>
        </div>
        <div class="huli">
            <img src="@/assets/error/狐狸.png" alt="狐狸">
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const _router = useRouter()
const goback = () => {
    _router.push({
        name: 'home'
    })
}

</script>

<style lang="scss" scoped>
.error {
    width: 100%;
    height: 100vh;
    background-color: #393b40;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    justify-content: center;
    box-sizing: border-box;
    border: 38px dotted orange;
    border-image: url(@/assets/error/border.png) 38 round;

    .error-404 {
        max-width: 5.0711rem;
        width: 70%;
        margin-bottom: .4107rem;

        img {
            width: 100%;
        }
    }

    .text {
        margin-bottom: .316rem;

        h6 {
            font-size: .5055rem;
            font-weight: 500;
            letter-spacing: 2px;

        }

        p {
            margin-top: .4107rem;
            font-size: .2528rem;
            text-align: center;
            line-height: .4739rem;
            letter-spacing: .0158rem;
            color: #8c93a3;

        }
    }

    .goback {
        display: flex;
        align-items: center;
        text-align: center;
        opacity: .8;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }

        svg {
            width: .6319rem;
            height: .6319rem;

        }

        span {
            font-size: .3576rem;
            font-weight: 500;
        }
    }

    .lingxing {
        width: .6rem;
        margin-bottom: .316rem;

        img {
            width: 100%;
        }
    }

    .huli {
        max-width: 5.5292rem;
        width: 80%;
        display: none;

        @media screen and (max-width:768px) {
            & {
                display: block;
            }
        }

        img {
            width: 100%;
        }
    }

}
</style>