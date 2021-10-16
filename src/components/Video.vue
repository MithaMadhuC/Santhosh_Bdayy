<template>
    <div class="video" >
    <div  class="container">
        <!-- Header -->
        <el-row>
            <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
                <el-button @click="goBack()" class="back_button" type="danger" circle
                           icon="el-icon-d-arrow-left"></el-button>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <h1>Audio</h1>
            </el-col>
        </el-row>
  

         <el-row type="flex" class="button_row" justify="center">
                    <el-col :xs="16" :sm="16" :md="12" :lg="6" :xl="6">
                        <transition name="slide-fade">
                            <el-button class="home_button"
                            @click.prevent="playSound('http://soundbible.com/mp3/Elevator Ding-SoundBible.com-685385892.mp3')">
                            <span class="fa fa-play-circle-o"></span>
                                Here You Go Santhosh..!!
                            </el-button>
                        </transition>
                    </el-col>
                </el-row>

    </div>


    </div>
</template>

<script>
    export default {
        name: "Audio",
        
         play() {
            var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
            audio.play();
        },
        methods: {
            goBack() {
                this.$router.go(-1);
            },

             playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
        }
    }
</script>

<style scoped>
    .back_button {
        margin-top: 15px;
        position: absolute;
    }
 .el-main {
        color: rgb(201, 67, 67);
        text-align: center;
        line-height: 160px;
        width: 100vw;
    }

    .btn{
  outline: none !important;
}

.btn.btn-primary {
  background-color: #dd6161;
  border-color: #dd6161 ;
  outline: none;
  
  padding-right: 4px;
}
 .home_button {
        width: 100%;
        height: 100%;
        font-size: 20px;
        font-weight: bold;
        border-radius: 20px;
        background-color: #dd6161
    }

.btn-sm {
  font-size: 22px;
  padding: 2px 1px 2px 4px;
  line-height: 12px;
  margin-right: 10px;
}

.posts_index {
  height: 180px;
}

.posts_index p {
  position: absolute;
}

.container{   
    background-image: url('~@/assets/SanthoshPics.jpg');
    background-size: cover;
    height: 100%;
    background-position: 'center center';    
}
</style>