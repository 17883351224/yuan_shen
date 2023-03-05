<template>
    <div class="editor-container">
        <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" class="bar" />
        <Editor v-model="valueHtml" :defaultConfig="editorConfig" :mode="mode" @onCreated="handleCreated"
            class="editor" />
    </div>
</template>

<script>
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted, watch, reactive, inject } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'



export default {
    props: ['editorInfo'],
    components: { Editor, Toolbar },
    setup(props, { emit }) {
        // 编辑器实例，必须用 shallowRef
        const editorRef = shallowRef()

        // 内容 HTML
        const valueHtml = ref("")

        const valueText = ref("")
        watch(valueHtml, () => {
            valueText.value = document.querySelector('.editor').innerText
        })


        //   菜单栏配置
        const toolbarConfig = {
            excludeKeys: [
                "fullScreen",

            ],
        }
        const editorConfig = {
            placeholder: '敬请发挥吧(´･ω･)ﾉ(._.`)…', MENU_CONF: {},

        }

        editorConfig.MENU_CONF['uploadImage'] = {
            // 上传图片的配置
            server: props.editorInfo.server,
            fieldName: 'file',
            maFileSize: 10 * 1024 * 1024,
            maxNumberOfFiles: 20,
            // 选择文件时的类型限制，默认为 ['image/*'] 。如不想限制，则设置为 []
            allowedFileTypes: ['image/*'],
            // withCredentials: true,
            // 超时时间，默认为 10 秒
            timeout: 5 * 1000, // 5 秒
            // base64 编码
            // base64LimitSize: 5 * 1024 * 1024 // 5M
        }

        // 组件销毁时，也及时销毁编辑器
        onBeforeUnmount(() => {
            const editor = editorRef.value
            if (editor == null) return
            editor.destroy()
        })

        const handleCreated = (editor) => {
            editorRef.value = editor // 记录 editor 实例，重要！
        }

        let imageAllList = []
        // 插入图片
        editorConfig.MENU_CONF['insertImage'] = {
            onInsertedImage(imageNode) {                    // JS 语法
                if (imageNode == null) return
                const { src } = imageNode
                imageAllList.push(src)
            },
        }
        const getRealityImage = () => {
            return editorRef.value.getElemsByType('image')
        }



        return {
            editorRef,
            valueHtml,
            mode: 'default', // 或 'simple'
            toolbarConfig,
            editorConfig,
            handleCreated,
            getRealityImage,
            imageAllList,
            valueText

        };
    }

}

</script>   

<style lang="scss" scoped>
.editor-container {
    border: 1px solid #eee;



    .bar {

        background-color: #fff;
    }


    .editor {
        background-color: #fff;
        min-height: 450px;
        height: auto !important;
        padding-bottom: 50px;

        :deep(video),
        :deep(img) {

            max-width: 96%;
            object-fit: cover;

        }
    }
}
</style>