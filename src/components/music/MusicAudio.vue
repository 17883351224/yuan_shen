<template>
    <div class="music-bottom" @mouseup="openLock">
        <div class="music-box">
            <div class="control">
                <div class="pre item" @click="changPlayIndex(-1)">
                    <svg t="1668321919391" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2149" width="32" height="32">
                        <path d="M362.3 512l445-332.3v664.5L362.3 512zM216.7 179.7h80v664.5h-80V179.7z" fill="#ffffff"
                            p-id="2150"></path>
                    </svg>
                </div>
                <div class="pause-play item" @click="startPlayOrPause">
                    <!-- 暂停 -->
                    <svg v-show="!currentInfo.isPlaying" t="1668324593482" class="icon" viewBox="0 0 1024 1024"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13978" width="32" height="32">
                        <path
                            d="M852.5 533.9L279 864.7c-11.9 6.9-27.2 2.8-34.1-9.1-2.2-3.8-3.3-8.1-3.3-12.5V181.5c0-13.8 11.2-24.9 24.9-24.9 4.4 0 8.7 1.2 12.5 3.3l573.4 330.8c11.9 6.9 16 22.1 9.1 34.1-2.1 3.8-5.2 6.9-9 9.1z"
                            p-id="13979" fill="#ffffff"></path>
                    </svg>
                    <!-- 播放 -->
                    <svg v-show="currentInfo.isPlaying" t="1668322213085" class="icon pause" viewBox="0 0 1024 1024"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6485" width="32" height="32">
                        <path
                            d="M320 128A64 64 0 0 0 256 192v640a64 64 0 0 0 128 0v-640A64 64 0 0 0 320 128z m384 0A64 64 0 0 0 640 192v640a64 64 0 0 0 128 0v-640A64 64 0 0 0 704 128z"
                            p-id="6486" fill="#ffffff"></path>
                    </svg>
                </div>
                <div class="next item" @click="changPlayIndex(1)">
                    <svg t="1668321980966" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2663" width="32" height="32">
                        <path d="M216.7 844.3V179.7l445 332.3-445 332.3z m590.6 0h-80V179.7h80v664.6z" fill="#ffffff"
                            p-id="2664"></path>
                    </svg>
                </div>
            </div>
            <div class="process-container">
                <div class="current-time">
                    <span>{{ timeForamt(currentTime) }}</span>
                </div>
                <div class="process">
                    <n-slider :default-value="0" :step="1" :max="1000" @update:value="changeProcess" v-model:value="procsss"
                        @mousedown="processLock = false" :tooltip="false" />
                </div>
                <div class="total-time">
                    <span>{{ timeForamt(durationTime) }}</span>
                </div>
            </div>
            <div class="voice-number">
                <svg t="1668322848570" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="7563" width="32" height="32">
                    <path
                        d="M509.226667 167.722667l-222.442667 184.341333c-16.704 13.866667-43.178667 23.402667-64.896 23.402667H170.730667A42.666667 42.666667 0 0 0 128 418.090667v187.434666c0 23.466667 19.178667 42.624 42.730667 42.624H221.866667c21.802667 0 48.170667 9.536 64.896 23.402667l222.421333 184.32V167.744zM259.541333 704.426667c-9.045333-7.509333-25.770667-13.589333-37.674666-13.589334H170.730667A85.418667 85.418667 0 0 1 85.333333 605.525333v-187.434666A85.333333 85.333333 0 0 1 170.730667 332.8H221.866667c11.776 0 28.629333-6.08 37.674666-13.589333L519.125333 104.106667c18.090667-14.997333 32.746667-8.170667 32.746667 15.402666v784.64c0 23.488-14.677333 30.378667-32.746667 15.402667L259.562667 704.405333z m436.117334-4.821334a21.333333 21.333333 0 1 1-26.026667-33.834666A196.608 196.608 0 0 0 746.666667 509.504c0-57.408-29.269333-112.32-77.482667-151.637333a21.333333 21.333333 0 1 1 26.965333-33.066667C753.792 371.797333 789.333333 438.485333 789.333333 509.504c0 75.370667-35.050667 144.981333-93.653333 190.08z m64 170.666667a21.333333 21.333333 0 1 1-26.026667-33.834667A414.506667 414.506667 0 0 0 896 507.029333c0-121.642667-61.696-237.354667-162.816-319.829333a21.333333 21.333333 0 1 1 26.965333-33.066667C870.698667 244.309333 938.666667 371.776 938.666667 507.029333a457.173333 457.173333 0 0 1-178.986667 363.221334z"
                        fill="#707070" p-id="7564">
                    </path>
                </svg>
                <n-slider :default-value="40" :step="1" v-model:value="volume" :format-tooltip="formatTooltip"
                    @update:value="changeVolume" />
            </div>
            <div class="play-model">
                <svg title="顺序播放" t="1668323070903" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8110" width="32" height="32">
                    <path
                        d="M342.69 297.61c-22.96 0-41.3-18.63-41.3-41.32 0-22.67 18.34-41.03 41.3-41.03h457.64c61.35 0 117.2 25.32 157.94 65.49 40.76 40.71 65.73 96.88 65.73 158.23v146.07c0 61.65-24.97 117.52-65.73 158.23-40.73 40.17-96.58 65.46-157.94 65.46H342.69c-61.68 0-117.52-25.29-158.23-65.46-36.09-36.62-60.52-85.52-64.6-139.06h-95.4C11.09 604.22 0 592.88 0 579.52c0-6.71 2.93-13.1 7.57-17.16l67.21-67.82 67.8-67.48c9.29-9.59 24.73-9.59 34.32 0h0.56l67.5 67.48 67.21 67.82c9.58 9.29 9.58 25 0 34.91-5.24 4.65-12.22 7.57-19.23 6.95h-91.02c4.05 31.15 18.9 59.66 40.11 80.9h0.3c25.88 25.59 61.41 41.56 100.37 41.56h457.64c38.66 0 74.16-15.98 99.75-41.56C925.97 659.53 942 624.01 942 585.05V438.98c0-38.96-16.03-74.46-41.91-100.05-25.59-25.91-61.09-41.32-99.75-41.32H342.69zM187.63 555.35h47.74l-25.32-25.88v-0.27l-50.32-50.05-50.34 50.05v0.27L83.8 555.35h103.83z"
                        fill="#8a8a8a" p-id="8111"></path>
                </svg>
                <svg v-show="false" title="单曲循环" t="1668323157878" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8795" width="32" height="32">
                    <path
                        d="M64 682.666667a21.333333 21.333333 0 0 1-21.333333-21.333334V224a53.393333 53.393333 0 0 1 53.333333-53.333333h812.5l-48.92-48.913334a21.333333 21.333333 0 0 1 30.173333-30.173333l85.333334 85.333333a21.333333 21.333333 0 0 1 0 30.173334l-85.333334 85.333333a21.333333 21.333333 0 0 1-30.173333-30.173333l48.92-48.913334H96a10.666667 10.666667 0 0 0-10.666667 10.666667v437.333333a21.333333 21.333333 0 0 1-21.333333 21.333334z m100.42 249.753333a21.333333 21.333333 0 0 0 0-30.173333L115.5 853.333333H928a53.393333 53.393333 0 0 0 53.333333-53.333333V362.666667a21.333333 21.333333 0 0 0-42.666666 0v437.333333a10.666667 10.666667 0 0 1-10.666667 10.666667H115.5l48.92-48.913334a21.333333 21.333333 0 0 0-30.173333-30.173333l-85.333334 85.333333a21.333333 21.333333 0 0 0 0 30.173334l85.333334 85.333333a21.333333 21.333333 0 0 0 30.173333 0zM554.666667 618.666667V405.333333a21.333333 21.333333 0 0 0-21.333334-21.333333h-42.666666a21.333333 21.333333 0 0 0 0 42.666667h21.333333v192a21.333333 21.333333 0 0 0 42.666667 0z"
                        fill="#8a8a8a" p-id="8796"></path>
                </svg>
                <svg v-show="false" title="列表循环" t="1668323290242" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="9197" width="32" height="32">
                    <path
                        d="M361.5 727.8c-119.1 0-215.9-96.9-215.9-215.9 0-119.1 96.9-215.9 215.9-215.9 2.3 0 4.6-0.2 6.8-0.6v58.3c0 12.3 14 19.4 23.9 12.1l132.6-97.6c8.1-6 8.1-18.2 0-24.2l-132.6-97.6c-9.9-7.3-23.9-0.2-23.9 12.1v58.1c-2.2-0.4-4.5-0.6-6.8-0.6-39.8 0-78.5 7.9-115 23.4-35.2 15-66.8 36.3-94 63.5s-48.6 58.8-63.5 94c-15.5 36.5-23.4 75.2-23.4 115s7.9 78.5 23.4 115c15 35.2 36.3 66.8 63.5 94s58.8 48.6 94 63.5c36.5 15.5 75.2 23.4 115 23.4 22.1 0 40-17.9 40-40s-17.9-40-40-40zM938.2 396.9c-15-35.2-36.3-66.8-63.5-94s-58.8-48.6-94-63.5c-36.5-15.5-75.2-23.4-115-23.4-22.1 0-40 17.9-40 40s17.9 40 40 40c119.1 0 215.9 96.9 215.9 215.9 0 119.1-96.9 215.9-215.9 215.9-4.1 0-8.1 0.6-11.8 1.8v-60.8c0-12.3-14-19.4-23.9-12.1l-132.6 97.6c-8.1 6-8.1 18.2 0 24.2L629.9 876c9.9 7.3 23.9 0.2 23.9-12.1V806c3.7 1.2 7.7 1.8 11.8 1.8 39.8 0 78.5-7.9 115-23.4 35.2-15 66.8-36.3 94-63.5s48.6-58.8 63.5-94c15.5-36.5 23.4-75.2 23.4-115s-7.8-78.5-23.3-115z"
                        p-id="9198" fill="#8a8a8a"></path>
                </svg>
            </div>
            <div class="music-irc">
                词
            </div>
            <div class="music-list" title="音乐列表" @click.stop="openOrCloseMusicList">
                <svg t="1668323531476" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                    p-id="12410" width="32" height="32">
                    <path
                        d="M1015.716072 239.637393c-11.261945 11.261945-29.178675 11.261945-40.44062 0l-139.750495-137.70287V767.92498h-1.023813c4.607159 76.785987-47.095405 163.298198-137.190963 215.000762-115.690886 66.547855-249.81041 50.678751-299.977254-36.345367-50.166845-86.512212 3.071439-210.90551 118.762326-277.965271 93.166997-53.750191 198.107845-53.750191 261.58426-6.654785V45.112893c0-15.869104-2.047626-29.690581 6.142879-36.857273 11.773851-10.750038 29.178675-11.261945 40.44062 0l190.941153 190.941153c11.261945 11.261945 11.261945 29.178675 0.511907 40.44062zM593.905052 182.303856H25.688752c-14.333384 0-25.595329-11.261945-25.595329-25.595329s11.261945-25.595329 25.595329-25.595329h568.2163c14.333384 0 25.595329 11.261945 25.595329 25.595329s-11.261945 25.595329-25.595329 25.595329zM442.892612 537.055114H25.688752c-14.333384 0-25.595329-11.261945-25.595329-25.595329s11.261945-25.595329 25.595329-25.595329h417.20386c14.333384 0 25.595329 11.261945 25.595329 25.595329 0 13.821478-11.261945 25.595329-25.595329 25.595329zM276.522975 891.294465H25.688752c-14.333384 0-25.595329-11.261945-25.595329-25.595329s11.261945-25.595329 25.595329-25.595329h250.834223c14.333384 0 25.595329 11.261945 25.595328 25.595329s-11.261945 25.595329-25.595328 25.595329z"
                        p-id="12411" fill="#8a8a8a"></path>
                </svg>
            </div>
        </div>
        <!-- 音乐播放器的audio -->
        <audio ref="musicAudio" :hidden="true" :src="`https://music.163.com/song/media/outer/url?id=${currentMusicId}.mp3`"
            @timeupdate="timeupdate" @canplay="canplay" @ended="ended">
        </audio>
    </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { debounce } from "lodash";
const musicAudio = ref(null)
const _store = useStore()
const currentMusicList = computed(() => _store.state.music.currentMusicList)
const currentInfo = computed(() => _store.state.music.currentInfo)
const volume = ref(40)
const changeVolume = debounce((value) => {
    musicAudio.value.volume = value / 100
}, 500, { trailing: true })

const currentMusicId = computed(() => {
    if (currentMusicList.value.length == 0) {
        return null;
    } else {
        return currentMusicList.value[currentInfo.value.playIndex].id
    }
})
const timeForamt = (time) => {
    let m = Math.floor(time / 60)
    let s = Math.floor(time % 60)
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    return `${m}:${s}`

}
const durationTime = ref(0)
const procsss = ref(0)

const processLock = ref(true)
const openLock = () => {
    if (processLock.value == false) {
        processLock.value = true
        musicAudio.value.currentTime = currentTime.value
    }
}
const currentTime = computed(() => procsss.value / 1000 * durationTime.value)
const changeProcess = (value) => {
    if (processLock.value) {
        musicAudio.value.currentTime = value / 1000 * durationTime.value
    }
}
/**
 * 获取总时间
 */
const canplay = () => {
    durationTime.value = musicAudio.value.duration
    //设置默认音量
    musicAudio.value.volume = volume.value / 100
}
/**
 * 获取当前播放进度
 */
const timeupdate = () => {
    if (processLock.value) {
        procsss.value = parseInt(((musicAudio.value.currentTime / durationTime.value) * 1000))
        _store.commit('music/saveCurrentTime', musicAudio.value.currentTime || 0)
    }
}

/**
 * 播放与暂停
 */
const startPlayOrPause = () => {
    if (currentInfo.value.isPlaying == false) {
        musicAudio.value.play()

        _store.commit('music/changeSataus', true)
    } else {
        musicAudio.value.pause()
        _store.commit('music/changeSataus', false)
    }
}

/**
 * 切歌
 */
watch([currentMusicList, () => currentInfo.value.playIndex], (newValue) => {
    //加载歌曲
    musicAudio.value.load()
    _store.dispatch('music/getMusicLyric', newValue[0][newValue[1]].id)
    _store.commit('music/changeSataus', true)
    musicAudio.value.autoplay = true
})
/**
 * 
 * @param {1/-1} value 
 * 上一曲or下一曲
 */
const changPlayIndex = (value) => {
    _store.commit('music/addOrSubPlayIndex', value)
}
/**
 * 打开当前音乐播放列表
 */
const openOrCloseMusicList = () => {
    if (!currentInfo.value.currentListDrawerIsShow) {
        _store.commit('music/changeCurrentListDrawerIsShow', true)
    } else {
        _store.commit('music/changeCurrentListDrawerIsShow', false)
    }

}
/**
 * 音乐播放结束
 */
const ended = () => {
    if (currentInfo.value.playMethod == 1) {
        _store.commit('music/addOrSubPlayIndex', 1)
    } else if (currentInfo.value.playMethod = 0) {
        musicAudio.value.play()
    }

}
const formatTooltip = (value) => `${value}%`

</script>

<style lang="scss" scoped>
.music-bottom {
    width: 100%;
    height: .8531rem;

    .music-box {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        gap: .158rem;
        justify-content: space-around;
        padding: 0 .316rem;

        :deep(.n-slider .n-slider-handles .n-slider-handle-wrapper .n-slider-handle) {
            width: .158rem;
            height: .158rem;
        }

        :deep(.n-slider .n-slider-rail .n-slider-rail__fill) {
            background-color: #E83C3C;
        }

        .control {
            display: flex;
            gap: .4107rem;

            .item {
                background-color: #E83C3C;
                border-radius: 50%;
                width: .5529rem;
                height: .5529rem;
                display: flex;
                align-items: center;
                justify-content: center;

                &:nth-child(2) {
                    transform: scale(1.05);
                }

                svg {
                    width: .316rem;
                    height: .316rem
                }
            }
        }

        .process-container {
            margin: 0 .158rem 0 .237rem;
            width: 68%;
            display: flex;
            gap: .2528rem;

            span {
                font-size: .2054rem;
                color: #8a8a8a;
                user-select: none;
            }

            .process {
                flex: 1;

                display: flex;
                align-items: center;

            }


        }

        .voice-number {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 7%;
            min-width: 1.8957rem;

            svg {
                width: .3476rem;
                height: .3476rem;
            }
        }

        .play-model {
            display: flex;
            align-items: center;

            svg {
                width: .3476rem;
                height: .3476rem;
            }
        }

        .music-irc {
            font-size: .2054rem;
            width: .316rem;
            height: .316rem;
            border: 1px solid #8a8a8a;
            text-align: center;
            line-height: .316rem;
            cursor: pointer;
            user-select: none;
        }

        .music-list {
            svg {
                width: .3476rem;
                height: .3476rem;
            }
        }
    }
}
</style>