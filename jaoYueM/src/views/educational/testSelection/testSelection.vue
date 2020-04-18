<template>
  <div>
    <heads title="学历提升入学测评系统"></heads>
    <img src="@/assets/education/xl_banner.png" class="heard-img"/>
    <div class="title">选择您比较倾向的学历提升方式</div>
    <div class="texts">注：只能选择一个进入测评，可以进入了解详情确认后选择</div>
    <div class="labels" v-if="mode==='1'">
      <div class="label" :class="{'label-queen':type==='3'}" @click="distinction('3')">
        自学考试
      </div>
    </div>
    <div class="labels" v-else-if="mode==='2'">
      <div class="label" :class="{'label-queen':type==='3'}" @click="distinction('3')">
        自学考试
      </div>
      <div class="label" :class="{'label-queen':type==='1'}" @click="distinction('1')">
        成人高考
      </div>
      <div class="label" :class="{'label-queen':type==='2'}" @click="distinction('2')">
        网络教育
      </div>
      <div class="label" :class="{'label-queen':type==='4'}" @click="distinction('4')">
        开放教育
      </div>
    </div>
    <div class="labels" v-else-if="mode==='3'">
      <div class="label" :class="{'label-queen':type==='3'}" @click="distinction('3')">
        自学考试
      </div>
    </div>
    <div class="labels" v-else-if="mode==='4'">
      <div class="label" :class="{'label-queen':type==='3'}" @click="distinction('3')">
        自学考试
      </div>
    </div>
    <div class="labels" v-else-if="mode==='5'">
      <div class="label" :class="{'label-queen':type==='5'}" @click="distinction('5')">
        普通专升本
      </div>
      <div class="label" :class="{'label-queen':type==='1'}" @click="distinction('1')">
        成人高考
      </div>
      <div class="label" :class="{'label-queen':type==='2'}" @click="distinction('2')">
        网络教育
      </div>
      <div class="label" :class="{'label-queen':type==='3'}" @click="distinction('3')">
        自学考试
      </div>
      <div class="label" :class="{'label-queen':type==='4'}" @click="distinction('4')">
        开放教育
      </div>
      <div class="label" :class="{'label-queen':type==='6'}" @click="distinction('6')">
        出国读本科
      </div>
    </div>
    <div class="labels" v-else-if="mode==='6'">
      <div class="label" :class="{'label-queen':type==='192'}" @click="distinction('192')">
        12月统一联考
      </div>
      <div class="label" :class="{'label-queen':type==='193'}" @click="distinction('193')">
        5月同等学力
      </div>
      <div class="label" :class="{'label-queen':type==='194'}" @click="distinction('194')">
        出国考研
      </div>
      <div class="label" :class="{'label-queen':type==='195'}" @click="distinction('195')">
        研修班
      </div>
    </div>
    <div class="subscribe">预约升学规划师资讯</div>
    <div class="appraisal" @click="topic">立即开始在线测评</div>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
export default {
  name:'testSelection',
  components:{
    heads
  },
  data(){
    return{
      query:'',
      mode:'',
      type:''
    }
  },
  methods: {
    //立即开始在线测评点击事件
    topic(){
      let that = this
      if(that.type){
        that.$router.push({
        path:'/educational/testSelection/topic',
        query:{
          xueli: that.query.xueli,
          cengci: that.query.cengci,
          time: that.query.time,
          expenses: that.query.expenses,
          city: that.query.city,
          grade: that.query.grade,
          type:that.type
          }
        })
      }else{
        that.$toast('请先选择您要进行的测评')
      }
      
    },
    //获取类型
    distinction(type){
      this.type = type
    },
    // 判断显示的信息
    displayConter () {
      let that = this
      that.query = that.$route.query
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
    }
  },
  mounted(){
    this.displayConter()
  }
}
</script>
<style scoped>
  .heard-img{
    width: 100%;
    height: 100%;
  }
  .title{
    margin-top: 30px;
    font-size: 30px;
    font-weight: 800;
    text-align: center;
  }
  .texts{
    color: #999;
    margin-top: 20px;
    text-align: center;
  }
  .labels{
    margin-top: 60px;
  }
  .label{
    margin-top: 40px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    width: 180px;
    display: inline-block;
    font-size: 26px;
    color: #0B5EA8;
    /* background-color: #0B5EA8; */
    border-radius: 6px;
    border: 2px solid #0393D4;
    margin-left: 40px;
    margin-right: 10px;
  }
  .label-queen{
    background-color: #0B5EA8 !important;
    color: #fff;
  }
  .subscribe{
    margin-top: 120px !important;
    width: 500px;
    height: 80px;
    line-height: 80px;
    margin: auto;
    text-align: center;
    border: 2px solid #44AFE1;
    background-color: #DDEFFF;
    color: #666666;
    border-radius: 6px;
  }
  .appraisal{
    margin-top: 40px !important;
    width: 500px;
    height: 80px;
    line-height: 80px;
    margin: auto;
    text-align: center;
    border: 2px solid #44AFE1;
    background-color: #0B5EA8;
    color: #fff;
    border-radius: 6px;
  }
</style>