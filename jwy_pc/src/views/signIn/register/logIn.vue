<!--登陆模块-->
<template>
  <div>
    <div class="title">登陆新里程教育网</div>
    <el-form :model="login" class="fromData" ref="login" :rules="rules">
      <el-form-item prop="name">
        <el-input v-model="login.name" prefix-icon="el-icon-user" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="login.password" prefix-icon="iconfont icon-mima" placeholder="密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <div class="forget" @click="password">忘记密码？</div>
        <el-button type="primary" style="width:100%;height:50px;font-size:22px;" @click="landing('login')">登录</el-button>
      </el-form-item>
      <el-form-item>
        <div class="for_bottom">
          <!-- <el-checkbox v-model="login.checked">自动登录</el-checkbox> -->
        </div>
        <div class="for_bottom_right" @click="register">立即注册</div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/utile/request.js'
import { setUser } from '@/utile/auth.js'
export default {
  name: 'logIn',
  data () {
    return {
      login: {
        name: '',
        password: '',
        checked: ''
      },
      rules: {
        name: [{ required: true, message: '账号不能为空！', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空！', trigger: 'blur' }]
      }
    }
  },
  methods: {
    // 立即注册点击事件
    register () {
      this.$emit('login')
    },
    // 忘记密码点击事件
    password () {
      this.$router.push({
        path: '/signIn/password'
      })
    },
    // 登陆点击事件
    landing (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request({
            url: '/eduWeb/register/signIn',
            method: 'post',
            data: {
              phone: that.login.name,
              passWord: that.login.password
            }
          })
            .then(res => {
              if (res.code === 200) {
                that.$notify({
                  title: '登陆成功',
                  message: '欢迎使用新里程教育网，祝您使用愉快！'
                })
                setUser(that.login.name)
                that.$router.push({
                  path: '/'
                })
              } else {
                that.$message.error(res.data)
              }
            })
        }
      })
    }
  }
}
</script>
<style scoped>
  .title{
    color: #0593D4;
    text-align: center;
    line-height: 100px;
    font-size: 24px;
  }
  .fromData{
    width: 70%;
    margin: auto;
    margin-top: 30px;
  }
  .forget{
    font-size: 16px;
    color: #999;
    position: relative;
    bottom: 25px;
    float: right;
    cursor: pointer;
  }
  .for_bottom{
    display: inline-block;
    font-size: 16px;
    color: #000000;
  }
  .for_bottom_right{
    display: inline-block;
    color: #999;
    position: absolute;
    right: 0;
    cursor: pointer;
  }
  .for_bottom_right:hover,.forget:hover{
    color: #1C77D5;
  }
  .fromData >>> .el-input__inner{
    height: 50px !important;
    font-size: 16px !important;
  }
</style>
