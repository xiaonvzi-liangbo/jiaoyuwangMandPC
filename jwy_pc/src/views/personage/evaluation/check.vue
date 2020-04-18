<template>
  <div>
    <div>
      <div class="top-title">
        <img src="@/assets/gr/heards.png" />

        <div  style="margin-left:10px;">
          <div>亲爱的{{userName}}欢迎来到新里程教育</div>
          <div style="margin-top:20px;">
            <el-button type="primary" plain size="small" class="ri-but" @click="record">完善档案</el-button>
          </div>
        </div>
      </div>
      <br />
      <p class="grades">
        你的成绩：
        <span style="color:#E72222">{{number}}</span>
      </p>
    </div>
    <div>
      <div id="container" style="height: 100%"></div>
    </div>
    <div>
      <p class="content-title">推荐院校</p>
      <div class="details">
        <img class="details-img" :src="src" alt />
        <div class="details-text">
          <p class="details-name">{{shooles}}</p>

          <p>潍坊学院是教育部批准建立的一所山东省属全日制综合性普通本科高校，是山东省应用型人才培养特色名校立项建设单位、山东省硕士学位授予立项建设A类单位...</p>
          <p style="color:#999999">
            热门报考专业：
            <span class="chil">统计与会计核算</span>
            <span class="chil">统计与会计核算</span>
            <span class="chil">统计与会计核算</span>
          </p>
        </div>
        <div class="details-but">
          <el-button type="primary" icon="el-icon-edit-outline" plain>我要报名</el-button>
          <el-button type="primary" icon="el-icon-chat-dot-round" plain>查看详情</el-button>
          <div class="details-class">
            <span>
              <i class="el-icon-edit-outline"></i> 学校简介
            </span>
            <span>
              <i class="el-icon-chat-dot-round"></i> 招生简章
            </span>
            <span>
              <i class="el-icon-price-tag"></i> 招生专业
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style="    width: 350px;">
      <p class="content-title">备考课程</p>
      <div class="details">
        <img
          class="courses-img"
          src="https://staticfile.xlcwx.com/userfiles/201902/20190222152431.png"
          alt
        />
        <div class="courses-text">
          <p class="courses-con">
            自考-汉语言文学-本科-协
            议保障班
          </p>
          <div class="details" style="justify-content: space-between;">
            <el-button
              size="mini"
              style="padding:4px 7px;color:#FF7439; border:#FF7439 1px solid"
            >直播</el-button>
            <el-button
              size="mini"
              style="padding:4px 7px;color:#1B89FA; border:#1B89FA 1px solid"
            >点播</el-button>
            <span style="color:#F15817">¥ 7980</span>
          </div>
        </div>
      </div>
    </div>
    <div class="butbox">
      <el-button id="xlcjy_yd" class="but" type="primary">专业规划师1V1规划</el-button>
    </div>
  </div>
</template>
<script>
import { getUser } from '@/utile/auth.js'
import echarts from 'echarts'
export default {
  name: 'index',
  data () {
    return {
      userName: getUser(),
      button: '完善档案',
      number: '76',
      src: 'https://staticfile.xlcwx.com/userfiles/201909/20190911135223.gif',
      shooles: '山东师范大学'
    }
  },
  methods: {
    record () {
      this.$router.push({
        path: '/personage/record'
      })
    }
  },
  mounted () {
    var dom = document.getElementById('container')
    var myChart = echarts.init(dom)
    // 动态追加一个script
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/d68c10a9392a31fd1eccf18dacc8ba70')
    recaptchaScript.setAttribute('id', 'qd2852173998d68c10a9392a31fd1eccf18daasdfasdfas')
    document.head.appendChild(recaptchaScript)
    let option = {
      radar: [
        {
          indicator: [
            { text: '锐角三角比' },
            { text: '相似图像' },
            { text: '二次函数' },
            { text: '函数图像' },
            { text: '方程' }
          ],
          center: ['20%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 4,
          shape: 'circle',
          name: {
            formatter: '{value}',
            textStyle: {
              color: '#72ACD1'
            }
          },
          splitArea: {
            areaStyle: {
              color: [
                'rgb(43, 226, 226)',
                ' rgb(43, 144, 226)',
                '#FF7439',
                'rgba(114, 172, 209, 0.8)',
                'rgba(114, 172, 209, 1)'
              ]
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        {
          indicator: [
            { text: '英英题' },
            { text: '英中题' },
            { text: '语境题' }
          ],
          center: ['75%', '50%'],
          radius: 120,
          startAngle: 90,
          splitNumber: 5,
          shape: 'circle',
          name: {
            formatter: '{value}',
            textStyle: {
              color: '#72ACD1'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['#FF7439', ' #FF7439', '#FF7439', '#FF7439', '#FF7439'],
              shadowColor: '#fff'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        }
      ],
      series: [
        {
          name: '数学水平',
          type: 'radar',

          data: [
            {
              value: [60, 5, 0.3, 10],

              areaStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          ]
        },
        {
          name: '成绩单',
          type: 'radar',
          radarIndex: 1,
          data: [
            {
              value: [0, 18, 20],
              areaStyle: {
                color: 'rgba(255, 255, 255, 0.5)'
              }
            }
          ]
        }
      ]
    }
    if (option && typeof option === 'object') {
      myChart.setOption(option, true)
    }
  }
}
</script>
<style scoped>
#container {
  height: 300px !important;
  width: 100% !important;
}
.content-title {
  margin-top: 50px;
  font-size: 18px;
  color: rgba(51, 51, 51, 1);
  line-height: 34px;
}

#chart_example {
  width: 50%;
  height: 500px;
  border: 1px solid red;
  margin: 0 auto;
}

.top-title {
  display: flex;
  flex-direction: row;
}
.grades {
  color: #999999;
  font-size: 18px;
}

.details {
  display: flex;
  flex-direction: row;
}
.details-img {
  height: 70px;
}
.details-text {
  margin-left: 21px;
  width: 500px;
}
.details-name {
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: rgba(102, 102, 102, 1);
  line-height: 37px;
}
.details-but {
  width: 280px;
  margin-left: 70px;
}
.details-class {
  font-size: 12px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  color: rgba(102, 102, 102, 1);
}
.details-but .el-button {
  background-color: #fff;
  padding: 15px 24px;
}
.chil {
  margin-left: 20px;
}
.courses-text {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.courses-img {
  height: 80px;
}
.courses-con {
  margin: 0;
  width: 181px;
  height: 40px;
  font-size: 16px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 24px;
}
.butbox {
  display: flex;
  justify-content: center;
}
.but {
  margin-top: 64px;
  width: 420px;
  height: 80px;
  border-radius: 0;
  background-color: #0b5fa8;
  font-size: 20px;
}
</style>
<style >
#container > div {
  width: 100% !important;
}
canvas {
  width: 100% !important;
}
</style>
