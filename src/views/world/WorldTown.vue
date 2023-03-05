<template>
    <MyHeader></MyHeader>
    <div class="main">
        <div class="introduce ">
            <div class="introduce_text">
                <h2>提瓦特大陆游记精选</h2>
                <p>这里刊登了由冒险家协会提供的提瓦特大陆游记精选。</p>
                <p>我们根据提瓦特近期的热门旅行目的地，甄选出一系列作品，为各位旅行者提供全面的旅行规划参考。</p>
                <p>至于没有出行计划的提瓦特居民们，就把它当作您下午茶时间的闲暇读物吧！</p>
            </div>
            <div class="introduce_city">
                <div class="city_list">
                    <ul class="list">
                        <li class="li">
                            <div class="city">
                                <img class="city_img"
                                    src="	https://uploadstatic.mihoyo.com/contentweb/20200211/2020021114223098620.png">
                            </div>
                            <p>蒙德城</p>
                        </li>
                        <li class="li">

                            <div class="city">
                                <img class="city_img"
                                    src="https://uploadstatic.mihoyo.com/contentweb/20200221/2020022117021954100.png">
                            </div>
                            <p>璃月港</p>
                        </li>
                        <li class="li">

                            <div class="city">
                                <img class="city_img"
                                    src="https://uploadstatic.mihoyo.com/contentweb/20211029/2021102917244253822.png">
                            </div>
                            <p>稻妻城</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/firstpage/MyHeader.vue';

export default {
    components: { MyHeader }
}
</script>

<style lang="scss" scoped>
.main {
    position: relative;
    background-image: url('https://ys.mihoyo.com/main/_nuxt/img/b57475e.jpg');
    background-size: cover;
    background-position: center top;
    min-height: 100vh;



    @media screen and (max-width:768px) {
        &::before {
            display: none !important;
        }

        .list {
            margin-left: 0 !important;
        }

        .introduce_text {
            margin-left: 0 !important;
            padding: 0 .316rem;

            h2 {
                font-size: .4739rem !important;
            }

        }

    }

    &::before {
        content: "";
        width: 35%;
        height: 11.6904rem;
        background: url('https://ys.mihoyo.com/main/_nuxt/img/3e7d5fe.png') center right/cover no-repeat;
        position: absolute;
        z-index: 0;
        left: 54%;
        top: 1.2638rem;
    }

}

.introduce_text {
    color: white;
    max-width: 700px;
    margin-left: 11%;
    padding-top: 8%;
    margin-bottom: .7899rem;
}

.introduce_text>h2 {
    font-size: .7899rem;
    font-weight: 400;
    padding-left: 90px;
    min-height: 1.4218rem;
    background-image: url(@/assets/world/tubiao.png);
    background-repeat: no-repeat;
    background-size: 80px 80px;
    margin-bottom: 7%;
}

.introduce_text>p {
    width: 100%;
    font-size: .2528rem;
    line-height: 25px;
    margin-bottom: 1%;
}

.introduce_city {
    width: 100%;
}

.city_list {
    padding: .9479rem 0;
    background-image: url(@/assets/world/huisetouming.png);
    width: 100%;
    min-height: 40%;
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    z-index: 2;
}

.list {

    list-style: none;
    display: flex;
    justify-content: center;
    z-index: 2;
    flex-wrap: wrap;
    gap: .4739rem .1264rem;

}

.li {
    margin-left: 1%;
    position: relative;

    &::before {
        content: url(@/assets/world/city_img_before.png);
        position: absolute;
        left: 47%;
        top: -7%;
        z-index: 2;
    }
}

.city:hover img {
    transform: scale(1.1);
}

.city {
    overflow: hidden;
    border: solid white;

    img {
        transition: all 0.4s ease-in-out;
    }
}

.li>p {
    background-image: url(@/assets/world/city_p.png);
    width: 276px;
    min-height: 40px;
    font-size: 18px;
    line-height: 40px;
    color: #f4d8a8;
    text-align: center;
    margin: 20px auto 0;
}
</style>