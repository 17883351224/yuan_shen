<template>
    <div class="role-app" ref="roleApp">
        <MyHeader></MyHeader>
        <RoleDetails id="detail" class="detail-item"></RoleDetails>
        <RoleBiography id="biography" class="detail-item"></RoleBiography>
        <RoleIntelligence id="intelligence" class="detail-item"></RoleIntelligence>
        <RoleSomePerson id="some-person" class="detail-item"></RoleSomePerson>
        <MoreRole id="more-role" class="detail-item"></MoreRole>
        <div class="nav-bar" v-show="currentIndex >= 1">
            <ul>
                <li @click="scrollTo(0)">

                    <span :class="{ 'acvive': currentIndex == 0 }">首页</span>
                    <div class="icon" :class="{ 'acvive': currentIndex == 0 }">
                        <img src="@/assets/role/nav1.webp" alt="">
                    </div>

                </li>
                <li @click="scrollTo(1)">

                    <span class='active' :class="{ 'acvive': currentIndex == 1 }">角色<br>传记</span>
                    <div class="icon" :class="{ 'acvive': currentIndex == 1 }">
                        <img src="@/assets/role/nav2.webp" alt="">

                    </div>

                </li>
                <li @click="scrollTo(2)">

                    <span class='active' :class="{ 'acvive': currentIndex == 2 }">角色<br>情报</span>
                    <div class="icon" :class="{ 'acvive': currentIndex == 2 }">
                        <img src="@/assets/role/nav3.webp" alt="">
                    </div>

                </li>
                <li @click="scrollTo(3)">

                    <span class='active' :class="{ 'acvive': currentIndex == 3 }">精选<br>同人</span>
                    <div class="icon" :class="{ 'acvive': currentIndex == 3 }">
                        <img src="@/assets/role/nav4.webp" alt="">
                    </div>

                </li>
                <li @click="scrollTo(4)">

                    <span class='active' :class="{ 'acvive': currentIndex == 4 }">更多<br>角色</span>
                    <div class="icon" :class="{ 'acvive': currentIndex == 4 }">
                        <img src="@/assets/role/nav5.webp" alt="">
                    </div>

                </li>
                <li>
                    <a>
                        <span>敬请<br>期待</span>
                        <div class="icon">
                            <img src="@/assets/role/nav6.webp" alt="">
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script setup>
import RoleDetails from '@/components/role/RoleDetails.vue';
import RoleBiography from '@/components/role/RoleBiography.vue';
import RoleIntelligence from '@/components/role/RoleIntelligence.vue';
import MoreRole from '@/components/role/MoreRole.vue';
import RoleSomePerson from '@/components/role/RoleSomePerson.vue';
import { throttle } from 'lodash';
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { startSakura, stopp } from '@/plugins/sakura'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import MyHeader from '@/components/firstpage/MyHeader.vue';
const roleApp = ref(null)
let currentIndex = ref(0);
let detailObj, biographyObj, intelligenceObj, somePersonObj, moreRoleObj, lisObj
onMounted(() => {
    detailObj = roleApp.value.querySelector('#detail')
    biographyObj = roleApp.value.querySelector('#biography')
    intelligenceObj = roleApp.value.querySelector('#intelligence')
    somePersonObj = roleApp.value.querySelector('#some-person')
    moreRoleObj = roleApp.value.querySelector('#more-role')
    lisObj = roleApp.value.querySelectorAll('.nav-bar ul li')
})
const watchScroll = throttle(() => {
    const scrollTop = Math.ceil(document.documentElement.scrollTop)

    if (scrollTop < biographyObj.offsetTop) {
        currentIndex.value = 0
    } else if (scrollTop < intelligenceObj.offsetTop) {
        currentIndex.value = 1
    } else if (scrollTop < somePersonObj.offsetTop) {
        currentIndex.value = 2
    } else if (scrollTop < moreRoleObj.offsetTop) {
        currentIndex.value = 3
    }
    if (scrollTop >= somePersonObj.offsetTop + 200) {
        currentIndex.value = 4
    }

}, 500, { trailing: true })
document.addEventListener('scroll', watchScroll)
onMounted(() => {
    startSakura(40, 20)
})
onBeforeUnmount(() => {
    stopp()
})
const scrollTo = (index) => {
    const itemList = roleApp.value.querySelectorAll('.detail-item')
    document.documentElement.scrollTop = itemList[index].offsetTop

}
//获取角色详情
const _store = useStore()
const _route = useRoute()
_store.dispatch('role/getRoleDetailByRoleId', _route.query.roleId)
</script>

<style lang="scss" scoped>
.role-app {
    .nav-bar {
        position: fixed;
        right: 50px;
        top: 18%;

        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: .2528rem;

            li {
                width: 1.0111rem;
                height: 1.0111rem;
                border: 1px solid #eee;
                border-radius: .0632rem;
                background-color: #fff;
                overflow: hidden;
                box-shadow: 2px 2px 2px rgba(100, 100, 100, .1),
                    -2px -2px 2px rgba(100, 100, 100, .1);

                display: flex;
                align-items: center;
                justify-content: center;

                cursor: pointer;
                border-radius: 50%;
                box-sizing: border-box;

                span.acvive {
                    display: none;
                }

                .icon.acvive {
                    display: block;
                }

                &:hover span {
                    display: none;

                }



                &:hover .icon {
                    display: block;

                }

                span {
                    letter-spacing: .0079rem;
                    color: #333;



                }

                .icon {
                    display: none;
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;

                    img {
                        width: 100%;
                        height: 100%;

                        object-fit: cover;
                    }
                }
            }
        }
    }
}
</style>