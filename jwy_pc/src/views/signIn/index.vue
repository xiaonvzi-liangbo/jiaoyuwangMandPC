<template>
  <div style="heigfht:100%;">
    <div class="heards">
      <div class="center">
        <div class="horizontal">
          <div class="point" @click="regin('logIn')"><i class="el-icon-user i_posi"></i>请登录</div>
          <el-divider direction="vertical"></el-divider>
          <div class="point" @click="regin('register')">免费注册</div>
        </div>
      </div>
    </div>
    <div class="top">
      <div class="top_posit">
        <img src="../../assets/index/newlogo.png" style="float:left;"/>
        <span class="landing">登陆</span>
      </div>
    </div>
    <div class="back">
      <div class="dlZc">
        <logIn v-show="switchover==='logIn'" @login="regin('register')"></logIn>
        <register v-show="switchover==='register'" @debark="regin('logIn')"></register>
      </div>
    </div>
    <bottoms></bottoms>
  </div>
</template>
<script>
import bottoms from '../../components/bottoms/bottoms'
import logIn from './register/logIn'
import register from './register/register'
export default {
  name: 'signIn',
  data () {
    return {
      switchover: 'logIn'
    }
  },
  components: {
    bottoms,
    logIn,
    register
  },
  methods: {
    // 切换点击事件
    regin (value) {
      this.switchover = value
    }
  },
  mounted () {
    this.switchover = this.$route.query.switchover
    if (!this.switchover) {
      this.switchover = 'logIn'
    }
  }
}
</script>
<style scoped>
  .heards{
    height: 45px;
    line-height: 45px;
    background-color: #333333;
    color: #FFFFFF;
    font-size: 15px;
  }
  .center{
    width: 1180px;
    margin: auto;
  }
  .horizontal{
    float: right;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .i_posi{
    position: relative;
    right: 5px;
    top: 2px;
  }
  .point{
    cursor: pointer;
  }
  .point:hover{
    color: #F47378;
  }
  .top{
    height: 100px;
    width: 1180px;
    margin: auto;
  }
  .landing{
    color: #0593D4;
    font-size: 30px;
    height: 44px;
    border-left: 2px solid #0593D4;
    padding-left: 19px;
    margin-left: 19px;
    position: relative;
    top: 8px;
  }
  .top_posit{
    position: relative;
    top: 20px;
  }
  .back{
    background: url('~@/assets/index/dlback.png');
    height: 649px;
  }
  .dlZc{
    width: 464px;
    /* height: 550px; */
    background-color: #FFFFFF;
    box-shadow: 0 0 10px #0393D4;
    position: absolute;
    border-radius: 2px;
    right: 20%;
    margin-top: 50px;
    padding-bottom: 20px;
  }
</style>
