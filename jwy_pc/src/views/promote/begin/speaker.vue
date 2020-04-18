<template>
  <div>
    <div class="loading">
      <div class="group">
        <p class="title">综合能力测试报告（PDF完整版）</p>
        <!-- 测评成绩 -->
        <div class="block">
          <p class="b_title">测评成绩</p>
          <div class="result">
            <div class="number">
              <p class="result_title">您的测评结果</p>
              <div class="conts">
                <p>
                  得分
                  <span class="num">{{report.fraction}}</span>
                  <span class="unit">分</span>
                </p>
              </div>
            </div>
            <div class="nierong">
              <p class="result_title">新里程教育规划分析</p>
              <p class="cont">
                亲爱的同学，根据您的测试结果，
                <span>
                  您符合
                  <span v-if="type == 1">成人高考</span>
                  <span v-else-if="type == 2">网络教育</span>
                  <span v-else-if="type == 3">自学考试</span>
                  <span v-else-if="type == 4">开放教育</span>
                  <span v-else-if="type == 5">普通专升本</span>
                  <span v-else-if="type == 6">出国读本科</span>
                  <span v-else-if="type == 192">12月统一联考</span>
                  <span v-else-if="type == 193">5月同等学力</span>
                  <span v-else-if="type == 194">出国考研</span>
                  <span v-else-if="type == 195">研修班</span>
                  报考条件，可以报考！
                </span>
              </p>
              <!-- <p class="type">
                其他推荐：
                <span v-if="report.jyQuestionsRecommend == 1">
                  <span v-if="type == 3">
                    <span>自学考试</span>
                  </span>
                </span>
                <span v-else-if="report.jyQuestionsRecommend == 2">
                  <span v-if="type == 3">
                    <span>成人高考</span>
                    <span>网络教育</span>
                    <span>开放教育</span>
                  </span>
                  <span v-else-if="type == 1">
                    <span>自学考试</span>
                    <span>网络教育</span>
                    <span>开放教育</span>
                  </span>
                  <span v-else-if="type == 2">
                    <span>自学考试</span>
                    <span>成人高考</span>
                    <span>开放教育</span>
                  </span>
                  <span v-else-if="type == 4">
                    <span>自学考试</span>
                    <span>网络教育</span>
                    <span>成人高考</span>
                  </span>
                </span>
                <span v-if="report.jyQuestionsRecommend == 3">
                  <span v-if="type == 3">
                    <span>自学考试</span>
                  </span>
                </span>
                <span v-if="report.jyQuestionsRecommend == 4">
                  <span v-if="type == 3">
                    <span>自学考试</span>
                  </span>
                </span>
                <span v-if="report.jyQuestionsRecommend == 5">
                  <span v-if="type == 5">
                    <span>成人高考</span>
                    <span>网络教育</span>
                    <span>自学考试</span>
                    <span>开放教育</span>
                    <span>出国读本科</span>
                  </span>
                  <span v-else-if="type == 1">
                    <span>普通专升本</span>
                    <span>网络教育</span>
                    <span>自学考试</span>
                    <span>开放教育</span>
                    <span>出国读本科</span>
                  </span>
                  <span v-else-if="type == 2">
                    <span>普通专升本</span>
                    <span>成人高考</span>
                    <span>自学考试</span>
                    <span>开放教育</span>
                    <span>出国读本科</span>
                  </span>
                  <span v-else-if="type == 3">
                    <span>普通专升本</span>
                    <span>成人高考</span>
                    <span>网络教育</span>
                    <span>开放教育</span>
                    <span>出国读本科</span>
                  </span>
                  <span v-else-if="type == 4">
                    <span>普通专升本</span>
                    <span>成人高考</span>
                    <span>网络教育</span>
                    <span>自学考试</span>
                    <span>出国读本科</span>
                  </span>
                  <span v-else-if="type == 6">
                    <span>普通专升本</span>
                    <span>成人高考</span>
                    <span>网络教育</span>
                    <span>自学考试</span>
                    <span>开放教育</span>
                  </span>
                </span>
                <span v-if="report.jyQuestionsRecommend == 6">
                  <span v-if="type == 192">
                    <span>5月同等学力</span>
                    <span>出国考研</span>
                    <span>研修班</span>
                  </span>
                  <span v-if="type == 193">
                    <span>12月统一联考</span>
                    <span>出国考研</span>
                    <span>研修班</span>
                  </span>
                  <span v-if="type == 194">
                    <span>12月统一联考</span>
                    <span>5月同等学力</span>
                    <span>研修班</span>
                  </span>
                  <span v-if="type == 195">
                    <span>12月统一联考</span>
                    <span>5月同等学力</span>
                    <span>出国考研</span>
                  </span>
                </span>
              </p> -->
            </div>
          </div>
        </div>

        <!-- 推荐院校开始 -->
        <div class="block">
          <p class="b_title">推荐院校</p>
          <div class="loading_school">
            <a class="item" v-for="(item,index) in report.jyCollages" :key="index">
              <img :src="item.scIndexLogo"/>
              <p>{{item.scGname}}</p>
            </a>
          </div>
        </div>
        <!-- 推荐专业开始 -->
        <div class="block">
          <p class="b_title">推荐专业</p>
          <div class="tjzy">
            <div class="item" v-for="(item,index) in report.collageMajor" :key="'tjzy'+index">
              <div class="img">
                <img :src="item.scMajorLogo" alt srcset />
              </div>
              <p class="item_title">
                {{item.smName}}-
                <span>{{item.scGname}}</span>
              </p>
              <p class="item_conts">{{item.smIntro.substring(0,15)}}...</p>
            </div>
          </div>
        </div>

        <!-- 报考规划开始 -->
        <div class="block">
          <p class="b_title">报考规划</p>
          <div class="planned">
            <div class="neirong">
              <div class="icon"></div>
              <p class="planned_title">知己知彼才能更好的做出决策，以下信息将成为你良好的参考信息</p>
              <ul>
                <li>了解招生政策</li>
                <li>选好就读专业</li>
                <li>准备相关政策</li>
              </ul>
            </div>
            <div class="neirong">
              <div class="icon"></div>
              <p class="planned_title">如果觉得成绩不太理想，可以通过备考来提升学习成绩</p>
              <ul>
                <li>基础段课程</li>
                <li>强化段课程</li>
                <li>衔接课程</li>
              </ul>
            </div>
          </div>
          <div class="explain">
            <p class="explain_title">报告说明</p>
            <p class="conts">
              本报告根据您的答题情况给到您当前学习能力的评估，如果想得到更专业的解析和建议，你可以凭本报告到新里程教育深度选择咨询会现场，由我们专业的
              学业规划师为您解答，还可以根据您的水平免费为您推荐适合您的国际学校或者备考课程。除此之外，本报告还可以作为新里程教育择校展等线下活动入场
              凭证，所以您一定要保管妥当，谢谢您对新里程教育的支持和信任！
            </p>
            <p class="explain_title">隐私说明</p>
            <p class="conts">1.本报告所含信息属于个人资料，未经许可，不得阅读、复制或泄漏本报告内容</p>
            <p class="conts">2.本测评属于指导性的教育与心理测验，如有疑问请与我们联系</p>
            <p class="conts">3.版权归属于新里程教育有限公司独立拥有，未经公司允许，任何机构不得进行拷贝、引用报告中的相关信息</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'speaker',
  data () {
    return {
      report: '',
      type: this.$route.query.type
    }
  },
  created () {
    this.report = JSON.parse(this.$route.query.consequence)
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.loading{
    background: url('~@/assets/plan-system/question_bg.jpg')no-repeat center top;
    background-color: #fff;
    min-height: 713px;
    overflow: hidden;
    .group{
        width: 1180px;
        margin: auto;
        background-color: #fff;
        margin-top: 80px;
        padding: 0 60px;
        overflow: hidden;
        .title{
            text-align: center;
            font-weight: bold;
            color: #000;
            font-size: 34px;
            line-height: 125px;
            border-bottom:1px solid #d4d4d4;
            margin-bottom: 40px !important;
        }
        .block{
            overflow: hidden;
            margin-bottom: 50px;

            .b_title{
                font-size: 22px;
                color: #333333;
                padding-left: 16px;
                border-left: 4px solid #e03030;
                height: 22px;
                line-height: 20px;
                margin-bottom: 22px !important;
            }
            .result{
                overflow: hidden;
                .result_title{
                    text-align: center;
                    color: #fff;
                    font-size: 14px;
                    height: 42px;
                    line-height: 42px;
                    background-color: #e03030;
                }
                .number{
                    float: left;
                    width: 262px;
                    height: 196px;

                    .conts{
                        background-color: #f6f6f6;
                        width: 100%;
                        height: 154px;
                        font-size: 30px;
                        text-align: center;
                        color: #464646;
                        position: relative;
                        p{
                            line-height: 130px;
                            .num{
                                color: #ff0000;
                                font-size: 64px;
                                font-weight: bold
                            }
                            .unit{
                                color: #ff0000 !important;
                                font-size: 24px;
                            }
                        }

                    }
                }
                .nierong{
                    width: calc(100% - 262px);
                    float: left;
                    position: relative;
                    top: -2px;
                    .result_title{
                        font-size: 16px;
                        margin-bottom: 48px !important;
                    }
                    .cont{
                        padding-left: 72px;
                        color: #000;
                        font-size: 20px;
                        margin-bottom: 18px !important;
                        span{
                            color: #e03030;
                        }
                    }
                    .type{
                        padding-left: 72px;
                        color: #858585;
                        font-size: 15px;
                        span{
                            padding: 0 15px;
                            border-right:1px solid #858585;
                            &:last-of-type{
                                border: 0;
                            }
                        }
                    }

                }
            }
            .loading_school{
                overflow: hidden;
                .item{
                    width: 160px;
                    height: 147px;
                    background-color: #f6f7f7;
                    text-align: center;
                    overflow: hidden;
                    margin-right: 17px;
                    float: left;
                    cursor: pointer;

                    img{
                        width: 80px;
                        height: 80px;
                        margin-top: 15px;
                        margin-bottom: 10px;
                    }
                    p{
                        color: #828282;
                        font-size: 14px;
                    }

                    &:last-of-type{
                        margin-right: 0 !important;
                    }
                }
            }
            .tjzy{
                overflow: hidden;
                .item{
                    border: 2px solid #f6f6f6;
                    float: left;
                    margin-right: 9px;
                    overflow: hidden;
                    cursor: pointer;
                    width: 254px;
                    .img{
                        width: 254px;
                        height: 158px;
                        img{
                            width: 254px;
                            height: 158px;
                        }
                    }
                    .item_title{
                        font-size: 20px;
                        font-weight:bold;
                        color: #525353;
                        line-height: 38px;
                        padding-left: 8px;
                    }
                    .item_conts{
                        padding-left: 8px;
                        font-size: 14px;
                        color: #c6c6c6;
                        margin-bottom: 12px !important;
                    }
                    &:last-of-type{
                        margin-right: 0;
                    }
                }
            }
            .planned{
                overflow: hidden;
                padding-left: 30px;
                margin-top: 30px;

                .neirong{
                    border-left:1px solid #d7dce1;
                    position: relative;
                    padding-left: 30px;
                    padding-bottom: 27px;

                     .planned_title{
                         text-align: left;
                         font-size: 16px;
                         color: #666666;
                         margin-bottom: 25px !important;
                         line-height: 17px;
                     }
                     ul{
                        margin-bottom: 0 !important;
                         li{
                             font-size: 15px;
                             color: #333333;
                             line-height: 44px;
                         }
                     }
                     .icon{
                         width: 18px;
                         height: 18px;
                         border: 3px solid #d8dddf;
                         background: #fff;
                         position: absolute;
                         left: -10px;
                         top: 0px;
                         border-radius:20px;
                     }
                }
            }
            .explain{
                padding-left: 25px;
                margin-bottom: 70px;

                .explain_title{
                    font-size: 15px;
                    color: #333333;
                    margin-bottom: 15px !important;
                    margin-top: 30px;
                }
                .conts{
                    width: 825px;
                    line-height: 21px;
                    font-size: 12px;
                    color: #666666;
                }
            }
        }
    }
}
</style>
