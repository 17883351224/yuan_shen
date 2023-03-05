<template>
    <div class="my-collect">
        <header>
            <span class="active" @click="changeType('creation', $event)">创作</span>
            <span @click="changeType('news', $event)">新闻</span>
            <span @click="changeType('post', $event)">帖子</span>
        </header>

        <section class="collect-body">
            <div class="mhy-main-card-list" v-show="nowType == 'creation'">
                <div class="card" v-for="item in userCollect.creationCollectList " :key="item.id"
                    @click="getCreationDetail(item.creation.id, item.creation.type)">
                    <div class="picture-container">
                        <img class="card-picture" v-lazy="item.creation.coverUrl">
                    </div>
                    <div class="card-header">

                        <span>{{ item.creation.title }}</span>
                    </div>
                    <div class="card-footer">
                        <div class="card-footer-user">
                            <img v-lazy='item.creation.user?.userAvatar'>
                        </div>
                        <div class="card-footer-user-name"><a>{{ item.creation.user?.userName }}</a></div>
                        <svg t="1665496508897" class="icon dianzan" viewBox="0 0 1064 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="938" width="200" height="200">
                            <path
                                d="M204.8 440.32a30.72 30.72 0 0 0-30.72 30.72v368.64c0 16.95744 13.76256 30.72 30.72 30.72h51.2v-430.08H204.8z m-133.12 30.72A133.12 133.12 0 0 1 204.8 337.92h102.4c28.2624 0 51.2 22.9376 51.2 51.2v532.48c0 28.2624-22.9376 51.2-51.2 51.2H204.8a133.12 133.12 0 0 1-133.12-133.12v-368.64z"
                                fill="#1D1D1F" p-id="939"></path>
                            <path
                                d="M512.94208 140.41088c-23.18336 71.35232-57.42592 138.89536-89.45664 190.0544-16.384 26.17344-32.80896 48.98816-47.59552 66.31424-7.3728 8.6016-14.99136 16.62976-22.65088 23.26528-6.10304 5.24288-18.0224 14.82752-33.5872 18.75968a51.2 51.2 0 0 1-33.01376-96.58368c2.4576-2.12992 6.26688-5.98016 11.38688-12.00128 10.6496-12.45184 24.1664-30.88384 38.66624-54.14912 29.12256-46.4896 60.2112-108.29824 80.32256-171.86816 7.08608-22.28224 23.7568-45.99808 52.18304-56.89344 47.5136-18.18624 125.7472-27.27936 172.60544 40.50944 21.01248 30.43328 30.22848 70.41024 30.3104 117.30944 0.08192 32.11264-4.096 69.30432-12.98432 112.31232h167.1168c46.61248 0 101.82656 19.0464 130.37568 70.8608 60.66176 110.01856 85.1968 302.4896-81.79712 521.17504-32.31744 42.27072-82.3296 63.32416-131.8912 63.32416H307.2a51.2 51.2 0 1 1 0-102.4h435.77344c21.34016 0 39.7312-9.0112 50.46272-23.10144 142.9504-187.14624 114.11456-335.91296 73.5232-409.6-4.87424-8.8064-18.0224-17.85856-40.67328-17.85856H593.92a51.2 51.2 0 0 1-49.31584-64.9216c18.432-66.27328 25.1904-114.85184 25.14944-149.54496-0.08192-35.06176-7.168-52.0192-12.20608-59.35104-4.99712-7.20896-16.67072-14.58176-44.60544-5.61152zM284.672 343.81824l0.69632-0.49152a4.096 4.096 0 0 1-0.69632 0.49152z"
                                fill="#1D1D1F" p-id="940"></path>
                        </svg>
                    </div>
                </div>
                <NoDataVue v-if="userCollect.creationCollectList?.length == 0"></NoDataVue>
            </div>

            <ul class="news-list" v-show="nowType == 'news'">

                <li class="news" v-for="item in userCollect.newsCollectList" :key="item.news.newsId"
                    @click="gotoNewsDetail(item.news.newsId, item.news.type)">
                    <div class="new-inner">
                        <div class="img-container">
                            <img v-lazy="item.news.coverUrl" alt="coverImage">
                        </div>
                        <div class="text">
                            <h3>{{ item.news.newsName }}</h3>
                            <div class="time">
                                <span>{{ item.news.publishTime }}</span>
                                <span>新闻</span>
                            </div>
                        </div>
                    </div>
                </li>
                <NoDataVue v-if="userCollect.newsCollectList?.length == 0"></NoDataVue>

            </ul>

            <div class="post-list" v-show="nowType == 'post'">
                <div class="content-item" v-for="item in userCollect.posCollectList" :key="item.post.postId"
                    @click="getPostDetail(item.post.postId)">
                    <div class="hover">
                        <div class="content-head">
                            <div class="avater"><img v-lazy="item.post.user?.userAvatar" alt="avatar">
                            </div>
                            <span class="nick-name">{{ item.post.user?.userName }}</span>
                            <span class="level"
                                :style="`background-color:${useUserLevelColor(item.post.user?.userLevel)}`">Lv.{{
                                        item.post.user?.userLevel
                                }}</span>
                            <span v-if="item.user?.userAccount == '17883351224'">官方</span>
                            <span class="content-class">原神</span>
                            <span class="focus">关注</span>
                        </div>
                        <div class="title-container">
                            <p class="title">{{ item.post.postTitle }}</p>
                            <p class="info">{{ item.post.introduce }}</p>
                        </div>
                        <ul class="photo-container">
                            <li v-for="imgSrc in JSON.parse(item.post.postCover || '[]')"><img v-lazy="imgSrc"
                                    alt="cover">
                            </li>
                        </ul>
                    </div>

                    <div class="tail">
                        <ul class="tag">
                            <li v-for="tag in JSON.parse(item.post.postTopics || '[]')">{{ tag }}</li>
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
                                </svg><span>{{ item.post.viewsTotal }}</span>
                            </li>

                            <li title="评论数">
                                <svg t="1665483308194" class="icon" viewBox="0 0 1071 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3666" width="32" height="32">
                                    <path
                                        d="M395.701 434.549c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.043-47.759-47.759 0-25.716 22.042-47.759 47.759-47.759 29.391 0 47.759 22.043 47.759 47.759v0zM943.095 408.833c0-198.385-183.69-360.032-411.465-360.032-231.449 0-415.138 161.647-415.138 360.032 0 117.562 66.129 227.775 176.341 293.903v113.888c0 11.021 7.348 18.369 14.694 22.042 0 0 3.674 0 7.348 0 7.348 0 11.021 0 14.694-3.674l51.434-33.065c0 0 0 0 3.674-3.674l58.78-36.739c29.391 3.674 58.78 7.348 88.171 7.348 227.775 0 411.465-161.647 411.465-360.032v0zM325.898 673.346c-102.865-58.78-165.321-157.972-165.321-264.513 0-172.669 165.321-315.946 371.053-315.946 202.058 0 367.379 143.278 367.379 315.946 0 172.669-165.321 315.946-367.379 315.946-29.391 0-58.78-3.674-88.171-7.348-7.348-3.674-14.694 0-18.369 0l-69.801 47.759c0 0 0 0 0 0l-18.369 11.021v-84.497c0-7.348-3.674-14.694-11.021-18.369v0zM586.737 423.53c0 25.716-22.042 47.759-47.759 47.759s-47.759-22.042-47.759-47.759c0-29.391 22.042-47.759 47.759-47.759 25.716 0 47.759 18.369 47.759 47.759v0zM770.428 423.53c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.042-47.759-47.759 0-29.391 22.042-47.759 47.759-47.759 29.391 0 47.759 18.369 47.759 47.759v0z"
                                        p-id="3667" fill="#cdcdcd"></path>
                                </svg>
                                <span>{{ item.post.commentTotal }}</span>
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
                                <span>{{ item.post.likedTotal }}</span>
                            </li>
                        </ul>
                    </div>


                </div>
                <NoDataVue v-if="userCollect.posCollectList?.length == 0"></NoDataVue>
            </div>

        </section>
    </div>
</template>

<script setup>
import NoDataVue from '@/components/nodata/NoData.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useUserAccount, useUserLevelColor } from '@/hooks/user/useUserInformation';



const _store = useStore()


const userCollect = computed(() => _store.state.collect.userCollect)

const nowType = ref('creation')

const userAccount = useUserAccount()
const getUserColelctByUserAccount = () => {
    if (userAccount.value) {
        _store.dispatch('collect/getAllCollectByUserAccount', userAccount.value)
    }
}
/**
 * 获取用户收藏
 */
getUserColelctByUserAccount()
const changeType = (type, e) => {
    nowType.value = type
    e.currentTarget.parentNode.querySelector('.active')?.classList.remove('active')
    e.currentTarget.classList.add('active')
}

const _router = useRouter()
const getCreationDetail = (id, type) => {
    console.log(id, type)
    _router.push({
        name: 'creationDetail',
        query: {
            type: type == 'COS' ? 'cos' : 'someperson',
            creationId: id
        }
    })

}
const gotoNewsDetail = (id, type) => {
    _router.push({
        name: 'newsDetail',
        query: {
            type: type,
            newsId: id
        }
    })
}
const getPostDetail = (id) => {
    _router.push({
        name: 'postDetail',
        query: {
            postId: id
        }
    })
}

</script>

<style lang="scss" scoped>
.my-collect {
    position: relative;
    padding-bottom: .316rem;


    header {
        height: .7899rem;
        padding-left: .316rem;
        display: flex;
        color: #333;
        align-items: center;
        border-bottom: .0158rem solid #eee;
        gap: .4107rem;
        user-select: none;
        position: sticky;
        top: 0;
        z-index: 20;
        background-color: #fff;
        margin-bottom: .316rem;

        span {
            cursor: pointer;
            display: inline-block;
            height: 100%;
            box-sizing: border-box;
            line-height: .7899rem;
            padding: 0 .0474rem;

            &.active {
                color: #00c3ff;
                font-weight: 560;
                border-bottom: .0474rem solid #00c3ff;
            }

        }
    }

    .mhy-main-card-list {
        padding: .316rem .316rem .9479rem .316rem;
        display: flex;
        flex-wrap: wrap;
        gap: 20px 20px;
        justify-content: flex-start;
        align-content: flex-start;

        .icon {
            width: .3791rem;
            height: .3791rem;
        }



        .card {
            width: 3.5703rem;
            background-color: #FFFFFF;
            display: inline-block;
            border-radius: .0948rem;
            align-items: center;
            justify-content: center;
            box-shadow: 2px 2px 5px rgba(200, 200, 200, .25);
            cursor: pointer;
            height: 3.8863rem;
            overflow: hidden;

            .picture-container {
                width: 100%;
                height: 2.6224rem;
                overflow: hidden;

                >img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all 0.4s ease-in-out;

                }


            }

            .card-header {

                padding: 0 .237rem 0 .237rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;

                span {
                    font-size: .2528rem;

                }
            }

            .card-footer {
                display: flex;
                margin: 0;
                padding: 0px .237rem 0 .237rem;
                line-height: .7899rem;
                align-items: center;

                .card-footer-user {
                    height: .5529rem;
                    width: .5529rem;

                    >img {
                        height: .5529rem;
                        width: .5529rem;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }

                .card-footer-user-name {
                    margin-left: .158rem;
                    font-size: .2212rem;
                    color: #666;
                    max-width: 1.8325rem;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }

            .dianzan {
                margin: 0 .0632rem 0 auto
            }

            &:hover .card-picture {
                transform: scale(1.25);
            }
        }
    }

    .news-list {

        list-style: none;
        width: 100%;



        .news {
            width: 90%;
            padding: 15px 0;
            margin: 0 auto;
            background-color: #fafafa;
            transition: all 0.2s ease;
            margin-bottom: 16px;
            cursor: pointer;
            position: relative;

            &:hover {
                background-color: #fff;
            }

            &::before {
                content: '';
                position: absolute;
                z-index: 1;
                top: -3px;
                bottom: -3px;
                left: -3px;
                right: -3px;
                border: 3px solid rgba(57, 59, 64, 0.15);
                display: none;
                opacity: 0;
                border-radius: 4px;
            }

            &:hover::before {
                display: block;
                opacity: 1;
                transition: opacity 0.2s linear;
            }


            .new-inner {
                width: 100%;
                padding: 0 16px;
                min-height: 2.2117rem;
                display: flex;
                box-sizing: border-box;
                flex-wrap: wrap;


                .img-container {
                    img {
                        width: 265px;
                        height: 140px;
                        object-fit: cover;
                    }
                }

                .text {
                    padding-left: 30px;
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                    box-sizing: border-box;

                    h3 {

                        font-size: max(.2686rem, 1.5vw);
                        font-weight: 400;
                        color: #393b40;
                        flex: 1;
                    }

                    .time {
                        display: flex;
                        justify-content: flex-end;

                        span {
                            color: #999;
                            font-size: 16px;
                            letter-spacing: 0.2px;

                            &:last-child {
                                color: #ffc000;
                                margin-left: 40px
                            }
                        }
                    }
                }
            }
        }


    }

    .post-list {
        background: #fff;
        width: 96%;

        margin: 0 auto;

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
                    font-size: .1896rem;
                    padding: 0 .0395rem;
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
}
</style>