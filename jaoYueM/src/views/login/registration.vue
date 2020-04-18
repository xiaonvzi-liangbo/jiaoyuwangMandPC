<template>
  <div class="float">
    <div class="conter">
      <div class="title">登录新里程教育网</div>
      <div class="position">
        <img src="@/assets/logs/phone.png"/>
        <input maxlength="11" v-model="fromData.phone" placeholder="请输入手机号" />
      </div>
      <div class="inputs">
        <img src="@/assets/logs/email.png"/>
        <input placeholder="请输入验证码" v-model="fromData.txCode" maxlength="4"/>
        <img :src="src" class="src" @click="getyzm"/>
      </div>
      <div class="inputs">
        <img src="@/assets/logs/news.png"/>
        <input placeholder="请输入手机验证码" v-model="fromData.phCode" maxlength="4"/>
        <button class="code" @click="getCode" :class="{'back-color':bool}" :disabled="bool">{{info}}</button>
      </div>
      <div class="inputs">
        <img src="@/assets/logs/keyboard.png"/>
        <input type="password" placeholder="请输入密码" v-model="fromData.password"/>
      </div>
      <div class="inputs">
        <img src="@/assets/logs/keyboard.png"/>
        <input type="password" placeholder="请确认密码" v-model="fromData.newPassword"/>
      </div>
      <div class="button" @click="register">注册</div>
      <div class="texts">已注册，<span style="color:#24A1D8" @click="disembark">马上登陆</span></div>
    </div>
  </div>
</template>

<script>
import request from '@/utile/request.js'
export default {
  name: "registration",
  data() {
    return {
      search: "",
      src:'',
      uuid:'',
      info:'获取验证码',
      bool:false,
      fromData:{
        phone:'',
        txCode:'',
        phCode:'',
        password:'',
        newPassword:''
      }
    };
  },
  methods:{
    //马上登陆点击事件
    disembark(){
      this.$emit('switchover')
    },
    //获取手机验证码
    getCode(){
      let that = this
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if(reg.test(that.fromData.phone)){
        request({
          url:'/eduWeb/jXSmsApp/add',
          method:'post',
          data:{
            phone:that.fromData.phone
          }
        })
        .then(res=>{
          that.$toast('发送成功') 
          let num = 60
          that.bool= true
          that.info = num + '秒重发'
          let inter = setInterval(() => {
            num = num -1
            that.info = num +'秒重发'
            if(num===0){
              clearInterval(inter)
              that.info = '获取验证码'
              that.bool= false
            }
          }, 1000);
        })
      }else{
        that.$toast('请输入正确的手机号码') 
      }
    },
    //注册点击事件
    register(){
      let that = this
      let warn = ''
      let boole = true
      let reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if(!reg.test(that.fromData.phone)){
        warn = '请输入正确的手机号码'
      }else if(!that.fromData.txCode){
        warn = '请输入图像验证码'
      }else if(!that.fromData.phCode){
        warn = '请输入手机验证码'
      }else if(!that.fromData.password){
        warn = '请输入密码'
      }else if(!that.fromData.newPassword){
        warn = '请输入确认密码'
      }else if(that.fromData.password !==that.fromData.newPassword){
        warn = '两次密码输入不一致'
      }else{
        boole = false
        request({
          url:'/eduWeb/register/userRegistrion',
          method:'post',
          data:{
            imgVerification:that.fromData.txCode,
            passWord:that.fromData.newPassword,
            phone:that.fromData.phone,
            randomH:that.uuid,
            verificationCode:that.fromData.phCode
          }
        })
        .then(res=>{
          if(res.code===200){
            that.$toast('注册成功') 
            that.disembark()
          }else{
            that.$toast(res.data) 
          }
        })
      }
      if(boole){
        that.$toast(warn)
      }
    },
    //获取图形验证码
    getyzm(){
      let that = this
      let s = [];
      let hexDigits = "0123456789abcdef";
      for (var i = 0; i < 36; i++) {
          s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      }
      s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = "-";
      let uuid = s.join("");
      that.uuid = uuid
      request({
        url: '/eduWeb/img/image/code',
        method: 'get',
        params: {
          phone: uuid
        },
        responseType: 'arraybuffer'
      })
        .then(res => {
          return 'data:image/png;base64,' + btoa(
            new Uint8Array(res)
              .reduce((data, byte) => data + String.fromCharCode(byte), '')
          )
        }).then(data => {
          that.src = data
        })
    }
  },
  mounted(){
    this.getyzm()
  }
};
</script>
<style scoped lang="scss">
.back-color{
  background-color: #64ABCA !important;
}
.float{
  position: absolute;
  top: 149px;
  left: 48px;
  .conter{
    width: 596px;
    height: 869px;
    background-color: #fff;
    padding: 30px;
    .title{
      text-align: center;
      color: #24A1D8;
      font-size: 38px;
      margin-top: 20px;
    }
    .position{
      margin-top: 44px;
      position: relative;
      img{
        position: absolute;
        top: 27px;
        left: 25px;
      }
    }
    .inputs{
      margin-top: 26px;
      position: relative;
      img{
        position: absolute;
        top: 27px;
        left: 25px;
      }
      .code{
        width: 175px;
        height: 54px;
        line-height: 54px;
        text-align: center;
        background-color: #24A1D8;
        color: #fff;
        border-radius: 5px;
        position: absolute;
        right: 16px;
        top: 15px;
        z-index: 999;
        border: 0;
      }
    }
    input{
      width: 505px;
      height: 79px;
      line-height: 79px;
      padding-left: 68px;
      padding-right: 20px;
      border-radius: 5px;
      border: 2px solid #E7E7E7;
      &::-webkit-input-placeholder{
        color:#B9B7BB;
      }
      &:focus {
        outline:none;
      }
    }
    .src{
      position: absolute;
      left:295px !important;
      top: 7px !important;
    }
  }
  .button{
    height: 81px;
    line-height: 81px;
    font-size: 30px;
    text-align: center;
    background-color: #24A1D8;
    color: #fff;
    border-radius: 5px;
    margin-top: 61px;
    margin-bottom: 55px;
  }
  .texts{
    font-size: 26px;
    text-align: center;
    position: relative;
    bottom: 20px;
  }
}
</style>