<template>
    <div class="best-some-person">
        <div class="logo-container">
            <img src="@/assets/role/精选同人.png" alt="精选同人">
        </div>
        <div class="cos-list-container">
            <div class="inner">
                <div class="more-creation">
                    <button @click="gotoCreation">更多创作</button>
                </div>

                <ul class="list">
                    <p v-if="creationList.length == 0">嘤嘤嘤嘤嘤嘤……我没有人疼<br>原神大大赏赐我一张同人绘吧！ → . →<span
                            @click="gotoCreationUpload">我来投稿</span></p>
                    <li class="item" v-for="item in creationList.slice(0, 4)" :key="item.id"
                        @click="gotoCreationDetail(item.id, item.type)">
                        <div class="img-cover">
                            <img v-lazy="item.coverUrl" alt="coverImg">
                        </div>
                        <div class="introudce">
                            <p>{{ item.title }}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
const _store = useStore()
const creationList = computed(() => _store.state.role.roleDetail.creations || [])
const _router = useRouter()
const gotoCreationUpload = () => {
    _router.push({
        name: 'creationUpload'
    })
}
const gotoCreation = () => {
    _router.push({
        name: 'cosplay'
    })
}
const gotoCreationDetail = (creationId, type) => {
    type = type == 'COS' ? 'cos' : 'someperson'
    _router.push({
        name: 'creationDetail',
        query: {
            type,
            creationId
        }
    })
}
</script>

<style lang="scss" scoped>
.best-some-person {
    width: 100%;
    margin-top: 1.0427rem;

    @media screen and (max-width:768px) {
        .logo-container {
            height: 1.2638rem !important;
        }

    }

    @media screen and (max-width:1200px) {
        .logo-container {
            height: 1.8838rem !important;
        }

    }

    .logo-container {
        height: 3.0016rem;
        margin-left: 9.5%;

        img {
            height: 100%;
        }
    }

    .cos-list-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: .7899rem;

        .inner {
            width: 74%;


            .more-creation {
                width: 100%;
                display: flex;
                justify-content: flex-end;

                button {
                    width: 1.5798rem;
                    height: .4107rem;
                    text-align: center;
                    color: gray;
                    border: 1px solid gray;
                    border-radius: .05rem;
                    font-size: .2212rem;
                    cursor: pointer;
                    margin-bottom: .4739rem;
                    background-color: whitesmoke;

                    &:hover {
                        background-color: wheat;

                    }
                }
            }

            .list {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                align-content: center;
                gap: .5687rem;


                >p {
                    font-size: .3476rem;
                    line-height: .6319rem;
                    text-align: center;
                    letter-spacing: .0158rem;
                    color: #333;
                    margin: .4739rem 0;
                    margin: 0 auto;

                    span {
                        font-size: .3476rem;
                        color: #ff8b88;
                        letter-spacing: .0158rem;
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }

                .item {
                    cursor: pointer;
                    border-radius: 6px;
                    width: 3.9494rem;
                    box-shadow: .0316rem .0316rem .0632rem rgba(100, 100, 100, 0.1),
                        -.0316rem -.0316rem .0632rem rgba(100, 100, 100, 0.1);

                    .img-cover {
                        width: 100%;
                        height: 2.9068rem;
                        border-radius: .0948rem;
                        overflow: hidden;

                        &:hover {
                            img {
                                transform: scale(1.2);
                            }
                        }

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            transition: all 0.4s ease-in-out;
                        }
                    }

                    .introudce {
                        padding-top: .0948rem;
                        padding-left: .0948rem;

                        p {

                            font-size: .237rem;
                            color: gray;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                        }

                    }

                }
            }
        }



    }

}
</style>