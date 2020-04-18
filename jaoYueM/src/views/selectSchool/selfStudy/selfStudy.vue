<template>
  <div>
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <img :src="item.url"/>
        </swiper-slide>
      </swiper>
    </div>
    <div class="instrument">
      <div class="conter">
        <div class="block"></div>
        <div class="title">
          报考工具箱
        </div>
        <div class="navi">
          <div v-for="(item,index) in navigations" :key="index" class="icons">
            <img :src="item.url"/>
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="focussing">
      <div class="conter">
        <div class="block"></div>
        <div class="title">聚焦自学考试</div>
        <div class="row" v-for="(item,index) in study" :key="index" :class="{'rows':index===2}">
          <div class="text">
            <span>{{item.snTitle}}</span>
            <div class="bottom">
              <span class="span">{{item.snOneName}}</span>
              <span>{{item.snCreatime | times}}</span>
            </div>
          </div>
          <div>
            <img :src="item.snImg"/>
          </div>
        </div>
      </div>
    </div>
    <div class="school">
      <div class="conter">
        <div class="block"></div>
        <div class="title">热门院校</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
        <school :labels="false" sctype="389"></school>
      </div>
    </div>
    <div class="sendWord">
      <div class="conter">
        <div class="block"></div>
        <div class="title">学长寄语</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
        <div class="send" v-for="(item,index) in 3" :key="index">
          <div class="hesrds">
            <img src="@/assets/ls/tx.png"/>
          </div>
          <div class="right">
            <div class="heard">
              <div class="titles">一个学长</div>
              <div class="time">2小时前</div>
            </div>
            <div>
              <div class="text">山东财经大学《会计学》</div>
              <div class="conters">
                这时, 其实我们已经看到有上下左右四个三角形了..如果, 我们把4种颜色。
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottoms">
      <img src="@/assets/school/zxksbm.png"/>
    </div>
    <stern></stern>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import school from '@/components/school/school'
import stern from '@/components/stern/stern'
import request from '@/utile/request.js'
export default {
  name:'selfStudy',
  components:{
    swiper,
    swiperSlide,
    school,
    stern
  },
  filters:{
    times(value){
      return value.split(' ')[0]
    }
  },
  data(){
    return{
      study:[],
      banner:[
        {url:require('@/assets/school/examination.png')},
        {url:require('@/assets/school/apply.png')},
        {url:require('@/assets/school/exempt.png')},
        {url:require('@/assets/school/graduate.png')},
        {url:require('@/assets/school/degree.png')},
      ],
      navigations:[
        {url:require('@/assets/school/pointer.png'),name:'报考指南'},
        {url:require('@/assets/school/signup.png'),name:'考试报名'},
        {url:require('@/assets/school/inquire.png'),name:'成绩查询'},
        {url:require('@/assets/school/print.png'),name:'打印准考证'}
      ],
      swiperOption:{
        slidePreView:1, 
        spaceBetween: 0,
        breakpoints: { 
        //当宽度大于等于320
        320: {
          slidesPerView: 2,
          spaceBetween: 10
        },
      //当宽度大于等于768
        768: { 
          slidesPerView: 3,
          spaceBetween: 20
        },
        //当宽度大于等于1280
        1280: {
          slidesPerView: 4,
          spaceBetween: 30
        }
      }
    }
    }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  methods: {
    //获取自学考试的内容
    getExamine(){
      let that = this
      request({
        url:'/eduWeb/newsllistForeign/getAllnewsList',
        method:'get',
        params:{
          pageNum:'1',
          pageSize:'3',
          snOneType:'501',
          snIspass:'1',
          snRecom:'1'
        }
      })
      .then(res=>{
        that.study = res.rows
      })
    },
    //获取学长寄语
    sendWord(){
      // let that = this

    }
  },
  mounted(){
    this.getExamine()
  }
}
</script>
<style scoped lang="scss">
  .swiper{
    background-color: #fff;
    position: relative;
    top: -5px;
    padding: 30px 0 30px 0px;
    div{
      margin: 0 !important;
      img{
      width: 200px;
      height: 100px;
      &:first-child{
        margin-left: 30px;
      }
      }
    }
  }
  .instrument{
    background-color: #fff;
    margin-top: 15px;
    margin-bottom: 20px;
    .conter{
      width: 690px;
      margin: auto;
      padding: 20px 0;
      .block{
        width: 8px;
        height: 30px;
        display: inline-block;
        background-color: #0B5EA8;
      }
      .title{
        display: inline-block;
        font-size: 32px;
        color: #333;
        font-weight: 700;
        margin-left: 10px;
      }
      .navi{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 41px;
        .icons{
          flex: auto;
          text-align: center;
          img{
            width: 70px;
            height: 70px;
          }
          div{
            margin-top: 20px;
            margin-bottom: 20px;
          }
        }
      }
    }
  }
  .focussing{
    margin-top: 20px;
    background-color: #fff;
    .conter{
      padding: 25px 30px;
      .block{
        width: 8px;
        height: 30px;
        background-color: #0B5EA8;
        display: inline-block;
      }
      .title{
        margin-left: 10px;
        color: #333;
        font-size: 32px;
        font-weight: bold;
        display: inline-block;
      }
      .row{
        display: flex;
        flex-direction: row;
        padding: 20px 0;
        padding-bottom: 40px;
        border-bottom: 1px solid #EEEEEE;
        img{
          width: 190px;
          height: 100px;
          padding-left: 25px;
        }
        .text{
          width: 490px !important;
          height: 65px;
          .bottom{
            margin-top: 20px;
            color: #999999;
            .span{
              border: 2px solid #CCCCCC;
              padding: 2px 10px;
              height: 60px !important;
              border-radius: 4px;
              margin-right: 20px;
            }
          }
        }
      }
      .rows{
        border-bottom: 0;
      }
    }
  }
  .school{
    margin-top: 20px;
    background-color: #fff;
    .conter{
      width: 690px;
      margin: auto;
      padding: 30px 0;
      .block{
        width: 8px;
        height: 30px;
        background-color: #0B5EA8;
        margin-right: 10px;
        display: inline-block;
      }
      .title{
        font-size: 32px;
        color: #333333;
        font-weight: bold;
        display: inline-block;
      }
      .more{
        float: right;
        color: #999999;
        position: relative;
        top: 5px;
        img{
          width: 12px;
          height: 22px;
          margin-left: 10px;
        }
      }
    }
  }
  .sendWord{
    margin-top: 20px;
    background-color: #fff;
    .conter{
      width: 690px;
      margin: auto;
      padding: 30px 0;
      .block{
        width: 8px;
        height: 30px;
        background-color: #0B5EA8;
        margin-right: 10px;
        display: inline-block;
      }
      .title{
        font-size: 32px;
        color: #333333;
        font-weight: bold;
        display: inline-block;
      }
      .more{
        float: right;
        color: #999999;
        position: relative;
        top: 5px;
        img{
          width: 12px;
          height: 22px;
          margin-left: 10px;
        }
      }
      .send{
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        padding-bottom: 20px;
        .hesrds{
          width: 60px;
          margin-left: 20px;
          img{
            width: 60px;
            height: 60px;
          }
        }
        .right{
          margin-left: 20px;
          .heard{
            color: #0393D4;
            .titles{
              font-size: 28px;
              font-weight: bold;
              position: relative;
              bottom: 10px;
            }
            .time{
              color: #999999;
              position: relative;
              bottom: 5px;
            }
          }
          .text{
            color: #333;
            margin-top: 20px;
          }
          .conters{
            color: #4A4A4A;
            margin-top: 10px;
            line-height: 36px;
          }
        }
      }
    }
  }
  .bottoms{
    padding: 20px 0;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>