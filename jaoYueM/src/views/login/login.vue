<template>
  <div>
    <heards :title="title" :button="false"></heards>
    <img src="@/assets/index/regback.png" class="img"/>
    <div class="flot" v-if="volume==='1'">
      <div class="title">登陆新里程教育网</div>
      <div class="posi">
        <img src="@/assets/logs/phone.png" class="imges"/>
        <input placeholder="请输入手机号" v-model="fromData.name" maxlength="11" style="border: 1px solid #E7E7E7;"/>
      </div>
      <div class="password">
        <img src="@/assets/logs/keyboard.png" class="imges"/>
        <input placeholder="请输入密码" v-model="fromData.password" type="password" style="border: 1px solid #E7E7E7;"/>
      </div>
      <div class="forget">忘记密码？<span class="find" @click="pass">找回密码</span></div>
      <div class="landing" @click="disembark">登陆</div>
      <div class="text">还没有注册新里程教育网会员</div>
      <div class="begin" @click="register">马上注册</div>
    </div>
    <div v-else-if="volume==='2'">
      <registration @switchover="switchover"></registration>
    </div>
    <div v-else-if="volume==='3'">
      <forget @close="switchover" :title="headline"></forget>
    </div>
    <stern></stern>
  </div>
</template>
<script>
import heards from '@/components/heads/heads'
import registration from './registration'
import request from '@/utile/request.js'
import stern from '@/components/stern/stern'
import forget from './forget'
export default {
  name:'login',
  components:{
    heards,
    registration,
    stern,
    forget
  },
  data(){
    return{
      volume:'1',
      title:'登录',
      headline:'忘记密码',
      fromData:{
        name:'',
        password:''
      }
    }
  },
  methods:{
    //子组件的事件回调函数
    switchover(){
      this.volume = '1'
      this.title = '登录'
    },
    //找回密码点击事件
    pass(){
      this.volume = '3'
      this.title = '找回密码'
    },
    //马上注册点击事件
    register(){
      this.volume = '2'
      this.title = '注册'
    },
    //登陆点击事件
    disembark(){
      let that = this
      let warn = ''
      let bool = true
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if(!reg.test(that.fromData.name)){
        warn = '手机号码输入错误'
      }else if(!that.fromData.password){
        warn = '请输入密码'
      }else{
        bool = false
        request({
          url:'/eduWeb/register/signIn',
          method:'post',
          data:{
            phone:that.fromData.name,
            passWord:that.fromData.password
          }
        })
        .then(res=>{
          if(res.code==200){
            that.$toast('登陆成功') 
            window.sessionStorage.setItem('show',res.data.userName)
            window.sessionStorage.setItem('userid',res.data.userId)
            that.$router.go(-1)
          }else{
            that.$toast(res.data) 
          }
        })
      }
      if(bool){
        that.$toast(warn) 
      }
    }
  },
  mounted(){
    if(this.$route.query.type==='1'){
      this.volume = '1'
      this.title = '登录'
    }else if(this.$route.query.type==='2'){
      this.volume = '2'
      this.title = '注册'
    }else if(this.$route.query.type==='3'){
      this.volume = '3'
      this.headline = this.title = '修改密码'
    }
  }
}
</script>
<style scoped lang="scss">
  .img{
    width: 100%;
    height: 100%;
  }
  .flot{
    width: 596px;
    height: 869px;
    background-color: #fff;
    position: absolute;
    top: 149px;
    left: 48px;
    padding: 30px;
    .title{
      text-align: center;
      color: #24A1D8;
      font-size: 38px;
      margin-top: 20px;
    }
    .posi{
      margin-top: 60px;
      margin-bottom: 26px;
      position: relative;
      .imges{
        position: absolute;
        top: 27px;
        left: 20px;
      }
    }
    .password{
      position: relative;
      .imges{
        position: absolute;
        top: 27px;
        left: 20px;
      }
    }
    input{
      width: 505px;
      height: 79px;
      line-height: 79px;
      padding-left: 68px;
      padding-right: 20px;
      border-radius: 5px;
      &::-webkit-input-placeholder{
        color:#B9B7BB;
      }
      &:focus {
        outline:none;
      }
    }
    .forget{
      position: absolute;
      right: 40px;
      margin-top: 15px;
      .find{
        color: #24A1D8;
      }
    }
    .landing{
      height: 81px;
      line-height: 81px;
      font-size: 30px;
      text-align: center;
      background-color: #24A1D8;
      color: #fff;
      border-radius: 5px;
      margin-top: 81px;
      margin-bottom: 55px;
    }
    .text{
      text-align: center;
      font-size: 26px;
    }
    .begin{
      text-align: center;
      margin-top: 20px;
      font-size: 26px;
      color: #2FA5D9;
    }
  }
</style>