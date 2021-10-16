<template>
    <div class="stories_behind">

        <!-- Header -->
        <el-row class="stories_behind_header">
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="24" :xl="24">
                <h1>Stories Behind</h1>
            </el-col>
        </el-row>

        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="24" :md="20" :lg="16" :xl="16">
                <!-- Content -->
                <div class="block" style="overflow:auto">

                    <el-card class="SB_card">
                        <!-- <h3>Content</h3> -->
                        <img src="../assets/BeingUs.jpg" height="500" width="500"/>
                        <h3>No caption needed, the picture says it all.. 🤍</h3>
                    </el-card>

                    <!-- TODO : Change these messages to your own words ... -->
                    <el-card class="SB_card">
                        <h3>Heiii Santhosh Once again happiee hapiee bday to you..!!</h3>
                        <p>
                            Thank you so much for coming into my life<br>
                            I never regret for knowing and being with you in any way<br>
                            Best moments in life for me are the times that we spent together<br>                       
                        </p>
                        <h3> Thanks for letting me know how strong i am today. It is not always about how we change ourselves with time
                            and situation. Sometimes we should be strong enough to change the situation according to us. 
                            #Stay_Stress_Free #Stay_Healthyy
                        </h3>
                        <p>epavu solrathuthan ennanalu pathukalam avlothan easy peasy</p>
                        <h4>With so much Love Signing off Madhu (Anchoring sernthuralam pola ;))</h4>
                        <p>
                          <br>
                         <br>
                        </p>
                    </el-card>

                </div>
            </el-col>
        </el-row>

    </div>

</template>

<script>
    export default {
        name: "StoriesBehind",
        methods: {
            goBack() {
                this.$router.go(-1);
            },
            goGitHub() {
                window.open("https://github.com/amoossssss/birthday_webpage", '_blank');
            }
        }
    }
</script>

<style scoped>
    .stories_behind_header {
        position: fixed;
        width: 100%;
        background: #ffffff;
        z-index: 1;
    }

    .block {
        margin-top: 80px;
        margin-bottom: 50px;
    }

    .back_button {
        margin-top: 15px;
        position: absolute;
    }

    .SB_card {
        width: 80%;
        margin: 0 auto 20px;
    }


</style>