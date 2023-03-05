<template>
    <div class="my-creation">
        <header>
            <span></span>
            <span>我的创作</span>
        </header>
        <div class="creation-list-container">
            <div class="type">
                <span>COS:</span>
            </div>
            <ul class="list">
                <li class="item" v-for="i in 10">
                    <div class="img-container">
                        <img src="https://upload-bbs.mihoyo.com/upload/2022/10/24/283837710/be8455e09b0032b6d9315c8537382526_1428196254999928034.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
                            alt="">
                    </div>
                    <div class="introduce">加强刻晴!!</div>
                    <div class="user-info">
                        <img src="http://127.0.0.1:5000/ys/resource/image/avatar/ef5a238c-2278-46b5-98f5-967d2dfc4841.jpg"
                            alt="avatar" class="avatar">
                        <span>逝雪深，笑意浅逝雪深，笑意浅</span>
                    </div>
                </li>
            </ul>
            <div class="type">
                <span>同人:</span>
            </div>
            <ul class="list">
                <li class="item" v-for="i in 10">
                    <div class="img-container">
                        <img src="https://upload-bbs.mihoyo.com/upload/2022/10/24/283837710/be8455e09b0032b6d9315c8537382526_1428196254999928034.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg"
                            alt="">
                    </div>
                    <div class="introduce">加强刻晴!!</div>
                    <div class="user-info">
                        <img src="http://127.0.0.1:5000/ys/resource/image/avatar/ef5a238c-2278-46b5-98f5-967d2dfc4841.jpg"
                            alt="avatar" class="avatar">
                        <span>逝雪深，笑意浅</span>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.my-creation {
    header {
        height: .8531rem;
        display: flex;
        align-items: center;
        padding-left: .316rem;
        border: .0158rem solid #eee;

        span {
            font-size: .2528rem;
            color: #00a1d6;

            &:nth-child(1) {
                display: inline-block;
                height: .316rem;
                width: .0632rem;
                background: #00a1d6;
                border-radius: .0474rem;
                margin-right: .2528rem;
            }
        }
    }

    .creation-list-container {
        background-color: #F7F8FC;
        padding-left: .2528rem;

        .type {
            display: flex;
            align-items: center;
            gap: .158rem .316rem;
            padding-left: 2%;
            height: .7899rem;
            line-height: .7899rem;

            span {
                font-size: .2844rem;
                font-weight: 700;
                // color: gray;
                background: url(https://upload-bbs.mihoyo.com/upload/2022/10/24/283837710/be8455e09b0032b6d9315c8537382526_1428196254999928034.jpg?x-oss-process=image/resize,s_600/quality,q_80/auto-orient,0/interlace,1/format,jpg);
                background-clip: text;
                color: transparent;
                animation: move 10s linear infinite;
            }

            @keyframes move {
                0% {
                    background-position: 0%;
                }

                100% {
                    background-position: 100%;
                }

            }
        }

        .list {
            list-style: none;
            display: flex;
            gap: .316rem .316rem;
            flex-wrap: wrap;
            align-content: flex-start;



            .item {
                width: 3.6335rem;
                background-color: #fff;
                border-radius: .1264rem;
                overflow: hidden;
                cursor: pointer;
                box-shadow: .0316rem .0316rem .079rem rgba(100, 100, 100, .1),
                    -.0316rem -.0316rem .079rem rgba(100, 100, 100, .1);

                .introduce {
                    font-size: .25rem;
                    height: .316rem;
                    color: gray;
                    line-height: .316rem;
                    overflow: hidden;
                    padding-left: .1264rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }

                &:hover .img-container img {
                    transform: scale(1.25);
                }

                .img-container {
                    width: 100%;
                    height: 2.6856rem;
                    border-radius: .0948rem;
                    overflow: hidden;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: all 0.4s ease-in-out;
                    }
                }

                .user-info {
                    height: .6319rem;
                    display: flex;
                    align-items: center;
                    gap: 0 .2528rem;
                    padding-left: .1264rem;


                    img {
                        width: .5055rem;
                        height: .5055rem;
                        object-fit: cover;
                        border-radius: 50%;
                    }

                    span {
                        font-size: .237rem;
                        color: gray;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }

}
</style>