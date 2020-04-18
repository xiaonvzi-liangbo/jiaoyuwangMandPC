<template>
  <div class="all">
    <heads title="出国留学"></heads>
    <div class="heards">
      <button id="xlcjy_yd">在线咨询</button>
    </div>
    <div class="start">
      <div class="title">
        留学之旅从留学测评开始
      </div>
      <div class="one">
        面对现在及未来的各种可能，哪个选择是最适合自己的？
      </div>
      <div>
        如何走好属于自己的路？
      </div>
      <img src="@/assets/abroad/labes.png" class="img"/>
      <img src="@/assets/abroad/lebals2.png" class="imgs"/>
    </div>
    <div class="advantage">
      <div class="title">出国留学优势</div>
      <div class="one">
        面对现在及未来的各种可能，哪个选择是最适合自己的？
      </div>
      <div class="two">
        如何走好属于自己的路？
      </div>
      <div class="conter">
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab1.png"/>
            </div>
            <div class="texts">
              <div>全英语教学氛围</div>
              <div>优越的语言环境</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs lab2">
              <img src="@/assets/abroad/lab2.png" class="lab2"/>
            </div>
            <div class="texts">
              <div>海外背景，</div>
              <div>提升人才竞争力</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab3.png"/>
            </div>
            <div class="texts">
              <div>普通的口语环境，更快</div>
              <div>提升学生学生听说能力</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab4.png"/>
            </div>
            <div class="texts">
              <div>同等院校申请情况下，</div>
              <div>被名校录取的概率更高</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab5.png"/>
            </div>
            <div class="texts">
              <div>培养独立思考，独立生活的能力，全面提升综合素质</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab6.png"/>
            </div>
            <div class="texts">
              <div>提供更多关于专业的职业 选择的先修课程和资源</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab7.png"/>
            </div>
            <div class="texts">
              <div>相对宽松，自由的学习氛围</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab8.png"/>
            </div>
            <div class="texts">
              <div>积累知识技能</div>
              <div>丰富人生阅历</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs">
              <img src="@/assets/abroad/lab9.png"/>
            </div>
            <div class="texts">
              <div>通过更多丰富的学校，社区竞赛活动，寄宿家庭等积累人脉</div>
            </div>
          </div>
        </div>
        <div class="width">
          <div class="row">
            <div class="imgs lab2">
              <img src="@/assets/abroad/lab2.png" class="lab2"/>
            </div>
            <div class="texts">
              <div>注重自我学习，互动学习 突出学生个性， 挖掘潜力</div>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <div>了解更多出国留学优势</div>
      </div>
    </div>
    <div class="russia">
      <div class="title">俄罗斯留学项目</div>
      <div class="paragraph">
        俄罗斯留学手续简单、签证方便，申请率高。花费较少！应届俄语专业毕业学生可当
      </div>
      <div class="partwo">
        年8月底赴俄读研，不费时间。我国承认其博士学历，回国享受博士的相关待遇。
      </div>
    </div>
    <div class="russia-two">
      <div>俄罗斯最东端的研究型大学，是远东及俄罗斯中部地区规模最大、实力最强的高校，已有专业人才毕</div>
      <div>业生数十万。2018年，伊尔库茨克国立科研技术大学改用现名为伊尔库茨克国立理工大学。</div>
      <div class="but">
        <div class="button">马上报名</div>
      </div>
    </div>
    <div class="finance">
      <div class="title">山东财经大学留英项目</div>
      <div class="conter">山东财经大学1+3英国出国留学直通车，20年留学合作经验，轻松读世界名牌大学</div>
    </div>
    <div class="fin-con">
      <div>爱丁堡龙比亚大学是英国苏格兰地区最大的公立综合性大学之一。大学始建于1964年，校名源自于16世</div>
      <div>纪的哲学家、数学家及对数公式的发明人——约翰·龙比亚。</div>
      <div class="but">
        <div class="button">马上报名</div>
      </div>
    </div>
    <div class="apply">
      <div class="title">在线报名</div>
      <div class="inpu mrgin">
        <input placeholder="您的姓名" v-model="fromData.nickName"/>
      </div>
      <div class="inpu">
        <input placeholder="您的手机号码" v-model="fromData.userMobile"/>
      </div>
      <div class="inpu">
        <input placeholder="您的年龄" v-model="fromData.age"/>
      </div>
      <div class="inpu">
        <input placeholder="您的邮箱" v-model="fromData.mail"/>
      </div>
      <div class="but">
        <div class="button" @click="submit">提交报名</div>
      </div>
    </div>
    <stern></stern>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
import stern from '@/components/stern/stern'
import request from '@/utile/request.js'
export default {
  name:'goAbroad',
  components:{
    heads,
    stern
  },
  data() {
    return {
      fromData:{
        nickName:'',
        userMobile:'',
        age:'',
        mail:''
      }
    }
  },
  methods: {
    //提交点击事件
    submit(){
      let that = this
      let warn = ''
      let phone = /^1[3|4|5|8][0-9]\d{4,8}$/
      let num = /^[1-9]\d*$/
      let mail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
      if(!that.fromData.nickName){
        warn = '请输入姓名！'
      }else if(!that.fromData.userMobile){
        warn = '请输入手机号码！'
      }else if(!phone.test(that.fromData.userMobile)){
        warn = '请输入正确的手机号码！'
      }else if(!that.fromData.age){
        warn = '请输入年龄！'
      }else if(!num.test(that.fromData.age)){
        warn = '请输入正确的年龄！'
      }else if(!that.fromData.mail){
        warn = '请输入邮箱！'
      }else if(!mail.test(that.fromData.mail)){
        warn = '请输入正确的邮箱格式！'
      }else{
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
              that.$toast('提交成功') 
            } else {
              that.$toast('提交失败，请重试！') 
            }
          })
      }
      if(warn){
        that.$toast(warn) 
      }
    }
  },
  mounted(){
    // 动态追加一个script
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/d68c10a9392a31fd1eccf18dacc8ba70')
    recaptchaScript.setAttribute('id', 'qd2852173998d68c10a9392a31fd1eccf18dacc8ba70')
    document.head.appendChild(recaptchaScript)
  }
}
</script>
<style scoped lang="scss">
  .all{
    background-color: #fff;
  }
  .heards{
    width: 100%;
    height: 350px;
    background: url('~@/assets/abroad/banner.png');
    background-size:100%;
    button{
      color: #fff;
      padding: 18px 0;
      width: 200px;
      text-align: center;
      background-color: #0B5EA8;
      border-radius: 10px;
      border: 2px solid #0B5EA8;
      position: relative;
      top: 255px;
      left: 30px;
    }
  }
  .start{
    padding: 50px 0;
    text-align: center;
    .title{
      font-size: 32px;
      font-weight: bold;
    }
    .one{
      line-height: 36px;
      margin-top: 19px;
      line-height: 36px;
    }
    .img{
      width: 438px;
      height: 242px;
      margin-top: 35px;
    }
    .imgs{
      width: 626px;
      height: 231px;
      margin-top: 10px;
    }
  }
  .advantage{
    .title{
      text-align: center;
      font-size: 32px;
      font-weight: bold;
    }
    .one{
      text-align: center;
      line-height: 36px;
      margin-top: 19px;
      line-height: 36px;
    }
    .two{
      text-align: center;
    }
    .conter{
      margin-top: 40px;
      padding: 0 30px;
      .width{
        width: 320px;
        display: inline-block;
        margin-bottom: 30px;
        &:nth-child(2n){
          margin-left: 30px;
        }
        .row{
          display: flex;
          flex-direction: row;
          .imgs{
            width: 56px;
            height: 70px;
            img{
              width: 56px;
              height: 70px;
            }
          }
          .texts{
            margin-left: 20px;
            font-size: 20px;
          }
        }
      }
    }
    .more{
      padding:20px 0 50px 0;
      text-align: center;
      div{
        padding: 24px 0px;
        width: 400px;
        margin: auto;
        background-color: #0B5EA8;
        color: #fff;
        border-radius: 4px;
      }
    }
  }
  .lab2{
    width: 68px !important;
    height: 66px !important;
  }
  .russia{
    width: 100%;
    height: 590px;
    background: url('~@/assets/abroad/russia.png');
    background-size: 100%;
    .title{
      text-align: center;
      font-size: 32px;
      color: #0B5EA8;
      font-weight: bold;
      padding: 29px 0 0 0;
    }
    .paragraph{
      padding: 15px 30px 0 30px;
      color: #333333;
      font-size: 20px;
    }
    .partwo{
      padding: 0 30px;
      font-size: 20px;
    }
  }
  .russia-two{
    padding: 25px 40px;
    font-size: 20px;
    div{
      line-height: 40px;
    }
    .but{
      padding: 36px 0 40px 0;
      .button{
      padding: 5px 0px;
      width: 150px;
      text-align: center;
      margin: auto;
      border: 2px solid #0B5FA8;
      color: #0B5FA8;
      border-radius: 3px;
      font-size: 24px !important;
      }
    }
  }
  .finance{
    background: url('~@/assets/abroad/finance.png') no-repeat;
    background-size:100% 100%;
    height: 540px;
    .title{
      padding: 29px 0 10px 0;
      text-align: center;
      font-size: 32px;
      font-weight: bold;
      color: #0B5EA8;
    }
    .conter{
      padding: 0 40px;
    }
  }
  .fin-con{
      padding: 19px 40px 0 40px;
      div{
        line-height: 40px;
      }
      .but{
      padding: 36px 0 40px 0;
      .button{
      padding: 5px 0px;
      width: 150px;
      text-align: center;
      margin: auto;
      border: 2px solid #0B5FA8;
      color: #0B5FA8;
      border-radius: 3px;
      font-size: 24px !important;
      }
    }
  }
  .apply{
    background: url('~@/assets/abroad/from.png') no-repeat;
    background-size: 100% 100%;
    height: 520px;
    .title{
      padding-top: 29px;
      text-align: center;
      font-weight: bold;
      font-size: 32px;
      color: #fff;
    }
    .mrgin{
      margin-top: 10px;
    }
    .inpu{
      text-align: center;
      padding: 10px 0;
      input{
        height: 60px;
        border-radius: 4px;
        border: 0px;
        padding: 0 10px;
        &::-webkit-input-placeholder{
          color: #A7A6A6;
        }
      }
    }
    .but{
      margin-top: 25px;
      .button{
      padding: 21px 0px;
      width: 260px;
      text-align: center;
      margin: auto;
      color: #fff;
      background-color: #0B5FA8;
      border-radius: 4px;
      font-size: 24px !important;
      }
    }
  }
</style>