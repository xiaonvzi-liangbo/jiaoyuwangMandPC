<template>
  <div>
    <heads :heardtype="false"></heads>
    <img src="@/assets/index/sy_banner.png" class="ban_img"/>
    <div class="navigator">
      <router-link class="nav_lift" to="/educational">
        <img src="@/assets/index/sy_nav_xue.png" class="nav_img"/>
        <div class="nav_size">学历提升</div>
      </router-link>
      <div class="nav_lift">
        <img src="@/assets/index/sy_nav_zhi.png" class="nav_img2"/>
        <div class="nav_size">职业考证</div>
      </div>
      <router-link class="nav_lift" to='/school'>
        <img src="@/assets/index/sy_nav_zhao.png" class="nav_img3"/>
        <div class="nav_size">找学校</div>
      </router-link>
      <router-link class="nav_lift" to="/research">
        <img src="@/assets/index/sy_nav_yan.png" class="nav_img"/>
        <div class="nav_size">研修班</div>
      </router-link>
      <router-link class="nav_lift" to="/goAbroad">
        <img src="@/assets/index/sy_nav_chu.png" class="nav_img"/>
        <div class="nav_size">出国留学</div>
      </router-link>
    </div>
    <div class="apply">
      <div class="app_succeed">报名成功</div>
      <div class="spp_message" v-if="newList.length">
        <crosswise :sendVal="sendval"></crosswise>
      </div>
    </div>
    <div class="routing">
      <div v-for="(item,index) in images" :key="index" class="rou_div">
        <router-link :to="item.linkurl">
          <img :src="item.url" class="rou_img"/>
        </router-link>
      </div>
    </div>
    <div class="hot">
      <div>
        <span class="symbol"></span>
        <span class="hot_title">热门院校</span>
      </div>
      <div class="hot_more">
        更多<img src="@/assets/index/sy_gengduo.png" class="hot_img"/>
      </div>
    </div>
    <school></school>
    <div class="hots">
      <span class="symbol"></span>
      <span class="hot_title">职业考试</span>
    </div>
    <div v-if="bool">
      <div :class="{'teacher':item.classif}" v-for="(item,index) in classLabels" :key="index">
        <div v-if="item.classif">
          <div class="tea_title">
            <div class="tea_tit">{{item.name}}</div>
            <div><img src="@/assets/index/sy_xiala.png" class="tea_images" @click="exhibition(index)"/></div>
            <div class="matter" v-show="item.shows" v-if="classification[index]">
              <div v-for="(title,series) in classification[index]"  @click="recompose(index,series)" :key="series" :class="{'blue':action===series}">{{title.typeName | typename}}</div>
            </div>
          </div>
          <div class="tea_img_div">
            <img :src="item.classif.picture" class="ban_img"/>
          </div>
          <div class="tea_text">
            <div style="color:#494949">
              {{item.classif.typeName}}
            </div>
            <div class="tea_conter">
              {{item.classif.typeInfo | words}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hot hots">
      <div>
        <span class="symbol"></span>
        <span class="hot_title">网校在线备考课程</span>
      </div>
      <router-link class="hot_more" to="/courses">
        更多<img src="@/assets/index/sy_gengduo.png" class="hot_img"/>
      </router-link>
    </div>
    <div class="tea_text">
      <div class="course">
        <a class="cou_conter" v-for="(item,index) in couse" :key="index" :class="{'cou_left':index%2!=0}" target="_blank" :href="'http://m.xlcwx.com/pages/class/introduction?id='+item.id">
          <img :src="item.img" class="ban_img ban_back"/>
          <div class="cou_text">
            <div class="conceal">{{item.title}}</div>
            <div class="cou_bottom">
              <span class="cou_live">直播</span>
              <span class="cou_dibbler">点播</span>
              <span class="cou_pict">￥{{item.price}}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div>
      <div class="hot enter">
        <div>
          <span class="symbol"></span>
          <span class="hot_title">升学规划服务流程</span>
        </div>
        <div class="hot_more">
          更多<img src="@/assets/index/sy_gengduo.png" class="hot_img"/>
        </div>
      </div>
      <div class="enter_bottom">
        <div class="enter_conter">
          <div class="enter_project" v-for="(item,index) in planner" :key="index">
            <img :src="item.img" class="enter_img"/>
            <div class="enter_title">{{item.name}}</div>
          </div>
        </div>
        <div class="enter_number">15688569人已提升学历</div>
      </div>
    </div>
    <div>
      <div class="hot hots">
        <div>
          <span class="symbol"></span>
          <span class="hot_title">热门资讯</span>
        </div>
        <div class="hot_more">
          更多<img src="@/assets/index/sy_gengduo.png" class="hot_img"/>
        </div>
      </div>
      <div class="information">
        <div class="inf_con" v-for="(item,index) in information" :key="index">
          <div><img src="@/assets/ls/zx_back.png" class="inf_img"/></div>
          <div class="inf_conter">
            <div class="inf_title">{{item.snTitle | extent}}</div>
            <div class="inf_posi">
              <span class="inf_label">{{item.snOneName}}</span>
              <span class="inf_labs">{{item.snCreatime | times}}</span>
              <span>阅读：{{item.snClicks}}人</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="hot hots">
        <div>
          <span class="symbol"></span>
          <span class="hot_title">学历规划师</span>
        </div>
        <div class="hot_more">
          更多<img src="@/assets/index/sy_gengduo.png" class="hot_img"/>
        </div>
      </div>
      <div class="switchall">
        <van-swipe :autoplay="3000" indicator-color="#0393D4" class="switch">
          <van-swipe-item v-for="(item,index) in education" :key="index">
            <div class="swipers">
              <div class="swiper-img"><img :src="item.staLpic" class="swiper-img"/></div>
              <div class="swiper-conter">
                <div class="swiper-title">
                  <span>{{item.staTitle}}</span>
                </div>
                <div class="swiper-text">
                  {{item.staTwoTitle}}
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <stern></stern>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
import stern from '@/components/stern/stern'
import school from '@/components/school/school'
import request from '@/utile/request.js'
import requestwx from '@/utile/requestwx.js'
import crosswise from '@/components/scroll/crosswise'
export default {
  name:'index',
  components:{
    heads,
    stern,
    school,
    crosswise
  },
  data(){
    return{
      planner:[
        {img:require('@/assets/index/head_portrait.png'),name: '学历规划师'},
        {img:require('@/assets/index/head_portrait.png'),name: '入学测试'},
        {img:require('@/assets/index/head_portrait.png'),name: '入学测试'},
        {img:require('@/assets/index/head_portrait.png'),name: '入学测试'},
        {img:require('@/assets/index/head_portrait.png'),name: '入学测试'}
      ],
      images:[
        {url:require('@/assets/index/sy_guihua.png'),linkurl:'/educational'},
        {url:require('@/assets/index/sy_ceping.png'),linkurl:''},
        {url:require('@/assets/index/sy_baodu.png'),linkurl:'/research'},
        {url:require('@/assets/index/sy_zhaoxue.png'),linkurl:'/school'},
        {url:require('@/assets/index/sy_liuxue.png'),linkurl:'/goAbroad'},
        {url:require('@/assets/index/sy_fuwu.png'),linkurl:''}
      ],
      schoolList:[],
      classification:[],
      classLabels:[],
      bool:false,
      action:0,
      couse:[],
      information:[],
      newLists:[{
        userName:'1'
      },{
        userName:'2'
      }],
      newList:[],
      education:[],
      sendval:[{name:'王**',education:'本科',school:'山东大学'},
      {name:'高**',education:'本科',school:'山东大学'},
      {name:'赵**',education:'本科',school:'山东大学'}]
    }
  },
  filters:{
    words(val){
      if(val.length>45){
        return val.substring(0,45)+'...'
      }else{
        return val
      }
    },
    typename(val){
      let arry = val.split('】')
      return arry[1]
    },
    extent(val){
      if(val.length>25){
        return val.substring(0,25)+'......'
      }else{
        return val
      }
    },
    times(val){
      return val.split(' ')[0]
    }
  },
  computed:{
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  methods:{
    //获取考试分类
    getExam(){
      let that = this
      request({
        url:'/eduWeb/jyEducationFunctionDictionariesForeign/findByOneType',
        method:'get',
        params:{
          type:'1',
          isDelete:'0',
          pageNum:'1',
          pageSize:'6',
          sort:'1'
        }
      })
      .then(res=>{
        that.classification = []
        that.classLabels = []
        res.rows.forEach((item,index)=>{
          request({
            url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByOneType',
            method: 'get',
            params: {
              type: '1',
              pageNum: '1',
              pageSize: '6',
              sort: '2',
              parentId: item.id,
              isDelete: '0'
            }
          })
          .then(re=>{
            that.classLabels.push({
              name:item.typeName,
              classif:re.rows[0],
              shows:false
            })
            that.classification.push(re.rows)
            if(index+1 === res.total){
              that.bool = true
            }
          })
        })
      })
    },
    //下拉点击事件
    exhibition(index){
      this.classLabels[index].shows = !this.classLabels[index].shows
    },
    //显示内容改变点击事件
    recompose(index,series){
      this.classLabels[index].classif = this.classification[index][series]
      this.action = series
    },
    //获取热门资讯
    getInformation(){
      let that = this
      request({
        url:'/eduWeb/newsllistForeign/getAllnewsList',
        method:'get',
        params:{
          pageNum:'1',
          pageSize:'4',
          snRecom:'1'
        }
      })
      .then(res=>{
        that.information = res.rows
      })
    },
    //获取vip课程
    getVip(){
      let that = this
      requestwx({
        url:'/api/Course/vip',
        method:'get',
        params:{
          PageIndex:'0',
          pageSize:'4'
        }
      })
      .then(res=>{
        that.couse = res
      })
    },
    //获取报名成功的人员
    getApply(){
      let that = this
      request({
        url:'/eduWeb/register/findByAllUserFrom',
        method:'get',
        data:{
          pageNum:'1',
          pageSize:'10'
        }
      })
      .then(res=>{
        that.newList = res.rows
      })
    },
    //获取学历规划师
    getTeacher(){
      let that = this
      request({
        url:'/eduWeb/foreignTeacher/list',
        method:'get',
        params:{
          pageNum:'1',
          pageSize:'6'
        }
      })
      .then(res=>{
        that.education = res.rows
      })
    }
  },
  created(){
    this.getExam()
  },
  mounted(){
    this.getVip()
    this.getInformation()
    this.getApply()
    this.getTeacher()
  }
}
</script>
<style scoped lang="scss">
  .ban_img{
    width: 100%;
    height: 100%;
  }
  .swiper-img{
    width: 190px;
    height: 170px;
    border-radius: 6px;
  }
  .switchall{
    margin: 20px 0;
  }
  .switchall >>> .van-swipe__indicator{
    background-color: #B6E8FF;
  }
  .switch{
    width:650px;
    background-color: #fff;
    padding: 20px;
    margin: auto;
    border-radius: 10px;
  }
  .swipers{
    display: flex;
    flex-direction: row;
  }
  .swiper-conter{
    margin-left: 20px;
  }
  .swiper-title{
    font-size: 30px;
  }
  .swiper-text{
    padding-top: 30px;
    width: 459px;
    color: #666666;
  }
  .swiper-pagination{
    top: 140px;
  }
  .matter{
    background-color: #fff;
    width: 280px;
    border-radius: 6px;
    position: absolute;
    right: 0px;
    top: 60px;
    padding: 20px;
    box-shadow:0px 0px 8px 0px rgba(11, 102, 59, 0.35);
    div{
      color: #999999;
      line-height: 40px;
    }
  }
  .blue{
    color: #0B5EA8 !important;
  }
  .navigator{
    width: 670px;
    padding: 36px 10px 29px 10px;
    margin: auto;
    background-color: #FFFFFF;
    box-shadow:0px 2px 6px 0px rgba(35,45,132,0.4);
    border-radius:10px;
    display: flex;
    position: relative;
    bottom: 90px;
  }
  .nav_lift{
    flex: auto;
    text-align: center;
    text-decoration:none;
  }
  .nav_img{
    width: 56px;
    height: 54px;
  }
  .nav_img2{
    width: 64px;
    height: 54px;
  }
  .nav_img3{
    width: 70px;
    height: 54px;
  }
  .nav_size{
    color: #666666;
    margin-top: 20px;
    font-size: 22px;
  }
  .apply{
    width: 690px;
    margin: auto;
    border-radius:6px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    position: relative;
    bottom: 60px;
  }
  .app_succeed{
    width: 162px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    background-color:#B3E8FF;
    font-size: 26px;
    color:#0B5EA8;
    border-radius:6px 0px 0px 6px;
  }
  .spp_message{
    height: 70px;
    line-height: 70px;
    width: 528px;
    text-align: center;
  }
  .spp_message{
    text-align: left;
    position: relative;
    left: 30px;
  }
  .app_personnel1{
    margin-right: 40px;
  }
  .app_personnel{
    margin-right: 30px;
  }
  .routing{
    position: relative;
    bottom: 35px;
  }
  .rou_div{
    display: inline-block;
    margin-left: 30px;
    margin-top: 20px;
  }
  .rou_img{
    width: 330px;
    height: 130px;
  }
  .hot{
    width: 690px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .symbol{
    display: inline-block;
    width: 8px;
    height: 29px;
    background-color: #0B5EA8;
    margin-right: 11px;
  }
  .hot_title{
    font-size: 32px;
    font-weight: bold;
  }
  .hot_more{
    color: #999999;
    text-decoration:none;
  }
  .hot_img{
    width: 12px;
    height: 22px;
    margin-left: 10px;
  }
  .hots{
    width: 690px;
    margin: auto;
    margin-top: 40px;
  }
  .teacher{
    width: 650px;
    padding: 20px;
    margin: auto;
    background-color: #FFFFFF;
    border-radius: 10px;
    margin-top: 20px;
  }
  .tea_title{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .tea_tit{
    font-size: 30px;
    font-weight: 600;
  }
  .tea_images{
    width: 32px;
    height: 19px;
  }
  .tea_img_div{
    margin-top: 20px;
  }
  .tea_text{
    margin-top: 24px;
  }
  .tea_conter{
    color: #999999;
    margin-top: 19px;
    line-height:36px;
    margin-bottom: 29px;
  }
  .course{
    width: 690px;
    margin: auto;
  }
  .cou_conter{
    display: inline-block;
    width: 335px;
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 10px;
    text-decoration: none;
    color: #333;
  }
  .cou_text{
    padding: 16px;
    font-size: 26px;
    background-color: #FFFFFF;
    border-radius: 0 0 10px 10px;
  }
  .conceal{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cou_live{
    padding: 6px 12px;
    font-size: 18px;
    background-color: #FF7439;
    color: #fff;
    border-radius: 8px;
  }
  .cou_dibbler{
    padding: 6px 12px;
    font-size: 18px;
    background-color: #1B89FA;
    color: #fff;
    border-radius: 8px;
  }
  .cou_bottom{
    margin-top: 24px;
  }
  .cou_pict{
    font-weight: bolder;
    font-size: 35px;
    color: #F15817;
    float: right;
  }
  .ban_back{
    border-radius: 10px 10px 0 0;
  }
  .cou_left{
    margin-left: 20px;
  }
  .enter{
    margin-top: 10px;
  }
  .enter_conter{
    display: flex;
    flex-direction: row;
  }
  .enter_img{
    width: 80px;
    height: 80px;
  }
  .enter_project{
    text-align: center;
    flex: auto;
  }
  .enter_title{
    margin-top: 19px;
  }
  .enter_num{
    margin-top: 48px;
  }
  .enter_bottom{
    width: 690px;
    margin: auto;
    border-radius:10px;
    margin-top: 20px;
    padding: 40px 0 73px 0;
    background-color: #fff;
  }
  .enter_number{
    margin-top: 48px;
    text-align: center;
    color: #333333;
  }
  .information{
    width: 670px;
    margin: auto;
    padding: 10px 10px 30px 10px;
    background-color: #fff;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 40px;
  }
  .inf_img{
    width: 160px;
    height: 120px;
    border-radius: 6px;
  }
  .inf_conter{
    padding: 0 22px;
  }
  .inf_title{
    line-height: 42px;
    color: #333;
    font-size: 28px;
    height: 70px;
  }
  .inf_posi{
    margin-top: 28px;
  }
  .inf_label{
    border: 2px solid #E5E5E5;
    color: #999999;
    padding: 2px 5px;
    margin-right: 20px;
    border-radius: 4px;
  }
  .inf_labs{
    margin-right: 20px;
  }
  .inf_con{
    display: flex;
    flex-direction: row;
    margin-top: 21px;
    margin-bottom: 30px;
  }
</style>