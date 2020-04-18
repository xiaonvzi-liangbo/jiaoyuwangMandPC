<template>
  <div>
    <heards title="自学考试测试题"></heards>
    <img src="@/assets/index/backmgrounds.png" class="background"/>
    <div class="examples">
      <div class="swiper-container swiper-no-swiping">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
            <img src="@/assets/index/test.png" alt="">
            <div class="conter">
              <div class="title">第{{index+1 | version}}题</div>
              <div class="fixation">
                <div class="fix-title">{{index+1}}、{{item.stem}}</div>
                <div class="topic">
                  <div v-html="item.option" class="questionselect"></div>
                  <div class="topic-top" v-for="(choice,num) in item.optionNumber" :key="num">
                    <input type="radio" v-model="answer" :name="index" :checked="answer===choice" :value="choice"/><span>{{choice | transcoder}}</span>
                  </div>
                </div>
                <div class="buttons">
                  <div @click="onTopic(index)" class="one" v-if="index!==0">上一题</div>
                  <div @click="nextTopic(index,item.id)" class="nexts" v-if="index!==totla-1">下一题</div>
                  <div @click="present(index,item.id)" class="nexts" v-else>提交</div>
                </div>
                <div class="numbers">{{index+1}}/{{totla}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import heards from '@/components/heads/heads'
import request from '@/utile/request.js'
export default {
  name:'topic',
  components:{
    heards
  },
  data() {
    return {
      query:'',
      banner: [],
      mySwiper:'',
      answer:'',
      answerSet:[],
      totla:''
    }
  },
  methods: {
    onTopic(index){
      this.mySwiper.slidePrev()
      this.answer = this.answerSet[index-1].tans
    },
    nextTopic(index,id){
      let that = this
      if(that.answer){
        that.answerSet[index]={tid:id,tans:that.answer}
        that.answer=''
        that.mySwiper.slideNext();
      }else{
        that.$toast('请选择答案') 
      }
    },
    //提交点击事件
    present(index,id){
      let that = this
      if(that.answer){
        let sub = []
        that.answerSet[index]={tid:id,tans:that.answer}
        that.answerSet.forEach((item,index)=>{
          sub = sub + item.tid+','+ item.tans
          if(index!==that.answerSet.length-1){
            sub = sub+';'
          }
        })
        let phone = window.sessionStorage.getItem('show')
        let userid = window.sessionStorage.getItem('userId')
        request({
          url:'/eduWeb/jYAssessRecordForeign/add',
          method:'post',
          data:{
            phone: phone,
            difficulty: that.query.grade,
            jyQuestionBanks: sub,
            nowEducation: that.query.xueli,
            planAddress: that.query.city,
            planEducation: that.query.cengci,
            planMoney: that.query.expenses,
            planTime: that.query.time,
            type: that.query.type,
            userId:userid
          }
        })
        .then(res=>{
          if(res.code===200){
            that.$router.push({
              path:'/educational/testSelection/report'
            })
          }else{
            that.$toast('提交失败，请重试') 
          }
        })
      }else{
        that.$toast('请选择答案') 
      }
    }
  },
  filters:{
    //阿拉伯数字转中文数字
    version(num){
      let AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九");
      let BB = new Array("", "十", "百", "千", "万", "亿", "点", "");
      let a = ("" + num).replace(/(^0*)/g, "").split(".")
      let k = 0
      let re = "";
      for (let i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
          case 0:
            re = BB[7] + re;
            break;
          case 4:
            if (!new RegExp("0{4}\\d{" + (a[0].length - i - 1) + "}$").test(a[0]))
              re = BB[4] + re;
              break;
          case 8:
            re = BB[5] + re;
            BB[7] = BB[5];
            k = 0;
            break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
        if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
      }
      return re;
    },
    //数字转英语字母
    transcoder(value){
      return String.fromCharCode(64 + value)
    }
  },
  created(){
  //获取题库类型
    let that = this
    that.query = that.$route.query
    request({
      url:'/eduWeb/jyQuestionBanksForeign/selectByAuto',
      method:'get',
      params:{
        oneType:that.query.type,
        questionType:'0'
      }
    })
      .then(res=>{
        that.banner = res.data
        that.totla = res.number
      })
  },
  mounted() {
    let that = this;
    that.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', //滑动方向，可设置水平(horizontal)或垂直(vertical)。
      // loop: true, // 设置为true 则开启loop模式
      // autoplay: 3000, // 自动切换时间
      slidesPerView: 'auto', // 设置slider容器能够同时显示的slides数量(carousel模式)。类型：number or auto
      centeredSlides: true, // 设定为true时，active slide会居中，而不是默认状态下的居左。
      spaceBetween: 10, // 在slide之间设置距离（单位px）。
      loopAdditionaSlider: 0, // loop模式下会在slides前后复制若干个slide,，前后复制的个数不会大于原总个数。
      observer:true,//修改swiper自己或子元素时，自动初始化swiper 
      observeParents:true
    })
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
</style>
<style lang="scss" scoped>
.background{
  position: absolute;
  width: 100%;
  height: calc(100vh-88px);
}
.conter{
  position: absolute;
  z-index: 999;
  top: 60px;
  width: 500px;
  left: 50px;
  .title{
    text-align: center;
    color: #0B5EA8;
    font-size: 32px;
  }
  .fixation{
    position: relative;
    top: 140px;
    .fix-title{
      font-size: 28px;
    }
    .topic{
      margin-top: 30px;
      border-top: 1px solid #ccc;
      height: 300px;
      .topic-top{
        padding-top: 30px;
        font-size: 30px;
        color: #898989;
        display: inline-block;
        input{
          margin-right: 10px;
          span{
            margin-right: 30px;
          }
          &:first-child{
            margin-left: 20px;
          }
        }
      }
    }
    .buttons{
      margin-top: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .one{
        width: 140px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border: 2px solid #DFDFDF;
        border-radius: 30px;
        margin-right: 150px;
      }
      .nexts{
        width: 140px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        border-radius: 30px;
        background-color: #0B5EA8;
        color: #fff;
      }
    }
    .numbers{
      text-align: center;
      margin-top: 30px;
      font-size: 32px;
      color: #999;
    }
  }
}
.examples{
  margin-top: 122px;
  height: 100%;
  .tips{
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 46px;
    text-align: center;
    img{
      width: 12px;
      height: 14px;
      position: absolute;
      top: 7.5px;
      left: 12vw;
      color: #fff;
    }
    p{
      width: 240px;
      text-align: left;
      color: #fff;
      font-size: 12px;
      position: absolute;
      left: 18vw;
      top: 7px;
      line-height: 16px;
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100% !important;
}
.swiper-container .swiper-wrapper .swiper-slide {
  width: 80% !important;
  overflow: hidden;
  display: flex;
  align-items: center;
}
.swiper-container .swiper-wrapper .swiper-slide img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev,.swiper-container .swiper-wrapper .swiper-slide-next{
  height: 100% !important;
  margin-top: 20px;
}
.swiper-container .swiper-wrapper .swiper-slide-prev img,.swiper-container .swiper-wrapper .swiper-slide-next img{
  width: 100%;
  height: 100%;
}
</style>