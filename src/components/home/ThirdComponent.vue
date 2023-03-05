<template>
  <div class="main">
    <div class="role-ingo">
      <img src="@/assets/home/home3_roleInfo.webp" alt="角色简介" />
    </div>
    <div class="role-info-container">
      <div class="role-item" v-for="(role, index) in roleInfo.roleList" :key="index" v-show="index == roleInfo.index">
        <div class="img-container">
          <img :src="role.imgSrc" :alt="role.imgAlt" />
        </div>
        <div class="play-container" @click="openVideo">
          <img src="@/assets/home/home3_play.webp" alt="播放" />
        </div>
        <div class="audio-container">
          <div class="zh-audio audio">
            <img src="@/assets/home/home3_yuyin.webp" alt="语音" />
            <span>{{ role.zh_CV }}</span>
          </div>
          <div class="ja-audio audio">
            <img src="@/assets/home/home3_yuyin.webp" alt="语音" />
            <span>{{ role.jp_CV }}</span>
          </div>
        </div>
        <div class="chageRole-container">
          <div class="before-container item" @click="chageIndex(-1)">
            <img src="@/assets/home/home3_before.webp" alt="上一页" />
          </div>
          <div class="role-avatar item">
            <img :src="roleInfo.roleList[roleInfo.beforeIndex].avatar" alt="avatar" />
          </div>
          <div class="role-avatar item">
            <img :src="roleInfo.roleList[roleInfo.index].avatar" alt="avatar" />
          </div>
          <div class="role-avatar item">
            <img :src="roleInfo.roleList[roleInfo.afterIndex].avatar" alt="avatar" />
          </div>
          <div class="after-container item" @click="chageIndex(1)">
            <img src="@/assets/home/home3_after.webp" alt="下一页" />
          </div>
        </div>
      </div>
    </div>
    <div class="mask" v-show="mask.isShow" @click="closeVideo">
      <div class="video-container" @click.stop>
        <video controls ref="myVideo"></video>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, ref, computed, watch } from "vue";
import { baseURL } from '@/api/request'
import _ from "lodash";
export default {
  setup() {
    const data = reactive({
      mask: {
        isShow: false,
      },
      roleInfo: {
        index: 0,
        beforeIndex: "",
        afterIndex: "",
        roleList: [
          {
            imgSrc: require("@/assets/home/home3_shanhugongxinhai.webp"),
            imgAlt: "珊瑚宫心海",
            zh_CV: "中文CV：龟娘",
            jp_CV: "日文CV：三森铃子",
            videoSrc: `${baseURL}/ys/resource/video/home3_shanhugongxinhai.mp4`,
            avatar: require("@/assets/home/home3_shanhugongxinhai_avatar.webp"),
          },
          {
            imgSrc: require("@/assets/home/home3_ganyu.webp"),
            imgAlt: "甘雨",
            zh_CV: "中文CV：林簌",
            jp_CV: "日文CV：上田丽奈",
            videoSrc: `${baseURL}/ys/resource/video/home3_ganyu.mp4`,
            avatar: require("@/assets/home/home3_ganyu_avatar.webp"),
          },
          {
            imgSrc: require("@/assets/home/home3_kelai.webp"),
            imgAlt: "柯莱",
            zh_CV: "中文CV：秦文静",
            jp_CV: "日文CV：前川涼子",
            videoSrc: `${baseURL}/ys/resource/video//home3_kelai.mp4`,
            avatar: require("@/assets/home/home3_kelai_avatar.webp"),
          },
        ],
      },
    });
    data.roleInfo.beforeIndex = computed(
      () =>
        (data.roleInfo.index - 1 + data.roleInfo.roleList.length) %
        data.roleInfo.roleList.length
    );
    data.roleInfo.afterIndex = computed(
      () => (data.roleInfo.index + 1) % data.roleInfo.roleList.length
    );

    watch(
      () => data.roleInfo.index,
      (newValue) => {
        if (newValue < 0) {
          data.roleInfo.index = data.roleInfo.roleList.length - 1;
        }
        if (newValue >= data.roleInfo.roleList.length) {
          data.roleInfo.index = 0;
        }
      }
    );
    let myVideo = ref(null);

    const openVideo = _.debounce(
      () => {
        data.mask.isShow = true;
        myVideo.value.src =
          data.roleInfo.roleList[data.roleInfo.index].videoSrc;
        myVideo.value.currentTime = 0;
        myVideo.value.play();
      },
      500,
      { leading: true }
    );
    const closeVideo = () => {
      data.mask.isShow = false;
      myVideo.value.pause();
    };
    const chageIndex = (param) => {
      data.roleInfo.index += param;
    };

    return {
      ...toRefs(data),
      myVideo,
      openVideo,
      closeVideo,
      chageIndex,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
  min-width: 1400px;
  background: url("@/assets/home/home3_background.webp") center center / cover no-repeat;

  .role-ingo {
    position: absolute;
    right: 12%;
    transform: translateX(-5px);

    img {
      width: 101px;
      height: 376px;
    }
  }

  .role-info-container {
    width: 900px;
    height: 587px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -57%);

    .role-item {
      position: absolute;

      .play-container {
        position: absolute;
        top: 27%;
        left: 35%;

        img {
          width: 54px;
          height: 56px;
        }

        &:hover img {
          content: url("@/assets/home/home3_play_hover.webp");
        }
      }

      .img-container {
        img {
          width: 100%;
          height: 100%;
        }
      }

      .audio-container {
        width: 243px;
        height: 44px;
        position: absolute;
        top: 54%;
        left: 7%;

        .audio {
          position: relative;
          margin-bottom: 15px;
          box-sizing: border-box;
          height: 100%;

          &:hover {
            cursor: pointer;
          }

          &:hover img {
            content: url("@/assets/home/home3_yuyin_hover.webp");
          }

          img {
            width: 100%;
            height: 100%;
          }

          span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 14px;
          }
        }
      }

      .chageRole-container {
        display: flex;
        align-items: center;
        position: absolute;
        left: 5%;
        bottom: 8%;

        .item {
          margin-right: 6px;

          &:hover {
            cursor: pointer;
          }
        }

        .role-avatar {
          img {
            width: 68px;
            height: 68px;
          }

          &:nth-child(2) {
            opacity: 0.5;
          }

          &:nth-child(4) {
            opacity: 0.5;
          }
        }

        .before-container,
        .after-container {
          img {
            width: 24px;
            height: 32px;
          }
        }

        .before-container:hover img {
          content: url("@/assets/home/home3_before_hover.webp");
        }

        .after-container:hover img {
          content: url("@/assets/home/home3_after_hover.webp");
        }
      }
    }
  }

  .mask {
    width: 100%;
    height: 100%;
    position: relative;
    background: rgba(0, 0, 0, 0.5);

    .video-container {
      width: 496px;
      height: 278px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      video {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
