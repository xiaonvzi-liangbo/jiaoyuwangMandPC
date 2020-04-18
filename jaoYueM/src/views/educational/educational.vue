<template>
  <div>
    <heads title="学历提升"></heads>
    <div>
      <img src="@/assets/education/xl_banner.png" class="imgs"/>
    </div>
    <div class="test">
      <div class="title">
        <div class="block"></div>
        <div>测一测</div>
      </div>
      <div class="test-select">
        <img src="@/assets/fixation/911.png"/>
        <select class="select" v-model="fromData.education">
          <option value="" class="ploce" disabled selected>目前的学历</option>
          <option value="初中及以下">初中及以下</option>
          <option value="高中">高中</option>
          <option value="专科在读">专科在读</option>
          <option value="专科">专科</option>
          <option value="本科">本科</option>
        </select>
      </div>
      <div class="test-sele">
        <img src="@/assets/fixation/913.png"/>
        <select class="select" v-model="fromData.promote">
          <option value="" class="ploce" disabled selected>需要提升的学历层次</option>
          <option value="升专科">升专科</option>
          <option value="升本科">升本科</option>
          <option value="研究生">研究生</option>
        </select>
      </div>
      <div class="test-sele">
        <img src="@/assets/fixation/914.png"/>
        <select class="select" v-model="fromData.census">
          <option value="" class="ploce" disabled selected>户籍所在地</option>
          <option value="山东">山东</option>
          <option value="其他省份">其他省份</option>
        </select>
      </div>
      <div class="test-sele">
        <img src="@/assets/fixation/916.png"/>
        <select class="select" v-model="fromData.tuition">
          <option value="" class="ploce" disabled selected>学费范围</option>
          <option value="5-6千">5-6千</option>
          <option value="1万左右">1万左右</option>
        </select>
      </div>
      <div class="test-sele">
        <img src="@/assets/fixation/915.png"/>
        <select class="select" v-model="fromData.graduate">
          <option value="" class="ploce" disabled selected>毕业时间</option>
          <option value="1年">1年</option>
          <option value="2年">2年</option>
        </select>
      </div>
      <div class="test-sele">
        <img src="@/assets/fixation/917.png"/>
        <select class="select" v-model="fromData.difficulty">
          <option value="" class="ploce" disabled selected>入学难易度</option>
          <option value="简单">简单</option>
          <option value="一般">一般</option>
          <option value="困难">困难</option>
          <option value="困难">非常困难</option>
        </select>
      </div>
      <div class="button" @click="measurement">测一测</div>
      <div class="test-button">今天已有<span>{{people}}</span>名测试</div>
    </div>
    <div class="excessive">
      <img src="@/assets/index/edu_img.png" class="imgs"/>
    </div>
    <div class="newest">
      <div class="title">
        <div class="block"></div>
        <div>最新测评</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <up-down :sendVal="appraisal" v-if="appraisal.length>0"></up-down>
    </div>
    <div class="message">
      <div class="title">
        <div class="block"></div>
        <div>自学考试动态</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="conter" v-for="(item,index) in selfStudy" :key="index">
        <div class="left">
          <div class="text">{{item.snSubtitle}}</div>
          <div class="label">
            <span class="span">{{item.snOneName}}</span>
            <span>{{item.snUptime | times}}</span>
          </div>
        </div>
        <div><img :src="item.snImg"/></div>
      </div>
    </div>
    <div class="message">
      <div class="title">
        <div class="block"></div>
        <div>成人高考动态</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="conter" v-for="(item,index) in adult" :key="index">
        <div class="left">
          <div class="text">{{item.snSubtitle}}</div>
          <div class="label">
            <span class="span">{{item.snOneName}}</span>
            <span>{{item.snUptime | times}}</span>
          </div>
        </div>
        <div><img :src="item.snImg"/></div>
      </div>
    </div>
    <div class="message">
      <div class="title">
        <div class="block"></div>
        <div>开放教育动态</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="conter" v-for="(item,index) in dispark" :key="index">
        <div class="left">
          <div class="text">{{item.snSubtitle}}</div>
          <div class="label">
            <span class="span">{{item.snOneName}}</span>
            <span>{{item.snUptime | times}}</span>
          </div>
        </div>
        <div><img :src="item.snImg"/></div>
      </div>
    </div>
    <div class="message">
      <div class="title">
        <div class="block"></div>
        <div>在职研动态</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="conter" v-for="(item,index) in job" :key="index">
        <div class="left">
          <div class="text">{{item.snSubtitle}}</div>
          <div class="label">
            <span class="span">{{item.snOneName}}</span>
            <span>{{item.snUptime | times}}</span>
          </div>
        </div>
        <div><img :src="item.snImg"/></div>
      </div>
    </div>
    <div class="message">
      <div class="title">
        <div class="block"></div>
        <div>出国留学动态</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="conter" v-for="(item,index) in abroad" :key="index">
        <div class="left">
          <div class="text">{{item.snSubtitle}}</div>
          <div class="label">
            <span class="span">{{item.snOneName}}</span>
            <span>{{item.snUptime | times}}</span>
          </div>
        </div>
        <div><img :src="item.snImg"/></div>
      </div>
    </div>
    <div class="message">
      <div class="title">
        <div class="block"></div>
        <div>热门院校推荐</div>
        <div class="more">更多
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="school" v-for="(item,index) in school" :key="index">
        <div class="school-img">
          <img :src="item.scBottomLogo" class="school-img"/>
        </div>
        <div class="right">
          <div class="titles">
            <span class="title">{{item.scGname}}</span>
            <span v-for="(bals,num) in item.scTypeName" :key="num" :class="bals==='成人高考'?'span':'spans'">{{bals | labels}}</span>
          </div>
          <div class="conter">
            {{item.scIntroInfo | texts}}
          </div>
          <div class="bottom" v-for="(sch,number) in item.collageMajors" :key="number">
            <span>{{sch.smName}}</span>
          </div>
        </div>
      </div>
      <div class="choice">选择院校 》</div>
    </div>
    <stern></stern>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
import stern from '@/components/stern/stern'
import request from '@/utile/request.js'
import upDown from '@/components/scroll/upDown'
export default {
  name:'educational',
  components:{
    heads,
    stern,
    upDown
  },
  data(){
    return{
      people:'',
      selfStudy:[],
      adult:[],
      dispark:[],
      job:[],
      abroad:[],
      school:[],
      fromData:{
        education:'',
        promote:'',
        census:'',
        graduate:'',
        tuition:'',
        difficulty:''
      },
      appraisal:[]
    }
  },
  filters:{
    times(val){
      return val.split(' ')[0]
    },
    labels(val){
      if(val==='成人高考'){
        return '成考'
      }else if(val==='网络教育'){
        return '网教'
      }else{
        return val
      }
    },
    texts(val){
      if(val.length>36){
        return val.substring(0,36)+'......'
      }else{
        return val
      }
    }
  },
  methods:{
    //测一测点击事件
    measurement(){
      let that = this
      let warn = ''
      let bool = true
      let reg = window.sessionStorage.getItem('show')
      if(!that.fromData.education){
        warn = '请选择目前的学历'
      }else if(!that.fromData.promote){
        warn = '请选择需要提升的学历层次'
      }else if(!that.fromData.census){
        warn = '请选择户籍所在地'
      }else if(!that.fromData.tuition){
        warn = '请选择学费范围'
      }else if(!that.fromData.graduate){
        warn = '请选择毕业时间'
      }else if(!that.fromData.difficulty){
        warn = '请选择毕业难易度'
      }else if(!reg){
        warn = '尚未登录，请先进行登录！'
      }else{
        bool = false
        this.$router.push({
          path:'/educational/testSelection',
          query:{
            xueli: that.fromData.education,
            cengci: that.fromData.promote,
            time: that.fromData.graduate,
            expenses: that.fromData.tuition,
            city: that.fromData.census,
            grade: that.fromData.difficulty
          }
        })
      }
      if(bool){
        that.$toast(warn) 
      }
    },
    //获取测评人数
    getPeople(){
      let that = this
      request({
        url:'/eduWeb/jYAssessRecordForeign/findByNowOneGetNumber',
        method:'get'
      })
      .then(res=>{
        that.people = res.data
      })
    },
    //获取最新测评
    getAppraisal(){
      let that = this
      request({
        url:'/eduWeb/jYAssessRecordForeign/findByAuto',
        method:'get',
        params:{
          pageNum:'1',
          pageSize:'30'
        }
      })
        .then(res=>{
          that.appraisal = res.rows
        })
    },
    //获取自学考试动态
    getSelfStudy(){
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        methods: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType:'501',
          snRecom:'1',//是否推荐/这里需要改成 1
          snIspass:'1'
        }
      })
        .then(res=>{
          that.selfStudy = res.rows
        })
    },
    //获取成人高考动态
    getAdult(){
      let that = this
      request({
        url:'/eduWeb/newsllistForeign/getAllnewsList',
        methods: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType:'502',
          snRecom:'1',
          snIspass:'1'
        }
      })
      .then(res=>{
        that.adult = res.rows
      })
    },
    //获取开放教育动态
    getDispark(){
      let that = this
      request({
        url:'/eduWeb/newsllistForeign/getAllnewsList',
        methods: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType:'517',
          snRecom:'1',
          snIspass:'1'
        }
      })
      .then(res=>{
        that.dispark = res.rows
      })
    },
    //获取在职研动态
    getJob(){
      let that = this
      request({
        url:'/eduWeb/newsllistForeign/getAllnewsList',
        methods: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType:'504',
          snRecom:'1',
          snIspass:'1'
        }
      })
      .then(res=>{
        that.job = res.rows
      })
    },
    //获取出国留学动态
    getAbroad(){
      let that = this
      request({
        url:'/eduWeb/newsllistForeign/getAllnewsList',
        methods: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType:'505',
          snRecom:'1',
          snIspass:'1'
        }
      })
      .then(res=>{
        that.abroad = res.rows
      })
    },
    //获取院校
    getSchool(){
      let that = this
      request({
        url:'/eduWeb/foreignCollage/getList',
        method:'get',
        params:{
          pageNum:'1',
          pageSize:'6',
          scIspass:'1',
          scRecomd:'1'
        }
      })
      .then(res=>{
        that.school = res.rows
        that.school.forEach(item=>{
          item.scTypeName = item.scTypeName.split(',')
        })
      })
    }
  },
  mounted(){
    this.getAppraisal()
    this.getPeople()
    this.getSelfStudy()
    this.getAdult()
    this.getDispark()
    this.getJob()
    this.getAbroad()
    this.getSchool()
  }
}
</script>
<style lang="scss" scoped>
  .block{
    width: 8px;
    height: 30px;
    display: inline-block;
    background-color: #0B5EA8;
    margin-right: 10px;
  }
  .imgs{
    width: 100%;
    height: 100%;
  }
  .test{
    padding: 20px 30px;
    background-color: #fff;
    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 32px;
    }
    .test-select{
      margin-top: 50px;
      text-align: center;
      position: relative;
      img{
        width: 23px;
        height: 28px;
        position: absolute;
        left: 65px;
        top: 22px;
      }
    }
    .test-sele{
      text-align: center;
      margin-top: 30px;
      position: relative;
      img{
        width: 28px;
        height: 28px;
        position: absolute;
        left: 65px;
        top: 22px;
      }
    }
    .select{
      width: 620px;
      height: 70px;
      padding-left: 60px;
      border: 1px solid #C0C0C0;
      color: #999999;
      background-color: #fff;
      .ploce{
        display: none !important;
        color: #999999 !important;
      }
      &:focus{
        outline:none;
      }
    }
    .button{
      margin-top: 40px !important;
      width: 180px;
      text-align: center;
      background-color: #167CE4;
      color: #fff;
      line-height: 70px;
      border-radius: 4px;
      margin: auto;
    }
    .test-button{
      text-align: center;
      color: #999999;
      margin-top: 20px;
      span{
        color: #F8521F;
        margin: 0 5px;
      }
    }
  }
  .excessive{
    margin: 20px 0;
  }
  .newest{
    padding: 20px 30px;
    background-color: #fff;
    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 32px;
      position: relative;
      margin-bottom: 20px;
    }
    .more{
      position: absolute;
      right: 0px;
      font-size: 24px;
      color: #999999;
      img{
        width: 12px;
        height: 22px;
      }
    }
    .scroll{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 40px 0px 30px 40px;
      div{
        flex: auto;
        // text-align: center;
        &:nth-child(2){
          color: #0B5EA8;
        }
      }
    }
  }
  .message{
    margin: 20px 0;
    padding: 20px 30px;
    background-color: #fff;
    .title{
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 32px;
      position: relative;
    }
    .more{
      position: absolute;
      right: 0;
      color: #999;
      font-size: 24px;
      img{
        width: 12px;
        height: 22px;
      }
    }
    .conter{
      margin-top: 35px;
      display: flex;
      flex-direction: row;
      .left{
        width: 475px;
        .text{
          height: 60px;
        }
        .label{
          margin-top: 20px !important;
          color: #999999;
          .span{
            padding: 3px 10px;
            border-radius: 6px;
            border: 2px solid #CCCCCC;
            margin-right: 30px;
          }
        }
      }
      img{
        width: 190px;
        height: 100px;
        margin-left: 25px;
        border-radius: 6px;
      }
    }
  }
  .school{
    display: flex;
    flex-direction: row;
    margin-top: 29px;
    .school-img{
      width: 120px;
      height: 160px;
    }
    .right{
      margin-left: 24px;
      width: 100%;
      .titles{
        width: 100%;
        .title{
          display: inline;
          font-size: 30px;
          font-weight: bold;
        }
      .span{
        color: #fff;
        background-color: #0393D4;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        margin-left: 10px;
        }
      .spans{
        color: #fff;
        background-color: #FF7A3F;
        padding: 5px 10px;
        border-radius: 4px;
        font-size: 12px;
        margin-left: 10px;
        }
      }
      .conter{
        height: 60px;
        margin-top: 20px;
      }
      .bottom{
        margin-top: 20px;
        display: inline-block;
        margin-right: 10px;
        span{
          background-color: #EEEEEE;
          color: #999999;
          padding: 2px 10px;
          border-radius: 6px;
        }
      }
    }
  }
  .choice{
    text-align: center;
    margin-top: 20px;
    color: #3176B3;
    font-size: 30px;
  }
</style>