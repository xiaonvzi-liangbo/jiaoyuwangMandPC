<template>
  <div class="vessel">
    <div class="picts">
      <div v-for="(item,index) in srcs" :key="index" class="vess_pic">
        <img :src="item"/>
      </div>
    </div>
    <div class="row">
      <div class="zx_left">
        <div class="title">聚焦<span class="color">网络教育</span><span class="subhead">JUJIAOZIXUEKAOSHI</span></div>
        <div class="conter">
          <div class="conter_nav">
            <div style="width:100px;text-align:center;" @click="getNew('news')" :class="{'news':switcher==='news'}">新闻快递</div>
            <el-divider direction="vertical"></el-divider>
            <div style="width:100px;text-align:center;" @click="getNew('school')" :class="{'news':switcher==='school'}">学院快报</div>
            <el-divider direction="vertical"></el-divider>
            <div style="width:100px;text-align:center;" @click="getNew('cheats')" :class="{'news':switcher==='cheats'}">干货秘籍</div>
          </div>
          <div v-if="switcher==='news'">
            <information :fromData="informationList" :top="topInformationList"></information>
          </div>
          <div v-if="switcher==='school'">
            <information :fromData="informationList" :top="topInformationList"></information>
          </div>
          <div v-if="switcher==='cheats'">
            <information :fromData="informationList" :top="topInformationList"></information>
          </div>
        </div>
      </div>
      <div class="zx_right">
        <div class="title">报考<span class="color">工具箱</span><span class="subhead">GONGJUXIANG</span></div>
        <div class="conter">
          <div class="conte_conter">
            <div class="zx_title">报考指南</div>
            <div class="zx_title">考试报名</div>
            <div class="zx_title">准考证打印</div>
            <div class="zx_title">成绩查询</div>
            <div class="zx_title">历年真题</div>
            <div class="zx_title">QQ群交流</div>
            <div style="border-bottom: 1px solid #EFEFF0;margin-top:10px;"></div>
            <div class="con_title">
              <span class="con_span">热点</span>
            </div>
            <div class="show_conter">
              <div class="show_conters" v-for="(item,index) in hostList" :key="index" @click="detal(item.snId)">{{item.snSubtitle}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="school row">
      <div class="zx_left">
        <div class="title">
          热门<span class="color">招生院校</span>
          <span class="subhead">REMENZHAOSHENGYUANXIAO</span>
          <router-link class="more" to="/search">更多院校>></router-link>
        </div>
        <div class="conter">
          <div class="conter_nav1" v-for="(item,index) in schoolList" :key="index">
            <div>
              <div style="text-align:center;">
                <img :src="item.scIndexLogo" width="89px" height="89px"/>
              </div>
              <div style="text-align:center;">
                <a :href="item.scLink" target="_blank"><el-button><i class="iconfont icon-pinglun" style="margin-right:5px;"></i>查看详情</el-button></a>
              </div>
            </div>
            <div class="longString"></div>
            <div class="long_conter">
              <div style="width:555px;">
                <span class="long_title">{{item.scGname}}</span>
                <span class="labels">
                  <span style="margin-right:40px;cursor: pointer;">
                    <a :href="item.scLink" target="_blank"><i class="iconfont icon-wenjian" style="font-size:14px;margin-right:5px;"></i>招生简章</a>
                  </span>
                  <span style="cursor: pointer;">
                    <a :href="item.scLink" target="_blank"><i class="iconfont icon-Major" style="font-size:17px;margin-right:5px;"></i>招生专业</a>
                  </span>
                </span>
              </div>
              <div class="mainBody">{{item.scIntroInfo}}</div>
              <div class="major">
                <span>热门报考专业：</span>
                <span v-for="(it,ind) in item.collageMajors" :key="ind" style="margin-right:25px;">
                  {{it.smName}}
                </span>
              </div>
            </div>
          </div>
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
      <div class="zx_right">
        <div class="title">学长<span class="color">寄语</span><span class="subhead">XUEZHANGJIYU</span></div>
        <div class="conter">
          <div class="conte_conter" style="padding-left:15px;">
            <div class="zx_border">
              <div class="zx_time" v-for="(item,index) in 3" :key="index">
                <div class="zx_circle"></div>
                <div class="zx_sj"></div>
                <div class="zx_date">
                  08/23 星期天
                </div>
                <div>
                  <p class="zx_right_title">山东财经大学《会计学》</p>
                  <p class="zx_ti_conter">这时, 其实我们已经看到有上下左右四个三角形了..如果, 我们把4种颜色, 只保留一种颜色, 余下3种颜色设置为透明(或者设置为和背景色相同</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="img_position">
          <img src="@/assets/school/test_adv.jpg" width="335px"/>
        </div>
        <div class="school_conter">
          <div class="sch_label" v-for="(item,index) in 12" :key="index">哪所国际院校人气高</div>
        </div>
      </div>
    </div>
    <div style="margin-top:30px;">
      <img src="@/assets/school/test_advbk.jpg"/>
    </div>
  </div>
</template>
<script>
import information from './information/information'
import request from '@/utile/request.js'
export default {
  name: 'selfStudy',
  data () {
    return {
      check: 'hotspot',
      switcher: 'news',
      srcs: [
        require('@/assets/school/network.png'),
        require('@/assets/school/about_img2.jpg'),
        require('@/assets/school/about_img3.jpg'),
        require('@/assets/school/about_img4.jpg'),
        require('@/assets/school/about_img5.jpg')
      ],
      informationList: [],
      topInformationList: [],
      hostList: [],
      schoolList: [],
      pageObject: {
        length: 6,
        pageNo: 1,
        exporter: 0
      },
      counts: 0
    }
  },
  components: {
    information
  },
  methods: {
    // 当前页改变事件
    currentchange (val) {
      this.pageObject.pageNo = val
      this.getSchool()
    },
    // 文章详情
    detal (id) {
      this.$router.push({
        path: '/news',
        query: {
          id: id
        }
      })
    },
    // 获取新闻快递资讯列表
    getData (type = '513') {
      let that = this
      // 聚焦自学考试的列表内容
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsSkip',
        method: 'get',
        params: {
          pageSize: '17',
          skip: '1',
          snOneType: '503',
          snTwoTypes: type
        }
      })
        .then(res => {
          that.informationList = res.data
        })
      // 聚焦自学头部的内容
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsSkip',
        method: 'get',
        params: {
          pageSize: '1',
          skip: '0',
          snOneType: '503',
          snTwoTypes: type
        }
      })
        .then(res => {
          that.topInformationList = res.data
        })
    },
    // 新闻列表切换点击事件
    getNew (value) {
      this.switcher = value
      if (value === 'news') {
        this.getData('513')
      } else if (value === 'school') {
        this.getData('514')
      } else if (value === 'cheats') {
        this.getData('516')
      }
    },
    // 获取报考工具箱的热点内容
    getHotspot () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '11',
          snOneType: '503',
          snRecom: '1'
        }
      })
        .then(res => {
          that.hostList = res.rows
        })
    },
    // 获取热门招生院校
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: that.pageObject.pageNo,
          pageSize: that.pageObject.length,
          scType: '254'
        }
      })
        .then(res => {
          that.schoolList = res.rows
          that.counts = res.total
        })
    }
  },
  created () {
    this.getData()
    this.getHotspot()
    this.getSchool()
  },
  mounted () {
    // this.getData()
  }
}
</script>
<style scoped>
  .pagin{
    text-align: center;
    margin-top: 30px;
    padding-bottom: 30px;
  }
  .vessel{
    width: 1189px;
    margin: auto;
    padding: 25px 0 90px 0;
  }
  .picts{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .vess_pic{
    flex: auto;
  }
  .zx_left{
    width: 825px;
    display: inline-block;
  }
  .zx_right{
    width: 336px;
    display: inline-block;
    margin-left: 14px;
  }
  .row{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
  }
  .title{
    font-size: 32px;
    line-height: 34px;
  }
  .color{
    color: #004498;
  }
  .subhead{
    font-size: 16px;
    color: #9b9999!important;
    position: relative;
    left: 15px;
    bottom: 6px;
  }
  .conter{
    background-color: #fff;
    margin-top: 25px;
  }
  .conter_nav{
    padding:20px 15px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    cursor: pointer;
    align-items: center;
    margin: 0 20px;
    padding-bottom: 20px;
  }
  .conter_nav1{
    padding:20px 15px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    margin: 0 20px;
    padding-bottom: 30px;
    border-bottom: 1px solid #E7E7E7;
  }
  .conte_conter{
    padding: 20px 30px;
  }
  .zx_title{
    font-size: 12px;
    width: 80px;
    display: inline-block;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .zx_title:hover{
    color: #0B5FA8;
  }
  .con_title{
    margin-top: 20px;
    font-size: 16px;
    margin-bottom: 20px;
  }
  .con_span{
    cursor: pointer;
    padding-bottom: 10px;
    color: #649cf0;
  }
  .con_span_check{
    color: #649cf0;
    border-bottom: 2px solid #649cf0;
  }
  .con_span:hover{
    color: #649cf0;
    border-bottom: 2px solid #649cf0;
  }
  .show_conter{
    cursor: pointer;
    font-size: 14px;
    color: #9598a2;
  }
  .school{
    margin-top: 60px;
  }
  .more{
    float: right;
    font-size: 16px;
    margin-right: 20px;
    cursor: pointer;
    color: #2A5FAD;
    text-decoration: underline;
  }
  .news{
    color: #649cf0;
  }
  .show_conters{
    font-size: 15px;
    line-height: 33px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .show_conters:hover{
    color: #0B5FA8;
  }
  .longString{
    height: 140px;
    border-left: 1px solid #E7E7E7;
    margin: 0 30px;
    position: relative;
    top: 10px;
  }
  .long_conter{
    vertical-align:top;
  }
  .long_title{
    font-weight: 700;
    font-size: 22px;
    color: #666;
    padding-top: 10px;
  }
  .labels{
    float: right;
    font-size: 14px;
    position: relative;
    top: 5px;
  }
  .mainBody{
    margin-top: 15px;
    line-height: 22px;
    color: #666;
    font-size: 14px;
    margin-bottom: 15px!important;
  }
  .major{
    color: #999;
    font-size: 14px;
    line-height: 22px;
  }
  .zx_border{
    border-left: 1px solid #CCCCCC;
  }
  .zx_time{
    padding-left: 15px;
    position: relative;
  }
  .zx_circle{
    width: 7px;
    height: 7px;
    background-color: #3d5c99;
    border-radius: 7px;
    position: absolute;
    left: -4px;
    top: 10px;
  }
  .zx_date{
    background-color: #034ea7;
    width: 96px;
    height: 24px;
    text-align: center;
    color: #fff;
    line-height: 22px;
    border-radius: 2px;
    position: relative;
    font-size: 12px;
  }
  .zx_sj{
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid #034ea7;
    position: absolute;
    left: 10px;
    top: 8px;
  }
  .zx_right_title{
    font-size: 13px;
    color: #222;
  }
  .zx_ti_conter{
    font-size: 13px;
    color: #888;
    line-height: 19px;
    padding-bottom: 20px;
  }
  .img_position{
    padding-top: 30px;
    width: 335px;
  }
  .school_conter{
    padding: 20px;
    background-color: #fff;
    position: relative;
    bottom: 5px;
  }
  .sch_label{
    display: inline-block;
    font-size: 12px;
    line-height: 30px;
    padding: 0 10px;
    margin: 6px;
    background-color: #eee;
    color: #666;
    border-radius: 3px;
  }
  a{
    text-decoration: none;
    color: #999;
  }
</style>
