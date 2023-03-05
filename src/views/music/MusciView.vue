<template>
    <!-- 一级路由 -->
    <div class="music-app">
        <div class="left">
            <MusicLeft></MusicLeft>
        </div>
        <!-- 二级路由 -->
        <div class="right">
            <RouterView :key="$route.fullPath"></RouterView>
        </div>

        <!-- 音乐详情页 -->
        <n-drawer v-model:show="currentInfo.drawerIsShow" placement='bottom' default-height="100%" resizable
            :auto-focus="false">
            <n-drawer-content :body-content-style="{ padding: 0 }">
                <MusicPlay></MusicPlay>
            </n-drawer-content>
        </n-drawer>

        <!-- 当前播放列表 -->
        <n-drawer :show="currentInfo.currentListDrawerIsShow" :show-mask="false" placement='right' default-width="26%"
            resizable>
            <n-drawer-content :body-content-style="{ padding: 0 }">
                <CurrentMusicList></CurrentMusicList>
            </n-drawer-content>
        </n-drawer>

        <MusicAudioVue class="music-audio"></MusicAudioVue>
    </div>
</template>

<script setup>
import CurrentMusicList from '@/components/music/CurrentMusicList.vue';
import MusicAudioVue from '@/components/music/MusicAudio.vue';
import MusicLeft from '@/components/music/MusicLeft.vue';
import MusicPlay from '@/components/music/MusicPlay.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
const _store = useStore()
const currentInfo = computed(() => _store.state.music.currentInfo)
</script>

<style lang="scss" scoped>
.music-app {
    width: 100%;
    display: flex;
    height: 100vh;

    .left {
        width: 3.1596rem;
        box-sizing: border-box;
        flex-shrink: 0;
        border-right: 1px solid #E1E1E1;
    }

    .right {
        flex: 1;
        overflow: scroll;
        padding-bottom: .9479rem;

        &::-webkit-scrollbar {
            width: .079rem;
            background-color: aquamarine;
            border-radius: .158rem;
        }

        &::-webkit-scrollbar-thumb {
            width: .079rem;
            background-color: #EC4141;
            border-radius: .158rem;
        }

    }



}



.music-audio {
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: .0158rem solid #E1E1E1;
    background-color: #F6F6F8;
    z-index: 2022;
}
</style>