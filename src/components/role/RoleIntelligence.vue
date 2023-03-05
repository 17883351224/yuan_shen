<template>
    <div class="main">
        <div class="logo-container">
            <img src="@/assets/role/qingbao_icon.png" alt="">
        </div>
        <div class="role-intelligence-container">

            <div class="role" v-if="roleIntelligence.intelligence">
                <div class="left">
                    <div class="roleimg">
                        <img v-lazy="roleIntelligence.intelligence.backgroundImage">
                        <div class="introduce">
                            {{ roleIntelligence.intelligence.motto }}
                        </div>
                    </div>
                    <div class="constellation">
                        <div class="constellations" v-for=" i in 6">
                            <img v-lazy="roleIntelligence.intelligence[`lifeSeat${i}Icon`]">
                            <div class="cons">
                                <div class="constellationname">{{ roleIntelligence.intelligence[`lifeSeat${i}Name`] }}
                                </div>
                                <div class="constellationtext">
                                    {{ roleIntelligence.intelligence[`lifeSeat${i}Content`] }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="back">
                        <div class="data">
                            <div class="data1">
                                <img :src="require(`@/assets/element-icon/${roleIntelligence.roleAttribute}.png`)">
                                <div class="rolename">{{ roleIntelligence.nickName }}·{{ roleIntelligence.roleName }}
                                </div>
                            </div>
                            <div class="data2">
                                <!-- <img src="@/assets/role/s-5.png"> -->
                                <div class="role-star">
                                    <svg v-for="i in roleIntelligence.roleStar" t="1669898602240" class="icon"
                                        viewBox="0 0 1027 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                                        p-id="2515" width="16" height="16">
                                        <path
                                            d="M0 412.8v-6.4c3.2-28.8 22.4-35.2 44.8-38.4 86.4-16 169.6-32 256-44.8 25.6-3.2 38.4-16 51.2-38.4 35.2-76.8 70.4-153.6 105.6-227.2 9.6-16 19.2-32 35.2-38.4h19.2c22.4 3.2 35.2 22.4 44.8 41.6 35.2 73.6 76.8 144 112 217.6 9.6 22.4 25.6 32 51.2 35.2 86.4 9.6 169.6 19.2 256 28.8 25.6 3.2 44.8 9.6 51.2 38.4v9.6c-6.4 22.4-19.2 41.6-35.2 57.6-57.6 54.4-112 112-169.6 166.4-16 16-19.2 28.8-16 51.2 16 83.2 32 169.6 48 252.8 3.2 22.4 9.6 48-12.8 67.2-22.4 19.2-44.8 3.2-67.2-6.4-73.6-38.4-150.4-73.6-227.2-112-22.4-12.8-38.4-9.6-60.8 3.2-64 38.4-131.2 73.6-195.2 112-16 9.6-35.2 16-57.6 19.2h-25.6c-25.6-12.8-25.6-35.2-22.4-57.6l28.8-192 9.6-67.2c3.2-19.2 0-35.2-16-48-38.4-38.4-80-76.8-121.6-115.2-22.4-19.2-41.6-41.6-64-60.8-9.6-9.6-19.2-25.6-22.4-48z"
                                            fill="#f4ea2a" p-id="2516"></path>
                                    </svg>
                                </div>
                                <div class="information1">生命：
                                    {{ roleIntelligence.maxLife }}
                                    丨防御：{{ roleIntelligence.defense }}
                                    丨攻击：{{ roleIntelligence.attack }}
                                    丨突破：{{ roleIntelligence.rbreak }}
                                </div>
                            </div>
                            <div class="data3">
                                <div>
                                    <div class="information2">
                                        <span>生日</span>
                                        <span>{{ birthdayFormat(roleIntelligence.birthday) }}</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="information2">
                                        <span>所属</span>
                                        <span>{{ roleIntelligence.department }}</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="information2">
                                        <span>神之心</span>
                                        <span>{{ roleIntelligence.roleAttribute }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="data4">
                                <div>
                                    <div class="information2">
                                        <span>声优</span>
                                        <span>{{ roleIntelligence.roleCvZ }}</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="information2">
                                        <span>武器类型</span>
                                        <span>{{ roleIntelligence.roleType }}</span>
                                    </div>
                                </div>
                                <div>
                                    <div class="information2">
                                        <span>命之座</span>
                                        <span>{{ roleIntelligence.seatOfLife }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="weapon">
                            <h5>武器推荐：</h5>
                            <div class="weapon-list">

                                <div class="weapon1" v-for="item in roleIntelligence.equipments.slice(0, 6)">
                                    <div class="weaponimg">
                                        <img v-lazy="item.equipmentIcon">
                                    </div>
                                    <div class="weaponname">{{ item.equipmentName }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="talent">
                        <div class="talents" v-for="i in 6" :key="i">
                            <img v-lazy="roleIntelligence.intelligence[`talent${i}Icon`]">
                            <div class="tal">
                                <div class="talentname">{{ roleIntelligence.intelligence[`talent${i}Name`] }}</div>
                                <div class="talenttext">
                                    {{ roleIntelligence.intelligence[`talent${i}Content`] }}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <p v-if="!roleIntelligence.intelligence">嘤嘤嘤嘤嘤嘤……我没有人疼<br>原神大大还没给我做情报展示!&nbsp; → . →

            </p>
        </div>

    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { birthdayFormat } from "@/hooks/format"

const _store = useStore()

const roleIntelligence = computed(() => _store.state.role.roleDetail)

</script>

<style lang="scss" scoped>
.main {
    .logo-container {
        margin-left: 9.5%;

        img {
            height: 190px;
        }
    }

    .role-intelligence-container {
        >p {
            font-size: .3476rem;
            line-height: .6319rem;
            text-align: center;
            letter-spacing: .0158rem;
            color: #333;
            margin: .4739rem 0;
            margin: 0 auto;
        }

        width: 100%;
        display: flex;
        justify-content: center;
        box-sizing: border-box;

        @media screen and (max-width:768px) {
            .role {
                width: 90% !important;

                .left {
                    width: 100% !important;
                }

                .right {
                    width: 100% !important;
                }
            }
        }

        .role {
            display: flex;
            width: 76%;
            padding: .316rem .46rem .6319rem .316rem;
            background: #F7F6F4;
            flex-wrap: wrap;
            box-sizing: border-box;




            .left {
                width: 40%;
                display: flex;
                flex-direction: column;
                box-sizing: border-box;
                gap: .316rem;


                .roleimg {
                    width: 100%;
                    position: relative;

                    .introduce {
                        position: absolute;
                        left: 0;
                        bottom: 0;
                        width: 100%;
                        min-height: .6319rem;
                        line-height: .316rem;
                        font-size: .1896rem;
                        border: 1px solid#EEE8E2;
                        padding: .158rem .2528rem;
                        border-radius: .0948rem;
                        box-sizing: border-box;
                        background-color: #FAFAF9;
                        box-shadow: 2px 2px 4px rgba(200, 200, 200, .1), -2px -2px 4px rgba(200, 200, 200, .1);
                    }

                    img {
                        width: 100%;

                    }

                }
            }

            .right {
                box-sizing: border-box;
                padding-left: .2844rem;
                width: 60%;

                display: flex;
                flex-direction: column;

            }
        }







        .constellation {
            width: 100%;
            border: .0158rem solid #EEE8E2;
            padding: .316rem;
            box-sizing: border-box;
            background: #FAFAFA;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            border-radius: .1264rem;
            box-shadow: 2px 2px 4px rgba(220, 220, 220, .1), -2px -2px 4px rgba(220, 220, 220, .1);
        }

        .constellations {
            width: 100%;
            display: flex;
        }

        .constellations img {
            width: .7899rem;
            height: .7899rem;
        }

        .cons {


            padding-left: .158rem;
        }

        .constellationname {
            width: 100%;
            font-size: .237rem;
            color: #d3bc8d;
        }

        .constellationtext {
            width: 100%;
            font-size: .1896rem;
            color: gray;

        }


        .back {
            width: 100%;
            background: url(@/assets/role/稻妻.png);
            background-size: cover;

        }

        .data {
            width: 100%;

        }

        .data1 {
            width: 100%;

            display: flex;
            margin-bottom: .316rem;

            img {
                width: .5687rem;
            }

            .rolename {
                margin-left: .3528rem;
                font-size: .316rem;
                font-weight: 600;
                position: relative;

                &::before {
                    content: "┏";
                    position: absolute;
                    font-size: .2528rem;
                    font-weight: 700;
                    top: -0.079rem;
                    left: -0.1896rem;
                }

                &::after {
                    content: "┛";
                    position: absolute;
                    font-size: .2528rem;
                    font-weight: 700;
                    bottom: 0;
                    right: -0.2054rem;
                }
            }
        }

        .data2 {
            width: 100%;
            display: flex;
            margin-bottom: .316rem;
            align-items: center;
            flex-wrap: wrap;

            .role-star {
                display: flex;
                align-items: center;
                gap: .0158rem;

                svg {
                    width: .316rem;
                    height: .316rem;
                }
            }

            img {
                height: .4107rem;
            }

            .information1 {
                border: .0158rem solid #E8E0D6;
                padding: .079rem .158rem;
                text-align: center;
                margin-left: .4739rem;
                font-size: .158rem;
                background: #FAFAFA;
                border-radius: .0632rem;
                letter-spacing: .0047rem;
                color: gray;
                box-shadow: 2px 2px 4px rgba(220, 220, 220, .1), -2px -2px 4px rgba(220, 220, 220, .1);


            }
        }

        .data4,
        .data3 {
            >div {
                width: 2.1169rem;
                height: .4107rem;
                border: .0158rem solid #E8E0D6;
                box-sizing: border-box;
                border-radius: .0316rem;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: 2px 2px 4px rgba(220, 220, 220, .1), -2px -2px 4px rgba(220, 220, 220, .1);
            }
        }



        .data3 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: .3791rem;
            margin-bottom: .316rem;

        }

        .information2 {
            border: .0158rem solid #E8E0D6;
            width: 2.0221rem;
            display: flex;
            justify-content: space-between;
            background-color: whitesmoke;
            padding: 0 .0632rem;
            position: relative;
            height: .316rem;
            line-height: .316rem;
            box-sizing: border-box;
            border-radius: .0316rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;

            box-shadow: 2px 2px 4px rgba(220, 220, 220, .1), -2px -2px 4px rgba(220, 220, 220, .1);



            span {
                font-size: .1896rem;
                color: #B49469;
                font-weight: 560;
            }
        }

        .data4 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            gap: .3791rem;
            margin-bottom: .316rem;
        }

        .weapon {
            width: 100%;

            .weapon-list {
                display: flex;
                flex-wrap: wrap;
                margin: .3791rem 0;
                gap: .4739rem .316rem;


            }
        }



        .weapon1 img {
            width: 1.1058rem;
            height: 1.1058rem;
        }

        .weaponname {
            font-size: .158rem;
            color: gray;
        }

        .talent {
            width: 100%;
            border: .0158rem solid #EEE8E2;
            padding: .316rem;
            box-sizing: border-box;
            background: #FAFAFA;
            flex: 1;
            border-radius: .1264rem;
            box-shadow: 2px 2px 4px rgba(220, 220, 220, .1), -2px -2px 4px rgba(220, 220, 220, .1);
        }

        .talents {
            width: 100%;
            margin-bottom: .2528rem;
            display: flex;
            gap: .2528rem;
        }

        .talents img {
            width: .5529rem;
            height: 100%;
        }

        .tal {
            width: 85%;
            display: block;
        }

        .talentname {
            width: 100%;
            font-size: .2212rem;
            color: #d3bc8d;

        }

        .talenttext {
            width: 100%;
            font-size: .158rem;
            color: gray;
        }
    }

}
</style>