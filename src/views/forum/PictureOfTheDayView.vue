<template>
    <div class="picture-one-day">
        <div class="nav">
            <div class="self-upload">
                <label for="file">
                    <span>自定义上传</span>
                    <div class="icon">
                        <svg t="1669963934720" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2988" width="32" height="32">
                            <path d="M98 480.86h829.99v63.79H98z" p-id="2989" fill="#1296db"></path>
                            <path d="M481.48 98.15h63.79V927h-63.79z" p-id="2990" fill="#1296db"></path>
                        </svg>
                    </div>
                    <input type="file" id="file" accept="image/*" style="display:none" @change="photoUpload($event)" />
                </label>
            </div>
        </div>
        <div class="img-container" ref="imgContainer">
            <div class="col" v-for="(item, index) in newImgList" :key="index">
                <div class="item" v-for="i in item" :key="i.id">
                    <div class="img-cover"><img v-lazy="i.url" alt="img"></div>
                    <p>
                        <img v-lazy="i.user.userAvatar" alt="头像">
                        <span>{{ i.introduce }}</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
    <div class="mask" v-show="maskIsShow">

        <div class="info">
            <div class="img-show">
                <p>图片预览</p>
                <div class="img" ref='showImage'>
                    <img :src="imgSrc">
                </div>
            </div>
            <div class="text-container">

                <p>图片简介</p>
                <textarea class="text" placeholder="献给你的图片一些赞美吧" ref="textObj"></textarea>
                <div @click="send" title="发送" class="send"><svg t="1669985351414" class="icon" viewBox="0 0 1024 1024"
                        version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11818" width="32" height="32">
                        <path
                            d="M211.649242 813.217191a425.984 425.984 0 1 0 602.421836-602.442865 425.984 425.984 0 1 0-602.421836 602.442865Z"
                            fill="#00A0E9" p-id="11819"></path>
                        <path
                            d="M266.3936 427.7248l422.5024-103.5776c20.4288-5.0176 37.5296 15.9744 28.4672 34.9696l-188.2112 395.1616c-9.728 20.3776-39.3728 18.432-46.2848-3.072l-48.0256-149.4016a25.06752 25.06752 0 0 1 5.2224-24.3712L522.1888 486.4c5.0176-5.5808-1.6896-13.9264-8.192-10.0864l-108.9024 63.5392a24.9856 24.9856 0 0 1-24.6272 0.3072L260.2496 473.8048c-19.8656-10.9568-15.9232-40.6528 6.144-46.08z"
                            fill="#FFFFFF" p-id="11820"></path>
                    </svg>
                </div>
            </div>
            <div class="close" title="关闭" @click="maskIsShow = false">
                <svg t="1669985771318" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="13628" width="200" height="200">
                    <path
                        d="M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z m0-572.330667L300.629333 240.213333a42.538667 42.538667 0 0 0-60.16 0.213334 42.410667 42.410667 0 0 0-0.213333 60.16L451.669333 512 240.213333 723.370667a42.538667 42.538667 0 0 0 0.213334 60.16 42.410667 42.410667 0 0 0 60.16 0.213333L512 572.330667l211.370667 211.413333a42.538667 42.538667 0 0 0 60.16-0.213333 42.410667 42.410667 0 0 0 0.213333-60.16L572.330667 512l211.413333-211.370667a42.538667 42.538667 0 0 0-0.213333-60.16 42.410667 42.410667 0 0 0-60.16-0.213333L512 451.669333z"
                        fill="#1296db" p-id="13629"></path>
                </svg>
            </div>
        </div>
    </div>

</template>

<script setup>
import { reqUploadDayPhoto } from '@/api';
import debounce from 'lodash/debounce'
import { ref, onMounted, onBeforeUnmount, computed, watch } from 'vue'
import { useStore } from 'vuex';
const _store = useStore()
const imgList = computed(() => _store.state.dayphoto.dayPhotoList)
const getDayPhotoList = () => {
    if (imgList.value.length == 0) {
        _store.dispatch('dayphoto/getDayPhotoList')
    }
}
getDayPhotoList()
const col = ref(1)
const newImgList = ref([])
const maxWidth = ref('220px')
const imgContainer = ref(null)
const changeColunm = debounce(() => {
    let temp = []
    col.value = Math.max(Math.floor(imgContainer.value.offsetWidth / 240), 1)
    const number = Math.ceil(imgList.value.length / col.value)
    maxWidth.value = Math.max(imgContainer.value.offsetWidth / col.value, 220) + 'px'
    temp = imgList.value.map((item, index) => {
        if (index < col.value) {
            return imgList.value.slice(index * number, (index + 1) * number)
        }
    })
    newImgList.value = temp.filter((item) => item)
}, 300, { traling: true })
onMounted(() => {
    if (imgList.value.length > 0) {
        changeColunm()
    }
    window.addEventListener('resize', changeColunm)
})

watch(imgList, (newValue) => {
    if (newValue.length > 0) {
        changeColunm()
    }

})
onBeforeUnmount(() => {
    window.removeEventListener('resize', changeColunm)

})
const maskIsShow = ref(false)
const showImage = ref(null)
const formData = new FormData()
const imgSrc = ref(null)
const photoUpload = (event) => {

    imgSrc.value = window.URL.createObjectURL(event.target.files[0])
    formData.set('file', event.target.files[0])
    maskIsShow.value = true
    event.target.value = ""

}
const textObj = ref(null)
const send = () => {
    const dayPhoto = {
        introduce: textObj.value.value
    }
    formData.set('dayPhoto', JSON.stringify(dayPhoto))
    _store.dispatch('dayphoto/uploadDayPhoto', { formData, textObj, maskIsShow })

}

</script>

<style lang="scss" scoped>
.picture-one-day {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 70px;


    .nav {
        width: 74%;
        height: 1.0427rem;
        display: flex;
        justify-content: flex-end;

        .self-upload {
            display: flex;
            align-items: center;
            height: .6319rem;
            border: .0158rem solid #eee;
            width: 2.2117rem;
            border-radius: .0948rem;
            overflow: hidden;
            box-shadow: .0316rem .0316rem .0632rem rgba(100, 100, 100, 0.1), -.0316rem -.0316rem .0632rem rgba(100, 100, 100, 0.1);



            label {
                width: 100%;
                display: flex;
                height: 100%;
                align-items: center;
                justify-content: center;
                background-color: #1296db;
                color: #fff;
                gap: .158rem;

                .icon {
                    width: .3949rem;
                    height: .3949rem;
                    border-radius: 50%;
                    background-color: #fff;

                    svg {
                        height: 100%;
                        width: 100%;
                    }

                }
            }


        }
    }

    .img-container {
        width: 74%;
        display: flex;

        .col {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding: 0 10px;

            .item {
                min-width: 220px;
                box-sizing: border-box;
                border: 1px solid #eee;
                box-shadow: 2px 2px 4px rgba(100, 100, 100, 0.1), -2px -2px 4px rgba(100, 100, 100, 0.1);
                cursor: pointer;
                width: v-bind(maxWidth);

                &:hover>div>img {
                    transform: scale(1.25);
                }

                .img-cover {
                    width: 100%;
                    overflow: hidden;
                    border: 4px solid #fff;
                    box-sizing: border-box;

                    img {
                        display: block;
                        width: 100%;
                        height: auto;
                        transition: all 0.4s ease-in-out;
                    }
                }

                p {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    color: gray;
                    font-size: 16px;
                    letter-spacing: 0.3px;
                    text-indent: 5px;
                    line-height: 30px;
                    max-width: v-bind(maxWidth);
                    box-sizing: border-box;
                    flex-shrink: 1;


                    span {
                        font-size: .2212rem;
                    }

                    img {
                        width: .4739rem;
                        height: .4739rem;
                        object-fit: cover;
                        border-radius: 50%;
                        vertical-align: middle;
                        margin-right: .079rem;
                    }
                }
            }
        }
    }
}

.mask {
    position: fixed;
    width: 100%;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(100, 100, 100, 0.5);
    z-index: 20;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;

    .info {
        width: 50%;
        min-width: 5.5292rem;
        margin-top: 80px;
        background-color: #fff;
        min-height: 40vh;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        border-radius: .158rem;

        .close {
            position: absolute;
            opacity: 0.7;
            box-shadow: .0316rem .0316rem .0632rem rgba(100, 100, 100, 0.1);
            transition: opacity 0.5s linear;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            right: .079rem;
            top: .079rem;


            &:hover {
                opacity: 1;
            }


            svg {
                width: .4107rem;
                height: .4107rem;

                path {
                    fill: rgba(255, 0, 0, 0.619)
                }
            }
        }

        p {
            font-size: .316rem;
            font-family: 'Courier New', Courier, monospace;
            color: #1296db;
            line-height: .9479rem;
            width: 100%;
            text-indent: 10%;

        }

        .img-show {
            flex: 2;
            min-width: 4.4234rem;
            display: flex;
            flex-direction: column;
            align-items: center;



            .img {
                width: 80%;

                img {

                    width: 100%;


                }
            }
        }

        .text-container {
            flex: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 4.1074rem;

            .text {
                width: 80%;
                resize: none;
                height: 50%;
                padding-left: .1264rem;
                padding-top: .1264rem;
                border: 2px solid #eee;
                outline-color: #1296db;
                border-radius: .1264rem;
                color: gray;
                min-height: 2.5276rem;

            }

            .send {

                opacity: 0.7;
                box-shadow: .0316rem .0316rem .0632rem rgba(100, 100, 100, 0.1);
                transition: opacity 0.5s linear;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 50%;
                align-self: flex-end;
                margin: .316rem .316rem .158rem 0;

                svg {
                    width: .6319rem;
                    height: .6319rem;
                }

                &:hover {
                    opacity: 1;
                }
            }
        }

    }
}
</style>