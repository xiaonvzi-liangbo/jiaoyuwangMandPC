<template>
  <div>
    <heads title="择校服务"></heads>
    <div>
      <swiper :options="swiperOption" ref="mySwiper" >
        <swiper-slide v-for="(item,index) in banner" :key="index">
          <img :src="item.url" class="swipe"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <div class="heard-top">
      <div v-for="(item,index) in navi" :key="index" @click="switchover(index)">
        <span :class="{'check':action===index}">{{item}}</span>
      </div>
    </div>
    <selfStudy v-if="action===0"></selfStudy>
    <adult v-if="action===1"></adult>
    <network v-if="action===2"></network>
    <dispark v-if="action===3"></dispark>
  </div>
</template>
<script>
import 'swiper/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import heads from '@/components/heads/heads'
import selfStudy from './selfStudy/selfStudy'
import network from './network/network'
import dispark from './dispark/dispark'
import adult from './adult/adult'
export default {
  components:{
    heads,
    swiper,
    swiperSlide,
    selfStudy,
    network,
    dispark,
    adult
  },
  name:'school',
  data(){
    return{
      banner: [
        {url:require('@/assets/school/zxfw_back.png')},
        {url:require('@/assets/school/zxfw_back.png')},
        {url:require('@/assets/school/zxfw_back.png')}
      ],
      navi:['自学考试','成人高考','网络教育','开放教育'],
      swiperOption:{
        loop:true,
        autoplay:{
          delay: 2000,
          stopOnLastSlide: false,
          /* 触摸滑动后是否继续轮播 */
          disableOnInteraction: false
        },
        pagination:{
          el:'.swiper-pagination',
          clickable:true
        }
      },
      action:0
    }
  },
  methods:{
    //导航点击事件
    switchover(index){
      this.action = index
    }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted(){
  }
}
</script>
<style scoped lang="scss">
  
  .swipe{
    width: 100%;
    height: 100%;
  }
  .heard-top{
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    background-color: #fff;
    border-bottom: 1px solid #EEEEEE;
    position: relative;
    top: -5px;
    div{
      flex: auto;
      text-align: center;
      font-size: 30px;
      color: #999999;
      span{
        padding: 14px 0;
      }
    }
  }
  .check{
    color: #0B5EA8;
    font-weight:500;
    border-bottom:6px solid #0B5EA8;
    border-radius: 4px;
  }
</style>