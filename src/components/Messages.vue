<template>
    <div class="messages">

        <!-- Header -->
        <el-row>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h1 style="margin-left: 50px">On Boarding to Some of the best moments in your life</h1>
            </el-col>
        </el-row>

        <!-- Content -->
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
                <div class="block" style="overflow:auto; min-height: 70vh">

                    <loading :active="loaderLoading"
                             :is-full-page="loaderFullPage"
                             :color="loaderColor"
                             :opacity="loaderOpacity"
                             :height="loaderHeight"
                             :width="loaderWidth"
                             :loader="loaderStyle"></loading>

                    <transition name="el-zoom-in-bottom">
                        <el-timeline class="messages_timeline"
                                     v-show="showTimeline">

                            <el-timeline-item timestamp="Heii Santhosh" placement="top">
                                <el-card>
                                    <el-image :src="img1" @load="onImgLoad"></el-image>
                                </el-card>
                            </el-timeline-item>

                            <!-- <el-timeline-item>
                                <el-card>
                                    <h3>Happiee bdayy Santhoshh...!!!</h3>
                                </el-card>
                            </el-timeline-item> -->

                            <el-timeline-item>
                                <el-card>
                                    <el-image :src="img2" @load="onImgLoad"></el-image>
                                    <h3>Sandy and his boys #back_benchers #bring_back_memories</h3>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item>
                                <el-card>
                                    <el-image :src="img3" @load="onImgLoad"></el-image>
                                    <h3>You little boy, you give me a brotherly feeling :P</h3>
                                </el-card>
                            </el-timeline-item>

                            <!-- <el-timeline-item placement="top">
                                <el-card>
                                    <h3>Our First Connection </h3>
                                </el-card>
                            </el-timeline-item> -->

                            <el-timeline-item>
                                <el-card>
                                    <el-image :src="img4" @load="onImgLoad"></el-image>
                                    <h3>Tour - Sambavam - CAMERA</h3>
                                </el-card>
                            </el-timeline-item>

                            <!-- <el-timeline-item timestamp="" placement="top">
                                <el-card>
                                    <h3>Say something here ...</h3>
                                </el-card>
                            </el-timeline-item> -->

                            <el-timeline-item>
                                <el-card>
                                    <el-image :src="img5" @load="onImgLoad"></el-image>
                                    <h3>I always wish to see you in this version , Happiee Face</h3>
                                </el-card>
                            </el-timeline-item>

                            <el-timeline-item >
                                <el-card>
                                    <el-image :src="img6" @load="onImgLoad"></el-image>
                                </el-card>
                                <h3>Nanu Nallavathan nu pathivupanra moment</h3>
                            </el-timeline-item>

                            <!-- <el-timeline-item>
                                <el-card>
                                    <h3>To be continued...</h3>
                                </el-card>
                            </el-timeline-item> -->

                        </el-timeline>
                    </transition>
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    // Loading effect component
    import Loading from 'vue-loading-overlay';
    import 'vue-loading-overlay/dist/vue-loading.css';
    // Images
    // TODO : Put your images in /src/assets, and import them accordingly. SanthoshSkype
    import img1 from '../assets/BdayWish.png'
    import img2 from '../assets/SanthoshClg.jpg'
    import img3 from '../assets/SanthoshCricket.jpg'
    import img4 from '../assets/SanthoshTour.jpg'
    import img5 from '../assets/HappyFace.jpg'
    import img6 from '../assets/GoodBoyMode.png'

    export default {
        name: "Messages",
        data() {
            return {
                // Display Timeline
                showTimeline: false,
                // Images
                // TODO : Modify the variables to cooperate with your images
                img1: img1,
                img2: img2,
                img3: img3,
                img4: img4,
                img5: img5,
                img6: img6,
                imagesLoaded: 0,
                // TODO : Modify this number (totalImages) to the images you use in the content
                totalImages : 6,
                // Loader
                loaderLoading: true,
                loaderColor: "#dd6161",
                loaderOpacity: 1,
                loaderStyle: "dots",
                loaderHeight: 60,
                loaderWidth: 60,
                loaderFullPage: false
            }
        },
        components: {
            Loading
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            // This is a dump version of loading function,
            // feel free to change it to a more elegant implementation.
            onImgLoad() {
                this.imagesLoaded += 1;
                if (this.imagesLoaded === this.totalImages) {
                    console.log("Images Loaded");
                    setTimeout(() => this.loaderLoading = false, 500);
                    setTimeout(() => this.showTimeline = true, 800);
                }
            }
        }
    }
</script>

<style scoped>
    .messages_timeline {
        width: 80%;
        height: 83vh;
        margin-left: auto;
        margin-right: auto;
    }

    .back_button {
        margin-top: 15px;
        position: absolute;
    }
</style>
