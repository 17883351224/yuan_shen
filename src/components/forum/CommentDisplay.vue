<template>
    <div class="comment-display" v-for="item in commentList" :key="item.commentId">
        <div class="one-class-coment">
            <div class="header">
                <div class="avatar">
                    <img v-lazy="item.replierUserInformation.userAvatar" alt="avatar">
                </div>
                <span class="nick-name">{{ item.replierUserInformation.userName }}</span>
                <span class="level">Lv.{{ item.replierUserInformation.userLevel }}</span>
            </div>
            <div class="content">
                <p v-html="item.commentContent"></p>
            </div>
            <div class="replay-container">
                <div class="replay-info">
                    <span class="time">{{ item.time }}</span>
                    <div class="replay" @click="changeShowIndex(item.commentId)">
                        <svg t="1666777834078" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="6780" width="32" height="32">
                            <path
                                d="M357.3248 487.41376c0 30.09536-24.42752 54.4256-54.56896 54.4256-30.09536 0-54.53312-24.33024-54.53312-54.4256 0-30.09024 24.43264-54.52288 54.53312-54.52288C332.89728 432.88576 357.3248 457.3184 357.3248 487.41376L357.3248 487.41376M357.3248 487.41376 357.3248 487.41376zM982.21568 457.22112c0-227.05152-212.05504-411.79648-472.77568-411.79648-260.72576 0-472.7808 184.74496-472.7808 411.79648 0 134.88128 75.9808 261.21728 203.41248 338.19136l0 129.81248c0 9.24672 5.0688 17.67936 13.16352 21.94944 3.72736 2.08384 7.64416 3.08736 11.86816 3.08736 4.864 0 9.63072-1.38752 13.80864-4.1728l59.88864-39.53152c1.14688-0.69632 2.23744-1.59232 2.87744-2.19136l67.7376-45.09184c33.77664 6.35904 67.44576 9.64096 100.1216 9.64096C770.16064 868.81792 982.21568 684.17024 982.21568 457.22112L982.21568 457.22112M277.41696 759.26528c-119.48032-67.33824-190.7456-180.2752-190.7456-302.14144 0-199.44448 189.65504-361.73824 422.76864-361.73824 233.11872 0 422.77376 162.29376 422.77376 361.73824 0 199.43936-189.71136 361.73312-422.76864 361.73312-32.57856 0-66.34496-3.57376-100.31616-10.624-6.45632-1.48992-13.312-0.09728-18.9696 3.67616l-79.26272 52.8384c-1.09056 0.5888-2.67776 1.98656-2.67776 1.98656l-18.07872 11.91936 0-97.62816C290.13504 771.97824 285.21472 763.72992 277.41696 759.26528L277.41696 759.26528M277.41696 759.26528 277.41696 759.26528zM573.10208 472.1152c0 30.09536-24.42752 54.6304-54.62528 54.6304-30.09024 0-54.52288-24.53504-54.52288-54.6304 0-30.09536 24.43264-54.43584 54.52288-54.43584C548.66944 417.6896 573.10208 442.02496 573.10208 472.1152L573.10208 472.1152M573.10208 472.1152 573.10208 472.1152zM786.36032 472.1152c0 30.09536-24.43776 54.6304-54.53312 54.6304s-54.528-24.53504-54.528-54.6304c0-30.09536 24.43264-54.43584 54.528-54.43584C761.92256 417.6896 786.36032 442.02496 786.36032 472.1152L786.36032 472.1152M786.36032 472.1152 786.36032 472.1152z"
                                p-id="6781" fill="#cdcdcd"></path>
                        </svg>
                        <span>回复</span>
                    </div>
                </div>
                <MyComment v-show="showIndex == item.commentId" :commentInfo="item"></MyComment>
            </div>
            <div class="other-container" v-if="!item.allSonComment.length == 0">
                <div class="item" v-for="(son ) in item.allSonComment" :key="son.commentId">
                    <div class="header">
                        <div class="avatar">
                            <img v-lazy="son.replierUserInformation.userAvatar" alt="avatar">
                        </div>
                        <span>{{ son.replierUserInformation.userName }}</span>
                        <span class="replay">回复</span>
                        <div class="avatar">
                            <img v-lazy="son.byReplierUserInformation.userAvatar" alt="avatar">
                        </div>
                        <span>{{ son.byReplierUserInformation.userName }}</span>
                    </div>
                    <div class="content">
                        <p v-html="son.commentContent"></p>
                    </div>
                    <div class="replay-container">
                        <div class="replay-info">
                            <span class="time">{{ son.time }}</span>
                            <div class="replay" @click="changeShowIndex(son.commentId)">
                                <svg t="1666777834078" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="6780" width="32" height="32">
                                    <path
                                        d="M357.3248 487.41376c0 30.09536-24.42752 54.4256-54.56896 54.4256-30.09536 0-54.53312-24.33024-54.53312-54.4256 0-30.09024 24.43264-54.52288 54.53312-54.52288C332.89728 432.88576 357.3248 457.3184 357.3248 487.41376L357.3248 487.41376M357.3248 487.41376 357.3248 487.41376zM982.21568 457.22112c0-227.05152-212.05504-411.79648-472.77568-411.79648-260.72576 0-472.7808 184.74496-472.7808 411.79648 0 134.88128 75.9808 261.21728 203.41248 338.19136l0 129.81248c0 9.24672 5.0688 17.67936 13.16352 21.94944 3.72736 2.08384 7.64416 3.08736 11.86816 3.08736 4.864 0 9.63072-1.38752 13.80864-4.1728l59.88864-39.53152c1.14688-0.69632 2.23744-1.59232 2.87744-2.19136l67.7376-45.09184c33.77664 6.35904 67.44576 9.64096 100.1216 9.64096C770.16064 868.81792 982.21568 684.17024 982.21568 457.22112L982.21568 457.22112M277.41696 759.26528c-119.48032-67.33824-190.7456-180.2752-190.7456-302.14144 0-199.44448 189.65504-361.73824 422.76864-361.73824 233.11872 0 422.77376 162.29376 422.77376 361.73824 0 199.43936-189.71136 361.73312-422.76864 361.73312-32.57856 0-66.34496-3.57376-100.31616-10.624-6.45632-1.48992-13.312-0.09728-18.9696 3.67616l-79.26272 52.8384c-1.09056 0.5888-2.67776 1.98656-2.67776 1.98656l-18.07872 11.91936 0-97.62816C290.13504 771.97824 285.21472 763.72992 277.41696 759.26528L277.41696 759.26528M277.41696 759.26528 277.41696 759.26528zM573.10208 472.1152c0 30.09536-24.42752 54.6304-54.62528 54.6304-30.09024 0-54.52288-24.53504-54.52288-54.6304 0-30.09536 24.43264-54.43584 54.52288-54.43584C548.66944 417.6896 573.10208 442.02496 573.10208 472.1152L573.10208 472.1152M573.10208 472.1152 573.10208 472.1152zM786.36032 472.1152c0 30.09536-24.43776 54.6304-54.53312 54.6304s-54.528-24.53504-54.528-54.6304c0-30.09536 24.43264-54.43584 54.528-54.43584C761.92256 417.6896 786.36032 442.02496 786.36032 472.1152L786.36032 472.1152M786.36032 472.1152 786.36032 472.1152z"
                                        p-id="6781" fill="#cdcdcd"></path>
                                </svg>
                                <span>回复</span>
                            </div>
                        </div>
                        <MyComment v-show="showIndex == son.commentId" :commentInfo="son"></MyComment>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyComment from './MyComment.vue';
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex';
import { computed } from '@vue/reactivity';
const props = defineProps(['creationId', 'postId'])
const showIndex = ref(-2)
const changeShowIndex = (value) => {
    if (value == showIndex.value) {
        showIndex.value = -2
        return ''
    }
    showIndex.value = value

}
const _store = useStore()
onMounted(() => {
    if (props.creationId) {
        _store.dispatch('comment/getCreationCommentByCreationId', props.creationId)
    }
    if (props.postId) {
        _store.dispatch('comment/getPostCommentByPostId', props.postId)
    }


})
const commentList = computed(() => _store.state.comment.commentList)

</script>

<style lang="scss" scoped>
.comment-display {
    padding: .4739rem;
    background-color: #fff;
    margin-bottom: .0474rem;

    .one-class-coment {
        padding: 20px 20px 20px 36px;


        .header {
            display: flex;
            align-items: center;
            gap: 0 10px;
            flex-wrap: wrap;

            .avatar {
                width: 50px;
                height: 50px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 50%;
                }
            }

            .nick-name {
                font-size: 15px;
            }

            .level {
                font-size: 13px;
                background-color: #FFAA82;
                color: #fff;
            }
        }

        .content {
            padding-left: 50px;
            margin-top: 16px;
            font-size: 16px;

            :deep(img) {
                max-width: 90%;
            }

        }

        .replay-container {
            .replay-info {
                display: flex;
                align-items: center;
                min-height: 30px;
                padding-left: 50px;
                margin: 10px 0;
            }


            span {
                &:first-of-type {
                    color: gray;
                    font-size: 14px;
                }
            }

            .replay {
                display: flex;
                align-items: center;
                gap: 0 6px;
                margin-left: auto;
                cursor: pointer;

                span {
                    color: gray;
                }

                svg {
                    width: 22px;
                    height: 22px;
                }
            }
        }

        .other-container {
            margin-top: 16px;
            background: #F7F8FC;
            border-radius: 8px;
            padding: 16px 16px 20px 20px;

            .header {
                .avatar {
                    width: 36px;
                    height: 36px;
                }

                span {
                    color: #00b2ff;
                }

                .replay {
                    color: gray;
                }
            }
        }
    }
}
</style>