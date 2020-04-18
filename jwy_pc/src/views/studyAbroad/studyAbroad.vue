<template>
  <div>
    <div class="background">
      <el-button class="but_position" id="xlcjy_yd">在线咨询</el-button>
    </div>
    <div class="appraisal">
      <div class="app_title">留学之旅从留学测评开始</div>
      <div class="app_small">面对现在及未来的各种可能，哪个选择是最适合自己的？如何走好属于自己的路？</div>
      <img src="@/assets/studyabroad/coverage.png"/>
    </div>
    <div class="appraisal">
      <div class="app_title">出国留学优势</div>
      <div class="app_small">面对现在及未来的各种可能，哪个选择是最适合自己的？如何走好属于自己的路？</div>
      <div class="advantage">
        <div class="advan_label">
          <div class="advan_circle">1</div>
          <span class="span_posi">全英语教学氛围，优越的语言环境</span>
        </div>
        <div class="advan_labels">
          <div class="advan_circle">2</div>
          <span class="span_posi">海外背景，提升人才竞争力</span>
        </div>
        <div class="advan_label">
          <div class="advan_circle">3</div>
          <span class="span_posi">普通的口语环境，更快提升学生听说能力</span>
        </div>
        <div class="advan_labels">
          <div class="advan_circle">4</div>
          <span class="span_posi">同等院校申请情况下，被名校录取的概率更高</span>
        </div>
        <div class="advan_label">
          <div class="advan_circle">5</div>
          <span class="span_posi">培养独立思考，独立生活的能力，全面提升综合素质</span>
        </div>
        <div class="advan_labels">
          <div class="advan_circle">6</div>
          <span class="span_posi">提供更多关于专业的职业选择先修课程和资源</span>
        </div>
        <div class="advan_label">
          <div class="advan_circle">7</div>
          <span class="span_posi">相对宽松，自由的学习氛围</span>
        </div>
        <div class="advan_labels">
          <div class="advan_circle">8</div>
          <span class="span_posi">积累知识技能，丰富人生阅历</span>
        </div>
        <div class="advan_label">
          <div class="advan_circle">9</div>
          <span class="span_posi">通过更多丰富的学校，社区，竞赛活动，寄宿家庭等积累人脉</span>
        </div>
        <div class="advan_labels">
          <div class="advan_circle">10</div>
          <span class="span_posi">注重自我学习，互动学习，利于突出学生个性，挖掘潜力</span>
        </div>
      </div>
      <div class="advan_button">
        <el-button class="advan_but" type="primary">了解更多出国留学优势</el-button>
      </div>
    </div>
    <div class="project_back">
      <div style="width:1010px;margin:auto;">
        <div class="pro_conter">
          <div class="pro_title">俄罗斯留学项目</div>
          <div class="pro_ticon">俄罗斯留学手续简单、签证方便，申请率高。花费较少！应届俄语专业毕业学生可当年八月底赴俄读研，不浪费时间。我国承认其博士学历，回国享受博士的相关待遇。</div>
        </div>
        <div class="pro_left">
          <div class="pro_row">
            <div class="pro_u">U</div>
            <div style="margin-left:5px;">
              <div class="pro_utitle">伊尔库茨克国立理工大学</div>
              <div class="pro_uconter">Irkutsk national university of technology</div>
            </div>
          </div>
          <div class="pro_utext">
            俄罗斯最东端的研究型大学，是远东及俄罗斯中部地区规模最大、实力最强 的高校，已有专业人才毕业生数十万。2018年，伊尔库茨克国立科研技术大 学改用现名为伊尔库茨克国立理工大学。
          </div>
          <div class="pro_apply"><el-button class="pro_button" id="xlcjy_yd">马上报名</el-button></div>
        </div>
        <div class="pro_imgs">
          <img src="@/assets/studyabroad/tower.png"/>
        </div>
      </div>
    </div>
    <div class="project_back">
      <div style="width:1010px;margin:auto;">
        <div class="pro_conter">
          <div class="pro_title">山东财经大学留英项目</div>
          <div class="pro_ticon">山东财经大学1+3英国出国留学直通车，20年留学合作经验，轻松读世界名牌大学</div>
        </div>
        <div class="pro_left">
          <div class="pro_row">
            <div class="pro_u">U</div>
            <div style="margin-left:5px;">
              <div class="pro_utitle">爱丁堡龙比亚大学</div>
              <div class="pro_uconter">Edinburgh Napier University</div>
            </div>
          </div>
          <div class="pro_utext">
            爱丁堡龙比亚大学是英国苏格兰地区最大的公立综合性大学之一。大学始建 于1964年，校名源自于16世纪的哲学家、数学家及对数公式的发明人—— 约翰·龙比亚。          </div>
          <div class="pro_apply" id="xlcjy_yd"><el-button class="pro_button">马上报名</el-button></div>
        </div>
        <div class="pro_imgs">
          <img src="@/assets/studyabroad/floor.png"/>
        </div>
      </div>
    </div>
    <div class="apply">
      <div class="apply_vessel">
        <div class="apply_title">在线报名</div>
        <el-form :inline="true" :model="fromData" :rules="rules" ref="fromData">
          <el-form-item prop="nickName">
            <el-input placeholder="您的姓名" style="width:400px" v-model="fromData.nickName" clearable></el-input>
          </el-form-item>
          <el-form-item prop="userMobile">
            <el-input placeholder="您的手机号码" style="width:400px" v-model="fromData.userMobile" clearable></el-input>
          </el-form-item>
          <el-form-item prop="age">
            <el-input placeholder="您的年龄" style="width:400px" v-model="fromData.age" clearable></el-input>
          </el-form-item>
          <el-form-item prop="mail">
            <el-input placeholder="您的邮箱" style="width:400px" v-model="fromData.mail" clearable></el-input>
          </el-form-item>
        </el-form>
        <div class="form_button">
          <el-button class="buttons" type="primary" @click="submit('fromData')">提交报名</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utile/request.js'
export default {
  name: 'study',
  data () {
    return {
      fromData: {
        nickName: '',
        userMobile: '',
        age: '',
        mail: ''
      },
      rules: {
        nickName: [{required: true, message: '请输入姓名', trigger: 'blur'}],
        userMobile: [{required: true, message: '请输入手机号码', trigger: 'blur'},
          {pattern: /^1[3|4|5|8][0-9]\d{4,8}$/, message: '手机号码格式错误', trigger: 'blur'}],
        age: [{required: true, message: '年龄不能为空', trigger: 'blur'},
          {pattern: /^[1-9]\d*$/, message: '请输入正确的年龄', trigger: 'blur'}],
        mail: [{required: true, message: '请输入邮箱', trigger: 'blur'},
          {pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '请输入正确的邮箱格式', trigger: 'blur'}]
      }
    }
  },
  methods: {
    // 报名提交点击事件
    submit (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request({
            url: '/eduWeb/register/addUserFrom',
            method: 'post',
            data: {
              nickName: that.fromData.nickName,
              userMobile: that.fromData.userMobile,
              age: that.fromData.age,
              mail: that.fromData.mail
            }
          })
            .then(res => {
              if (res.code === 200) {
                that.$message({
                  message: '报名成功',
                  type: 'success'
                })
              } else {
                that.$message({
                  message: '提交失败，请重试！',
                  type: 'success'
                })
              }
            })
        }
      })
    }
  },
  mounted () {
    // 动态追加一个script
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/d68c10a9392a31fd1eccf18dacc8ba70')
    recaptchaScript.setAttribute('id', 'qd2852173998d68c10a9392a31fd1eccf18daasdfasdfas')
    document.head.appendChild(recaptchaScript)
  }
}
</script>
<style scoped>
.background{
  background: url('~@/assets/studyabroad/banner.png');
  height: 600px;
}
  .but_position{
    position: relative;
    top: 420px;
    left: 360px;
    width: 240px !important;
    height: 60px !important;
    font-size: 25px;
    color: #fff;
    background-color: #0B5FA8;
    border: 1px solid #0B5FA8;
    border-radius: 4px;
  }
  .but_position:hover{
    background-color: #126DBC;
  }
  .appraisal{
    width: 1189px;
    margin: auto;
    padding-top: 49px;
  }
  .app_title{
    color: #333333;
    font-size: 32px;
    text-align: center;
    font-weight: Bold;
  }
  .app_small{
    font-size: 18px;
    text-align: center;
    padding-top: 15px;
    padding-bottom: 20px;
  }
  .advantage{
    padding-top: 15px;
  }
  .advan_label{
    width: 534px;
    height: 40px;
    padding: 7px 8px;
    border-radius: 27px;
    border: 2px solid #CEE3F6;
    margin-right: 64px;
    display: inline-block;
    margin-bottom: 20px;
    background-color: #FFFFF4;
  }
  .advan_labels{
    width: 534px;
    height: 40px;
    padding: 7px 8px;
    border-radius: 27px;
    border: 2px solid #CEE3F6;
    display: inline-block;
    margin-bottom: 20px;
    background-color: #FFFFF4;
  }
  .advan_circle{
    width: 39px;
    height: 39px;
    border-radius: 50%;
    background-color: #9FCCF5;
    text-align: center;
    line-height: 39px;
    display: inline-block;
  }
  .span_posi{
    padding-left: 20px;
  }
  .advan_button{
    text-align: center;
    margin: 40px 0 80px 0;
  }
  .advan_but{
    height: 70px;
    width: 500px;
     /* background-color: #0B5FA8; */
    font-size: 20px;
    color: #fff !important;

  }
  /* .advan_but:hover{
    background-color: #126DBC;
    color: #fff !important;
  } */
  .project_back{
    background: url('~@/assets/studyabroad/back2.png');
    height: 496px;
    margin-bottom: 10px;
    padding-top: 43px;
  }
  .pro_conter{
    width: 910px;
    background-color: #fff;
    margin: auto;
    padding: 26px 50px;
  }
  .pro_title{
    font-size: 26px;
    color: #0B5FA8;
    font-weight: Bold;
  }
  .pro_ticon{
    font-size: 16px;
    margin-top: 20px;
    line-height: 22px;
  }
  .pro_row{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .pro_u{
    font-size: 56px;
    color: #344A83;
  }
  .pro_utitle{
    font-size: 28px;
    color: #000;
  }
  .pro_uconter{
    font-size: 14px;
    color: #0B5FA8;
  }
  .pro_utext{
    font-size: 14px;
    color: #333;
    margin-top: 19px;
    line-height: 20px;
  }
  .pro_left{
    margin-top:10px;
    width:455px;
    background-color: #fff;
    padding: 26px 100px 26px 50px;
    display: inline-block;
  }
  .pro_imgs{
    float: right;
    margin-top:10px;
  }
  .pro_button{
    width: 150px;
    height: 42px;
    border: 1px solid #0B5FA8;
    color: #0B5FA8;
    font-size: 17px;
  }
  .pro_apply{
    text-align: center;
    margin-top: 23px;
  }
  .apply{
    margin-top: 20px;
    margin-bottom: 10px;
    background: url('~@/assets/studyabroad/background.png');
    height: 520px;
  }
  .apply_vessel{
    width: 900px;
    margin: auto;
    padding-top: 49px;
    text-align: center;
  }
  .apply_title{
    font-size: 37px;
    font-weight: bold;
    color: #fff;
    margin-bottom: 69px;
  }
  .apply_vessel >>> .el-input__inner{
    height: 60px;
    font-size: 14px;
  }
  .form_button{
    text-align: center;
    margin-top: 30px;
  }
  .buttons{
    width: 300px;
    height: 70px;
    border-radius: 4px;
    font-size: 20px;
  }
</style>
