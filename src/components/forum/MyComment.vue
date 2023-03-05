<template>
    <div class="main" ref="comment">
        <div class="comment-contaniner">
            <div class="comment">
                <p>看帖是喜欢，评论才是真爱：</p>
                <div class="text-container" contenteditable="true" :data-placeholder="copyPlaceholder"
                    @input="changePlaceholder">
                </div>
            </div>
            <div class="operation" @click.stop>
                <div class="icon-container">
                    <svg @click="changeShow" t="1664962578832" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2661" width="28" height="28">
                        <path
                            d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m0 85.333334a341.333333 341.333333 0 1 0 0 682.666666 341.333333 341.333333 0 0 0 0-682.666666z m74.794667 426.752h124.928c10.112 0 17.322667 6.656 11.392 21.632a224.085333 224.085333 0 0 1-420.992 3.413333c-9.813333-21.418667 4.864-25.045333 9.642666-25.045333zM661.333333 362.666667a64 64 0 1 1 0 128 64 64 0 0 1 0-128z m-298.666666 0a64 64 0 1 1 0 128 64 64 0 0 1 0-128z"
                            p-id="2662" fill="#bfbfbf"></path>
                    </svg>

                    <svg @click="uploadFile" t="1664962824757" class="icon" viewBox="0 0 1293 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="18127" width="28" height="28">
                        <path
                            d="M805.447934 1024h-677.024794c-63.471074 0-116.363636-52.892562-116.363636-116.363636V116.363636c0-63.471074 52.892562-116.363636 116.363636-116.363636h253.884298c23.272727 0 44.429752 6.347107 63.471074 19.041322l4.231405 2.115703 131.173554 112.132231c8.46281 4.231405 16.92562 8.46281 27.504132 8.46281h463.338843c63.471074 0 116.363636 52.892562 116.363637 116.363636v332.16529c0 16.92562-14.809917 31.735537-31.735538 31.735537s-31.735537-14.809917-31.735537-31.735537V258.115702c0-29.619835-23.272727-52.892562-52.892562-52.892562h-465.454545c-23.272727 0-44.429752-6.347107-63.471075-19.041322l-4.231405-2.115702L407.695868 71.933884c-8.46281-4.231405-16.92562-8.46281-27.504132-8.46281h-253.884298c-29.619835 0-52.892562 23.272727-52.892562 52.892562v789.157025c0 29.619835 23.272727 52.892562 52.892562 52.892562h677.024793c16.92562 0 31.735537 14.809917 31.735538 31.735537s-12.694215 33.85124-29.619835 33.85124z"
                            fill="#bfbfbf" p-id="18128"></path>
                        <path
                            d="M786.406612 554.31405l-165.024794-165.024794c-6.347107-6.347107-16.92562-8.46281-25.38843-8.46281-8.46281 0-16.92562 2.115702-25.388429 8.46281L409.81157 554.31405c-12.694215 12.694215-12.694215 31.735537 0 44.429752 12.694215 12.694215 31.735537 12.694215 44.429752 0l112.132232-112.132232v294.082645c0 16.92562 14.809917 31.735537 31.735537 31.735537s31.735537-14.809917 31.735537-31.735537V486.61157l112.132232 112.132232c12.694215 12.694215 31.735537 12.694215 44.429752 0 12.694215-10.578512 12.694215-31.735537 0-44.429752z"
                            fill="#bfbfbf" p-id="18129"></path>
                    </svg>
                    <svg t="1666069965950" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="1672" width="28" height="28">
                        <path
                            d="M922.88 735.456c-13.184 0-24.672 6.624-31.296 16.544-28.384 38.464-70.624 71.168-127.008 98.144-57.088 27.296-127.872 40.96-212.384 40.96-79.008 0-151.04-13.12-216-39.36-65.024-26.208-114.688-66.816-149.024-121.76s-51.52-120.448-51.52-196.512c0-72.64 17.184-140.704 51.52-204.224 34.336-63.488 82.72-112.224 145.152-146.24 62.4-33.984 131.328-50.976 206.784-50.976 66.112 0 126.56 13.504 181.216 40.512 54.688 27.008 95.808 63.04 123.36 108.032a273.248 273.248 0 0 1 41.376 145.28c0 44.448-10.752 87.488-32.192 129.28-21.44 41.728-50.56 75.008-87.328 99.84-27.744 18.944-50.144 28.416-67.264 28.416a34.24 34.24 0 0 1-23.936-9.056 28.448 28.448 0 0 1-9.92-21.696c0-4.672 4.832-28.704 14.496-72.16l65.824-295.2h-0.128c0.608-2.752 0.96-5.6 0.96-8.512 0-22.4-18.88-40.576-42.176-40.576-20.16 0-36.96 13.664-41.12 31.872l-0.288-0.064-16.448 72.16c-18.368-28.864-40.32-50.336-65.792-64.48a163.264 163.264 0 0 0-80.32-21.184c-36.768 0-74.688 12.416-113.664 37.248-39.04 24.832-71.68 62.016-98.016 111.52-26.24 49.536-39.424 98.976-39.424 148.352 0 40 8.48 76.8 25.408 110.336 16.96 33.536 38.976 58.4 66.048 74.56 27.072 16.128 54.976 24.192 83.712 24.192 26.112 0 52.16-7.04 78.08-21.184a264.32 264.32 0 0 0 70.432-56.128c1.92 18.944 5.024 32.32 9.216 40.032 6.432 12.16 16.512 21.44 30.208 27.936 13.696 6.528 31.68 9.792 53.952 9.792 69.664 0 133.856-31.36 192.544-94.08 65.824-69.824 98.688-149.76 98.688-239.808 0-63.04-15.648-121.408-46.912-175.104-36.8-62.4-87.008-109.376-150.72-140.896C695.296 79.776 623.456 64 543.424 64c-103.2 0-191.008 22.4-263.424 67.072-72.416 44.704-128.32 109.12-167.616 193.28A502.944 502.944 0 0 0 64 540.896c0 67.968 13.536 131.296 40.64 189.984 21.6 46.272 53.696 87.136 96.256 122.72 42.56 35.52 94.112 62.144 154.592 79.84 60.48 17.696 126.496 26.56 198.08 26.56 77.76 0 144.192-9.888 199.36-29.6 55.136-19.712 102.72-46.496 142.72-80.32a422.848 422.848 0 0 0 57.024-57.44c0.16-0.192 0.16-0.384 0.288-0.608 4.384-5.888 7.04-13.056 7.04-20.832 0.064-19.712-16.608-35.744-37.12-35.744z m-322.304-183.584c-11.616 31.488-26.56 57.504-44.736 77.984-18.24 20.48-37.344 35.968-57.312 46.4-20.064 10.368-39.04 15.584-57.12 15.584-27.072 0-51.104-11.84-72.096-35.424-20.96-23.584-31.456-56.64-31.456-99.2 0-26.688 5.152-56 15.52-88 10.272-31.968 24-59.136 41.088-81.504 17.088-22.336 34.752-38.56 52.992-48.64a118.464 118.464 0 0 1 58.304-15.136c31.296 0 57.792 11.648 79.616 34.88 21.76 23.296 32.64 56.096 32.64 98.272 0 31.68-5.824 63.264-17.44 94.784z"
                            fill="#cdcdcd" p-id="1673"></path>
                    </svg>
                    <input type="file" id="inputFile" style="display: none;" accept="image/*" @change="getUrl($event)">

                </div>
                <button class="comment-submit" @click="commentSubmit">评论</button>
                <div class="emoticon-container" v-show="emoticonIsShow" @click.stop>
                    <ul class="emoticon-list">
                        <li v-for="item in emotions" @click="selectIcon($event)"><img v-lazy="item.url"
                                :alt="item.name">
                        </li>
                    </ul>
                    <div class="select-icon-class">
                        <ul class="icon-class-list">
                            <li v-for="i in 5"><img v-lazy="require(`@/assets/comment/class${i}.png`)"></li>
                            <li class="left-icon"><i class="fa fa-angle-left" aria-hidden="true"></i></li>
                            <li class="right-icon"><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                        </ul>

                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { onBeforeUnmount, onMounted, reactive, ref, toRefs } from "vue";
import { useStore } from 'vuex'
import { reqCommentImgUrl } from '@/api'
import Message from "@/plugins/message";
export default {
    props: ['commentInfo'],
    setup(props) {
        let placeholder = reactive({
            originPlaceholder: "请开始你的表演…",
            copyPlaceholder: '请开始你的表演…'
        })
        const _store = useStore()
        let comment = ref(null)
        const changePlaceholder = () => {
            if (comment.value.querySelector('.text-container').innerHTML != "" && comment.value.querySelector('.text-container').innerHTML != '<br>') {
                placeholder.copyPlaceholder = ""
            } else {
                placeholder.copyPlaceholder = "请开始你的表演…"
            }
        }
        let emoticonIsShow = ref(false)
        const changeShow = () => {
            setTimeout(() => {
                emoticonIsShow.value = !emoticonIsShow.value
            }, 5);
        }
        const close = () => {
            emoticonIsShow.value = false
        }
        const selectIcon = (event) => {
            let textObj = comment.value.querySelector('.text-container');
            let img = document.createElement("img")
            img.src = event.currentTarget.querySelector("img").src
            textObj.appendChild(img);
            changePlaceholder()
        }
        onMounted(() => {
            document.body.addEventListener("click", close)
        })

        onMounted(() => {
            _store.dispatch('forum/getAllEmotions')
        })
        const emotions = computed(() => _store.state.forum.emotions)

        onBeforeUnmount(() => {
            document.body.removeEventListener("click", close)
        })

        const getUrl = (event) => {
            const formData = new FormData()
            formData.append('file', event.target.files[0])
            reqCommentImgUrl(formData).then(res => {
                console.log(res)
                insertImage(res.data)

            })
            event.target.value = ""

        }
        const insertImage = (imgList) => {
            if (imgList.length == 0) {
                return ""
            }
            imgList.forEach((item) => {
                const textContainerObj = comment.value.querySelector('.text-container')
                const img = document.createElement('img')
                img.src = item.url;
                img.setAttribute('data-name', 'userUpload')
                textContainerObj.appendChild(img)
            })
        }
        const uploadFile = () => {
            const imgList = comment.value.querySelectorAll('.text-container img[data-name=userUpload]')
            if (imgList.length === 1) {
                Message({ type: 'warning', text: "最多上传一张自定义照片哦", delay: 3000 })
                return ""
            }
            comment.value.querySelector(".operation input[type=file]").click()
        }
        //上传
        const commentInformation = {
            replierAccount: '',
            byReplierAccount: null,
            parentCommentId: null,
            commentContent: '',
        }
        const setCommentInformation = () => {
            let flag = false;
            if (JSON.parse(localStorage.getItem('token')) && JSON.parse(localStorage.getItem('token')).userAccount) {
                commentInformation.replierAccount = JSON.parse(localStorage.getItem('token')).userAccount
            } else {
                Message({ type: 'warning', text: '只有先登才能发表哦！', delay: 2500 })
                return flag
            }
            const ValueHtml = comment.value.querySelector('.text-container').innerHTML
            if (ValueHtml.length == 0) {
                Message({ type: 'warning', text: '你还没有输入你想发表的内容哦！', delay: 2500 })
                return flag
            }
            commentInformation.commentContent = ValueHtml
            if (props.commentInfo.creationId) {
                commentInformation.creationId = props.commentInfo.creationId
            }
            if (props.commentInfo.postId) {
                commentInformation.postId = props.commentInfo.postId
            }
            commentInformation.byReplierAccount = props.commentInfo.replierAccount || null
            if (props.commentInfo.parentCommentId == -1) {
                commentInformation.parentCommentId = props.commentInfo.commentId
            } else {
                commentInformation.parentCommentId = props.commentInfo.parentCommentId
            }
            console.log(commentInformation.replierAccount, props.commentInfo.replierAccount)
            if (props.commentInfo.replierAccount == commentInformation.replierAccount) {
                Message({ type: 'warning', text: '你还想自己回复自己┗( ▔, ▔ )┛', delay: 3000 })
                return flag
            }
            return !flag
        }

        const commentSubmit = () => {

            if (setCommentInformation()) {
                if (props.commentInfo.creationId) {
                    _store.dispatch('comment/saveCreationComment', { creationComment: commentInformation, htmlObj: comment.value.querySelector('.text-container') })
                    _store.commit('creation/saveNewCommentTotal')
                }
                if (props.commentInfo.postId) {
                    _store.dispatch('comment/savePostComment', { postComment: commentInformation, htmlObj: comment.value.querySelector('.text-container') })
                    _store.commit('post/saveNewCommentTotal')
                }
            }

        }

        return {
            ...toRefs(placeholder),
            comment,
            changePlaceholder,
            emoticonIsShow,
            changeShow,
            selectIcon,
            commentSubmit,
            getUrl,
            uploadFile,
            emotions,
            commentInformation
        }

    }
}
</script>

<style lang="scss" scoped>
.main {

    .comment-contaniner {
        max-width: 580px;

        .comment {
            position: relative;

            >p {
                color: #ccc;
                font-size: 16px;
                letter-spacing: 0.2px;
                margin-bottom: 15px;
            }

            .text-container {
                position: relative;
                max-width: 580px;
                min-height: 100px;
                border-radius: 8px;
                border: 1px solid#ebebeb;
                outline: none;
                background-color: #fff;
                box-sizing: border-box;
                padding: 6px 6px 8px 8px;
                max-height: 440px;
                color: #666;
                overflow: auto;

                &:focus {
                    border: 1px solid skyblue;
                }

                :deep(img) {
                    box-sizing: border-box;
                    max-width: 90%;
                }

                &::before {
                    content: attr(data-placeholder);
                    position: absolute;
                    color: #ccc;
                    letter-spacing: 0.2px;
                    font-size: 14px;

                }


            }

        }

        .operation {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            position: relative;

            .icon-container {
                flex: 1;

                svg {
                    margin-right: 20px;
                    cursor: pointer;
                }
            }



            button {
                border: none;
                color: #fff;
                background-color: #00c3ff;
                padding: 7px 27px;
                font-size: 16px;
                transition: all 0.5s;
                border-radius: 4px;
                cursor: pointer;

                &:hover {
                    background-color: #00d5ff;
                }
            }

            .emoticon-container {
                position: absolute;
                bottom: -288px;
                height: 293px;
                max-width: 430px;
                width: 100%;
                z-index: 22;
                background-color: #fff;
                box-shadow: -2px -2px 5px rgba($color: #000000, $alpha: .1);

                .emoticon-list {
                    list-style: none;
                    width: 100%;
                    height: 248px;

                    overflow: auto;

                    li {
                        display: inline-block;
                        margin: 8px 8px;

                        img {
                            width: 65px;
                            height: 65px;
                            object-fit: cover;
                        }
                    }
                }

                .select-icon-class {
                    max-width: 430px;
                    width: 100%;
                    height: 45px;
                    overflow-x: auto;
                    background-color: #f5f5f5;

                    .icon-class-list {
                        list-style: none;
                        display: flex;
                        height: 100%;
                        align-items: center;
                        justify-content: space-between;

                        li {

                            margin-right: 20px;
                            height: 40px;
                            width: 40px;
                            text-align: center;

                            &:hover {
                                background-color: rgba($color: #000000, $alpha: .1);
                            }

                            img {
                                width: 40px;
                                height: 40px;
                                object-fit: cover;
                            }

                        }

                        .left-icon {
                            i {
                                color: #ccc;
                                font-size: 35px;
                                line-height: 40px;
                            }

                            margin-right: 15px;

                        }

                        .right-icon {


                            i {
                                color: #ccc;
                                font-size: 35px;
                                line-height: 40px;

                            }
                        }
                    }
                }
            }
        }
    }
}
</style>