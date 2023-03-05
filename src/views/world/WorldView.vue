<template>
    <MyHeader></MyHeader>
    <div class="world-app" ref="worldApp" @wheel.prevent="changeOffsetHeight($event)">
        <div class="world">
            <TiWuaTeDaLU />
            <DaLu v-for="item in worldInfomation" :key="item.cityId" :cityInfo="item"></DaLu>
        </div>
        <div class="nav-bar" v-show="index >= 1">
            <div class="nav-line"></div>
            <ul>
                <li @click="changeIndex(0)">
                    <span>首页</span>
                    <div class="icon"> </div>
                </li>

                <li @click="changeIndex(index1 + 1)" v-for="(item, index1) in worldInfomation ">
                    <span :class="{ 'active': index == index1 + 1 }">{{ item.cityName }}</span>
                    <div class="icon" :class="{ 'active': index == index1 + 1 }"></div>
                </li>
                <li>
                    <span>敬请期待</span>
                    <div class="icon"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import TiWuaTeDaLU from '@/components/world/TiWuaTeDaLU.vue';
import throttle from 'lodash/throttle'
import { computed, onMounted, provide, reactive, ref, toRefs, watch } from 'vue';
import Message from '@/plugins/message';
import MyHeader from '@/components/firstpage/MyHeader.vue';

import { useStore } from 'vuex'
import DaLu from '@/components/world/DaLu.vue';
export default {
    components: { TiWuaTeDaLU, MyHeader, DaLu },
    setup() {

        const worldApp = ref(null);
        const page = reactive({
            pageHeight: null,
            index: 0
        })
        onMounted(() => {
            page.pageHeight = worldApp.value.offsetHeight
            _store.dispatch('world/getworldInfo')
        })
        const worldInfomation = computed(() => _store.state.world.worldInformation)

        const changeOffsetHeight = throttle((event) => {
            let flag = event.wheelDelta || event.detail
            if (flag > 0 && page.index > 0) {
                page.index--
            } else if (flag < 0 && page.index < 4) {
                page.index++
            }
        }, 500, { leading: true, trailing: false })

        const changeIndex = (index) => {
            page.index = index;
        }

        watch(() => page.index, (newValue) => {
            page.index = newValue
            worldApp.value.scrollTop = page.index * page.pageHeight
        })
        provide('changeIndex', changeIndex)
        const _store = useStore()
        return {
            worldApp,
            ...toRefs(page),
            changeOffsetHeight,
            changeIndex,
            worldInfomation


        }
    }
}
</script>

<style lang="scss" scoped>
.world-app {
    height: 100vh;
    overflow-y: auto;
    position: relative;

    &::-webkit-scrollbar {
        width: 4px;

    }

    &::-webkit-scrollbar-corner {
        background-color: transparent;

    }

    &::-webkit-scrollbar-thumb {
        width: 4px;
        background: #fff;
        border-radius: 5.5px;




    }

    &::-webkit-scrollbar-track {
        width: 4px;
        background: rgba($color: #333, $alpha: 0.4);
    }

    .nav-bar {
        position: fixed;
        right: 50px;
        top: 27%;

        .nav-line {
            width: 2px;
            height: calc(100% + 80px);
            position: absolute;
            top: -40px;
            right: 6.4px;
            background: rgba(255, 255, 255, 0.2);

            &::before {
                content: "";
                width: 5px;
                height: 5px;
                border-radius: 50%;
                position: absolute;
                top: -4px;
                left: -1.5px;
                background-color: rgba(255, 255, 255, 0.4);
            }

            &::after {
                content: "";
                width: 5px;
                height: 5px;
                border-radius: 50%;
                position: absolute;
                bottom: -4px;
                left: -1.5px;
                background-color: rgba(255, 255, 255, 0.4);
            }

        }

        ul {
            list-style: none;

            li {
                height: 50px;
                width: 120px;
                display: flex;
                cursor: pointer;
                align-items: center;
                user-select: none;

                &:last-child {
                    pointer-events: none;
                    opacity: 0.5;
                }

                span {
                    display: inline-block;
                    font-size: 16px;
                    box-sizing: border-box;
                    letter-spacing: 0.3px;
                    color: #fff;
                    height: 24px;
                    width: 100px;
                    padding-right: 5px;
                    text-align: right;
                    margin-right: 13px;

                    &.active {
                        background-color: #fff;
                        color: #333;
                    }
                }

                .icon {
                    width: 15px;
                    height: 15px;
                    flex-shrink: 0;
                    box-sizing: border-box;
                    background-color: #fff;
                    transform: rotate(45deg) scale(0.38);
                    transition: all 0.4s linear;
                    position: relative;

                    &::after {
                        content: "";
                        width: 15px;
                        height: 15px;
                        position: absolute;
                        background-color: #fff;
                        transform: scale(0.38);
                        left: -1px;
                        top: -1px
                    }

                    &.active {
                        background: rgba(18, 51, 77, 0.4);
                        border: #fff 1px solid;
                        padding: 4px;
                        transform: rotate(45deg) scale(1);
                    }
                }
            }
        }
    }

}
</style>