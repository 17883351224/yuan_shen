<template>
    <div class="user-center-header">

        <div class="avatar">
            <img v-lazy="userInformation.userAvatar" alt="avatar">
        </div>
        <div class="text-info">
            <button @click="$router.push({ name: 'myChange' })">编辑</button>
            <div class="text">
                <p class="nickname"><span>{{ userInformation.userName
                }}</span>
                    <span :style="`background-color:${useUserLevelColor(userInformation.userLevel)}`">
                        Lv.{{ userInformation.userLevel }}
                    </span>
                </p>
                <p class="account"><span>账号：</span><span>{{ userInformation.userAccount }}</span></p>
                <p class="gender">
                    <span>性别：</span>
                    <span>{{ userInformation.gender }}</span>
                </p>
                <p class="sig">
                    <svg t="1669647520118" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2103" width="16" height="16">
                        <path
                            d="M757.888301 178.812085 157.968866 178.812085C146.331407 178.812085 136.886513 188.250955 136.886513 199.894438 136.886513 211.53792 146.331407 220.976791 157.968866 220.976791L757.888301 220.976791C769.531784 220.976791 778.970654 211.53792 778.970654 199.894438 778.970654 188.250955 769.531784 178.812085 757.888301 178.812085M757.888301 329.900273 157.968866 329.900273C146.331407 329.900273 136.886513 339.339144 136.886513 350.982626 136.886513 362.626108 146.331407 372.064979 157.968866 372.064979L757.888301 372.064979C769.531784 372.064979 778.970654 362.626108 778.970654 350.982626 778.970654 339.339144 769.531784 329.900273 757.888301 329.900273M585.711736 502.079849C585.711736 490.436367 576.272866 480.997496 564.629384 480.997496L157.968866 480.997496C146.331407 480.997496 136.886513 490.436367 136.886513 502.079849 136.886513 513.723332 146.331407 523.162202 157.968866 523.162202L564.629384 523.162202C576.272866 523.162202 585.711736 513.723332 585.711736 502.079849M465.235125 961.997402 99.962278 961.997402C83.042184 961.997402 69.272395 948.233638 69.272395 931.30752L69.272395 72.864226C69.272395 55.932085 83.042184 42.162296 99.962278 42.162296L815.882842 42.162296C832.80896 42.162296 846.584772 55.932085 846.584772 72.864226L846.584772 443.124555C846.584772 454.768038 856.023642 464.206908 867.667125 464.206908 879.304584 464.206908 888.749478 454.768038 888.749478 443.124555L888.749478 72.864226C888.749478 32.687285 856.059784-0.002409 815.882842-0.002409L99.962278-0.002409C59.785336-0.002409 27.107689 32.687285 27.107689 72.864226L27.107689 931.30752C27.107689 971.478438 59.785336 1004.162108 99.962278 1004.162108L465.235125 1004.162108C476.878607 1004.162108 486.317478 994.723238 486.317478 983.079755 486.317478 971.436273 476.878607 961.997402 465.235125 961.997402M949.13536 981.720847 607.974701 981.720847 607.974701 933.665129 740.23936 933.665129C751.882842 933.665129 761.321713 924.226259 761.321713 912.582776L761.321713 802.388329C761.321713 793.208471 755.388536 785.082729 746.648395 782.299859 702.929619 768.355388 673.552866 728.148329 673.552866 682.255059 673.552866 624.350871 720.656866 577.240847 778.567078 577.240847 836.477289 577.240847 883.587313 624.350871 883.587313 682.255059 883.587313 728.142306 854.21056 768.349365 810.491784 782.305882 801.751642 785.088753 795.818466 793.208471 795.818466 802.388329L795.818466 912.582776C795.818466 924.226259 805.257336 933.665129 816.900819 933.665129L949.13536 933.665129 949.13536 981.720847ZM970.217713 891.500424 837.983172 891.500424 837.983172 816.929129C891.062513 793.612047 925.752019 741.291671 925.752019 682.255059 925.752019 601.100047 859.722089 535.076141 778.567078 535.076141 697.412066 535.076141 631.38816 601.100047 631.38816 682.255059 631.38816 741.297694 666.071642 793.618071 719.157007 816.929129L719.157007 891.500424 586.892348 891.500424C575.254889 891.500424 565.809995 900.945318 565.809995 912.582776L565.809995 1002.8032C565.809995 1014.446682 575.254889 1023.885553 586.892348 1023.885553L970.217713 1023.885553C981.861195 1023.885553 991.300066 1014.446682 991.300066 1002.8032L991.300066 912.582776C991.300066 900.945318 981.861195 891.500424 970.217713 891.500424L970.217713 891.500424Z"
                            p-id="2104" fill="#1296db"></path>
                    </svg>
                <p>{{ userInformation.motto }}</p>
                </p>

            </div>
            <div class="number">

                <p><span>0</span><span>粉丝</span></p>
                <p><span>0</span><span>关注</span></p>
                <p><span>0</span><span>获赞</span></p>

            </div>

        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useUserLevelColor } from '@/hooks/user/useUserInformation'

const _store = useStore()
const userInformation = computed(() => _store.state.user.userInformations)

</script>

<style lang="scss" scoped>
.user-center-header {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    min-height: 3.7915rem;
    background-color: #fff;
    border: 1px solid #eee;
    box-sizing: border-box;
    padding: .4739rem .4739rem 0 .4739rem;

    .avatar {
        width: 1.9905rem;

        height: 1.9905rem;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;

        }
    }

    .text-info {
        margin-left: .316rem;
        flex: 1;
        position: relative;

        button {
            position: absolute;
            right: .5687rem;
            top: 0;
            background-color: #fff;
            padding: .079rem .3949rem;
            border: 1px solid #00c3ff;
            border-radius: .079rem;
            color: #00c3ff;
            font-size: .237rem;
            cursor: pointer;

            &:hover {
                color: #00d5ff;
                border-color: #00d5ff;
            }


        }

        .text {
            display: flex;
            flex-direction: column;

            gap: .1264rem;

            >p {
                display: flex;
                align-items: center;
            }

            .nickname {

                gap: .2528rem;

                span {
                    &:first-of-type {
                        color: #333;
                        font-weight: 560;
                        font-size: .2686rem;
                    }

                    &:last-of-type {
                        background-color: rgb(77, 255, 0);
                        color: #fff;
                        font-size: .1896rem;
                        padding: 0 .0395rem;
                    }
                }
            }

            .account,
            .gender {
                span {
                    font-size: .2212rem;
                }

                color: gray;
            }

            .sig {
                gap: 10px;

                svg {
                    path {
                        fill: rgba(128, 128, 128, 0.95);
                    }
                }

                p {
                    color: gray;
                    font-size: .237rem;
                    letter-spacing: .0047rem;
                }
            }
        }

        .number {
            box-sizing: border-box;
            border-top: .0158rem solid #eee;
            display: flex;
            align-items: flex-end;
            gap: .316rem;
            margin-top: .4739rem;
            height: .6319rem;

            span {
                &:first-of-type {
                    color: #333;
                    margin-right: .2528rem;
                }

                &:last-of-type {
                    color: gray
                }
            }
        }
    }

}
</style>