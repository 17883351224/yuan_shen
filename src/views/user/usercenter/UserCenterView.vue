<template>
    <div class="personal-center" ref="personalCenter">
        <div class="inner">
            <MyHeader></MyHeader>
            <UserCenterHeader class="user-center-header-app" />
            <UserCenterBody></UserCenterBody>
        </div>


    </div>
</template>

<script setup>
import MyHeader from '../../../components/firstpage/MyHeader.vue';
import UserCenterHeader from '@/components/user/UserCenterHeader.vue';
import UserCenterBody from '@/components/user/UserCenterBody.vue';
import { useRoute, useRouter } from 'vue-router';
import { watch, ref, onMounted } from 'vue'
const _router = useRouter()
const _route = useRoute()
const gotoHome = () => {
    _router.push({
        name: 'privateCenterHome'
    })
}
const gotoInformation = () => {
    _router.push({
        name: 'privateCenterInformation'
    })
}
const gotoCreation = () => {
    _router.push({
        name: 'privateCenterCreation'
    })
}
const gotoCollect = () => {
    _router.push({
        name: 'privateCenterCollect'
    })
}
const personalCenter = ref(null)
watch(_route, (newValue) => {
    const lisObj = Array.from(personalCenter.value.querySelectorAll('.nav li'))
    lisObj.forEach(item => {
        item.classList.remove('active1')
        Array.from(item.querySelectorAll('svg path')).forEach((e) => {
            e.classList.remove('active2')
        })
    })
    lisObj.forEach((item) => {
        if (item.title == newValue.name) {
            item.classList.add('active1')
            Array.from(item.querySelectorAll('svg path')).forEach((e) => {
                e.classList.add('active2')
            })
        }

    })
}, { deep: true })
onMounted(() => {
    const lisObj = Array.from(personalCenter.value.querySelectorAll('.nav li'))
    lisObj.forEach((item) => {
        if (item.title == _route.name) {
            item.classList.add('active1')
            Array.from(item.querySelectorAll('svg path')).forEach((e) => {
                e.classList.add('active2')
            })
        }

    })
})

</script>

<style lang="scss" scoped>
.personal-center {
    padding-top: 1.8957rem;
    display: flex;
    justify-content: center;
    border-radius: .1264rem;
    background-color: #F7F8FC;
    min-height: 100vh;

    .inner {
        width: 70%;

        .user-center-header-app {
            margin: 0 0 1.5798rem 0;
        }
    }
}

::-webkit-scrollbar {
    width: .079rem;
    background-color: #FAFAFA;
}

::-webkit-scrollbar-thumb {
    width: .079rem;
    background-color: aqua;
    border-radius: .079rem;
}
</style>