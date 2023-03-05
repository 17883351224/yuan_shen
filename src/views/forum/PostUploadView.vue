<template>
    <div class="post-upload" ref="postUpload">
        <div class="post-inner">
            <div class="header">
                <h3>发布帖子</h3>
                <div class="draft">
                    <svg t="1665561837764" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="5271" width="32" height="32">
                        <path
                            d="M825.549 554.465h-28.065V227.484c0-42.156-34.296-76.452-76.451-76.452H302.968c-42.156 0-76.452 34.296-76.452 76.452v326.981h-28.064c-42.156 0-76.452 34.296-76.452 76.451v165.601c0 42.155 34.296 76.451 76.452 76.451h627.097c42.155 0 76.451-34.296 76.451-76.451V630.916c0-42.155-34.296-76.451-76.451-76.451zM286.516 227.484c0-9.071 7.38-16.452 16.452-16.452h418.064c8.918 0 16.451 7.534 16.451 16.452v326.981H658.04c-29.906 0-57.226 17.592-69.599 44.815l-26.081 57.377H461.64l-26.081-57.377c-12.375-27.225-39.693-44.815-69.599-44.815h-79.444V227.484zM842 796.517c0 8.918-7.533 16.451-16.451 16.451H198.452c-9.071 0-16.452-7.38-16.452-16.451V630.916c0-9.071 7.38-16.451 16.452-16.451H365.96a16.487 16.487 0 0 1 14.977 9.644l27.886 61.348c8.615 18.954 27.635 31.201 48.455 31.201h109.444c20.819 0 39.839-12.247 48.455-31.201l27.887-61.349a16.486 16.486 0 0 1 14.977-9.643H825.55c8.918 0 16.451 7.534 16.451 16.451v165.601z"
                            p-id="5272" fill="#bfbfbf"></path>
                        <path
                            d="M639.983 345.791c16.568 0 30-13.432 30-30s-13.432-30-30-30H384.016c-16.568 0-30 13.432-30 30s13.432 30 30 30h255.967zM585.064 416H438.936c-16.568 0-30 13.432-30 30s13.432 30 30 30h146.129c16.568 0 30-13.432 30-30s-13.432-30-30.001-30z"
                            p-id="5273" fill="#bfbfbf"></path>
                    </svg>
                    <span>草稿箱</span>
                </div>
            </div>
            <div class="title">
                <div class="left"><span>标题：</span></div>
                <div class="input-title-container right">
                    <input type="text" placeholder="标题（必填）" v-model.trim="title">
                    <span>不超过30字</span>
                </div>
            </div>
            <div class="content-container">
                <div class="left"><span>内容：</span></div>
                <WangEditor class="right" ref="editor" :editorInfo="editorInfo" />
            </div>
            <div class="post-class">
                <div class="left">
                    <span>发布板块:</span>
                </div>
                <div class="postModule right">
                    <div v-for="(item, index) in topicClass" :key="index"><input type="radio" name="moudle"
                            :value="item.name" v-model.trim="postModule"
                            @click="topicIndex = index; selectTopic = []"><span>{{ item.name }}</span>
                    </div>
                </div>
            </div>
            <div class="topic">
                <div class="left"><span>话题：</span></div>
                <div class="topic-list right">
                    <ul>
                        <li>
                            <div class="container">
                                <ul>
                                    <li v-for="(item, index) in selectTopic" :key="index">{{ item }} &nbsp;<i
                                            class="fa fa-times" aria-hidden="true" @click="removeTopic(item)"></i></li>
                                </ul>
                            </div>
                            请选择话题:
                        </li>
                        <li v-for="(item, index) in showTopic" :key="index" @click=chooseTopic(item)>{{ item }}</li>
                    </ul>
                </div>

            </div>
            <div class="submit">
                <button @click="upLoad">发布</button>
            </div>


        </div>


    </div>
</template>

<script>
import { ref, toRefs, onBeforeUnmount, reactive, provide, watch } from 'vue'
import { reqDeleteImage, reqPublishPost } from "@/api"
import WangEditor from '@/components/editor/WangEditor.vue'
import { computed } from '@vue/reactivity';
import Message from '@/plugins/message';
import { debounce } from 'lodash';
import { baseURL } from '@/api/request'


export default {
    setup() {
        const editorInfo = {
            server: baseURL + '/post/upload'
        }
        const editor = ref(null);
        const imageRealityList = []
        //需要删除的图片
        let deleteImageList = []
        const upLoad = debounce(() => {
            getAllAndRealityImg()
            reqDeleteImage(deleteImageList)
            getPostInfo()
            console.log(post)
            if (checkLegal()) {
                reqPublishPost(post).then(res => {
                    let timer = setTimeout(() => {
                        window.location.reload();
                        clearTimeout(timer)
                    }, 3000);
                    Message({ type: 'success', text: '发布成功', delay: 3000 })
                })
            }



        }, 3000, { leading: true, trailing: false })
        const getAllAndRealityImg = () => {
            editor.value.getRealityImage().forEach((item) => {
                imageRealityList.push(item.src)
            })

            deleteImageList = editor.value.imageAllList.filter((p) => {
                return imageRealityList.includes(p) == false
            })
        }
        const postInfo = reactive({
            postModule: '',
            title: '',
            selectTopic: [],
            topicIndex: null,
        })

        const topicClass = [
            {
                name: '酒馆',
                topic: ['游戏心得', '角色攻略', '每日一水', '祈愿分享', '好友招募', '冒险家·集结', '探索解密', '萌新提问', '宵宫', '纳西妲', '虚空鼓动，劫火高扬', '香菱']
            },
            {

                name: '攻略',
                topic: ['角色攻略', '萌新指南', '探索解密', '讨伐手册', '宵宫', '纳西妲', '虚空鼓动，劫火高扬', '香菱']
            },
            {
                name: '硬核',
                topic: ['游戏心得', '彩蛋集锦', '角色攻略', '考据', '深境螺旋', '宵宫', '纳西妲', '虚空鼓动，劫火高扬', '香菱']
            },
        ]

        let showTopic = computed(() => {
            if (postInfo.topicIndex == null) {
                return []
            } else {
                return topicClass[postInfo.topicIndex].topic
            }

        })

        const chooseTopic = (topic) => {
            if (postInfo.selectTopic.includes(topic)) {
                removeTopic(topic)
            } else {
                postInfo.selectTopic.push(topic)
            }
        }
        const removeTopic = (topic) => {
            postInfo.selectTopic = postInfo.selectTopic.filter((p) => p != topic)
        }

        const checkLegal = () => {
            let flag = false;
            if (post.user.userAccount == "") {
                Message({ type: 'warning', text: '先登录才能发表哦！', delay: 3000 })
                return flag
            }
            if (post.postTitle == "" || post.postTitle.length > 30) {
                Message({ type: 'warning', text: '标题必须为(1-30)个字符', delay: 3000 })
                return flag
            }
            if (post.postContent == "<p><br></p>") {
                Message({ type: 'warning', text: '帖子内容不能为空', delay: 3000 })
                return flag
            }
            if (post.postModule == "") {
                Message({ type: 'warning', text: '前选择分类模块', delay: 3000 })
                return flag
            }
            if (post.postTopics == "[]") {
                Message({ type: 'warning', text: '至少选项一个话题哦', delay: 3000 })
                return flag
            }
            return !flag;
        }

        const post = {
            postTitle: "",
            postContent: "",
            postModule: "",
            postCover: "",
            postTopics: "",
            introduce: '',
            user: {
                userAccount: ''
            }
        }

        const getPostInfo = () => {
            post.postContent = editor.value.valueHtml
            post.postModule = postInfo.postModule
            post.postTitle = postInfo.title
            post.introduce = getText()
            post.postTopics = JSON.stringify(postInfo.selectTopic)
            if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).userAccount) {
                post.user.userAccount = JSON.parse(localStorage.getItem('token')).userAccount
            } else {
                post.user.userAccount = ""
            }
            let urlList = []
            if (imageRealityList.length >= 2) {
                urlList.push(imageRealityList[0])
                urlList.push(imageRealityList[1])
            } else if (imageRealityList.length > 0) {
                for (let i = 0; i < imageRealityList.length; i++) {
                    urlList.push(imageRealityList[i])
                }
            }
            post.postCover = JSON.stringify(urlList)
        }
        const getText = () => {
            return editor.value.valueText.replaceAll('\n', '').replaceAll(' ', '').substring(0, 100)
        }



        return {
            editor,
            upLoad,
            ...toRefs(postInfo),
            topicClass,
            showTopic,
            chooseTopic,
            removeTopic,
            editorInfo,




        };
    },
    components: { WangEditor }
}
</script>

<style lang="scss" scoped>
.post-upload {
    width: 100%;
    display: flex;
    justify-content: center;
    background: #F7F8FC;
    min-height: 100vh;

    .post-inner {
        width: 70%;
        margin-top: 100px;
        padding: 0 30px 80px 30px;

        background: #fff;
        border-radius: 6px;

        .header {
            height: 50px;
            display: flex;
            align-items: center;
            border-bottom: 2px solid #eee;
            justify-content: space-between;

            .draft {
                svg {
                    width: 22px;
                    height: 22px;
                    vertical-align: middle;
                    margin-right: 10px;

                }

                span {
                    font-size: 14px;
                    color: gray;
                }
            }

        }

        .left {
            width: 17%;
            font-size: 16px;
            padding-left: 60px;
            box-sizing: border-box;
            line-height: 60px;
        }

        .right {
            width: 83%;
            box-sizing: border-box;
        }

        .title {
            display: flex;
            height: 100px;
            align-items: center;

            .input-title-container {
                height: 50px;
                border: 1px solid #eee;
                border-radius: 4px;
                font-size: 17px;
                color: #333;
                padding-left: 16px;
                position: relative;

                span {
                    position: absolute;
                    color: gray;
                    font-size: 14px;
                    right: 20px;
                    top: 15px;
                }


                input {
                    height: 100%;
                    width: 100%;
                    border: none;
                    outline: none;
                    background: none;
                    font-size: 16px;
                    font-family: PingFang SC0;
                }

                &.avtive {
                    border: 1px solid skyblue;
                }
            }

        }

        .content-container {
            display: flex;


        }

        .post-class {
            height: 60px;
            display: flex;
            align-items: center;
            margin-top: 30px;

            .postModule {
                display: flex;
                align-items: center;

                input {
                    width: 18px;
                    height: 18px;
                    margin-right: 5px;
                    cursor: pointer;
                }

                span {
                    font-size: 16px;
                    margin-right: 35px;
                }
            }
        }

        .topic {
            margin-top: 30px;
            display: flex;

            .topic-list {

                >ul {
                    list-style: none;
                    display: flex;
                    gap: 20px;
                    min-height: 60px;
                    flex-wrap: wrap;


                    >li {
                        &:not(&:first-of-type) {
                            padding: 6px 24px;
                            font-size: 14px;
                            border-radius: 15px;
                            border: 1px solid #eee;
                            cursor: pointer;
                        }

                        &:first-child {
                            border: none;
                            display: block;
                            width: 100%;
                            font-size: 15px;
                            color: gray;

                            ul {
                                display: flex;
                                list-style: none;
                                gap: 20px;
                                flex-wrap: wrap;
                                margin: 0 0 20px 0;

                                li {
                                    color: #444;
                                    padding: 4px 15px;
                                    border-radius: 15px;
                                    background: #F5F5F5;
                                    border: 1px solid #eee;
                                }

                            }
                        }

                        &:not(:first-child):hover {
                            color: #fff;
                            background: #F5F5F5;
                            color: gray;

                        }
                    }

                }
            }

        }

        .submit {
            width: 100%;
            height: 160px;
            display: flex;
            justify-content: center;
            align-items: center;

            button {
                width: 200px;
                height: 44px;
                line-height: 44px;
                text-align: center;
                border-radius: 6px;
                background: #00c3ff;
                color: #fff;
                border: none;
                letter-spacing: 2px;
                font-size: 15px;
                transition: all 0.5s ease-in-out;

                &:hover {
                    cursor: pointer;
                    background: skyblue;
                }


            }
        }
    }
}
</style>