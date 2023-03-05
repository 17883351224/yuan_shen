<template>
    <div class="editor">
        <div class="inner">
            <input type="text" placeholder="新闻名" v-model.trim="newsInfo.newsName">
            <input type="date" placeholder="发布时间" v-model.trim="newsInfo.publishTime">
            <select v-model.trim="newsInfo.type">
                <option value="news">news</option>
                <option vlaue="notice">notice</option>
                <option value="activity">activity</option>
            </select>
            <input type="text" placeholder="封面照片URL" v-model="newsInfo.coverUrl">
            <WangEditor :editorInfo="editorInfo" ref="editor"></WangEditor>
            <button @click="getHtml" style="width:150px; height: 50px;">提交</button>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import _request from '@/api/request'
import WangEditor from '@/components/editor/WangEditor.vue';
import Message from '@/plugins/message';
import { baseURL } from '@/api/request'
const editorInfo = {
    server: baseURL + '/news/image'
}
const newsInfo = reactive({
    newsName: '',
    type: '',
    coverUrl: '',
    newsContent: '',
    publishTime: '',
    user: {
        userAccount: ''
    }
})
if (localStorage.getItem("token") && JSON.parse(localStorage.getItem("token")).userAccount) {
    newsInfo.user.userAccount = JSON.parse(localStorage.getItem("token")).userAccount
}
const editor = ref(null)
const getHtml = () => {
    newsInfo.newsContent = editor.value.valueHtml
    if (newsInfo.user.userAccount) {
        _request.put('/news', newsInfo).then(res => {
            Message({ type: 'success', text: "okkkkk", delay: 3000 })
            setTimeout(() => {
                location.reload()
            }, 2000);
        }, err => {
            Message({ type: 'error', text: err.message, delay: 5000 })
        })
    } else {
        Message({ type: 'warning', text: '你未登录，请先登录', delay: 2000 })
    }

}

</script>

<style lang="scss" scoped>
.editor {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inner {

        width: 60%;
    }
}
</style>