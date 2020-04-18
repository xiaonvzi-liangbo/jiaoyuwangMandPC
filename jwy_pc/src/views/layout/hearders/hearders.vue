<template>
  <div>
    <div class="cephalic">
      <div class="heards">
        <div style="display:inline-block">欢迎来到新里程教育网！</div>
        <div class="register">
          <div class="reg_conter" v-if="!username">
            <span class="modality" @click="landing('logIn')">登陆</span>
            /
            <span class="modality" @click="landing('register')">注册</span>
          </div>
          <div v-if="username">
            <img src="@/assets/heards/touxiang.png" class="touxiang"/>
            <span class="modality" @click="personalCenter">{{username}}</span>
            <el-divider direction="vertical"></el-divider>
            <span class="modality" @click="quit">[退出]</span>
          </div>
          <div class="reg_conter"><img src="@/assets/heards/lianjie.png" class="lianjie"/>微信小程序</div>
          <div class="reg_conter"><i class="iconfont icon-weixin icons"></i>官方微信</div>
        </div>
      </div>
    </div>
    <div class="heards">
      <img src="../../../assets/index/logo.png" style="display:inline-block" />
      <el-menu :default-active="$route.path" mode="horizontal" class="nav" active-text-color="#0B5FA8" text-color="#333333" router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/school">找学校</el-menu-item>
        <el-menu-item index="/course">热门课程</el-menu-item>
        <el-menu-item index="/activity">课程活动</el-menu-item>
        <el-menu-item index="/counselor">课程顾问</el-menu-item>
        <el-menu-item index="/study">学习环境</el-menu-item>
        <!-- <el-menu-item index="/promote">学历提升规划</el-menu-item>
        <el-menu-item index="/textualResearch">职业考证辅导</el-menu-item>
        <el-menu-item index="/school">择校服务</el-menu-item>
        <el-menu-item index="/course">热门课程</el-menu-item>
        <el-menu-item index="/research">研修班</el-menu-item>
        <el-menu-item index="/studyAbroad">出国留学</el-menu-item> -->
      </el-menu>
    </div>
  </div>
</template>
<script>
import { getUser, removeUser } from '@/utile/auth.js'
export default {
  name: 'hearders',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    // 登陆注册点击事件
    landing (value) {
      this.$router.push({
        path: '/signIn',
        query: {
          switchover: value
        }})
    },
    // 个人中心点击事件
    personalCenter () {
      this.$router.push({
        path: '/personage/tacitly'
      })
    },
    // 退出点击事件
    quit () {
      this.$confirm('确定要退出吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        removeUser()
        this.$router.push('/')
        this.username = getUser()
        this.$message({
          type: 'success',
          message: '已成功退出登录!'
        })
      })
    }
  },
  mounted () {
    this.username = getUser()
  }
}
</script>
<style scoped>
  .cephalic{
    background-color: #333333;
    color: #FFFFFF;
    padding: 15px 0;
    font-size: 14px;
  }
  .heards{
    width: 1181px;
    margin: auto;
    overflow: hidden;
  }
  .navigations{
    width: 1181px;
    margin: auto;
  }
  .register{
    float: right;
    display: flex;
    flex-direction: row;
  }
  .reg_conter{
    float: left;
    margin-left: 42px;
  }
  .el-menu.el-menu--horizontal{
    border-bottom: none;
  }
  .el-menu--horizontal>.el-menu-item{
    line-height: 85px;
    height: 70px;
    font-size: 16px;
    border-bottom: 2px solid red;
  }
  .nav{
    float: right;
    font-size: 14px;
  }
  .modality{
    margin: 0 3px;
    cursor: pointer;
  }
  .modality:hover{
    color: #eee;
  }
  .lianjie{
    width: 22px;
    height: 22px;
    float: left;
    position: relative;
    right: 5px;
  }
  .icons{
    color: #999999;
    margin-right: 5px;
    position: relative;
    top: 1px;
  }
  .touxiang{
    position: relative;
    top: 2px;
  }
</style>
