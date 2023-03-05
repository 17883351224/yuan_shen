<template>
    <MyHeader></MyHeader>
    <MyBody></MyBody>
    <NewsList></NewsList>
</template>

<script setup>
import MyBody from '@/components/firstpage/MyBody.vue'
import NewsList from '@/components/firstpage/NewsList.vue';
import MyHeader from '@/components/firstpage/MyHeader.vue';
import { startSakura, stopp } from '@/plugins/sakura'
import { onMounted, onBeforeUnmount } from 'vue'
onMounted(() => {
    startSakura(36, 30)
})
onBeforeUnmount(() => {
    stopp()
})

</script>

<style lang="scss" scoped>

</style>