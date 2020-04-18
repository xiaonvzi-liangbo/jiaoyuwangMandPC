<template>
  <div @scroll.passive="getScroll($event)" class="all">
    <heads title="热门课程"></heads>
    <div class="search">
      <input class="input" placeholder="搜索课程名称" type="text" v-model="search" @input="monitor"/>
      <img class="search_img" src="@/assets/index/sy_search.png" />
    </div>
    <template v-if="shows">
      <div>
        <swiper :options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item,index) in banner" :key="index">
            <img :src="item.url" class="swipe" />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="hotEvent">
        <div class="hotheader">
          <div class="title">热门课程</div>
          <div class="sifting">
            <div>筛选</div>
          </div>
        </div>
        <div class="list">
          <a class="card" v-for="(item,index) in courses" :key="index" target="_blank" :href="'http://m.xlcwx.com/pages/class/introduction?id='+item.id">
            <img class="card_img" :src="item.img" alt />
            <div class="title">{{item.title}}</div>
            <div class="card_bottom">
              <span class="card_but" style="background-color: #ff7439;">直播</span>
              <span class="card_but" style="background-color: #1B89FA;">点播</span>
              <span class="car_money">¥ {{item.price}}</span>
            </div>
          </a>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="hotEvent">
        <div class="list">
          <a class="card" v-for="(item,index) in courses" :key="index" target="_blank" :href="'http://m.xlcwx.com/pages/class/introduction?id='+item.id">
            <img class="card_img" :src="item.img" alt />
            <div class="title">{{item.title}}</div>
            <div class="card_bottom">
              <span class="card_but" style="background-color: #ff7439;">直播</span>
              <span class="card_but" style="background-color: #1B89FA;">点播</span>
              <span class="car_money">¥ {{item.price}}</span>
            </div>
          </a>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import heads from "@/components/heads/heads";
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import requestwx from '@/utile/requestwx.js'
export default {
  name: "goAbroad",
  components: {
    heads,
    swiper,
    swiperSlide
  },
   data(){
    return{
      search: "",
      pageNum:0,
      shows:true,
      banner: [
        {url: require("@/assets/index/xl_banner.png")},
        {url: require("@/assets/index/xl_banner.png")},
        {url: require("@/assets/index/xl_banner.png")}
      ],
      courses:[],
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
      }
    }
  },
  methods:{
    //上拉加载点击事件
    getScroll(done) {
      let scrollBottom = event.target.scrollHeight - event.target.scrollTop - event.target.clientHeight;
      if(scrollBottom<50){
        let that = this
        that.pageNum++
        requestwx({
          url:'/api/Course/vip',
          method:'get',
          params:{
            PageSize:'10',
            PageIndex:that.pageNum,
            q:that.search
          }
        })
        .then(res=>{
          that.courses = that.courses.concat(res)
        })
      }
    },
    //输入框输入事件
    monitor(){
      let that = this
      if(that.search){
        that.getHotclass()
      }else{
        that.getHotclass()
        that.shows = true
      }
    },
   //获取热门课程
   getHotclass(){
     let that = this
     requestwx({
       url:'/api/Course/vip',
       method:'get',
       params:{
         PageSize:'10',
         PageIndex:'0',
         q:that.search
       }
     })
     .then(res=>{
       that.courses = res
     })
   }
  },
  computed:{
    swiper() {
        return this.$refs.mySwiper.swiper
      }
  },
  mounted(){
    this.getHotclass()
  }
};
</script>
<style scoped lang="scss">
.all{
  height: 100%;
  overflow: auto;
}
.search {
  background-color: #fff;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  .input {
    background-color: #e0e0e0;
    width: calc(100vw - 120px);
    height: 60px;
    border: none;
    border-radius: 30px;
    padding-left: 20px;
    outline: none
  }
  .search_img {
    position: relative;
    right: 50px;
    width: 27px;
  }
}
.seeding {
  width: 100%;
  display: block;
  height: 350px;
}
  .swipe{
    width: 100%;
    height:350px;
  }
.hotEvent {
  background-color: #fff;
  .hotheader {
    display: flex;
    justify-content: space-between;
    padding: 39px 30px 34px;
    line-height: 20px;
    .title {
      font-size: 32px;
      font-weight: bold;
      align-items: center;
    }
    .sifting {
      font-size: 24px;
      color: #999999;
    }
  }
  .list {
    padding: 0 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .card {
      width: 335px;
      height: 290px;
      border: 2px solid #DDDDDD;
      margin-bottom: 20px;
      border-radius: 6px;
      text-decoration: none;
      .card_img {
        width: 100%;
        height: 188px;
        border-radius: 4px;
      }
      .title {
        padding: 0 17px;
        font-size: 24px;
        font-weight: bold;
        color: #666666;
        overflow: hidden; //超出一行文字自动隐藏
        text-overflow: ellipsis; //文字隐藏后添加省略号
        white-space: nowrap; //强制不换行
      }
      .card_bottom {
        padding: 0 17px;
        margin-top: 13px;
        .card_but {
          color: #fff;
          padding: 2px 16px;
          font-size: 18px !important;
          border-radius: 2px;
        }
        .car_money {
          font-size: 24px;
          font-weight: bold;
          color: #f15817;
          float: right;
        }
      }
    }
  }
}
</style>