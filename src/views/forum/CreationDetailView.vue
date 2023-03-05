<template>
    <div class="ceration-detail-app" ref="creationDetailApp">
        <div class="inner">
            <div class="content">
                <div class="title"><span>创作</span>
                    <h1>{{ creationDetail.title }}</h1>
                </div>
                <div class="info">
                    <div>
                        <span class="type">来自板块：</span>
                        <span class="type">{{ creationDetail.type }}</span>
                    </div>
                    <div title="浏览量">
                        <svg t="1666774022212" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="2771" width="32" height="32">
                            <path
                                d="M513.3 172.5c43 0 88.3 12.5 134.8 37.2 41.6 22.1 84.4 53.9 127.2 94.7C845.8 371.6 901 448 932.5 496c6.6 10 6.6 23 0 33-31.5 48-86.7 124.4-157.3 191.7-42.8 40.8-85.6 72.6-127.2 94.7-46.5 24.7-91.8 37.2-134.8 37.2s-88.3-12.5-134.8-37.2c-41.6-22.1-84.4-53.9-127.2-94.7C180.7 653.4 125.5 577 94 529c-6.6-10-6.6-23 0-33 31.5-48 86.7-124.4 157.3-191.7 42.8-40.8 85.6-72.6 127.2-94.7 46.4-24.6 91.8-37.1 134.8-37.1m0-60c-228.2 0-420.6 273.1-480.6 368-12.4 19.6-12.4 44.5 0 64 60 94.9 252.5 368 480.6 368s420.6-273.1 480.6-368c12.4-19.6 12.4-44.5 0-64-60-94.9-252.5-368-480.6-368z"
                                fill="#dbdbdb" p-id="2772"></path>
                            <path
                                d="M513.3 372.5c37.4 0 72.6 14.6 99 41 26.4 26.4 41 61.6 41 99s-14.6 72.6-41 99c-26.4 26.4-61.6 41-99 41s-72.6-14.6-99-41c-26.4-26.4-41-61.6-41-99s14.6-72.6 41-99c26.4-26.4 61.6-41 99-41m0-60c-110.5 0-200 89.5-200 200s89.5 200 200 200 200-89.5 200-200-89.6-200-200-200z"
                                fill="#dbdbdb" p-id="2773"></path>
                        </svg>
                        <span>{{ creationDetail.viewsTotal }}</span>
                    </div>
                    <div>
                        <svg t="1666774103797" class="icon" viewBox="0 0 1071 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="3970" width="32" height="32">
                            <path
                                d="M395.701 434.549c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.043-47.759-47.759 0-25.716 22.042-47.759 47.759-47.759 29.391 0 47.759 22.043 47.759 47.759v0zM943.095 408.833c0-198.385-183.69-360.032-411.465-360.032-231.449 0-415.138 161.647-415.138 360.032 0 117.562 66.129 227.775 176.341 293.903v113.888c0 11.021 7.348 18.369 14.694 22.042 0 0 3.674 0 7.348 0 7.348 0 11.021 0 14.694-3.674l51.434-33.065c0 0 0 0 3.674-3.674l58.78-36.739c29.391 3.674 58.78 7.348 88.171 7.348 227.775 0 411.465-161.647 411.465-360.032v0zM325.898 673.346c-102.865-58.78-165.321-157.972-165.321-264.513 0-172.669 165.321-315.946 371.053-315.946 202.058 0 367.379 143.278 367.379 315.946 0 172.669-165.321 315.946-367.379 315.946-29.391 0-58.78-3.674-88.171-7.348-7.348-3.674-14.694 0-18.369 0l-69.801 47.759c0 0 0 0 0 0l-18.369 11.021v-84.497c0-7.348-3.674-14.694-11.021-18.369v0zM586.737 423.53c0 25.716-22.042 47.759-47.759 47.759s-47.759-22.042-47.759-47.759c0-29.391 22.042-47.759 47.759-47.759 25.716 0 47.759 18.369 47.759 47.759v0zM770.428 423.53c0 25.716-18.369 47.759-47.759 47.759-25.716 0-47.759-22.042-47.759-47.759 0-29.391 22.042-47.759 47.759-47.759 29.391 0 47.759 18.369 47.759 47.759v0z"
                                p-id="3971" fill="#dbdbdb"></path>
                        </svg>
                        <span>{{ creationDetail.commentTotal }}</span>
                    </div>
                    <div>
                        <svg t="1666774191659" class="icon" viewBox="0 0 1024 1024" version="1.1"
                            xmlns="http://www.w3.org/2000/svg" p-id="5172" width="32" height="32">
                            <path
                                d="M939.358251 423.424662c-23.01825-37.252439-62.924121-60.779272-107.019409-63.209624-2.755764-0.38681-5.510504-0.579191-8.347109-0.579191l-152.202471-0.121773c6.649444-28.975938 10.015098-58.653865 10.015098-88.657202 0-28.223808-3.213181-57.139372-9.556657-85.952604-0.447185-2.043542-1.098008-4.006244-1.932002-5.866614-15.820314-57.302077-67.37755-96.841605-127.282918-96.841605-72.827679 0-132.081201 59.254545-132.081201 132.081201 0 3.334955 0.132006 6.66991 0.406253 10.015098-2.196015 57.211003-32.108279 109.947088-80.269162 141.363611-14.447037 9.42465-18.524912 28.773324-9.099239 43.220361 9.414417 14.437827 28.752858 18.535145 43.220361 9.099239 65.811892-42.925648 106.429984-115.325585 108.656699-193.684234 0.030699-1.332345-0.010233-2.663666-0.14224-3.996011-0.203638-2.012843-0.304945-4.016477-0.304945-6.019087 0-38.381146 31.233352-69.614497 69.614497-69.614497 32.57593 0 60.474326 22.204721 67.824735 53.997821 0.356111 1.534959 0.823761 3.019777 1.402953 4.453429 4.696975 22.814612 7.076162 45.579081 7.076162 67.743894 0 37.485753-6.222725 74.352405-18.494213 109.592001-3.324722 9.546424-1.819438 20.111037 4.02671 28.345582 5.856381 8.245801 15.332197 13.146415 25.448602 13.156648l193.226816 0.101307c1.423419 0.264013 2.857071 0.426719 4.300956 0.477884 24.116257 0.9967 45.935192 13.614066 58.603723 34.090423 7.838525 12.31242 11.438517 26.800389 10.431583 41.939181-0.080841 0.945535-0.121773 1.911536-0.11154 2.877537 0 0.854461 0.040932 1.697665 0.11154 2.53166 0.010233 0.335644-0.030699 0.661056-0.11154 0.976234-0.101307 0.376577-0.193405 0.772596-0.284479 1.159406l-74.972529 330.391802c-0.914836 1.281179-1.738597 2.6432-2.449795 4.046153-5.937223 11.762905-14.660908 21.48329-25.346271 28.172643-10.746762 6.812149-23.059182 10.614755-35.757388 11.06194-0.854461-0.061398-513.766226-0.224104-513.766226-0.224104-0.467651-0.020466-0.935302-0.030699-1.402953-0.030699 0 0-111.01542 0.172939-112.718201 0.457418-1.932002 0-3.446495-1.50426-3.446495-3.415796l0.299829-416.334173c0-1.901303 1.545192-3.446495 3.01466-3.456728l1.245364 0.121773c1.174756 0.132006 2.653433 0.284479 3.52836 0.193405l83.82822-0.222057 0 339.367221c0 17.253966 13.979386 31.233352 31.233352 31.233352s31.233352-13.979386 31.233352-31.233352L281.009092 435.350273c0-1.778506 0-8.631588 0-10.411117 0-17.253966-13.979386-30.928407-31.233352-30.928407-1.50426 0-117.547183 0.304945-119.402437 0.304945-36.34272 0-65.913199 29.566386-65.913199 65.893756l-0.299829 416.334173c0 36.337603 29.571503 65.902966 65.913199 65.902966 2.541893 0 111.406323-0.457418 111.406323-0.457418 0.457418 0.020466 0.925069 0.030699 1.382487 0.030699 0 0 511.458671 0.274246 512.505513 0.274246 25.469068 0 50.296523-7.197936 71.647807-20.73116 19.612687-12.281721 35.777855-29.881564 46.839795-50.967812 3.660366-5.622044 6.435573-11.875468 8.256034-18.615986 0.11154-0.416486 0.213871-0.823761 0.304945-1.240247l74.881454-330.340637c1.596358-6.212492 2.257413-12.586666 2.00261-18.992563C960.892707 473.366098 953.948551 446.331371 939.358251 423.424662z"
                                p-id="5173" fill="#dbdbdb"></path>
                            <path
                                d="M450.027553 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C481.260905 532.629853 467.281519 518.650467 450.027553 518.650467z"
                                p-id="5174" fill="#dbdbdb"></path>
                            <path
                                d="M693.805696 518.650467c-17.253966 0-31.233352 13.979386-31.233352 31.233352l0 30.470989c0 17.253966 13.979386 31.233352 31.233352 31.233352 17.253966 0 31.233352-13.979386 31.233352-31.233352l0-30.470989C725.039048 532.629853 711.058638 518.650467 693.805696 518.650467z"
                                p-id="5175" fill="#dbdbdb"></path>
                            <path
                                d="M648.940882 660.09492c-14.304797-9.393951-33.592073-5.398964-43.159986 8.763594-0.132006 0.193405-13.614066 19.754926-34.171264 19.754926-19.98824 0-32.423457-18.09717-33.266661-19.368116-9.17087-14.427594-28.254507-18.809391-42.834574-9.770528-14.650675 9.109472-19.155269 28.366048-10.055007 43.016723 11.214413 18.047028 41.96988 48.588625 86.156242 48.588625 43.962258 0 75.104535-30.318516 86.572728-48.222281C667.404396 688.461991 663.216004 669.500127 648.940882 660.09492z"
                                p-id="5176" fill="#dbdbdb"></path>
                        </svg>
                        <span>{{ creationLikedInfo.total }}</span>
                    </div>
                </div>
                <div class="publish-time"><span>文章发表：{{ creationDetail.publishTime }}</span></div>
                <div class="introduce">
                    <p>{{ creationDetail.introduce }}</p>
                </div>
                <div class="img-container">
                    <p v-for="(item, index ) in imageList" :key="index">
                        <img v-lazy="item.url" alt="creationImage">
                    </p>

                </div>
                <ul class="toptic">
                    <li v-for="(item, index) in topicList" :key="index">{{ item }}</li>

                </ul>
            </div>
            <div class="comment" id="comment">
                <CreationComment
                    :commentInfo="{ creationId: $route.query.creationId, parentCommentId: -1, commentId: -1 }">
                </CreationComment>
            </div>
            <div class="replay">
                <CommentDisplay :creationId="$route.query.creationId"></CommentDisplay>
            </div>
        </div>
        <div class="right">
            <div class="auth">
                <div class="avatar">
                    <img v-lazy='creationDetail.user.userAvatar' alt="avatar" v-if="creationDetail.user">
                </div>
                <div class="text">
                    <div v-if="creationDetail.user">
                        <span class="nick-name">{{ creationDetail.user.userName }}</span>
                        <span class="level">Lv.{{ creationDetail.user.userLevel }}</span>
                    </div>
                    <button class="focus">关注</button>
                </div>
            </div>

            <div class="code">
                <img src="https://bbs.mihoyo.com/_nuxt/img/qrcode_ys.c265aec.png" alt="二维码">
                <div>
                    <p>扫码下载米游社App</p>
                    <p>了解提瓦特最新资讯</p>
                </div>

            </div>
            <div class="hot">
                <div class="header">
                    <h4>热门内容</h4>
                </div>
                <ul class="hot-list">
                    <li v-for="item in creationList" :key="item.id" @click="gotoCreationDetail(item.id)">
                        <div class="cover">
                            <img v-lazy="item.coverUrl" alt="coverImage">
                        </div>
                        <div class="text">
                            <p>{{ item.title }}</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
        <div class="left">
            <a href="#comment">
                <div title="评论数">
                    <svg t="1666777834078" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="6780" width="32" height="32">
                        <path
                            d="M357.3248 487.41376c0 30.09536-24.42752 54.4256-54.56896 54.4256-30.09536 0-54.53312-24.33024-54.53312-54.4256 0-30.09024 24.43264-54.52288 54.53312-54.52288C332.89728 432.88576 357.3248 457.3184 357.3248 487.41376L357.3248 487.41376M357.3248 487.41376 357.3248 487.41376zM982.21568 457.22112c0-227.05152-212.05504-411.79648-472.77568-411.79648-260.72576 0-472.7808 184.74496-472.7808 411.79648 0 134.88128 75.9808 261.21728 203.41248 338.19136l0 129.81248c0 9.24672 5.0688 17.67936 13.16352 21.94944 3.72736 2.08384 7.64416 3.08736 11.86816 3.08736 4.864 0 9.63072-1.38752 13.80864-4.1728l59.88864-39.53152c1.14688-0.69632 2.23744-1.59232 2.87744-2.19136l67.7376-45.09184c33.77664 6.35904 67.44576 9.64096 100.1216 9.64096C770.16064 868.81792 982.21568 684.17024 982.21568 457.22112L982.21568 457.22112M277.41696 759.26528c-119.48032-67.33824-190.7456-180.2752-190.7456-302.14144 0-199.44448 189.65504-361.73824 422.76864-361.73824 233.11872 0 422.77376 162.29376 422.77376 361.73824 0 199.43936-189.71136 361.73312-422.76864 361.73312-32.57856 0-66.34496-3.57376-100.31616-10.624-6.45632-1.48992-13.312-0.09728-18.9696 3.67616l-79.26272 52.8384c-1.09056 0.5888-2.67776 1.98656-2.67776 1.98656l-18.07872 11.91936 0-97.62816C290.13504 771.97824 285.21472 763.72992 277.41696 759.26528L277.41696 759.26528M277.41696 759.26528 277.41696 759.26528zM573.10208 472.1152c0 30.09536-24.42752 54.6304-54.62528 54.6304-30.09024 0-54.52288-24.53504-54.52288-54.6304 0-30.09536 24.43264-54.43584 54.52288-54.43584C548.66944 417.6896 573.10208 442.02496 573.10208 472.1152L573.10208 472.1152M573.10208 472.1152 573.10208 472.1152zM786.36032 472.1152c0 30.09536-24.43776 54.6304-54.53312 54.6304s-54.528-24.53504-54.528-54.6304c0-30.09536 24.43264-54.43584 54.528-54.43584C761.92256 417.6896 786.36032 442.02496 786.36032 472.1152L786.36032 472.1152M786.36032 472.1152 786.36032 472.1152z"
                            p-id="6781" fill="#cdcdcd"></path>
                    </svg>
                    <span>{{ creationDetail.commentTotal }}</span>
                </div>
            </a>
            <div title="收藏数" @click="collectUpdate">
                <svg t="1666777928817" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="8296" width="32" height="32">
                    <path
                        d="M252.696 958.945c-10.15 0-19.869-3.176-28.11-9.186-14.833-10.728-22.133-28.663-19.052-46.822l45.165-263.944-191.656-186.81C45.826 439.24 41.21 420.37 46.957 402.906c5.666-17.406 20.498-29.89 38.686-32.511l264.944-38.536L469.065 91.757c8.23-16.501 24.708-26.704 43.042-26.704 18.38 0 34.858 10.222 43.006 26.677l118.423 240.13 264.918 38.535c18.044 2.598 33.228 15.431 38.672 32.7 5.622 17.456 0.96 36.253-12.182 49.08L773.24 638.991 818.496 902.9c3.11 17.761-4.363 36.18-19.049 46.858-8.14 5.966-17.87 9.142-28.077 9.142h-0.002a48.533 48.533 0 0 1-22.387-5.498L512.075 828.844 275.09 953.382c-6.825 3.627-14.593 5.563-22.394 5.563z m259.412-854.718c-3.435 0-6.408 1.847-7.951 4.94L376.606 367.66 91.259 409.164c-2.62 0.377-5.834 2.13-7.071 5.93-1.269 3.856 0.325 7.203 2.233 9.072l206.364 201.143-48.633 284.205c-0.44 2.594 0.22 6.213 3.408 8.511l0.102 0.074c1.89 1.38 3.781 1.67 5.035 1.67a8.778 8.778 0 0 0 4.095-1.024l255.29-134.16 255.092 134.12a9.128 9.128 0 0 0 4.198 1.02c1.269 0 3.166-0.28 4.982-1.61 2.739-1.99 4.106-5.32 3.544-8.527l-48.75-284.28 206.447-201.18c1.895-1.85 3.485-5.206 2.239-9.05l-0.063-0.192c-1.145-3.653-4.447-5.366-6.928-5.722l-285.33-41.507-127.517-258.574c-1.458-2.937-4.558-4.856-7.888-4.856z"
                        p-id="8297" fill="#cdcdcd"></path>
                </svg>
                <span>{{ collectInformation.totalCount }}</span>
            </div>
            <div title="点赞数" @click="updateLiked" class="liked">
                <svg t="1666777626658" class="icon" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="5532" width="32" height="32">
                    <path
                        d="M190.193225 471.411583c14.446014 0 26.139334-11.718903 26.139334-26.13831 0-14.44499-11.69332-26.164916-26.139334-26.164916-0.271176 0-0.490164 0.149403-0.73678 0.149403l-62.496379 0.146333c-1.425466-0.195451-2.90005-0.295735-4.373611-0.295735-19.677155 0-35.621289 16.141632-35.621289 36.114522L86.622358 888.550075c0 19.949354 15.96767 35.597753 35.670407 35.597753 1.916653 0 3.808746 0.292666 5.649674 0l61.022819 0.022513c0.099261 0 0.148379 0.048095 0.24764 0.048095 0.097214 0 0.146333-0.048095 0.24457-0.048095l0.73678 0 0-0.148379c13.413498-0.540306 24.174586-11.422144 24.174586-24.960485 0-13.55983-10.760065-24.441669-24.174586-24.981974l0-0.393973-50.949392 0 1.450025-402.275993L190.193225 471.409536z"
                        p-id="5533" fill="#cdcdcd"></path>
                    <path
                        d="M926.52241 433.948343c-19.283182-31.445176-47.339168-44.172035-81.289398-45.546336-1.77032-0.246617-3.536546-0.39295-5.380544-0.39295l-205.447139-0.688685c13.462616-39.059598 22.698978-85.58933 22.698978-129.317251 0-28.349675-3.193739-55.962569-9.041934-82.542948l-0.490164 0.049119c-10.638291-46.578852-51.736315-81.31498-100.966553-81.31498-57.264215 0-95.466282 48.15065-95.466282 106.126063 0 3.241834-0.294712 6.387477 0 9.532097-2.996241 108.386546-91.240027 195.548698-196.23636 207.513194l0 54.881958-0.785899 222.227314 0 229.744521 10.709923 0 500.025271 0.222057 8.746198-0.243547c19.35686 0.049119 30.239721-4.817726 47.803749-16.116049 16.682961-10.761088 29.236881-25.50079 37.490869-42.156122 2.260483-3.341095 4.028757-7.075139 5.106298-11.20111l77.018118-344.324116c1.056052-4.053316 1.348718-8.181333 1.056052-12.160971C943.643346 476.446249 938.781618 453.944769 926.52241 433.948343zM893.82573 486.837924l-82.983993 367.783411-0.099261-0.049119c-2.555196 6.141884-6.879688 11.596106-12.872169 15.427364-4.177136 2.727111-8.773827 4.351098-13.414521 4.964058-1.49812-0.195451-3.046383 0-4.620227 0l-477.028511-0.540306-0.171915-407.408897c89.323375-40.266076 154.841577-79.670527 188.596356-173.661202 0.072655 0.024559 0.124843 0.049119 0.195451 0.072655 2.99931-9.137101 6.313799-20.73423 8.697079-33.164331 5.551436-29.185716 5.258771-58.123792 5.258771-58.123792-4.937452-37.98001 25.940812-52.965306 44.364417-52.965306 25.304316 0.860601 50.263777 33.656541 50.263777 52.326762 0 0 5.600555 27.563776 5.649674 57.190537 0.048095 37.366026-4.6673 56.847729-4.6673 56.847729l-0.466628 0c-5.872754 30.879288-16.214287 60.138682-30.464849 86.964654l0.36839 0.342808c-2.358721 4.815679-3.709485 10.220782-3.709485 15.943111 0 19.922748 19.088754 21.742187 38.765909 21.742187l238.761895 0.270153c0 0 14.666024 0.465604 14.690584 0.465604l0 0.100284c12.132318-0.638543 24.221658 5.207605 31.100322 16.409738 5.504364 9.016351 6.437619 19.6045 3.486404 28.988218L893.82573 486.837924z"
                        p-id="5534" fill="#cdcdcd"></path>
                    <path
                        d="M264.827039 924.31872c0.319272 0.024559 0.441045 0.024559 0.295735-0.024559 0.243547-0.048095 0.367367-0.074701-0.295735-0.074701s-0.539282 0.026606-0.271176 0.074701C264.43409 924.343279 264.532327 924.343279 264.827039 924.31872z"
                        p-id="5535" fill="#cdcdcd"></path>
                </svg>
                <span>{{ creationLikedInfo.total }}</span>
            </div>
        </div>


    </div>

</template>

<script setup>

import CreationComment from '@/components/forum/MyComment.vue';
import CommentDisplay from '@/components/forum/CommentDisplay.vue'
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'


const _store = useStore()
const _route = useRoute()
const creationDetail = computed(() => _store.state.creation.creationDetail)
const imageList = computed(() => JSON.parse(creationDetail.value.imageList || '[]'))
const topicList = computed(() => JSON.parse(creationDetail.value.topics || '[]'))
const creationList = computed(() => {
    const type = _route.query.type == 'cos' ? 'cosplayList' : 'somepersonList'
    return _store.state.creation[type].slice(0, 6)
})
const likedInfo = {
    userAccount: "",
    type: 'creation',
    id: _route.query.creationId
}
const collect = {
    userAccount: null,
    type: 'creation',
    id: _route.query.creationId
}
if (localStorage.getItem('token') && JSON.parse(localStorage.getItem('token')).userAccount) {
    likedInfo.userAccount = JSON.parse(localStorage.getItem('token')).userAccount
    collect.userAccount = JSON.parse(localStorage.getItem('token')).userAccount
}

const getInformation = () => {
    const type = _route.query.type === 'cos' ? 'cos' : '同人'
    _store.dispatch('creation/getCreationDetailByCreationId', _route.query.creationId)
    _store.dispatch('creation/getCreationLikedInfo', likedInfo)
    _store.dispatch('creation/getCollectInfo', collect)
    if (creationList.value.length == 0) {
        _store.dispatch('creation/getAllCreationByType', type)
    }
}
getInformation()
const creationLikedInfo = computed(() => _store.state.creation.creationLikedInfo)
const updateLiked = () => {
    _store.dispatch('creation/updateLikedInfo', likedInfo)
}
const _router = useRouter()
const gotoCreationDetail = (creationId) => {
    if (_route.query.type === 'cos') {
        _router.push({
            name: 'creationDetail',
            query: {
                creationId: creationId,
                type: 'cos'
            }
        })
    }
    if (_route.query.type === 'someperson') {
        _router.push({
            name: 'creationDetail',
            query: {
                creationId: creationId,
                type: 'someperson'
            }
        })
    }

}
const creationDetailApp = ref(null);
watch(() => creationLikedInfo.value.isLiked, (newValue) => {
    if (newValue) {
        Array.from(creationDetailApp.value.querySelectorAll('.left .liked svg path')).forEach((item) => {
            item.classList.add('active')
        })
    } else {
        Array.from(creationDetailApp.value.querySelectorAll('.left .liked svg path')).forEach((item) => {
            item.classList.remove('active')
        })
    }
})
onMounted(() => {
    if (creationLikedInfo.value.isLiked) {
        Array.from(creationDetailApp.value.querySelectorAll('.left .liked svg path')).forEach((item) => {
            item.classList.add('active')
        })
    }
})
const collectUpdate = () => {
    _store.dispatch('creation/updateCollectInfo', collect)
}
const collectInformation = computed(() => _store.state.creation.collectInformation)
const collectColor = computed(() => collectInformation.value.isCollect == false ? '#cdcdcd' : 'blueviolet')
</script>

<style lang="scss" scoped>
@media screen and (max-width:768px) {

    .inner {
        max-width: 100% !important;
    }

    .right {
        width: 80% !important;
        margin: 0 !important;
    }

    .left {
        display: none !important;
    }

    .replay {
        padding: 0 !important;
    }

    .left {
        display: none;
    }

}

.ceration-detail-app {
    display: flex;
    justify-content: center;
    padding-top: 1.3586rem;
    background-color: #F7F8FC;
    flex-wrap: wrap;


    .inner {
        max-width: 47%;
        min-height: 100vh;
        box-sizing: border-box;
        padding-bottom: 3.1596rem;



        .content {
            box-sizing: border-box;
            padding: 36px 46px 60px 46px;
            background-color: #fff;


            .title {
                height: 60px;
                display: flex;
                align-items: center;
                margin-bottom: 36px;

                h1 {
                    margin-left: 16px;
                    font-size: 22px;
                    color: #333;
                    letter-spacing: 0.3px;
                }

                span {
                    padding: 2px 4px;
                    font-size: 14px;
                    color: #fff;
                    background-color: skyblue;
                }
            }

            .info {
                display: flex;
                align-items: center;
                background-color: #F7F8FC;
                min-height: 40px;
                border-radius: 6px;
                padding-left: 8px;
                flex-wrap: wrap;

                >div {
                    &:first-of-type {
                        flex: 5;
                    }

                    flex:1;
                    flex-shrink: 0;
                    min-width: 1.1058rem;
                }

                .type {
                    color: #FFAA82;
                    margin-left: 4px;

                    &:first-child {
                        font-size: 14px;
                        color: gray;
                    }
                }

                span {
                    color: gray;
                    font-size: 14px;
                }

                svg {
                    width: 22px;
                    height: 22px;
                    vertical-align: middle;
                    margin-right: 3px;
                }
            }

            .publish-time {
                margin-top: 10px;
                font-size: 16px;
                color: #ccc;
                text-align: center;
                line-height: 40px;
                letter-spacing: 0.5px;
            }

            .introduce {
                margin-bottom: 10px;

                p {
                    font-size: 16px;
                    letter-spacing: 0.5px;
                    line-height: 36px;
                    white-space: pre-line;
                }
            }

            .toptic {
                list-style: none;
                display: flex;
                flex-wrap: wrap;
                gap: 15px;

                li {
                    padding: 3px 20px;
                    border: 1px solid #eee;
                    border-radius: 15px;
                    font-size: 14px;
                    cursor: pointer;
                    color: gray;
                    background-color: #F5F5F5;

                    &:hover {
                        color: blue;
                    }

                }
            }

            .img-container {
                p {
                    margin-bottom: 30px;

                    img {
                        max-width: 100%;
                        object-fit: cover;
                    }
                }

            }
        }

        .comment {
            margin: .4739rem 0;
            background-color: #fff;
            padding: .4739rem;
        }

        .replay {
            margin-bottom: 3px;
        }



    }

    .right {
        margin-left: .316rem;
        width: 4.4234rem;

        .auth {
            width: 100%;
            height: 2.5276rem;
            display: flex;
            background-color: #fff;
            align-items: center;
            justify-content: center;

            .avatar {
                width: 1.0585rem;
                height: 1.0585rem;
                border-radius: 50%;
                overflow: hidden;


                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;

                }
            }

            .text {
                margin-left: .158rem;

                div {
                    display: flex;
                    flex-wrap: wrap;
                    gap: .158rem .079rem;

                    .level {
                        font-size: .2054rem;
                        color: #fff;
                        background-color: #FFBF00;
                        transform: scale(0.8);
                        padding: 0 1px;

                    }

                    .nick-name {
                        font-size: .237rem;
                        font-weight: 560;
                        letter-spacing: 0, 2px;
                    }
                }

                .focus {
                    border: 1px solid#00b2ff;
                    background-color: transparent;
                    padding: .0632rem .4739rem;
                    border-radius: .0632rem;
                    color: #00b2ff;
                    margin-top: .2054rem;
                    cursor: pointer;

                    &:hover {
                        background: linear-gradient(45deg, #eee, #fff, #eee);
                    }
                }
            }
        }

        .code {
            margin-top: .316rem;
            width: 100%;
            height: 2.2117rem;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;

            div {
                padding-left: .158rem;

                p {
                    line-height: .4739rem;
                    font-size: .237rem;
                    color: gray;

                    &:first-of-type {
                        color: #00b2ff;
                    }
                }
            }

            img {
                width: 1.2006rem;
            }
        }

        .hot {
            margin-top: 20px;
            background: #fff;

            .header {
                height: 50px;
                border: 2px solid #F5F5F5;

                h4 {
                    font-size: 15px;
                    padding-left: 12px;
                    line-height: 50px;
                    letter-spacing: 0.4px;
                }
            }

            ul {
                list-style: none;

                li {
                    display: flex;
                    align-items: center;
                    height: 66px;
                    padding: 10px;
                    cursor: pointer;

                    &:hover p {
                        color: #00b2ff;

                    }

                    .cover {
                        width: 75px;
                        flex-shrink: 0;
                        height: 50px;

                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 8px;

                        }

                    }

                    .text {
                        padding-left: 10px;

                        p {
                            line-height: 20px;
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }



}

.left {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 10%;
    top: 86px;
    background-color: #fff;
    box-sizing: border-box;

    a {
        text-decoration: none;
    }

    >div,
    a>div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        border-bottom: 1px solid #F7F8FC;
        cursor: pointer;

        &[title='收藏数'] {
            svg {

                path {
                    fill: v-bind(collectColor);

                }
            }
        }

        span {
            font-size: 14px;
            color: gray;
        }
    }
}

svg {
    path {
        &.active {
            fill: blueviolet !important;
        }
    }
}
</style>