<template>
  <div class="home-app">
    <div class="home" @wheel.prevent>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
      <SeventhComponent></SeventhComponent>
    </div>
  </div>
</template>

<script>
import FirstComponent from "@/components/home/FisrtComponent.vue";
import SecondComponent from "@/components/home/SecondComponent.vue";
import ThirdComponent from "@/components/home/ThirdComponent.vue";
import FourthComponent from "@/components/home/FourthComponent.vue";
import FifthComponent from "@/components/home/FifthComponent.vue";
import SixthComponent from "@/components/home/SixthComponent.vue";
import SeventhComponent from "@/components/home/SeventhComponent_.vue";
import {
  onBeforeUnmount,
  onMounted,
  reactive,
  toRefs,
  watch,
} from "@vue/runtime-core";
import throttle from "lodash/throttle";



export default {
  components: {
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent
  },
  setup() {
    const data = reactive({
      changePageInfo: {
        viewHeight: 0,
        nowTop: 0,
        totalTop: 0,
      },
    });
    const changePage = (e) => {
      if (e.wheelDelta > 0 || e.detail > 0) {
        data.changePageInfo.nowTop -= data.changePageInfo.viewHeight;
      } else {
        data.changePageInfo.nowTop += data.changePageInfo.viewHeight;
      }
    };
    const changeIndexBythrottle = throttle(changePage, 300, {
      leading: true,
      trailing: false,
    });
    onMounted(() => {
      data.changePageInfo.viewHeight =
        document.querySelector(".home-app").scrollHeight;
      data.changePageInfo.totalTop =
        document.querySelector(".home").scrollHeight -
        data.changePageInfo.viewHeight;
      window.addEventListener("wheel", changeIndexBythrottle);
    });
    watch(
      () => data.changePageInfo.nowTop,
      (newValue) => {
        if (newValue > data.changePageInfo.totalTop) {
          data.changePageInfo.nowTop = data.changePageInfo.totalTop;
        }
        if (newValue < 0) {
          data.changePageInfo.nowTop = 0;
        }
        document.querySelector(".home").scrollTop = newValue;
      }
    );
    onBeforeUnmount(() => {
      window.removeEventListener("wheel", changeIndexBythrottle);
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>
<style lang="scss" scoped>
.home-app {
  position: relative;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

@media screen and (min-width:1200px) {
  .home-app {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    box-sizing: border-box;

    .home {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: -17px;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }

}
</style>
