<template>
    <div ref="forum" class="forum">
        <ForumNav></ForumNav>
        <RouterView :key="$route.fullPath"></RouterView>
    </div>
    <transition name="animate__animated animate__bounce" enter-active-class="animate__backInUp"
        leave-active-class="animate__backOutUp">
        <div class="gotoTop" @click="gotoTop" v-show="topIsShow">
            <img src="@/assets/forum/gotoTop.png" alt="回到顶部">
        </div>
    </transition>
</template>

<script setup>
import ForumNav from "@/components/forum/ForumNav.vue";
import { onBeforeUnmount, ref } from "vue"
import 'animate.css'
let forum = ref(null)
let topIsShow = ref(false)
const gotoTop = () => {
    document.documentElement.scrollTop = 0;
}
const myScroll = () => {
    const nowTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (nowTop > clientHeight) {
        topIsShow.value = true
    } else {
        topIsShow.value = false
    }

}
document.addEventListener('scroll', myScroll)
onBeforeUnmount(() => {
    document.removeEventListener('click', myScroll)
})

</script>

<style lang="scss" scoped>
.forum {
    width: 100%;
}

.gotoTop {
    position: fixed;
    right: 7%;
    bottom: 28%;


    img {
        width: 1.6114rem;
    }
}
</style>