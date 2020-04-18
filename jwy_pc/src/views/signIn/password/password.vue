<template>
  <div style="heigfht:100%;">
    <!-- <div class="heards">
      <div class="center">
        <div class="horizontal">
          <div class="point" @click="regin('logIn')"><i class="el-icon-user i_posi"></i>请登录</div>
          <el-divider direction="vertical"></el-divider>
          <div class="point" @click="regin('register')">免费注册</div>
        </div>
      </div>
    </div> -->
    <div>
      <div class="back-conter">
        <div class="back-head">
          <div>
            <img src="@/assets/index/newlogo.png" width="173" height="45"/>
            <span class="back-traffic">通行证</span>
          </div>
          <div style="font-size:14px;">
            <span>已有账号</span>
            <span class="back-reg" style="margin-left:10px;" @click="landing">马上登陆</span>
            <el-divider direction="vertical"></el-divider>
            <span>返回</span>
            <span class="back-reg" @click="backtrack">新里程</span>
          </div>
        </div>
        <div class="amend">
          <div class="ame-title">账号安全</div>
          <div class="ame-conter" v-show="shows==='1'">
            <div>找回密码</div>
            <div class="ame-input">
              <el-input placeholder="请输入您的手机号" v-model="phone"></el-input>
            </div>
            <div class="ame-input">
              <el-input placeholder="请输入验证码" v-model="codes" maxlength="4"></el-input>
              <el-button class="ame-code" type="primary" @click="code" :disabled="info!=='获取验证码'">{{info}}</el-button>
            </div>
            <div class="ame-input">
              <el-input placeholder="请输入新的密码" v-model="password" maxlength="4" show-password></el-input>
            </div>
            <el-button type="primary" style="width:335px;" @click="nextStep">下一步</el-button>
          </div>
          <div class="ame-conter" v-show="shows==='2'">
            <div>找回密码</div>
            <div style="margin-top:50px;">您已成功找回新密码，请尝试新密码登录</div>
            <el-button type="primary" class="regs" @click="landing">马上登陆</el-button>
          </div>
          <div class="ame-conter" v-show="shows==='3'">
            <div>修改密码</div>
            <div class="ame-input">
              <el-input placeholder="请输入您的密码" v-model="upPass.oldpass"></el-input>
            </div>
            <div class="ame-input">
              <el-input placeholder="请输入您新的密码" v-model="upPass.newpass" show-password></el-input>
            </div>
            <div class="ame-input">
              <el-input placeholder="请确认您的新密码" v-model="upPass.affirm" show-password></el-input>
            </div>
            <el-button type="primary" style="width:335px;" @click="recompose">修改</el-button>
          </div>
          <div class="ame-conter" v-show="shows==='4'">
            <div>修改密码</div>
            <div style="margin-top:50px;">修改成功，请牢记您的新密码</div>
            <el-button type="primary" class="regs" @click="landing">马上登陆</el-button>
          </div>
        </div>
        <div class="bottom">Copyright © xlcxx.com, All Rights Reserved. <br/>新里程（山东）教肓信息有限公司版权所有鲁丨<a href="http://beian.miit.gov.cn" target="_blank" style="color:#666;">鲁ICP备10037155号-23</a> </div>
      </div>
    </div>
  </div>
</template>
<script>
import bottoms from '../../../components/bottoms/bottoms'
import request from '@/utile/request.js'
import { getUser, removeUser } from '@/utile/auth.js'
export default {
  name: 'signIn',
  data () {
    return {
      switchover: 'logIn',
      info: '获取验证码',
      phone: '',
      codes: '',
      shows: '3',
      password: '',
      upPass: {
        oldpass: '',
        newpass: '',
        affirm: ''
      }
    }
  },
  components: {
    bottoms
  },
  methods: {
    // 登陆点击事件
    landing () {
      this.$router.push({
        path: '/signIn',
        query: {
          switchover: 'logIn'
        }})
    },
    // 返回新里程点击事件
    backtrack () {
      this.$router.push({
        path: '/'
      })
    },
    // 获取验证码点击事件
    code () {
      let that = this
      let reg = /^1[3456789]\d{9}$/
      if (reg.test(that.phone)) {
        request({
          url: '/eduWeb/jXSmsApp/add',
          method: 'post',
          data: {
            phone: that.phone
          }
        })
          .then(res => {
            if (res.code === 200) {
              that.$message({
                message: '发送成功',
                type: 'success'
              })
              let num = 60
              that.info = num + '秒后重发'
              let inter = setInterval(() => {
                num = num - 1
                that.info = num + '秒后重发'
                if (num === 0) {
                  clearInterval(inter)
                  that.info = '获取验证码'
                }
              }, 1000)
            } else {
              that.$message.error(res.data)
            }
          })
      } else {
        that.$message.error('请输入正确的手机号码')
      }
    },
    // 修改密码点击事件
    recompose () {
      let that = this
      let warn = ''
      if (!that.upPass.oldpass) {
        warn = '请输入您的密码'
      } else if (!that.upPass.newpass) {
        warn = '请输入您的新的密码'
      } else if (!that.upPass.affirm) {
        warn = '请输入您确认的密码'
      } else if (that.upPass.newpass !== that.upPass.affirm) {
        warn = '两次密码输入不一致'
      } else {
        request({
          url: '/eduWeb/register/updatePassWrod',
          method: 'post',
          data: {
            phone: getUser(),
            passWord: that.upPass.oldpass,
            newPassWord: that.upPass.affirm
          }
        })
          .then(res => {
            if (res.code === 200) {
              that.$message({
                message: '修改成功',
                type: 'success'
              })
              that.shows = '4'
              removeUser()
            } else {
              that.$message.error(res.data)
            }
          })
      }
      if (warn) {
        that.$message.error(warn)
      }
    },
    // 下一步点击事件
    nextStep () {
      let that = this
      let warn = ''
      let reg = /^1[3456789]\d{9}$/
      if (!reg.test(that.phone)) {
        warn = '请输入正确的手机号码'
      } else if (!that.codes) {
        warn = '请输入验证码'
      } else if (!that.password) {
        warn = '请输入新的密码'
      } else {
        request({
          url: '/eduWeb/register/updatePassWrod',
          method: 'post',
          data: {
            phone: that.phone,
            verificationCode: that.codes
          }
        })
          .then(res => {
            if (res.code === 200) {
              that.$message({
                message: '修改成功',
                type: 'success'
              })
              removeUser()
              that.shows = '2'
            } else {
              that.$message.error('发送失败！')
            }
          })
      }
      if (warn) {
        that.$message.error(warn)
      }
    }
  }
}
</script>
<style scoped>
  .back-conter{
    width: 940px;
    height: 600px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  .back-head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .back-traffic{
    font-size: 24px;
    margin-left: 15px;
    position: relative;
    bottom: 12px;
  }
  .amend{
    border-radius: 9px;
    box-shadow: 0px 0px 10px #E5E5E5;
    margin-top: 18px;
    height: 500px;
  }
  .ame-title{
    text-align: center;
    font-size: 24px;
    height: 76px;
    line-height: 76px;
    background-color: #0A84FF;
    border-radius: 9px 9px 0 0;
    color: #fff;
  }
  .ame-conter{
    text-align: center;
    padding: 20px 0;
  }
  .ame-input{
    display: block;
    width: 335px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
  }
  .ame-code{
    padding: 0 !important;
    font-size: 14px;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 4px;
    position: absolute;
    right: 7px;
    top: 5px;
    cursor: pointer;
  }
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
  .back-reg{
    color: #0593D4;
    cursor: pointer;
  }
  .bottom{
    text-align: center;
    margin-top: 30px;
    font-size: 14px;
    color: #666;
  }
  .regs{
    width: 335px;
    margin-top: 64px;
  }
</style>
