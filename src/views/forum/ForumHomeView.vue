<template>
    <div class="forum-app" ref="forumApp">
        <div class="forum">
            <div class="forum-inner">
                <ForumHeader />
                <PostList />
            </div>
        </div>

    </div>
</template>

<script setup>
import ForumHeader from "../../components/forum/ForumHeader.vue";
import PostList from "@/components/forum/PostList.vue";

</script>

<style lang="scss" scoped>
.forum-app {
    width: 100%;
    min-height: 100vh;
    padding-top: 30px;



    .forum {
        width: 100%;
        display: flex;
        justify-content: center;
        background: #F7F8FC;
        min-height: 100vh;

    }

    .forum-inner {
        width: 67.5%;
    }



    @media screen and (max-width:1500px) {
        .forum-inner {
            width: 95% !important;
        }

    }



    @media screen and (max-width:768px) {
        .forum-inner {
            width: 100% !important;
        }

    }







}
</style>