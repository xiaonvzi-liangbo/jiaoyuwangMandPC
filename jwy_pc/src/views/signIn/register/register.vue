<template>
  <div>
    <div class="title">注册新里程教育网</div>
    <el-form :model="logins" :rules="loginhg" ref="logins" class="fromData">
      <el-form-item prop="phoneo">
        <el-input placeholder="请输入手机号" v-model="logins.phoneo" prefix-icon="iconfont icon-shouji"></el-input>
      </el-form-item>
      <el-form-item prop="yzm">
        <el-input placeholder="验证码" maxlength="4" v-model="logins.yzm" prefix-icon="iconfont icon-yanzhengma"></el-input>
        <img :src='src' class="position" @click="getGraph"/>
      </el-form-item>
      <el-form-item prop="sjyzm">
        <el-input placeholder="请输入手机验证码" maxlength="4" v-model="logins.sjyzm" prefix-icon="iconfont icon-yuechi" style="width:322px;"></el-input>
        <el-button type="primary" class="position" size="medium" @click="getAuth" :disabled="checked">{{text}}</el-button>
      </el-form-item>
      <el-form-item prop="passwordo">
        <el-input placeholder="请输入密码" maxlength="16" v-model="logins.passwordo" show-password prefix-icon="iconfont icon-mima" style="width:322px;"></el-input>
      </el-form-item>
      <el-form-item prop="passwordt">
        <el-input placeholder="请确认密码" maxlength="16" v-model="logins.passwordt" show-password prefix-icon="iconfont icon-suo1" style="width:322px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="height:50px;width:100%;font-size:22px;margin-top:20px;" type="primary" @click="registrys('logins')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import request from '@/utile/request.js'
export default {
  name: 'register',
  data () {
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.logins.passwordt !== '') {
          this.$refs.logins.validateField('passwordt')
        }
        callback()
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.logins.passwordo) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      logins: {
        phoneo: '',
        yzm: '',
        sjyzm: '',
        passwordo: '',
        passwordt: '',
        uuid: ''
      },
      text: '获取验证码',
      src: '',
      checked: false,
      loginhg: {
        phoneo: [
          {required: true, message: '请输入手机号码', trigger: 'blur'},
          {pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误', trigger: 'blur'}
        ],
        yzm: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ],
        sjyzm: [
          {required: true, message: '请输入手机验证码', trigger: 'change'}
        ],
        passwordo: [
          {validator: validatePass, trigger: 'blur'}
        ],
        passwordt: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    // 注册点击事件
    registrys (formName) {
      let that = this
      that.$refs[formName].validate((valid) => {
        if (valid) {
          request({
            url: '/eduWeb/register/userRegistrion',
            method: 'post',
            data: {
              phone: that.logins.phoneo,
              imgVerification: that.logins.yzm,
              verificationCode: that.logins.sjyzm,
              passWord: that.logins.passwordt,
              randomH: that.logins.uuid
            }
          })
            .then(res => {
              if (res.code === 200) {
                that.$message({
                  message: '注册成功',
                  type: 'success'
                })
                that.$refs[formName].resetFields()
                that.$emit('debark')
              } else {
                that.$message.error(res.data)
              }
            })
        }
      })
    },
    // 获取验证码点击事件
    getAuth () {
      let that = this
      if (that.logins.phoneo) {
        request({
          url: '/eduWeb/jXSmsApp/add',
          method: 'post',
          data: {
            phone: that.logins.phoneo
          }
        })
          .then(res => {
            that.$message({
              message: '发送成功！',
              type: 'success'
            })
            let time = 60
            that.text = `(${time})秒后重发`
            that.checked = true
            let setTime = setInterval(() => {
              time = time - 1
              that.text = `(${time})秒后重发`
              if (time === 0) {
                that.checked = false
                that.text = '获取验证码'
                clearInterval(setTime)
              }
            }, 1000)
          })
      } else {
        that.$message.error('请输入手机号码！')
      }
    },
    // 获取图片验证码
    getGraph () {
      let that = this
      // 生成uuid
      let s = []
      let hexDigits = '0123456789abcdef'
      for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
      }
      s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
      s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
      s[8] = s[13] = s[18] = s[23] = '-'
      let uuid = s.join('')
      that.logins.uuid = uuid
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
  mounted () {
    this.getGraph()
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
  }
  >>> .el-input__inner{
    height: 50px !important;
    font-size: 16px !important;
  }
  .position{
    position: absolute;
    right: 10px;
    top: 7px;
  }
</style>
