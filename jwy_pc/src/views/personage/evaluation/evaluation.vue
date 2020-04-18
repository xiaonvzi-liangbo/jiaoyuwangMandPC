<template>
  <div class="dis-right">
    <div class="box">
      <div class="boxtop">学历提升规划测评</div>
      <div class="boxbottom">
        <span class="m-r-70">测试时间：{{time}}</span>
        <span>需要提升层次：{{need}}</span>
        <div class="box-r">
          <el-button type="primary" @click="go('/personage/check')">查看测评报告</el-button>
          <p id="xlcjy_yd" class="pspan">规划师帮我解读</p>
        </div>
        <div class="m-t-50">
          <p>
            测评结果：
            <span class="pred">{{result}}</span>
          </p>
        </div>
        <div class="butbox">
          <el-button type="primary" plain style="  ">重新在线测试</el-button>
          <el-button type="primary" style="background-color:#FF6A3C;border:0;">另存为PDF</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUser } from '@/utile/auth.js'
import request from '@/utile/request.js'
export default {
  name: 'index',
  data () {
    return {
      time: ' 2019-12-20 10:29:26',
      need: '本科',
      result: '不及格'
    }
  },
  methods: {
    go (path) {
      this.$router.push(path)
    },
    // 获取资料完整度
    getzl () {
      let that = this
      request({
        url: '/eduWeb/register/findByIsPerfectData',
        method: 'post',
        data: {
          userName: getUser()
        }
      }).then(res => {
        let num = res.data
        if (num === '1') {
          that.button = '编辑档案'
        } else {
          that.button = '完善档案'
        }
      })
    }
  },
  mounted () {
    this.getzl()
    // 动态追加一个script
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/d68c10a9392a31fd1eccf18dacc8ba70')
    recaptchaScript.setAttribute('id', 'qd2852173998d68c10a9392a31fd1eccf18daasdfasdfas')
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
.pred {
  color: #f61d1d;
}
.box-r {
  right: 70px;
  position: absolute;
  top: 100px;
}
.butbox {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
</style>
