<template>
  <div class="dis-right">
    <div class="box">
      <div class="boxtop">方案号：{{number}}</div>
      <div class="boxbottom">
        <span class="m-r-70">目前学历：{{xueli}}</span>
        <span class="m-r-70">户籍：{{address}}</span>
        <span>需要提升层次：{{need}}</span>
        <div class="box-r">
          <el-button type="primary" @click="go('/personage/details')">方案详情</el-button>
          <p id="xlcjy_yd" class="pspan">规划师帮我解读</p>
        </div>
        <div class="m-t-50">
          <p>
            推荐院校：
            <span class="pspan">{{institutions}}</span>
          </p>
          <p>
            专属规划师：
            <span class="pspan">{{teacher}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { getUser } from '@/utile/auth.js'
// import request from '@/utile/request.js'
export default {
  name: 'index',
  data () {
    return {
      number: 'sdfgsdfgfgjjkh744678',
      xueli: '专科',
      address: '山东省',
      need: '本科',
      institutions: '山东师范大学',
      teacher: '新里程刘老师（微信号：18500006666）'
    }
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    // 动态追加一个script
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute(
      'src',
      'https://wp.qiye.qq.com/qidian/2852173998/d68c10a9392a31fd1eccf18dacc8ba70'
    )
    recaptchaScript.setAttribute(
      'id',
      'qd2852173998d68c10a9392a31fd1eccf18daasdfasdfas'
    )
    document.head.appendChild(recaptchaScript)
  }
}
</script>
<style scoped>
.box {
  height: 350px;
  border: 1px solid #cccccc;
  font-size: 16px;
}
.boxtop {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  padding-left: 20px;
}
.boxbottom {
  padding: 30px 0 0 20px;
}
.m-r-70 {
  margin-right: 70px;
}
.m-t-50 {
  margin-top: 50px;
}
.pspan {
  font-size: 14px;
  text-align: center;
  color: #0b5fa8;
}
.box-r {
  right: 70px;
  position: absolute;
  top: 100px;
}
</style>
