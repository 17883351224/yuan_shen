<template>
    <div class="my-creation">
        <header>
            <span class="active" @click="changeType('COS', $event)">COS</span>
            <span @click="changeType('同人', $event)">同人</span>
        </header>
        <section class="body">
            <div class="mhy-main-card-list">
                <div class="card" v-for="item in typeList" :key="item.id"
                    @click="getCreationDetail(item.id, item.type)">
                    <div class="picture-container">
                        <img class="card-picture" v-lazy="item.coverUrl">
                    </div>
                    <div class="card-header">

                        <span>{{ item.title }}</span>
                    </div>
                    <div class="card-footer">
                        <div class="card-footer-user">
                            <img v-lazy='item.user?.userAvatar'>
                        </div>
                        <div class="card-footer-user-name"><a>{{ item.user?.userName }}</a></div>
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
            </div>
        </section>
        <NoDataVue v-if="typeList.length == 0"></NoDataVue>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useUserAccount } from '@/hooks/user/useUserInformation';
import NoDataVue from '@/components/nodata/NoData.vue';
import { useRouter } from 'vue-router';
const _store = useStore()
const myCreationList = computed(() => _store.state.creation.userCreationList)
const nowType = ref('COS')
const typeList = computed(() => myCreationList.value.filter(p => p.type == nowType.value))
const changeType = (type, e) => {

    nowType.value = type
    e.currentTarget.parentNode.querySelector('.active').classList.remove('active')
    e.currentTarget.classList.add('active')
}

const userAccount = useUserAccount()
/**
 * 获取创作信息列表
 */
const getMyCreationList = () => {
    if (userAccount.value) {
        _store.dispatch('creation/getUserCreation', userAccount.value)
    }
}
getMyCreationList()

const _router = useRouter()
const getCreationDetail = (id, type) => {
    _router.push({
        name: 'creationDetail',
        query: {
            creationId: id,
            type: type == 'COS' ? 'cos' : 'someperson'
        }
    })
}


</script>

<style lang="scss" scoped>
.my-creation {

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
}
</style>