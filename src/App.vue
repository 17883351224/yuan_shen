<template>

  <router-view v-if="appIsShow" />
  <!-- 背景音乐 -->
  <audio loop ref="backroundMusic" :hidden="true">
    <source src="@/assets/firstpage/home_background.mp3">
  </audio>

</template>
<script setup>
import { provide, ref, reactive, nextTick } from 'vue'
const backroundMusic = ref(null);
const playAudio = () => {
  backroundMusic.value.play()
  audioObj.paused = false

}
const pauseAudio = () => {
  backroundMusic.value.pause()
  audioObj.paused = true
}
const audioObj = reactive({
  paused: true,
  playAudio,
  pauseAudio

})
provide('backgroundMusicObj', audioObj)
const appIsShow = ref(true)
const reload = () => {
  appIsShow.value = false
  nextTick(() => {
    appIsShow.value = true
  })

}
provide('reload', reload)
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: '微软雅黑';
  scroll-behavior: smooth;
  font-size: .2528rem;
}


@font-face {
  font-family: "PingFang SC";
  src: url('./assets/font/苹方黑体-细-简.ttf');
}

@font-face {
  font-family: "PingFang SC0";
  src: url('./assets/font/苹方黑体-准-简.ttf');
}

@font-face {
  font-family: "PingFang SC00";
  src: url('./assets/font/苹方黑体-中粗-简.ttf');
}

body,
html,
#app {
  width: 100%;
  height: 100%;
  // filter: grayscale(0.5) saturate(0.8);
}

html {
  font-size: 63.3px;
}

#music-audio {
  position: fixed;
  top: -15.7978rem;
  left: -15.7978rem
}



// #app {
//   min-width: 1400px;
// }


#nprogress .bar {
  background: rgb(105 224 255) !important;
  height: 3px !important;
  z-index: 2030 !important;
}
</style>
