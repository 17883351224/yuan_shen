<template>
    <div class="is-enty" title="搜索为空">
        <img src="@/assets/role/noData.png" alt="空">
        <span>你还没有任何内容哦</span>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.is-enty {
    width: 15vw;
    border-radius: .1264rem;
    overflow: hidden;
    position: relative;
    margin: .4739rem auto;

    img {
        width: 100%;
    }

    span {
        color: gray;
        font-size: .316rem;
        left: 50%;
        text-align: center;
        line-height: .4739rem;

    }
}
</style>