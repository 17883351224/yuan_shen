<template>
    <div class="content-list">
        <div class="content">
            <div class="content-item" v-for="item in postList" :key="item.postId" @click="getPostDetail(item.postId)">
                <div class="hover">
                    <div class="content-head">
                        <div class="avater"><img v-lazy="item.user?.userAvatar" alt="avatar">
                        </div>
                        <span class="nick-name">{{ item.user?.userName }}</span>
                        <span class="level" :style="`background-color:${useUserLevelColor(item.user?.userLevel)}`">
                            Lv.{{ item.user?.userLevel }}</span>
                        <span v-if="item.user.userAccount == '17883351224'">官方</span>
                        <span class="content-class">原神</span>
                        <span class="focus">关注</span>
                    </div>
                    <div class="title-container">
                        <p class="title">{{ item.postTitle }}</p>
                        <p class="info">{{ item.introduce }}</p>
                    </div>
                    <ul class="photo-container">
                        <li v-for="imgSrc in JSON.parse(item.postCover || '[]')"><img v-lazy="imgSrc" alt="cover"></li>
                    </ul>
                </div>

                <div class="tail">
                    <ul class="tag">
                        <li v-for="tag in JSON.parse(item.postTopics || '[]')">{{ tag }}</li>
                    </ul>
                    <ul class="record">
                        <li title="浏览量">
                            <svg t="1665484574718" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="11108" width="32" height="32">
                                <path
                                    d="M759.600191 263.253706c-14.437827-9.465582-33.785477-5.429663-43.25106 8.987698-9.455349 14.427594-5.429663 33.795711 8.987698 43.25106 113.344464 74.322729 172.030052 183.955662 171.714873 221.87939-0.620124 74.14979-152.803151 288.444435-385.216455 288.444435-244.969271 0-385.211339-226.475058-385.211339-288.180422 0-38.473243 58.665121-148.675134 170.804131-222.134193 14.437827-9.455349 18.463514-28.814256 9.018398-43.240827-9.455349-14.427594-28.814256-18.473747-43.240827-9.018398C144.135748 341.236801 64.155159 468.094024 64.155159 537.637913c0 101.133352 178.419576 350.648149 447.679066 350.648149 272.125771 0 446.809255-246.372224 447.684182-350.383112C960.097598 468.957695 879.899044 342.141404 759.600191 263.253706z"
                                    p-id="11109" fill="#bfbfbf"></path>
                                <path
                                    d="M389.948223 136.356574c-17.253966 0-31.233352 13.980409-31.233352 31.233352l0 30.470989c0 17.253966 13.980409 31.233352 31.233352 31.233352s31.233352-13.980409 31.233352-31.233352l0-30.470989C421.182598 150.336984 407.202189 136.356574 389.948223 136.356574z"
                                    p-id="11110" fill="#bfbfbf"></path>
                                <path
                                    d="M633.728412 136.356574c-17.253966 0-31.233352 13.980409-31.233352 31.233352l0 30.470989c0 17.253966 13.980409 31.233352 31.233352 31.233352s31.233352-13.980409 31.233352-31.233352l0-30.470989C664.961764 150.336984 650.982378 136.356574 633.728412 136.356574z"
                                    p-id="11111" fill="#bfbfbf"></path>
                                <path
                                    d="M511.524163 337.555969c43.963281 0 75.105558-30.308283 86.583984-48.223305 9.222035-14.396895 5.042853-33.348526-9.242502-42.753733-14.275121-9.42465-33.57263-5.409197-43.159986 8.744151-0.132006 0.203638-13.614066 19.765159-34.18252 19.765159-19.989263 0-32.43369-18.117636-33.267685-19.378349-9.181103-14.407128-28.285207-18.819624-42.834574-9.750061-14.650675 9.099239-19.155269 28.356838-10.044774 43.007513C436.591543 307.014372 467.347011 337.555969 511.524163 337.555969z"
                                    p-id="11112" fill="#bfbfbf"></path>
                                <path
                                    d="M511.838318 733.499743c99.893104 0 181.170223-81.277118 181.170223-181.170223s-81.277118-181.170223-181.170223-181.170223-181.170223 81.277118-181.170223 181.170223S411.945213 733.499743 511.838318 733.499743zM511.838318 433.627025c65.456804 0 118.702496 53.245691 118.702496 118.702496s-53.245691 118.702496-118.702496 118.702496-118.702496-53.245691-118.702496-118.702496S446.381513 433.627025 511.838318 433.627025z"
                                    p-id="11113" fill="#bfbfbf"></path>
                            </svg><span>{{ item.viewsTotal }}</span>
                        </li>

                        <li title="评论数">
                            <svg t="1665483308194" class="icon" viewBox="0 0 1071 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="3666" width="32" height="32">
                                <path
                                    d="M395.701 434.549c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.043-47.759-47.759 0-25.716 22.042-47.759 47.759-47.759 29.391 0 47.759 22.043 47.759 47.759v0zM943.095 408.833c0-198.385-183.69-360.032-411.465-360.032-231.449 0-415.138 161.647-415.138 360.032 0 117.562 66.129 227.775 176.341 293.903v113.888c0 11.021 7.348 18.369 14.694 22.042 0 0 3.674 0 7.348 0 7.348 0 11.021 0 14.694-3.674l51.434-33.065c0 0 0 0 3.674-3.674l58.78-36.739c29.391 3.674 58.78 7.348 88.171 7.348 227.775 0 411.465-161.647 411.465-360.032v0zM325.898 673.346c-102.865-58.78-165.321-157.972-165.321-264.513 0-172.669 165.321-315.946 371.053-315.946 202.058 0 367.379 143.278 367.379 315.946 0 172.669-165.321 315.946-367.379 315.946-29.391 0-58.78-3.674-88.171-7.348-7.348-3.674-14.694 0-18.369 0l-69.801 47.759c0 0 0 0 0 0l-18.369 11.021v-84.497c0-7.348-3.674-14.694-11.021-18.369v0zM586.737 423.53c0 25.716-22.042 47.759-47.759 47.759s-47.759-22.042-47.759-47.759c0-29.391 22.042-47.759 47.759-47.759 25.716 0 47.759 18.369 47.759 47.759v0zM770.428 423.53c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.042-47.759-47.759 0-29.391 22.042-47.759 47.759-47.759 29.391 0 47.759 18.369 47.759 47.759v0z"
                                    p-id="3667" fill="#cdcdcd"></path>
                            </svg>
                            <span>{{ item.commentTotal }}</span>
                        </li>

                        <li title="点赞量">
                            <svg t="1665483863445" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="9459" width="32" height="32">
                                <path
                                    d="M939.358251 423.424662c-23.01825-37.252439-62.924121-60.779272-107.019409-63.209624-2.755764-0.38681-5.510504-0.579191-8.347109-0.579191l-152.202471-0.121773c6.649444-28.975938 10.015098-58.653865 10.015098-88.657202 0-28.223808-3.213181-57.139372-9.556657-85.952604-0.447185-2.043542-1.098008-4.006244-1.932002-5.866614-15.820314-57.302077-67.37755-96.841605-127.282918-96.841605-72.827679 0-132.081201 59.254545-132.081201 132.081201 0 3.334955 0.132006 6.66991 0.406253 10.015098-2.196015 57.211003-32.108279 109.947088-80.269162 141.363611-14.447037 9.42465-18.524912 28.773324-9.099239 43.220361 9.414417 14.437827 28.752858 18.535145 43.220361 9.099239 65.811892-42.925648 106.429984-115.325585 108.656699-193.684234 0.030699-1.332345-0.010233-2.663666-0.14224-3.996011-0.203638-2.012843-0.304945-4.016477-0.304945-6.019087 0-38.381146 31.233352-69.614497 69.614497-69.614497 32.57593 0 60.474326 22.204721 67.824735 53.997821 0.356111 1.534959 0.823761 3.019777 1.402953 4.453429 4.696975 22.814612 7.076162 45.579081 7.076162 67.743894 0 37.485753-6.222725 74.352405-18.494213 109.592001-3.324722 9.546424-1.819438 20.111037 4.02671 28.345582 5.856381 8.245801 15.332197 13.146415 25.448602 13.156648l193.226816 0.101307c1.423419 0.264013 2.857071 0.426719 4.300956 0.477884 24.116257 0.9967 45.935192 13.614066 58.603723 34.090423 7.838525 12.31242 11.438517 26.800389 10.431583 41.939181-0.080841 0.945535-0.121773 1.911536-0.11154 2.877537 0 0.854461 0.040932 1.697665 0.11154 2.53166 0.010233 0.335644-0.030699 0.661056-0.11154 0.976234-0.101307 0.376577-0.193405 0.772596-0.284479 1.159406l-74.972529 330.391802c-0.914836 1.281179-1.738597 2.6432-2.449795 4.046153-5.937223 11.762905-14.660908 21.48329-25.346271 28.172643-10.746762 6.812149-23.059182 10.614755-35.757388 11.06194-0.854461-0.061398-513.766226-0.224104-513.766226-0.224104-0.467651-0.020466-0.935302-0.030699-1.402953-0.030699 0 0-111.01542 0.172939-112.718201 0.457418-1.932002 0-3.446495-1.50426-3.446495-3.415796l0.299829-416.334173c0-1.901303 1.545192-3.446495 3.01466-3.456728l1.245364 0.121773c1.174756 0.132006 2.653433 0.284479 3.52836 0.193405l83.82822-0.222057 0 339.367221c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352L281.009092 435.350273c0-1.778506 0-8.631588 0-10.411117 0-17.253966-13.979386-30.928407-31.233352-30.928407-1.50426 0-117.547183 0.304945-119.402437 0.304945-36.34272 0-65.913199 29.566386-65.913199 65.893756l-0.299829 416.334173c0 36.337603 29.571503 65.902966 65.913199 65.902966 2.541893 0 111.406323-0.457418 111.406323-0.457418 0.457418 0.020466 0.925069 0.030699 1.382487 0.030699 0 0 511.458671 0.274246 512.505513 0.274246 25.469068 0 50.296523-7.197936 71.647807-20.73116 19.612687-12.281721 35.777855-29.881564 46.839795-50.967812 3.660366-5.622044 6.435573-11.875468 8.256034-18.615986 0.11154-0.416486 0.213871-0.823761 0.304945-1.240247l74.881454-330.340637c1.596358-6.212492 2.257413-12.586666 2.00261-18.992563C960.892707 473.366098 953.948551 446.331371 939.358251 423.424662z"
                                    p-id="9460" fill="#bfbfbf"></path>
                                <path
                                    d="M450.027553 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C481.260905 532.629853 467.281519 518.650467 450.027553 518.650467z"
                                    p-id="9461" fill="#bfbfbf"></path>
                                <path
                                    d="M693.805696 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C725.039048 532.629853 711.058638 518.650467 693.805696 518.650467z"
                                    p-id="9462" fill="#bfbfbf"></path>
                                <path
                                    d="M648.940882 660.09492c-14.304797-9.393951-33.592073-5.398964-43.159986 8.763594-0.132006 0.193405-13.614066 19.754926-34.171264 19.754926-19.98824 0-32.423457-18.09717-33.266661-19.368116-9.17087-14.427594-28.254507-18.809391-42.834574-9.770528-14.650675 9.109472-19.155269 28.366048-10.055007 43.016723 11.214413 18.047028 41.96988 48.588625 86.156242 48.588625 43.962258 0 75.104535-30.318516 86.572728-48.222281C667.404396 688.461991 663.216004 669.500127 648.940882 660.09492z"
                                    p-id="9463" fill="#bfbfbf"></path>
                            </svg>
                            <span>{{ item.likedTotal }}</span>
                        </li>
                    </ul>
                </div>


            </div>
        </div>
        <div class="right-aside">

            <div class="message">
                <div class="title">
                    <h3>官方资讯</h3> <span>更多</span>
                </div>

                <div class="photo">
                    <n-carousel autoplay trigger="hover">
                        <img v-for="item in asideSwiperList.slice(0, 5)" :key="item.postId" class="img"
                            v-lazy="JSON.parse(item.postCover || '[]')[0]" alt="cover">
                    </n-carousel>
                </div>


                <ul class="hot-list">
                    <li v-for="item in asideSwiperList.slice(0, 5)" :key="item.postId"
                        @click="getPostDetail(item.postId)">
                        <div class="cover">
                            <img v-lazy="JSON.parse(item.postCover || '[]')[0]" alt="coverImage">
                        </div>
                        <div class="text">
                            <p>{{ item.postTitle }}</p>
                        </div>
                    </li>
                </ul>
            </div>





        </div>

    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { useUserLevelColor } from '@/hooks/user/useUserInformation';
const _store = useStore()
const postList = computed(() => _store.state.post.postList)
const getPostList = () => {
    if (postList.value.length == 0) {
        _store.dispatch('post/getAllPost')
    }
}
const asideSwiperList = computed(() => {
    return postList.value.filter((p) => p.postCover !== '[]')
})
getPostList()
const _router = useRouter()
const getPostDetail = (postId) => {
    const router = _router.resolve({
        name: 'postDetail',
        query: {
            postId: postId
        }
    })
    window.open(router.href, '_blank')
}
</script>

<style lang="scss" scoped>
.content-list {
    display: flex;
    justify-content: center;
    gap: .316rem;
    margin-top: .4739rem;
    flex-wrap: wrap;

    .content {
        max-width: 11.3744rem;
        background: #fff;
        width: 96%;



        .content-item {
            width: 100%;
            box-sizing: border-box;
            padding: .3791rem;
            overflow: hidden;
            border-bottom: 1px solid #eee;

            .hover:hover .title-container .title {
                color: #00c3ff;
            }


            .content-head {
                width: 100%;
                min-height: .3791rem;
                display: flex;
                align-items: center;
                align-content: center;
                justify-content: left;
                flex-wrap: wrap;

                .avater {
                    height: .3633rem;
                    width: .3633rem;

                    img {
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                        border-radius: 50%;
                    }
                }

                span {
                    font-size: .2054rem;
                    margin: .0316rem .1264rem;
                    color: #ccc;
                }

                .level {
                    color: #fff;
                    padding: 0 .0395rem;
                    font-size: .1896rem;
                    border-radius: .0158rem;
                    background: orange;
                }

                .focus {
                    display: inline-block;
                    font-size: .237rem;
                    width: 1.0742rem;
                    height: .3791rem;
                    line-height: .3791rem;
                    border-radius: .2212rem;
                    background: skyblue;
                    color: #fff;
                    text-align: center;
                    margin-left: auto;

                }

                .nick-name {
                    color: #666;
                }
            }

            .title-container {
                width: 100%;

                margin-top: .237rem;

                .title {
                    font-size: .2686rem;
                    letter-spacing: 0.3px;
                    font-family: PingFang SC0;

                    &:hover {
                        color: #00c3ff;

                    }

                }

                .info {
                    color: #666;
                    font-size: .2212rem;
                }

                p {
                    width: 100%;
                    height: .4739rem;
                    line-height: .4739rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    cursor: pointer;

                }
            }

            .photo-container {
                width: 100%;
                display: flex;
                list-style: none;
                overflow: hidden;

                li {
                    width: 1.8957rem;
                    height: 1.8957rem;
                    margin: .158rem .0948rem;

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: .079rem;
                    }
                }
            }

            .tail {
                display: flex;
                align-items: center;
                flex-wrap: wrap;


                .tag {
                    display: flex;
                    list-style: none;
                    flex-wrap: wrap;
                    margin-right: auto;

                    li {

                        text-align: center;
                        background: #f5f5f5;
                        border-radius: 15px;
                        padding: .0632rem .316rem;
                        font-size: .2054rem;
                        margin: .158rem .1264rem;
                        flex-shrink: 0;


                        &:hover {
                            color: skyblue;
                            cursor: pointer;
                        }

                    }

                }

                .record {
                    display: flex;
                    list-style: none;
                    align-items: center;


                    li {
                        margin-right: .3791rem;


                        svg {
                            height: .3791rem;
                            width: .3791rem;
                            vertical-align: middle;
                            cursor: pointer;
                        }

                        span {
                            margin-left: 5px;
                            color: #666;
                            font-size: .2212rem;

                        }
                    }
                }
            }
        }
    }

    .right-aside {
        width: 4.4234rem;
        flex-shrink: 0;

        .message {
            background: #fff;
            width: 100%;


            .title {
                width: 100%;
                height: .9479rem;
                display: flex;
                padding: 0 .237rem;
                align-items: center;
                justify-content: space-between;
                box-sizing: border-box;

                h3 {
                    font-size: .2686rem;
                    color: #333;
                }

                span {
                    font-size: .2212rem;
                    color: #666;
                    cursor: pointer;
                }
            }

            .photo {
                width: 3.7915rem;
                margin: 0 auto;
                position: relative;




                .img {
                    width: 3.7915rem;
                    height: 2.1485rem;
                    border-radius: .0948rem;
                    object-fit: cover;

                }
            }

            .hot-list {
                list-style: none;

                li {
                    display: flex;
                    align-items: center;
                    height: 66px;
                    padding: 10px;
                    cursor: pointer;

                    &:hover p {
                        color: #00b2ff;

                    }

                    .cover {
                        width: 75px;
                        flex-shrink: 0;
                        height: 50px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 8px;

                        }

                    }

                    .text {
                        padding-left: 10px;

                        p {
                            line-height: 20px;
                            font-size: 14px;
                        }
                    }
                }
            }




        }


    }

}
</style>