<template>
  <div style="background-color:#F5F5F5">
    <div class="background"></div>
    <div class="details">
      <div class="top">
        <div class="title">建筑工程</div>
        <div class="oldtitle">
          <span style="margin-right:60px;" :class="{'color':archCheck==='one'}" @click="srchSwitch('one')">二级建造师</span>
          <span style="margin-right:55px;" :class="{'color':archCheck==='two'}" @click="srchSwitch('two')">二级造价工程师</span>
          <span :class="{'color':archCheck==='three'}" @click="srchSwitch('three')">工程造价实操</span>
        </div>
      </div>
      <div class="rows">
        <div class="row-left">
          <a class="block" target="_blank" v-for="(item,index) in architecture" :key="index" :href="'https://www.xlcwx.com/Course/'+item.id">
            <div style="width:180px;height:116px;"><img :src="item.img" width="180" height="116"/></div>
            <div class="titles">{{item.title}}</div>
            <div class="small">
              <span>{{item.zhuanYe.name}}</span><el-divider direction="vertical"></el-divider><span>{{item.detailSummaries.allCount}}课时</span>
            </div>
            <div><span class="allbf" v-if="item.detailSummaries.liveCourseCount">直播</span><span class="allbf1" v-if="item.detailSummaries.videoCourseCount">点播</span><span class="allbf2" v-if="item.detailSummaries.faceToFaceCourseCount">面授</span></div>
            <div class="bottom">
              <div>{{item.clicks}}人已购</div>
              <div class="money">￥{{item.price}}</div>
            </div>
          </a>
        </div>
        <div class="row-right">
          <div class="top">
            <div>报考指南</div>
            <div>考试报名</div>
            <div>准考证打印</div>
          </div>
          <div class="top" style="margin-top:-8px;">
            <div>历年真题</div>
            <div>模拟试题</div>
            <div>成绩查询</div>
          </div>
          <div class="br"></div>
          <div>行业资讯</div>
          <div v-for="(item,index) in jzMessage" :key="index" class="message">
            <a :href="'https://www.xlcwx.com/News/Detail/'+item.id" target="_blank">{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="top" style="margin-top:30px;">
        <div class="title">教师资格</div>
        <div class="oldtitle">
          <span style="margin-right:55px;" :class="{'color':teaCheck==='one'}" @click="status('one')">幼儿教师资格</span>
          <span :class="{'color':teaCheck==='two'}" @click="status('two')">小学教师资格</span>
        </div>
      </div>
      <div class="rows">
        <div class="row-left">
          <a class="block" target="_blank" v-for="(item,index) in teacher" :key="index" :href="'https://www.xlcwx.com/Course/'+item.id">
            <div style="width:180px;height:116px;"><img :src="item.img" width="180" height="116"/></div>
            <div class="titles">{{item.title}}</div>
            <div class="small">
              <span>{{item.zhuanYe.name}}</span><el-divider direction="vertical"></el-divider><span>{{item.detailSummaries.allCount}}课时</span>
            </div>
            <div><span class="allbf" v-if="item.detailSummaries.liveCourseCount">直播</span><span class="allbf1" v-if="item.detailSummaries.videoCourseCount">点播</span><span class="allbf2" v-if="item.detailSummaries.faceToFaceCourseCount">面授</span></div>
            <div class="bottom">
              <div>{{item.clicks}}人已购</div>
              <div class="money">￥{{item.price}}</div>
            </div>
          </a>
        </div>
        <div class="row-right">
          <div class="top">
            <div>报考指南</div>
            <div>考试报名</div>
            <div>准考证打印</div>
          </div>
          <div class="top" style="margin-top:-8px;">
            <div>历年真题</div>
            <div>模拟试题</div>
            <div>成绩查询</div>
          </div>
          <div class="br"></div>
          <div>行业资讯</div>
          <div v-for="(item,index) in lsMessage" :key="index" class="message">
            <a :href="'https://www.xlcwx.com/News/Detail/'+item.id" target="_blank">{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="top" style="margin-top:30px;">
        <div class="title">健康管理师</div>
      </div>
      <div class="rows">
        <div class="row-left">
          <a class="block" target="_blank" v-for="(item,index) in fitness" :key="index" :href="'https://www.xlcwx.com/Course/'+item.id">
            <div style="width:180px;height:116px;"><img :src="item.img" width="180" height="116"/></div>
            <div class="titles">{{item.title}}</div>
            <div class="small">
              <span>{{item.zhuanYe.name}}</span><el-divider direction="vertical"></el-divider><span>{{item.detailSummaries.allCount}}课时</span>
            </div>
            <div><span class="allbf" v-if="item.detailSummaries.liveCourseCount">直播</span><span class="allbf1" v-if="item.detailSummaries.videoCourseCount">点播</span><span class="allbf2" v-if="item.detailSummaries.faceToFaceCourseCount">面授</span></div>
            <div class="bottom">
              <div>{{item.clicks}}人已购</div>
              <div class="money">￥{{item.price}}</div>
            </div>
          </a>
        </div>
        <div class="row-right">
          <div class="top">
            <div>报考指南</div>
            <div>考试报名</div>
            <div>准考证打印</div>
          </div>
          <div class="top" style="margin-top:-8px;">
            <div>历年真题</div>
            <div>模拟试题</div>
            <div>成绩查询</div>
          </div>
          <div class="br"></div>
          <div>行业资讯</div>
          <div v-for="(item,index) in jkMessage" :key="index" class="message">
            <a :href="'https://www.xlcwx.com/News/Detail/'+item.id" target="_blank">{{item.title}}</a>
          </div>
        </div>
      </div>
      <div class="top" style="margin-top:30px;">
        <div class="title">5G应用系统工程师</div>
      </div>
      <div class="rows" style="padding-bottom:88px;">
        <div class="row-left">
          <a class="block" target="_blank" v-for="(item,index) in apply" :key="index" :href="'https://www.xlcwx.com/Course/'+item.id">
            <div style="width:180px;height:116px;"><img :src="item.img" width="180" height="116"/></div>
            <div class="titles">{{item.title}}</div>
            <div class="small">
              <span>{{item.zhuanYe.name}}</span><el-divider direction="vertical"></el-divider><span>{{item.detailSummaries.allCount}}课时</span>
            </div>
            <div><span class="allbf" v-if="item.detailSummaries.liveCourseCount">直播</span><span class="allbf1" v-if="item.detailSummaries.videoCourseCount">点播</span><span class="allbf2" v-if="item.detailSummaries.faceToFaceCourseCount">面授</span></div>
            <div class="bottom">
              <div>{{item.clicks}}人已购</div>
              <div class="money">￥{{item.price}}</div>
            </div>
          </a>
        </div>
        <div class="row-right">
          <div class="top">
            <div>报考指南</div>
            <div>考试报名</div>
            <div>准考证打印</div>
          </div>
          <div class="top" style="margin-top:-8px;">
            <div>历年真题</div>
            <div>模拟试题</div>
            <div>成绩查询</div>
          </div>
          <div class="br"></div>
          <div>行业资讯</div>
          <div v-for="(item,index) in gMessage" :key="index" class="message">
            <a :href="'https://www.xlcwx.com/News/Detail/'+item.id" target="_blank">{{item.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utile/requestwx.js'
export default {
  name: 'status',
  data () {
    return {
      architecture: [],
      archCheck: 'one',
      teacher: [],
      teaCheck: 'one',
      fitness: [],
      apply: [],
      jzMessage: [],
      lsMessage: [],
      jkMessage: [],
      gMessage: []
    }
  },
  methods: {
    //  建筑课程切换点击事件
    srchSwitch (name) {
      this.archCheck = name
      if (name === 'one') {
        this.getArchitecture()
        this.getJzinfo()
      } else if (name === 'two') {
        this.getArchitecture('29', '265')
        this.getJzinfo('29')
      } else if (name === 'three') {
        this.getArchitecture('30', '')
        this.getJzinfo('30')
      }
    },
    // 获取建筑工程课程
    getArchitecture (kind = '23', zyId = '272') {
      let that = this
      request({
        url: '/api/course/vip',
        method: 'get',
        params: {
          pageIndex: '0',
          pageSize: '8',
          kind: kind,
          zyId: zyId
        }
      })
        .then(res => {
          that.architecture = res.data
        })
    },
    // 获取建筑工程的资讯列表
    getJzinfo (lmId = '23') {
      let that = this
      request({
        url: '/api/News/GetNewsList',
        method: 'get',
        params: {
          PageIndex: '0',
          PageSize: '14',
          lmId: lmId
        }
      })
        .then(res => {
          that.jzMessage = res.data
        })
    },
    // 获取教师的资讯列表
    getlsinfo () {
      let that = this
      request({
        url: '/api/News/GetNewsList',
        method: 'get',
        params: {
          PageIndex: '0',
          PageSize: '14',
          lmId: '6'
        }
      })
        .then(res => {
          that.lsMessage = res.data
        })
    },
    // 教师课程点击切换事件
    status (name) {
      this.teaCheck = name
      if (name === 'one') {
        this.getTeacher()
      } else {
        this.getTeacher('121')
      }
    },
    // 获取教师资格课程
    getTeacher (zyid = '120') {
      let that = this
      request({
        url: '/api/course/vip',
        method: 'get',
        params: {
          pageIndex: '0',
          pageSize: '8',
          kind: '6',
          zyId: zyid
        }
      })
        .then(res => {
          that.teacher = res.data
        })
    },
    // 获取健康管理师资讯列表
    getjkinfo () {
      let that = this
      request({
        url: '/api/News/GetNewsList',
        method: 'get',
        params: {
          PageIndex: '0',
          PageSize: '14',
          lmId: '14'
        }
      })
        .then(res => {
          that.jkMessage = res.data
        })
    },
    // 获取健康管理师课程
    getFitness () {
      let that = this
      request({
        url: '/api/course/vip',
        method: 'get',
        params: {
          pageIndex: '0',
          pageSize: '8',
          kind: '14'
        }
      })
        .then(res => {
          that.fitness = res.data
        })
    },
    // 获取教师的资讯列表
    getginfo () {
      let that = this
      request({
        url: '/api/News/GetNewsList',
        method: 'get',
        params: {
          PageIndex: '0',
          PageSize: '14',
          lmId: '50'
        }
      })
        .then(res => {
          that.gMessage = res.data
        })
    },
    // 获取5G应用课程
    getApply () {
      let that = this
      request({
        url: '/api/course/vip',
        method: 'get',
        params: {
          pageIndex: '0',
          pageSize: '8',
          kind: '50',
          zyId: '289'
        }
      })
        .then(res => {
          that.apply = res.data
        })
    }
  },
  mounted () {
    this.getArchitecture()
    this.getTeacher()
    this.getFitness()
    this.getApply()
    this.getJzinfo()
    this.getlsinfo()
    this.getjkinfo()
    this.getginfo()
  }
}
</script>
<style scoped lang="scss">
  .background{
    background: url('~@/assets/index/zige.png');
    background-size: 100% 100%;
    width: 100%;
    height: 500px;
  }
  .details{
    width: 1200px;
    margin: auto;
    margin-top: 30px;
  }
  .top{
      position: relative;
      width: 100%;
      .title{
        font-size: 20px;
        font-weight: bold;
      }
      .oldtitle{
        position: absolute;
        right: 0;
        top: 0;
        font-size: 16px;
        span{
          cursor: pointer;
          &:hover{
            color: #1D6AAD;
          }
        }
        .color{
          color: #1D6AAD;
        }
      }
    }
  .rows{
    width: 100%;
    display: flex;
    flex-direction: row;
    .row-left{
      margin-top: 20px;
      width: 100%;
      .block{
        width: 180px;
        height: 274px;
        padding: 13px 20px;
        display: inline-block;
        background-color: #fff;
        margin-bottom: 10px;
        margin-right: 10px;
        text-decoration: none;
        &:hover{
          box-shadow: 0px 0px 10px #DCDCDC;
        }
        .titles{
          font-size: 16px;
          margin-top: 12px;
          color: #171920;
          line-height: 22px;
          height: 40px;
        }
        .small{
          font-size: 12px;
          color: #999;
          line-height: 40px;
        }
        .allbf{
          font-size: 12px;
          padding: 4px 8px;
          color:#FF7439;
          border:1px solid #FF7439;
          border-radius: 2px;
          margin-right: 10px;
        }
        .allbf1{
          font-size: 12px;
          padding: 4px 8px;
          color:#1B89FA;
          border:1px solid #1B89FA;
          border-radius: 2px;
          margin-right: 10px;
        }
        .allbf2{
          font-size: 12px;
          padding: 4px 8px;
          color:#19A211;
          border:1px solid #19A211;
          border-radius: 2px;
        }
        .bottom{
          margin-top: 20px;
          position: relative;
          font-size: 12px;
          color: #999999;
          .money{
            position: absolute;
            right: 0;
            top: 0;
            font-size: 18px;
            color: #F15817;
          }
        }
      }
    }
    .row-right{
      width: 290px;
      // height: 610px;
      padding: 0 20px;
      background-color: #fff;
      margin-top: 20px;
      margin-left: 10px;
      .top{
        display: flex;
        flex-direction: row;
        div{
          flex: auto;
          color: #171920;
          text-align: center;
          font-size: 10px;
          margin-top: 24px;
        }
      }
      .br{
        border-bottom: 1px solid #EEEEEE;
        margin:20px 0;
      }
      .message{
        margin-top: 13px;
        font-size: 14px;
        overflow: hidden;
        width: 230px;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:last-child{
          margin-bottom: 20px;
        }
        a{
          text-decoration: none;
          color: #999999;
          &:hover{
          color: #5B98D9;
          cursor: pointer;
        }
        }
      }
    }
  }
</style>
