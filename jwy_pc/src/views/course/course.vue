<template>
  <div style="background-color:#F7F7F7">
    <div class="heardes">
      <!-- <img src="@/assets/coures/banner.png" width="100%" height="100%"/> -->
      <div class="posit">
        <input class="input" v-model="grabble" />
        <div class="search" @click="search">
          搜索
        </div>
        <div class="labels">
          推荐：
          <span class="hand" @click="clickSearch('汉语言文学')">汉语言文学</span>
          <el-divider direction="vertical"></el-divider>
          <span class="hand" @click="clickSearch('工商管理')">工商管理</span>
          <el-divider direction="vertical"></el-divider>
          <span class="hand" @click="clickSearch('会展经济与管理')">会展经济与管理</span>
          <el-divider direction="vertical"></el-divider>
          <span class="hand" @click="clickSearch('教师资格')">教师资格</span>
        </div>
      </div>
    </div>
    <div class="screen">
      <div class="border1"><span class="bor-tops" @click="switchover1">全部课程：</span><i class="el-icon-arrow-right" style="margin-right:10px;"></i>
        <span v-for="(item,index) in clearance" :key="index" @click="switchover(index)" class="bor-tops">
          {{item.name}}<i class="el-icon-arrow-right" style="margin-right:10px;"></i>
        </span>
      </div>
      <div class="border">
        <div class="bor-left">
          <span class="stare">全部学院</span>
          <span class="stare bor-tops" :class="{'blue':courseTitle==='all'}" @click="substrateAll(stye)">全部</span>
        </div>
        <div class="bor-block" v-show="stye==='0'">
          <span v-for="(item,index) in fresh" :key="index" class="span-conter" @click="substrate(index)">
            {{item.name}}
          </span>
        </div>
        <div class="bor-block" v-show="stye==='1'">
          <span v-for="(item,index) in fresh1" :key="index" class="span-conter" @click="substrate1(index)">
            {{item.name}}
          </span>
        </div>
        <div class="bor-block" v-show="stye==='2'">
          <span v-for="(item,index) in fresh2" :key="index" class="span-conter" @click="substrate2(index)">
            {{item.name}}
          </span>
        </div>
        <div class="bor-block" v-show="stye==='3'">
          <span v-for="(item,index) in fresh3" :class="{'blue':courseTitle===index}" :key="index" class="span-conter" @click="substrate3(index)">
            {{item.name}}
          </span>
        </div>
      </div>
      <div class="border">
        <span class="stare">授课形式</span>
        <span class="stare bor-tops" :class="{'blue':give==='0'}" @click="pattern('0')">全部</span>
        <span class="stare bor-tops" :class="{'blue':give==='1'}" @click="pattern('1')">直播</span>
        <span class="stare bor-tops" :class="{'blue':give==='2'}" @click="pattern('2')">点播</span>
        <span class="stare bor-tops" :class="{'blue':give==='3'}" @click="pattern('3')">面授</span>
      </div>
    </div>
    <div class="curriculum">
      <a class="cur-card" :href="'https://www.xlcwx.com/Course/'+item.id" target="_blank" v-for="(item,index) in couse" :key="index" :class="{'cur-card1':index===3 || index===7 || index===11 || index===15}">
        <img :src="item.img" width="248" height="159" class="cur-imgs"/>
        <div class="cur-size">{{item.title}}</div>
        <div class="cur-conter" v-if="item.zhuanYe">
          {{item.zhuanYe.name}}<el-divider direction="vertical"></el-divider>共{{item.detailSummaries.allCount}}门课程
        </div>
        <div class="cur-labels">
          <span class="streaming" v-if="item.detailSummaries.liveCourseCount!==0">直播</span>
          <span class="bunch" v-if="item.detailSummaries.videoCourseCount!==0">点播</span>
          <span class="face" v-if="item.detailSummaries.faceToFaceCourseCount!==0">面授</span></div>
        <div class="cur-but">
          <div class="cur-left">{{item.clicks}}人已购</div>
          <div class="cur-right">￥{{item.price}}</div>
        </div>
      </a>
      <el-pagination
        background
        class="pagin"
        @current-change="currentchange"
        :current-page="pageObject.pageNo"
        :page-size="pageObject.length"
        layout=" prev, pager, next"
        :total="counts">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import request from '@/utile/requestwx.js'
export default {
  name: 'course',
  data () {
    return {
      couse: [],
      stye: '0',
      grabble: '',
      pageObject: {
        length: 16,
        pageNo: 1,
        exporter: 0
      },
      counts: 0,
      clearance: [],
      linkage: {
        vipType: '0',
        kind: '',
        zyid: '',
        kid: '',
        topType: ''
      },
      give: '0',
      courseTitle: 'all',
      fresh1: [],
      fresh2: [],
      fresh3: [],
      fresh: [
        {
          'name': '专本科学院',
          'types': [{
            'name': '自学考试辅导',
            'kind': '1'
          },
          {
            'name': '普通专升本',
            'kind': '3'
          },
          {
            'name': '成考考前辅导',
            'kind': '4'
          }]
        }, {
          'name': '考研学院',
          'types': [{
            'name': '学术硕士',
            'kind': '8'
          },
          {
            'name': '专业硕士',
            'kind': '9'
          },
          {
            'name': '5月同等学力',
            'kind': '10'
          }]
        }, {
          'name': '语培学院',
          'types': [{
            'name': '英语四六级',
            'kind': '5'
          }]
        }, {
          'name': '教考学院',
          'types': [{
            'name': '教师资格',
            'kind': '6'
          }]
        }, {
          'name': '职业培训学院',
          'types': [{
            'name': '5G应用系统工程师',
            'kind': '50'
          }]
        }, {
          'name': '建筑学院',
          'types': [{
            'name': '造价工程师',
            'kind': '29'
          },
          {
            'name': '建造师',
            'kind': '23'
          },
          {
            'name': '工程造价实操',
            'kind': '30'
          }]
        }, {
          'name': '医药健康学院',
          'types': [{
            'name': '健康管理师',
            'kind': '14'
          }]
        }, {
          'name': '财会学院',
          'types': [{
            'name': '会计职称',
            'kind': '47'
          },
          {
            'name': '审计师',
            'kind': '45'
          }]
        }
      ]
    }
  },
  methods: {
    // 搜索点击事件
    search () {
      this.getCouse()
    },
    // 点击搜索事件
    clickSearch (value) {
      this.grabble = value
      this.getCouse()
    },
    // 全部专业点击事件
    substrate (index) {
      let that = this
      that.clearance[0] = {name: that.fresh[index].name, type: '0'}
      that.fresh1 = that.fresh[index].types
      that.stye = '1'
      that.linkage.topType = that.fresh[index].name
      that.getCouse()
    },
    substrate1 (index) {
      let that = this
      request({
        url: '/api/Course/basic/zhuanyes',
        method: 'get',
        params: {
          kind: that.fresh1[index].kind
        }
      })
        .then(res => {
          that.fresh2 = res.data
          that.stye = '2'
          that.clearance[1] = {name: that.fresh1[index].name, type: '1'}
          that.linkage.kind = that.fresh1[index].kind
          that.getCouse()
        })
    },
    substrate2 (index) {
      let that = this
      request({
        url: '/api/course/basic/Kechengs',
        method: 'get',
        params: {
          kind: that.fresh2[index].kind,
          zyId: that.fresh2[index].id
        }
      })
        .then(res => {
          that.fresh3 = res.data
          that.stye = '3'
          that.clearance[2] = {name: that.fresh2[index].name, type: '2'}
          that.linkage.zyid = that.fresh2[index].id
          that.getCouse()
        })
    },
    substrate3 (index) {
      this.linkage.kind = this.fresh3[index].kind
      this.linkage.kid = this.fresh3[index].id
      this.courseTitle = index
      this.getCouse()
    },
    // 课程全部点击事件
    substrateAll (stye) {
      if (stye === '0') {
        this.linkage = []
      } else if (stye === '1') {
        this.linkage.kind = ''
        this.linkage.zyid = ''
        this.linkage.kid = ''
      } else if (stye === '2') {
        this.linkage.zyid = ''
        this.linkage.kid = ''
      } else if (stye === '3') {
        this.linkage.kid = ''
      }
      this.courseTitle = 'all'
      this.getCouse()
    },
    // 标签的切换
    switchover (index) {
      let that = this
      let numbet = index + 1
      that.stye = numbet.toString()
      that.clearance = that.clearance.splice(0, numbet)
      if (that.stye === '1') {
        that.linkage.kind = ''
        that.linkage.zyid = ''
        that.linkage.kid = ''
      } else if (that.stye === '2') {
        that.linkage.zyid = ''
        that.linkage.kid = ''
      } else if (that.stye === '3') {
        that.linkage.kid = ''
      }
      that.courseTitle = 'all'
      that.getCouse()
    },
    // 全部点击事件
    switchover1 () {
      this.stye = '0'
      this.clearance = []
      this.linkage = []
      this.getCouse()
    },
    // 当前页改变事件
    currentchange (val) {
      this.pageObject.pageNo = val
      this.getCouse()
    },
    // 直播模式改变点击方式
    pattern (index) {
      this.give = index
    },
    // 获取所有的课程
    getCouse () {
      let that = this
      request({
        url: '/api/course/vip',
        method: 'get',
        params: {
          q: that.grabble,
          pageIndex: that.pageObject.pageNo - 1,
          pageSize: that.pageObject.length,
          vipType: that.linkage.vipType,
          kind: that.linkage.kind,
          zyId: that.linkage.zyid,
          kId: that.linkage.kid,
          topType: that.linkage.topType
        }
      })
        .then(res => {
          that.couse = res.data
          that.counts = parseInt(res.headers['p-totalitemcount'])
        })
    }
  },
  mounted () {
    this.getCouse()
  }
}
</script>
<style scoped>
  .heardes{
    position: relative;
    background: url('~@/assets/coures/banner.png');
    height: 460px;
    background-size: 100% 100%;
  }
  .posit{
    position: absolute;
    bottom: 120px;
    left: 50%;
    left: 50%;
    margin-left: -300px;
  }
  .input{
    width: 500px !important;
    height: 24px;
    line-height: 54px;
    padding: 10px;
    position: relative;
    left: 5px;
    bottom: 3px;
  }
  .search{
    display: inline-block;
    width: 100px;
    height: 49px;
    line-height: 49px;
    text-align: center;
    background-color: #0B5FA8;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
  }
  .labels{
    text-align: center;
    margin-top: 20px;
    color: #fff;
  }
  .hand{
    cursor: pointer;
  }
  .screen{
    width: 1140px;
    margin: auto;
    background-color: #fff;
    margin-top: 40px;
    border-radius: 8px;
    padding: 30px;
  }
  .border1{
    border-bottom: 1px solid #EEEEEE;
    padding: 20px 0;
  }
  .border{
    border-bottom: 1px solid #EEEEEE;
    padding: 20px 0;
    display: flex;
    flex-direction: row;
  }
  .stare{
    color: #999999;
    margin-right: 30px;
  }
  .curriculum{
    width: 1200px;
    margin: auto;
    margin-top: 30px;
  }
  .cur-card{
    width: 248px;
    height: 310px;
    background-color: #fff;
    padding: 16px 20px;
    margin-bottom: 16px;
    margin-right: 16px;
    display: inline-block;
    cursor: pointer !important;
    text-decoration: none;
  }
  .cur-card:hover{
    box-shadow: 0px 0px 10px #DCDCDC;
  }
  .cur-card1{
    margin-right: 0px;
  }
  .cur-size{
    margin-top: 17px;
    height: 40px;
    font-size: 16px;
    color: #171920;
  }
  .cur-conter{
    margin-top: 15px;
    font-size: 12px;
    color: #999999;
  }
  .cur-labels{
    margin-top: 15px;
    font-size: 12px;
  }
  .streaming{
    color: #FF7439;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #FF7439;
    margin-right: 10px;
  }
  .bunch{
    color: #1B89FA;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #1B89FA;
    margin-right: 10px;
  }
  .face{
    color: #19A211;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #19A211;
    margin-right: 10px;
  }
  .cur-but{
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .cur-left{
    font-size: 12px;
    color: #999999
  }
  .cur-right{
    font-size: 18px;
    color: #F15817;
  }
  .pagin{
    text-align: center;
    padding: 30px 0;
  }
  .bor-block{
    display: inline-block;
    width: 970px;
  }
  .bor-left{
    display: inline-block;
  }
  .span-conter{
    display: inline-block;
    padding-right: 30px;
    margin-bottom: 5px;
    font-size: 16px;
    color: #6E6E6E;
  }
  .span-conter:hover{
    color: #2E8AE5;
    cursor: pointer;
  }
  .bor-tops:hover{
    color: #2E8AE5;
    cursor: pointer;
  }
  .blue{
    color: #2E8AE5;
  }
</style>
