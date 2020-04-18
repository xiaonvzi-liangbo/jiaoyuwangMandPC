<template>
  <div>
    <div class="top">
      <p class="title">学历提升入学测评系统</p>
      <div class="title_s">
        <span style="margin-right:10px;">已有</span>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <div>3</div>
        <span style="margin-left:10px;">位学员使用测评系统</span>
      </div>
      <div class="choose">
        <p class="choose_title">
          <span>选择您比较倾向的学历提升方式</span>
        </p>
        <p class="choose_title_s">注：只能选择一个进入测评，可以进入了解详情确认后选择</p>
        <div class="type" v-if="mode == 1">
          <div class="item">
            <div class="item_btn" data-type="3" @click="setType($event)">
              自学考试
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="type" v-else-if="mode == 2">
          <div class="item">
            <div class="item_btn" data-type="3" @click="setType($event)">
              自学考试
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="1" @click="setType($event)">
              成人高考
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="2" @click="setType($event)">
              网络教育
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="4" @click="setType($event)">
              开放教育
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="type" v-else-if="mode == 3">
          <div class="item">
            <div class="item_btn" data-type="3" @click="setType($event)">
              自学考试
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="type" v-else-if="mode == 4">
          <div class="item">
            <div class="item_btn" data-type="3" @click="setType($event)">
              自学考试
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="type" v-else-if="mode == 5">
          <div class="item">
            <div class="item_btn" data-type="5" @click="setType($event)">
              普通专升本
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="1" @click="setType($event)">
              成人高考
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="2" @click="setType($event)">
              网络教育
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn on" data-type="3" @click="setType($event)">
              自学考试
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="4" @click="setType($event)">
              开放教育
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="6" @click="setType($event)">
              出国读本科
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="type" v-else-if="mode == 6">
          <div class="item">
            <div class="item_btn" data-type="192" @click="setType($event)">
              12月统一联考
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="193" @click="setType($event)">
              5月同等学力
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="194" @click="setType($event)">
              出国考研
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="195" @click="setType($event)">
              研修班
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="type" v-else-if="mode === '考研'">
          <div class="item">
            <div class="item_btn" data-type="192" @click="setType($event)">
              12月全日制考研
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="193" @click="setType($event)">
              12月非全日制考研
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
          <div class="item">
            <div class="item_btn" data-type="194" @click="setType($event)">
              同等学历
              <div class="icon"></div>
            </div>
            <p>了解详情></p>
          </div>
        </div>
        <div class="present">
          <p class="present_title">测试后您将获得</p>
          <div class="conts">
            <div class="item">
              <img src="@/assets/plan-system/present_icon1.jpg" />
              <span>知道适合自己的学历提升方式</span>
            </div>
            <div class="item">
              <img src="@/assets/plan-system/present_icon2.jpg" />
              <span>清楚适合报考的专业和院校</span>
            </div>
            <div class="item">
              <img src="@/assets/plan-system/present_icon3.jpg" />
              <span>1次针对性测试报考解读</span>
            </div>
            <div class="item">
              <img src="@/assets/plan-system/present_icon4.jpg" />
              <span>1套专升学历提升方案</span>
            </div>
          </div>
        </div>
        <div class="btn_list" style="padding-bottom:30px;">
          <div class="btns">预约升学规划师咨询</div>
          <div class="btns" @click="appraisal">立即开始在线测评</div>
        </div>
      </div>
    </div>
    <probottom></probottom>
  </div>
</template>

<script>
import probottom from './probottom/probottom'
import { getUser } from '@/utile/auth.js'
export default {
  name: 'systematic',
  components: {
    probottom
  },
  data () {
    return {
      query: '',
      type: '',
      mode: ''
    }
  },
  methods: {
    setType (e) {
      $('.top .choose .type .item .item_btn').removeClass('on')
      $(e.target).addClass('on')
      // 数据改变，会自动刷新
      this.type = $('.top .choose .type .item .on').attr('data-type')
    },
    // 立即开始在线测评点击事件
    appraisal () {
      let that = this
      if (that.mode === '考研') {
        that.$message.error('暂无测评内容')
        return false
      }
      if (getUser()) {
        if (that.type) {
          that.$router.push({
            path: '/begin',
            query: {
              xueli: that.query.xueli,
              cengci: that.query.cengci,
              time: that.query.time,
              expenses: that.query.expenses,
              city: that.query.city,
              grade: that.query.grade,
              type: that.type
            }
          })
        } else {
          that.$message.error('请选择您要进行的测评')
        }
      } else {
        that.$message.error('请先进行登录')
      }
    },
    // 判断显示的信息
    displayConter () {
      let that = this
      that.query = that.$route.query
      if (that.query.mode === '0') {
        if ((that.query.xueli === '初中及以下' || that.query.xueli === '高中') &&
        (that.query.cengci === '升专科' || that.query.cengci === '升本科') &&
        (that.query.time === '1年' && that.query.city === '山东')) {
          that.mode = '1'
        } else if ((that.query.xueli === '初中及以下' || that.query.xueli === '高中') &&
        (that.query.cengci === '升专科' || that.query.cengci === '升本科') &&
        (that.query.time === '2年' && that.query.city === '山东')) {
          that.mode = '2'
        } else if ((that.query.xueli === '初中及以下' || that.query.xueli === '高中') &&
        (that.query.cengci === '升专科' || that.query.cengci === '升本科') &&
        (that.query.time === '1年' || that.query.time === '2年') &&
        that.query.city !== '山东') {
          that.mode = '3'
        } else if ((that.query.xueli === '专科在读' || that.query.xueli === '专科') &&
        that.query.cengci === '升本科' &&
        that.query.time === '1年' &&
        that.query.city === '山东'
        ) {
          that.mode = '4'
        } else if ((that.query.xueli === '专科在读' || that.query.xueli === '专科') &&
        that.query.cengci === '升本科' &&
        that.query.time === '2年' &&
        that.query.city === '山东') {
          that.mode = '5'
        } else if (that.query.xueli === '本科' && that.query.cengci === '研究生') {
          that.mode = '6'
        }
      } else if (that.query.mode === '1') {
        that.mode = '考研'
      }
    }
  },
  mounted () {
    this.displayConter()
  }
}
</script>
<style lang="scss" scoped>
.top{
    background:url('~@/assets/plan-system/top_img.jpg') no-repeat center center;
    height: 735px;
    overflow: hidden;
    .title{
        text-align: center;
        font-weight:bold;
        color: #fff;
        font-size: 58px;
        margin-top: 60px;
        margin-bottom: 8px !important;
    }
    .title_s{
        font-size: 25px;
        color: #fff;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        div{
          height: 48px;
          background:url('~@/assets/plan-system/top_number.jpg')no-repeat center center;
          font-size: 28px !important;
          width: 31px;
          text-align: center;
          line-height: 48px;
          position: relative;
          bottom: 5px;
        }
    }
    .choose{
        background-color: #fff;
        width: 1180px;
        height: 453px;
        margin: auto;
        margin-top: 50px;
        overflow: hidden;
        .choose_title{
            background: url('~@/assets/plan-system/choose_titleBg.jpg')no-repeat center center;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            color: #333333;
            height: 49px;
            margin-top: 33px;
            margin-bottom: 17px;

            span{
                display: inline-block;
                background-color: #fff;
                height: 49px;
                padding: 0 15px;
            }
        }
        .choose_title_s{
            text-align: center;
            font-size: 16px;
            color: #8f8f8f;
            margin-bottom: 15px !important;
        }
        .type{
            overflow: hidden;
            margin: auto;
            width: 940px;
            text-align: center;
            .item{
                width: 118px;
                margin: auto 20px;
                padding-top: 8px;
                display: inline-block;
                text-align: center;
                .item_btn{
                    width: 150px;
                    height: 39px;
                    border: 1px solid #ff9a3a;
                    color: #ff9a3a;
                    font-size: 17px;
                    text-align:center;
                    line-height: 36px;
                    border-radius: 3px;
                    cursor: pointer;
                    position: relative;

                    &:hover{
                        background-color: #ff9a3a;
                        color: #fff;
                    }
                    .icon{
                        width: 18px;
                        height: 18px;
                        background: url('~@/assets/plan-system/choose_icon.png');
                        position: absolute;
                        right: -7px;
                        top: -8px;
                        display: none;
                    }
                }
                .on{
                    background-color: #ff9a3a;
                    color: #fff;

                    .icon{
                        display: block !important;
                    }
                }
                p{
                    text-align: center;
                    color: #ababab;
                    font-size: 14px;
                    margin-top: 10px;
                }

            }
        }
        .present{
            width: 969px;
            height: 93px;
            background-color: #eae8e8;
            margin: auto;
            margin-top: 25px;
            overflow: hidden;
            .present_title{
                text-align: center;
                color: #ff6508;
                font-size: 16px;
                margin: 15px  auto;
                margin-bottom: 9px !important;
            }
            .conts{
                overflow: hidden;
                width: 880px;
                margin: auto;
                .item{
                    display: inline-block;
                    overflow: hidden;
                    margin: 0 15px;
                    font-size: 14px;
                    color: #535252;
                    img{
                        float: left;
                        width: 22px;
                        height: 22px;
                        margin-right: 6px;
                    }
                    span{
                        float: left;
                        display: block;
                        height: 22px;
                        line-height: 22px;

                    }
                }
            }
        }
        .btn_list{
            width: 641px;
            overflow: hidden;
            margin: auto;
            margin-top: 20px;
            .btns{
                width: 264px;
                height: 60px;
                font-size: 18px;
                text-align: center;
                line-height: 58px;
                margin: 0 27px;
                cursor: pointer;
                float: left;
                &:nth-of-type(1){
                    border: 1px solid #c3c2c2;
                    background-color: #fff;
                    color: #333333 !important;
                    &:hover{
                        border: 1px solid #0B5FA8;
                        background-color: #0B5FA8;
                        color: #fff !important;
                    }
                }
                &:nth-of-type(2){
                    border: 1px solid #0B5FA8;
                    background-color: #0B5FA8;
                    color: #fff !important;
                    &:hover{
                        border: 1px solid #0B5FA8;
                        // background-color: #fff;
                        color: #fff !important;
                    }
                }
            }
        }
    }
}
</style>
