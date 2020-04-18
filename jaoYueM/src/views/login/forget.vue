<template>
  <div>
    <div class="all">
      <div class="conter">
        <img src="@/assets/school/fanhui.png" class="fh-img" @click="banck"/>
        <div class="title">{{title}}</div>
        <div class="form">
          <div class="position">
            <img src="@/assets/logs/phone.png" class="labels"/>
            <input placeholder="请输入手机号" v-model="fromData.phone" class="input"/>
          </div>
          <div class="position">
            <img src="@/assets/logs/news.png" class="labels"/>
            <input placeholder="请输入验证码" v-model="fromData.code" class="input"/>
            <div class="code" @click="getCode" :class="{'back-color':bool}">{{info}}</div>
          </div>
          <div class="position">
            <img src="@/assets/logs/keyboard.png" class="labels"/>
            <input type="password" placeholder="请重设密码" v-model="fromData.password" class="input"/>
          </div>
          <div class="button" @click="upload">
            确定
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utile/request.js'
export default {
  name:'forget',
  props:{
    title:{
      type:String,
      default:'忘记密码'
    }
  },
  data(){
    return{
      info:'获取验证码',
      bool:false,
      fromData:{
        phone:'',
        code:'',
        password:''
      }
    }
  },
  methods: {
    //返回点击事件
    banck(){
      this.$emit('close')
    },
    //获取验证码点击事件
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
    //修改密码点击事件
    upload(){
      let that = this
      if(!that.fromData.phone){
        that.$toast('请输入正确的手机号码') 
      }else if(!that.fromData.code){
        that.$toast('请输入验证码') 
      }else if(!that.fromData.password){
        that.$toast('请输入密码') 
      }else{
        request({
          url:'/eduWeb/register/updatePassWrod',
          method:'post',
          data:{
            phone:that.fromData.phone,
            newPassWord:that.fromData.password,
            verificationCode:that.fromData.code
          }
        })
        .then(res=>{
          if(res.code===200){
            that.$toast('修改成功') 
            window.sessionStorage.removeItem('show')
            that.banck()
          }
        })
      }
    }
  }
}
</script>
<style scoped>
  .all{
    position: absolute;
    top: 149px;
    left: 48px;
  }
  .conter{
    width: 596px;
    height: 869px;
    background-color: #fff;
    padding: 30px;
  }
  .fh-img{
    width: 20px;
    height: 34px;
    margin-top: 20px;
  }
  .title{
    display: inline-block;
    position: relative;
    color: #24A1D8;
    font-size: 38px;
    left: 210px;
  }
  .form{
    margin-top: 50px;
  }
  .position{
    margin-bottom: 26px;
    position: relative;
  }
  .input{
    width: 505px;
    height: 79px;
    line-height: 79px;
    padding-left: 68px;
    padding-right: 20px;
    border-radius: 5px;
    border: 2px solid #E7E7E7;
  }
  .input::-webkit-input-placeholder{
    color:#B9B7BB;
  }
  .input:focus {
    outline:none;
  }
  .labels{
    position: absolute;
    top: 27px;
    left: 20px;
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
  .back-color{
    background-color: #64ABCA !important;
  }
  .button{
    width: 324px;
    margin: auto;
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
</style>