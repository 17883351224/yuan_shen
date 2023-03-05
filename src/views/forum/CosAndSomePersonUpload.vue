<template>
    <div class="cos-some-person-upload" ref="creation">
        <div class="upload-inner">
            <div class="header">
                <h6>发布图片</h6>
                <div class="draft">
                    <svg t="1666678775950" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2466" width="32" height="32">
                        <path
                            d="M899.002182 605.090909A78.568727 78.568727 0 0 1 977.454545 683.52v215.482182a78.568727 78.568727 0 0 1-78.452363 78.429091H148.270545A78.568727 78.568727 0 0 1 69.818182 899.025455V683.52A78.568727 78.568727 0 0 1 148.270545 605.090909H186.181818V174.545455C186.181818 116.805818 233.169455 69.818182 290.909091 69.818182h465.454545C814.103273 69.818182 861.090909 116.805818 861.090909 174.545455V605.090909h37.911273zM907.636364 899.002182V683.52a8.610909 8.610909 0 0 0-8.634182-8.634182H710.050909l-35.700364 87.808A60.136727 60.136727 0 0 1 614.865455 814.545455h-182.458182a60.136727 60.136727 0 0 1-59.485091-51.828364L337.221818 674.909091H148.270545a8.610909 8.610909 0 0 0-8.634181 8.610909v215.482182a8.610909 8.610909 0 0 0 8.634181 8.610909h750.731637a8.610909 8.610909 0 0 0 8.634182-8.610909zM256 174.522182V605.090909h104.727273c14.196364 0 26.996364 8.610909 32.349091 21.806546l46.545454 114.501818c0.442182 1.070545 0.837818 2.210909 1.163637 3.351272h165.701818c0.325818-1.163636 0.721455-2.280727 1.163636-3.351272l46.545455-114.501818A34.909091 34.909091 0 0 1 686.545455 605.090909H791.272727V174.545455c0-19.246545-15.662545-34.909091-34.909091-34.909091h-465.454545c-19.246545 0-34.909091 15.662545-34.909091 34.909091zM384 325.818182a34.909091 34.909091 0 0 1 0-69.818182h279.272727a34.909091 34.909091 0 0 1 0 69.818182h-279.272727z m209.454545 162.909091h-209.454545a34.909091 34.909091 0 0 1 0-69.818182h209.454545a34.909091 34.909091 0 0 1 0 69.818182z"
                            fill="#dbdbdb" p-id="2467"></path>
                    </svg>
                    <span>草稿箱</span>
                </div>
            </div>
            <div class="content">
                <div class="title">
                    <span>标题:</span>
                    <div class="title-input">
                        <input type="text" placeholder="标题(必填1-30个字符之内)" v-model.trim="uploadInfo.title">
                    </div>
                </div>
                <div class="image-introduce-container">
                    <span>图片介绍:</span>
                    <div class="image-introduce">
                        <div class="bar">
                            <svg t="1666679248414" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="6872" width="32" height="32">
                                <path
                                    d="M922.88 735.456c-13.184 0-24.672 6.624-31.296 16.544-28.384 38.464-70.624 71.168-127.008 98.144-57.088 27.296-127.872 40.96-212.384 40.96-79.008 0-151.04-13.12-216-39.36-65.024-26.208-114.688-66.816-149.024-121.76s-51.52-120.448-51.52-196.512c0-72.64 17.184-140.704 51.52-204.224 34.336-63.488 82.72-112.224 145.152-146.24 62.4-33.984 131.328-50.976 206.784-50.976 66.112 0 126.56 13.504 181.216 40.512 54.688 27.008 95.808 63.04 123.36 108.032a273.248 273.248 0 0 1 41.376 145.28c0 44.448-10.752 87.488-32.192 129.28-21.44 41.728-50.56 75.008-87.328 99.84-27.744 18.944-50.144 28.416-67.264 28.416a34.24 34.24 0 0 1-23.936-9.056 28.448 28.448 0 0 1-9.92-21.696c0-4.672 4.832-28.704 14.496-72.16l65.824-295.2h-0.128c0.608-2.752 0.96-5.6 0.96-8.512 0-22.4-18.88-40.576-42.176-40.576-20.16 0-36.96 13.664-41.12 31.872l-0.288-0.064-16.448 72.16c-18.368-28.864-40.32-50.336-65.792-64.48a163.264 163.264 0 0 0-80.32-21.184c-36.768 0-74.688 12.416-113.664 37.248-39.04 24.832-71.68 62.016-98.016 111.52-26.24 49.536-39.424 98.976-39.424 148.352 0 40 8.48 76.8 25.408 110.336 16.96 33.536 38.976 58.4 66.048 74.56 27.072 16.128 54.976 24.192 83.712 24.192 26.112 0 52.16-7.04 78.08-21.184a264.32 264.32 0 0 0 70.432-56.128c1.92 18.944 5.024 32.32 9.216 40.032 6.432 12.16 16.512 21.44 30.208 27.936 13.696 6.528 31.68 9.792 53.952 9.792 69.664 0 133.856-31.36 192.544-94.08 65.824-69.824 98.688-149.76 98.688-239.808 0-63.04-15.648-121.408-46.912-175.104-36.8-62.4-87.008-109.376-150.72-140.896C695.296 79.776 623.456 64 543.424 64c-103.2 0-191.008 22.4-263.424 67.072-72.416 44.704-128.32 109.12-167.616 193.28A502.944 502.944 0 0 0 64 540.896c0 67.968 13.536 131.296 40.64 189.984 21.6 46.272 53.696 87.136 96.256 122.72 42.56 35.52 94.112 62.144 154.592 79.84 60.48 17.696 126.496 26.56 198.08 26.56 77.76 0 144.192-9.888 199.36-29.6 55.136-19.712 102.72-46.496 142.72-80.32a422.848 422.848 0 0 0 57.024-57.44c0.16-0.192 0.16-0.384 0.288-0.608 4.384-5.888 7.04-13.056 7.04-20.832 0.064-19.712-16.608-35.744-37.12-35.744z m-322.304-183.584c-11.616 31.488-26.56 57.504-44.736 77.984-18.24 20.48-37.344 35.968-57.312 46.4-20.064 10.368-39.04 15.584-57.12 15.584-27.072 0-51.104-11.84-72.096-35.424-20.96-23.584-31.456-56.64-31.456-99.2 0-26.688 5.152-56 15.52-88 10.272-31.968 24-59.136 41.088-81.504 17.088-22.336 34.752-38.56 52.992-48.64a118.464 118.464 0 0 1 58.304-15.136c31.296 0 57.792 11.648 79.616 34.88 21.76 23.296 32.64 56.096 32.64 98.272 0 31.68-5.824 63.264-17.44 94.784z"
                                    fill="#dbdbdb" p-id="6873"></path>
                            </svg>
                        </div>
                        <div class="text" contenteditable="true">

                        </div>
                    </div>
                </div>
                <div class="upload-image-container">
                    <span>上传图片:</span>
                    <div class="upload-image">
                        <div class="user-upload-img" v-for="item in imageList" :key="item.url">
                            <img :src='item.url' alt="图片上传失败">
                            <div class="back" @click="back(item.url)">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div class="upload-user-image">
                            <label for="upload">
                                <div class="icon">+</div>
                                <span>点击添加自定义图片</span>
                                <p>最多可同时上传50张（支持格式jpg、png、jpeg、gif，宽高尺寸推荐大于420像素)</p>
                                <input type="file" multiple accept="image/*" id="upload" style="display: none;"
                                    @change="uploadImage($event)">
                            </label>
                        </div>
                        <div class="upload-web-image">
                            <div class="icon">+</div>
                            <span>添加网络图片</span>
                            <input type="text" placeholder="图片链接地址url" v-model.trim="webImageUrl">
                            <button @click="uploadWebImage">确认</button>
                        </div>
                    </div>
                </div>

                <div class="model-container">
                    <span>
                        发布板块
                    </span>
                    <div class="model">
                        <div v-for="(item, index) in model" :key="index">
                            <input type="radio" name="model" :id="item.id" :value="item.name"
                                v-model.trim="uploadInfo.type">
                            <label :for="item.id">{{ item.name }}</label>
                        </div>

                    </div>
                </div>

                <div class="topic-container">
                    <span>选择话题:</span>
                    <div class="topic">
                        <ul class="selcet">
                            <li v-for="item in uploadInfo.topics">{{ item }}&nbsp;&nbsp;<i class="fa fa-times"
                                    aria-hidden="true" @click="removeTopic(item)"></i></li>

                        </ul>
                        <div class="serch-topic">
                            <p v-if="uploadInfo.topics.length == 0">选择相关角色、内容分类，获得更多浏览</p>
                            <div class="input">
                                <input type="text" placeholder="搜索话题" v-model.trim="keywords">
                                <ul class="topic">
                                    <li v-for="item in filterList" :key="item.roleId"
                                        @mousedown="chooseTopic(item.roleName)">{{ item.roleName }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="recommend">
                            <h6>推荐话题:</h6>
                            <ul>
                                <li v-for="(item) in recommendTopic" @click="chooseTopic(item)">{{ item }}</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div class=" submit">
                    <button @click="submit">发布</button>
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>
import { reqDeleteImage, reqUploadCreationImage, reqSaveCreation } from '@/api'
import Message from '@/plugins/message';
import { computed } from '@vue/reactivity';
import { throttle } from 'lodash';
import { onMounted, reactive, ref, inject } from 'vue'
import { useStore } from 'vuex';

const creation = ref(null)

const uploadInfo = reactive({
    title: '',
    coverUrl: '',
    imageList: [],
    introduce: '',
    type: '',
    topics: [],
    user: {}
})
const { imageList } = uploadInfo


const model = [
    {
        name: '同人',
        id: 'some-person',
        topics: ['表情包', 'Cosplay', '同人图', '草稿路线']
    },

    {
        name: 'COS',
        id: 'cos',
        topics: ['Cosplay', '试装', '试妆', '场照', '漫展', '刻晴', '申鹤']

    }
]

const recommendTopic = computed(() => {
    uploadInfo.topics = []
    if (uploadInfo.type == "") {
        return []
    } else {
        return model.filter(p => p.name == uploadInfo.type)[0].topics
    }

})
const chooseTopic = (topic) => {
    keywords.value = null
    if (uploadInfo.topics.includes(topic)) {
        removeTopic(topic)
        return ''
    }
    uploadInfo.topics.push(topic)

}
const removeTopic = (topic) => {
    uploadInfo.topics = uploadInfo.topics.filter(p => p !== topic)

}
let webImageUrl = ref(null)
const deleteImageList = reactive([])
const back = (url) => {
    deleteImageList.push(url)
    for (let i = 0; i < imageList.length; i++) {
        if (imageList[i].url == url) {
            imageList.splice(i, 1)
            break
        }
    }
}

const uploadImage = (event) => {
    const formData = new FormData()
    Array.from(event.target.files).forEach((item) => {
        formData.append('file', item)
    })
    reqUploadCreationImage(formData).then(res => {
        Array.from(res.data).forEach(item => {

            imageList.push(item)
        })
    }, err => {
        console.log(err)
    })
    event.target.value = ''
}
const uploadWebImage = () => {
    if (webImageUrl.value == null || webImageUrl == '') {
        Message({ type: 'warning', delay: 3000, text: '请填写正确的URL！' })
        return ''
    }

    imageList.push({ url: webImageUrl.value })
    webImageUrl.value = null
}
let creationInfo = {};

const getResult = () => {
    uploadInfo.introduce = creation.value.querySelector('.text').innerText
    if (uploadInfo.imageList.length > 0) {
        uploadInfo.coverUrl = uploadInfo.imageList[0].url
    }
    if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).userAccount) {
        uploadInfo.user.userAccount = JSON.parse(localStorage.getItem('token')).userAccount
    } else {
        uploadInfo.user.userAccount = ''
    }
    creationInfo = { ...uploadInfo }
    creationInfo.imageList = JSON.stringify(creationInfo.imageList)
    creationInfo.topics = JSON.stringify(creationInfo.topics)

}
const checkLegal = () => {
    let flag = false;
    if (creationInfo.user.userAccount == "") {
        Message({ type: 'warning', text: '先登录才能发表哦！', delay: 3000 })
        return flag
    }
    if (creationInfo.title == "" || creationInfo.title.length > 30) {
        Message({ type: 'warning', text: '标题必须为(1-30)个字符', delay: 3000 })
        return flag
    }
    if (creationInfo.introduce == "") {
        Message({ type: 'warning', text: '图片介绍内容不能为空', delay: 3000 })
        return flag
    }
    if (creationInfo.type == "") {
        Message({ type: 'warning', text: '前选择分类模块', delay: 3000 })
        return flag
    }
    if (creationInfo.topics == '[]') {
        Message({ type: 'warning', text: '至少选项一个话题哦', delay: 3000 })
        return flag
    }
    if (creationInfo.imageList == '[]') {
        Message({ type: 'warning', text: '至少上传一张照片哦', delay: 3000 })
        return flag
    }
    return !flag;
}
const reload = inject('reload')
const submit = throttle(() => {
    getResult()
    if (checkLegal()) {
        reqDeleteImage(deleteImageList)
        reqSaveCreation(creationInfo).then(res => {
            if (res.code == 204) {
                Message({ type: 'success', text: res.message, delay: 3000 })
                const timer = setInterval(() => {
                    clearTimeout(timer)
                    reload()
                }, 2000);
            } else {
                Message({ type: 'error', text: res.message, delay: 3000 })
            }
        }, err => {
            Message({ type: 'error', text: err.message, delay: 3000 })
        })

    }


}, 2500, { leading: true, trailing: false })

//获取role列表
const _store = useStore()
const roleList = computed(() => _store.state.role.roleList)
if (roleList.value.length === 0) {
    _store.dispatch('role/getRoleList')
}
const keywords = ref(null)
const filterList = computed(() => {
    if (keywords.value) return roleList.value.filter(p => p.roleName.includes(keywords.value))
    return []
})
</script>

<style lang="scss" scoped>
.cos-some-person-upload {
    padding-top: 1.3902rem;
    background-color: #F7F8FC;
    display: flex;
    justify-content: center;
    min-height: 100vh;

    @media screen and (max-width:768px) {
        .content {
            padding-right: .158rem !important;
        }

        .title,
        .image-introduce-container,
        .upload-image-container,
        .model-container,
        .topic-container {
            >div {
                margin-left: .158rem !important;
            }
        }

        .upload-inner {
            width: 100% !important;
        }

    }

    .upload-inner {
        width: 74%;
        background-color: #fff;
        padding-bottom: 100px;

        .header {
            height: 50px;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;


            h6 {
                flex: 1;
                font-size: 16px;
                margin-left: 3.5%;
            }

            .draft {
                margin-right: 3.5%;

                span {
                    color: gray;
                    font-size: 16px;
                }

                svg {
                    vertical-align: middle;
                    width: 25px;
                    height: 25px;
                    margin-right: 8px;
                }
            }
        }

        .title,
        .image-introduce-container,
        .upload-image-container,
        .model-container,
        .topic-container {
            display: flex;



            >span {
                flex: 1;
                text-align: right;
                font-size: .2528rem;
                min-width: 1.2638rem;


            }

            >div {
                flex: 6;
                margin-left: 40px;
            }


        }

        .content {
            padding-top: 20px;
            padding-right: 70px;



            .title {
                margin-bottom: 30px;

                .title-input {
                    border: 1px solid #eee;
                    height: 46px;
                    box-sizing: border-box;
                    border-radius: 6px;

                    input {
                        height: 100%;
                        width: 100%;
                        outline: none;
                        border: none;
                        padding-left: 8px;
                        font-size: 16px;
                        box-sizing: border-box;
                    }
                }
            }

            .image-introduce-container {
                margin-bottom: 36px;

                .image-introduce {
                    .bar {
                        height: 46px;
                        background-color: #FCFCFC;
                        border-radius: 6px;
                        border: 1px solid #eee;
                        padding-left: 20px;
                        line-height: 46px;

                        svg {
                            width: 26px;
                            height: 26px;
                            vertical-align: middle;
                        }
                    }

                    .text {
                        min-height: 230px;
                        font-size: 16px;
                        border: 1px solid #eee;
                        outline: none;
                    }
                }
            }

            .upload-image-container {
                margin-bottom: 36px;

                .upload-image {
                    display: flex;
                    gap: 10px 10px;
                    flex-wrap: wrap;

                    .user-upload-img {
                        font-size: 0;
                        position: relative;


                        &:first-of-type {
                            &::after {
                                content: "封面";
                                position: absolute;
                                height: 26px;
                                width: 100%;
                                color: #fff;
                                line-height: 26px;
                                background-color: rgba(10, 17, 17, .5);
                                bottom: 0;
                                left: 0;
                                font-size: 14px;
                                text-align: center;
                                border-bottom-right-radius: 8px;
                                border-bottom-left-radius: 8px;
                            }
                        }

                        img {
                            width: 280px;
                            height: 190px;
                            border-radius: 8px;
                            object-fit: cover;
                        }

                        .back {
                            position: absolute;
                            top: 10px;
                            right: 10px;
                            width: 25px;
                            height: 25px;
                            border-radius: 50%;
                            text-align: center;
                            background: rgba(10, 17, 17, .4);
                            cursor: pointer;

                            i {
                                font-weight: 400px;
                                font-size: 18px;
                                color: #fff;
                                line-height: 25px;
                            }
                        }
                    }

                }

                .icon {
                    font-size: 16px;
                    font-weight: 600;
                    color: #fff;
                    background: skyblue;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                }
            }

            .upload-user-image {


                label {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    width: 250px;
                    height: 190px;
                    color: gray;
                    font-size: 13px;
                    line-height: 20px;
                    justify-content: center;
                    background-color: #F5F5F5;
                    box-sizing: border-box;
                    padding: 0 20px;
                    text-align: center;
                    border-radius: 6px;
                    cursor: pointer;


                }

            }

            .upload-web-image {
                width: 250px;
                height: 190px;
                color: gray;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                border: 1px solid #EEE;
                box-sizing: border-box;
                gap: 10px 0;
                background: #F5F5F5;
                border-radius: 6px;
                cursor: pointer;

                input {
                    outline: none;
                    height: 24px;
                    width: 66%;
                    border-radius: 4px;
                    border: 1px solid gray;
                    padding-left: 6px;
                    background-color: transparent;

                }

                button {
                    background: skyblue;
                    color: #fff;
                    padding: 4px 35px;
                    font-size: 14px;
                    border: 1px solid #fff;
                    border-radius: 10px;
                    transition: all 0.3s linear;

                    &:hover {
                        background: linear-gradient(60deg, skyblue, #fff, #EEE);
                        color: gray;
                    }
                }
            }
        }

        .model-container {
            margin-bottom: 36px;

            .model {
                display: flex;
                align-items: center;

                >div {
                    display: flex;
                    align-items: center;
                }

                input {
                    height: 18px;
                    width: 18px;

                }

                label {
                    margin: 0 16px 0 5px;
                    font-size: 16px;
                    color: gray;

                }
            }
        }

        .topic-container {
            margin-bottom: 40px;

            .selcet,
            .recommend ul {
                list-style: none;
                display: flex;

                li {
                    background: #fff;
                    border: 1px solid #ebebeb;
                    font-size: 14px;
                    border-radius: 15px;
                    padding: 3px 18px;
                    color: gray;
                    cursor: pointer;

                    &:hover {
                        background: #eee;
                    }

                }
            }

            .selcet {
                gap: 10px 10px;

                li {
                    i {
                        font-size: 16px;
                        color: gray;
                    }

                    padding-right: 10px;
                }
            }

            .topic {
                .serch-topic {
                    >p {
                        font-size: .2212rem;
                        color: gray;
                    }

                    .input {
                        width: 40%;
                        height: .7rem;
                        border: 1px solid #ebebeb;
                        border-radius: .0632rem;
                        position: relative;
                        margin: .2528rem 0;


                        input {
                            display: inline-block;
                            box-sizing: border-box;
                            width: 100%;
                            height: 100%;
                            padding-left: .2528rem;
                            border: none;
                            outline: none;
                            background-color: transparent;

                        }

                        input:focus+ul {
                            display: flex !important;
                        }

                        ul {
                            list-style: none;
                            display: flex;
                            position: absolute;
                            flex-direction: column;
                            width: 100%;
                            top: 0.7109rem;
                            left: 0;
                            border-radius: .0948rem;
                            border: .0158rem solid #eee;
                            background-color: #fff;
                            max-height: calc(.6319rem * 6);
                            overflow-y: auto;
                            display: none;

                            &::-webkit-scrollbar {
                                width: .079rem;
                                background-color: rgba(200, 200, 200, .4);
                            }

                            &::-webkit-scrollbar-thumb {
                                width: .079rem;
                                border-radius: .158rem;
                                background-color: rgba(20, 45, 234, .3);
                            }



                            li {
                                width: 100%;
                                height: .6319rem;
                                padding-left: .2528rem;
                                box-sizing: border-box;
                                line-height: .6319rem;
                                color: gray;
                                cursor: pointer;

                                &:hover {
                                    background-color: rgba(200, 200, 200, .1);
                                }
                            }

                        }

                    }
                }

                .recommend {
                    h6 {
                        font-size: 16px;
                        color: gray;
                        margin: 26px 0 26px 4px;
                    }

                    ul {
                        gap: 10px 10px;
                        flex-wrap: wrap;


                    }
                }
            }
        }

        .submit {
            display: flex;
            justify-content: center;

            button {
                background: skyblue;
                color: #fff;
                letter-spacing: 1px;
                font-size: 16px;
                font-weight: 560;
                padding: 8px 66px;
                border-radius: 8px;
                border: 1px solid #fff;
                transition: all 0.4s linear;

                &:hover {
                    background: linear-gradient(60deg, skyblue, #fff, #EEE);
                    color: gray;
                }
            }
        }

    }
}
</style>