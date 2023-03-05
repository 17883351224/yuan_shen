<template>
    <div class="bigbox">
        <MyHeader />
        <div class="background">
            <img src="@/assets/abyss/shenyuan.jpg" class="p1">
            <div class="title">深境螺旋·数据统计</div>
        </div>
        <div class="floorbox">
            <div class="floor" @click="changeFloor(9)" :class="{'active':$route.query.floor==9}">FLOOR 9</div>
            <div class="floor" @click="changeFloor(10)" :class="{ 'active': $route.query.floor == 10 }">FLOOR 10</div>
            <div class="floor" @click="changeFloor(11)" :class="{ 'active': $route.query.floor == 11 }">FLOOR 11</div>
            <div class="floor" @click="changeFloor(12)" :class="{ 'active': $route.query.floor == 12 }">FLOOR 12</div>
        </div>
        <RouterView :key="$route.fullPath"></RouterView>
    </div>

</template>

<script setup>
import MyHeader from '@/components/firstpage/MyHeader.vue';

import { useRouter } from 'vue-router';


const _router = useRouter()



const changeFloor = (floor) => {
    _router.push({
        name: 'abyssFloor',
        query: {
            floor
        }
    })
}
</script>

<style lang="scss" scoped>
.bigbox {
    background: #0F1022;
    $imgSize: 1.0427rem;
    padding-bottom: 1.5798rem;

    .role-img {
        width: $imgSize;
        height: $imgSize;
        object-fit: cover;
    }

    .background {
        position: relative;
        width: 100%;

        .title {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            font-size: 40px;
            color: aliceblue;
        }

    }

    .floorbox {
        width: 90%;
        height: 100px;
        position: relative;
        display: flex;
        justify-content: space-between;
        margin: .7899rem auto 0 auto;



        .floor {
            font-size: 30px;
            padding-block: 28px;
            padding-inline: 18px;
            color: aliceblue;
            cursor: pointer;
            background: none;
            border-radius: .0948rem;

            overflow: hidden;

            &:hover {
                font-size: 30px;
                padding-block: 28px;
                padding-inline: 18px;
                color: black;
                cursor: pointer;
                background: white;
            }

            &.active {
                font-size: 30px;
                padding-block: 28px;
                padding-inline: 18px;
                color: black;
                cursor: pointer;
                background: white;
            }
        }

    }
}
</style>