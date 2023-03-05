<template>
    <Transition name="animate__animated animate__bounce" enter-active-class="animate__fadeInUp"
        leave-active-class="animate__fadeOutDown">
        <div class="music-box" v-show="isShow">
            <MusicPlay></MusicPlay>
        </div>
    </Transition>
</template>

<script setup>
import MusicPlay from '@/components/music/MusicPlay.vue';
import 'animate.css'
import { onBeforeUnmount, onMounted, ref } from 'vue';
const isShow = ref(false)

onMounted(() => {
    isShow.value = true
})
onBeforeUnmount(() => {
    isShow.value = false
})

</script>

<style lang="scss" scoped>

</style>