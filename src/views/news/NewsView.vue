<template>
    <div class="new-app">
        <MyHeader></MyHeader>
        <NewHead></NewHead>
        <router-view :key="$route.fullPath"></router-view>
        <div class="goto-top" v-show="goToTopIsShow" @click="goToTop">
            <img src="@/assets/news/jiantou.png" alt="回到顶部">
        </div>
    </div>
</template>

<script>
import NewHead from '@/components/news/NewsHead.vue';
import NewBody from '@/components/news/NewsBody.vue';
import { onBeforeUnmount, onMounted, ref } from "vue";
import MyHeader from '@/components/firstpage/MyHeader.vue';
export default {
    components: { NewHead, NewBody, MyHeader },
    setup() {
        let goToTopIsShow = ref(false)
        let pageHeight = document.documentElement.clientHeight
        const changeShow = () => {
            document.documentElement.scrollTop > pageHeight ? goToTopIsShow.value = true : goToTopIsShow.value = false
        }
        onMounted(() => {
            window.addEventListener("scroll", changeShow)
        })
        onBeforeUnmount(() => {
            window.removeEventListener('scroll', changeShow)
        })
        const goToTop = () => {
            document.documentElement.scrollTop = 0;
        }
        return { goToTopIsShow, goToTop };
    },

}
</script>

<style lang="scss" scoped>
.new-app {
    width: 100%;

    .goto-top {
        position: fixed;
        padding: 15px 15px;
        background-color: #fff;
        cursor: pointer;
        right: 50px;
        bottom: 120px;

        img {
            width: 28px;
            height: 28px;
            object-fit: cover;
            user-select: none;
        }
    }
}
</style>