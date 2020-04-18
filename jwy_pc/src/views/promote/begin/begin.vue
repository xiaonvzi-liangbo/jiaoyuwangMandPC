<template>
  <div>
    <div class="topic_back">
      <div class="progress">
        <el-progress :percentage="schedule" :stroke-width="15"></el-progress>
      </div>
      <div v-show="report">
        <div class="conter" v-for="(item,index) in question" :key="index" v-show="serial===index">
          <div class="heard"><span>{{index+1}}</span>{{item.stem}}</div>
          <div class="hea_conter">
            <!-- <div> -->
              <div v-html="item.option" class='questionselect'></div>
              <div v-for="(radio,ids) in item.optionNumber" :key="ids" class="radio_choice">
                <el-radio v-model="radios" :label="radio">{{radio | transcoder}}</el-radio>
              </div>
            <!-- </div> -->
            <div class="choice">
              <div v-show="index!==0 && index!==question.length-1" @click="onTopic(index)">上一题</div>
              <div @click="nextquestion(index,item.id)">下一题</div>
              <div @click="submit(index,item.id)" v-show="index===question.length-1">交卷</div>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!report">
        <div class="regression">
          <div class="heard">回归分析属于！</div>
          <div class="hea_conter">
            <img src="@/assets/plan-system/loading_doc.jpg"/>
            <div>《您的学历提升测评报考PDF》已生成</div>
          </div>
          <div class="look" @click="examine">查看报告</div>
        </div>
      </div>
    </div>
    <probottom></probottom>
  </div>
</template>

<script>
import request from '@/utile/request.js'
import probottom from '../probottom/probottom'
import { getUser } from '@/utile/auth.js'
export default {
  data () {
    return {
      report: true,
      reception: '',
      schedule: 0,
      question: [],
      serial: 0,
      radios: '',
      questionNumber: '', // 每一题代表的份额
      answer: [],
      consequence: ''
    }
  },
  components: {
    probottom
  },
  created () {
    let that = this
    that.reception = that.$route.query
    // 试题列表
    request({
      url: '/eduWeb/jyQuestionBanksForeign/selectByAuto',
      method: 'get',
      params: {
        oneType: that.reception.type,
        questionType: '0'
      }
    })
      .then(res => {
        that.question = res.data
        that.questionNumber = Math.floor(100 / res.number)
        // 进度条计算
        that.schedule = 0
      })
  },
  methods: {
    // 下一题点击事件
    nextquestion (index, id) {
      let that = this
      if (that.radios) {
        that.serial = index + 1
        let answ = String.fromCharCode(64 + that.radios)
        that.answer[index] = {
          id, answ
        }
        that.schedule = that.schedule + that.questionNumber
        that.radios = ''
      } else {
        that.$message.error('请先选择答案！')
      }
    },
    // 上一题选择事件
    onTopic (index) {
      let that = this
      if (index !== 0) {
        that.serial = index - 1
        // 字母转数字
        that.radios = that.answer[index - 1].answ.charCodeAt() - 64
      }
    },
    // 提交点击事件
    submit (index, id) {
      let that = this
      if (that.radios) {
        let answ = String.fromCharCode(64 + that.radios)
        that.answer[index] = {
          id, answ
        }
        let fxdata = ''
        that.answer.forEach((item, index) => {
          fxdata = fxdata + `${item.id},${item.answ}`
          if (index !== that.answer.length - 1) {
            fxdata = fxdata + ';'
          }
        })
        request({
          url: '/eduWeb/jYAssessRecordForeign/add',
          method: 'post',
          data: {
            phone: getUser(),
            difficulty: that.reception.grade,
            jyQuestionBanks: fxdata,
            nowEducation: that.reception.xueli,
            planAddress: that.reception.city,
            planEducation: that.reception.cengci,
            planMoney: that.reception.expenses,
            planTime: that.reception.time,
            type: that.reception.type
          }
        })
          .then(res => {
            if (res.code === 200) {
              that.$message({
                message: '提交成功！',
                type: 'success'
              })
              that.consequence = res.data
              that.schedule = 100
              that.report = false
            }
          })
      } else {
        that.$message.error('请先选择答案！')
      }
    },
    // 查看报告点击事件
    examine () {
      // let that = this
      this.$router.push({
        path: '/personage/check'
        // query: {
        //   consequence: JSON.stringify(that.consequence),
        //   type: that.reception.type
        // }
      })
    }
  },
  mounted () {

  }
}
</script>
<style lang="scss">
.questionselect ol {
  padding-top: 15px;
  padding-left: 50px;
  li {
    counter-increment: ul;
    list-style:none;
    font-size: 16px;
    line-height: 38px;
    color: #151515;
    &:before {
      display: inline-block;
      content: counter(ul, upper-alpha) " 、";
      // padding-right: 10px;
      color: #999 !important;
    }
  }
}
  .topic_back{
    background: url('~@/assets/plan-system/question_bg.jpg');
    min-height: 713px;
    .progress{
      width: 1180px;
      margin: auto;
      padding-top: 30px;
      max-width: 1200px;
    }
    .conter{
      width: 1120px;
      margin: auto;
      background-color: #fff;
      margin-top: 30px;
      .heard{
        background-color: #F9F9FA;
        line-height: 85px;
        padding: 0 30px;
        span{
          margin-right: 6px;
        }
      }
      .hea_conter{
        padding: 50px 30px;
        .choice{
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          margin-top: 100px;
          div{
            width: 160px;
            height: 60px;
            background-color: #1778CB;
            color: #fff;
            text-align: center;
            font-size: 18px;
            line-height: 60px;
            display: inline-block;
            border-radius: 4px;
            margin: 0 12px;
            cursor: pointer
          }
          div:hover{
            background-color: #3A94E1;
          }
        }
        .radio_choice{
          display: inline-block;
          margin-right: 20px;
          position: relative;
          left: 50px;
        }
      }
    }
  }
  .regression{
      width: 1120px;
      margin: auto;
      background-color: #fff;
      margin-top: 30px;
      padding-bottom: 50px;
      .heard{
        background-color: #F9F9FA;
        line-height: 85px;
        padding: 0 30px;
        text-align: center;
        font-size: 24px;
        color: #000;
        font-weight: 700;
        span{
          margin-right: 6px;
        }
      }
      .hea_conter{
        padding: 50px 30px;
        text-align: center;
          div{
            font-size: 32px;
            color: #c00;
            margin-bottom: 40px!important;
          }
      }
      .look{
        text-align: center;
        width: 264px;
        height: 60px;
        background-color: #1778CB;
        border-radius: 4px;
        color: #fff;
        line-height: 60px;
        margin: auto;
        cursor: pointer;
        &:hover{
          background-color: #3A94E1;
        }
      }
  }
</style>
