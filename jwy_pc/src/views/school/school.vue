<template>
  <div>
    <div class="backimg">
      <!-- <img src="@/assets/school/top_bg.png" class="top"/> -->
    </div>
    <div class="groupNav">
      <div class="nav">
        <div class="nav_conter" @click="switchover='selfstudy'" :class="{'nav_conter_check':switchover==='selfstudy'}">自学考试</div>
        <div class="nav_conter" @click="switchover='adult'" :class="{'nav_conter_check':switchover==='adult'}">成人高考</div>
        <div class="nav_conter" @click="switchover='network'" :class="{'nav_conter_check':switchover==='network'}">网络教育</div>
        <div class="nav_conter" @click="switchover='dispark'" :class="{'nav_conter_check':switchover==='dispark'}">开放教育</div>
      </div>
    </div>
    <div class="back_color">
      <div v-if="switchover==='selfstudy'">
        <selfstudy></selfstudy>
      </div>
      <div v-if="switchover==='adult'">
        <adult></adult>
      </div>
      <div v-if="switchover==='network'">
        <network></network>
      </div>
      <div v-if="switchover==='dispark'">
        <dispark></dispark>
      </div>
    </div>
  </div>
</template>
<script>
import selfstudy from './schoolSwit/selfStudy'
import adult from './schoolSwit/adult'
import network from './schoolSwit/network'
import dispark from './schoolSwit/dispark'
export default {
  name: 'school',
  data () {
    return {
      switchover: 'selfstudy'
    }
  },
  components: {
    selfstudy,
    adult,
    network,
    dispark
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .backimg{
    background: url('~@/assets/school/top_bg.png');
    height: 550px;
    background-size: 100% 100%;
  }
  .top{
    width: 100%;
    height: 100%;
  }
.groupNav{
  background-color: #fff;
  border-bottom: 1px solid #CCCCCC;
  position: relative;
  height: 66px;
}
.nav{
  width: 1189px;
  margin: auto;
  height: 66px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.nav_conter{
  margin-right: 85px;
  line-height: 64px;
  cursor: pointer;
}
.nav_conter:hover{
  border-bottom: 2px solid #0B5FA8;
  color: #0B5FA8;
}
.nav_conter_check{
  border-bottom: 2px solid #0B5FA8;
  color: #0B5FA8;
}
.back_color{
  background-color: #F7F7F7;
}
</style>
