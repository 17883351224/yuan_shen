<template>
    <div class="main" ref="roleDetailApp">
        <div class="firt-page">

            <div class="role-container" v-if="roleDetail.roleBackgroundImg">
                <img :src="roleDetail.roleBackgroundImg" :alt="roleDetail.roleName">
            </div>
            <div class="balck_container">
                <div class="black">

                </div>
            </div>
            <div class="role-info">
                <div class="bar"></div>
                <h1 class="name">{{ roleDetail.roleName }}</h1>
                <div class="audio-container">
                    <div class="audio">
                        <img src="../../assets/role/role_icon_zuo.jpg" alt="icon">
                        <p v-show="language == 'chinese'">{{ roleDetail.roleCvZ }}</p>
                        <p v-show="language == 'japanese'">{{ roleDetail.roleCvJ }}</p>
                        <div class="audio-icon" @click="audioplay($event)"><img v-lazy="audioPausedIcon" alt="audio">
                        </div>
                    </div>

                    <div class="language">
                        <n-switch size="large" @update:value="switchChanged">
                            <template #checked>
                                日
                            </template>
                            <template #unchecked>
                                中
                            </template>
                        </n-switch>
                    </div>
                </div>
                <div class="text-container">
                    <p>
                        {{ roleDetail.roleDescription }}
                    </p>
                </div>

            </div>

            <div class="audio-container" style="display: none;">
                <audio v-lazy="chineseAudioSrc" @ended="endPlay" class="cv-audio">
                </audio>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, toRefs, reactive, onMounted, computed } from "vue"
import { useStore } from "vuex"
export default {

    setup() {

        const roleInfo = reactive({
            audioPausedIcon: require('@/assets/audio/audio.png'),
            audioPlayingIcon: require('@/assets/audio/playing.gif'),
            chineseAudioSrc: require("@/assets/audio/bachongshenzi_c.mp3"),
            japaneseAudioSrc: require("@/assets/audio/bachongshenzi_j.mp3"),

        })


        let roleDetailApp = ref(null)

        let language = ref("chinese")
        const _store = useStore()
        const roleDetail = computed(() => _store.state.role.roleDetail)

        const switchChanged = (value) => {
            myAudio.pause()
            endPlay()
            if (value) {
                myAudio.src = roleInfo.japaneseAudioSrc
                language.value = "japanese"
            } else {
                myAudio.src = roleInfo.chineseAudioSrc
                language.value = "chinese"
            }
        }
        const endPlay = () => {
            audioIconObj.src = roleInfo.audioPausedIcon
        }
        let myAudio;
        let audioIconObj;
        onMounted(() => {
            audioIconObj = roleDetailApp.value.querySelector(".audio-icon img")
            myAudio = roleDetailApp.value.querySelector('.cv-audio')
        })
        const audioplay = (event) => {
            const audioIconObj = event.currentTarget.querySelector('img')
            if (myAudio.paused) {
                audioIconObj.src = roleInfo.audioPlayingIcon
                myAudio.currentTime = 0;
                myAudio.play()
            } else {
                audioIconObj.src = roleInfo.audioPausedIcon
                myAudio.pause()
            }

        }


        return {
            switchChanged,
            language,
            audioplay,
            endPlay,
            roleDetailApp,
            roleDetail,
            ...toRefs(roleInfo)
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;


    .firt-page {
        position: relative;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: url(../../assets/role/role_background1.jpg) center center /cover no-repeat;
        animation: chageBackground 30s linear infinite;

        .role-info {
            position: absolute;
            z-index: 2;
            left: 25%;

            top: 10%;

            .bar {
                width: 180px;
                height: 4px;
                background: #e3bc8c;
                margin-bottom: 30px;

            }

            .name {
                color: white;
                font-size: 65px;
                font-family: 'Courier New', Courier, monospace;
                margin-bottom: 20px;

            }

            .audio-container {
                display: flex;
                align-items: center;

                .audio {
                    position: relative;
                    height: 54px;
                    width: 300px;
                    display: flex;
                    align-items: center;
                    background: #cca574;


                    p {
                        flex: 1
                    }

                    .audio-icon {
                        position: absolute;
                        right: -5px;
                        width: 64px;
                        height: 64px;

                        img {
                            width: 100%;
                            height: 100%;

                        }
                    }

                    >img {
                        width: 54px;
                        height: 54px;
                    }

                    p {
                        font-size: 24px;
                    }
                }

                .language {
                    margin-left: 40px;

                    :deep(.n-switch) {
                        transform: scale(1.3, 1.3);
                    }

                    :deep(.n-switch .n-switch__checked),
                    :deep(.n-switch .n-switch__unchecked) {
                        color: #dbb17d;

                    }

                    :deep(.n-switch.n-switch--round .n-switch__rail .n-switch__button) {
                        background: #dbb17d;
                    }

                    :deep(.n-switch.n-switch--round .n-switch__rail) {
                        background: rgba(18, 18, 18, 0.6);
                    }
                }
            }

            .text-container {
                width: 560px;
                height: 140px;
                margin-top: 25px;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                background: rgba(1, 1, 1, 0.5);

                &::before {
                    content: "";
                    position: absolute;
                    display: block;
                    width: 20px;
                    height: 20px;
                    background: url(../../assets/role/role-icon_left.png) center center;
                    left: 15px;
                    top: 20px;

                }

                p {

                    width: 460px;
                    height: 104px;
                    color: white;
                    font-size: 16px;
                    line-height: 26px;
                    letter-spacing: 0.3px;
                    box-sizing: border-box;
                    margin-left: 30px;
                    white-space: pre-line;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 4;
                }

            }
        }


        .balck_container {
            position: absolute;
            left: 20%;
            z-index: 0;

            .black {
                width: 800px;
                height: 100vh;
                background: rgba($color: #000000, $alpha: 0.2);
                transform: skewX(45deg);
            }
        }


        .role-container {
            position: absolute;
            max-height: 100vh;
            left: calc(50% - 504px);
            z-index: 1;

            img {
                height: 800px;
            }
        }


    }


    @keyframes chageBackground {
        0% {
            background: url('../../assets/role/role_background1.jpg') center center /cover no-repeat;
        }

        50% {
            background: url('../../assets/role/role_background2.jpg') center center /cover no-repeat;
        }

        100% {

            background: url('../../assets/role/role_background1.jpg') center center /cover no-repeat;
        }
    }
}
</style>