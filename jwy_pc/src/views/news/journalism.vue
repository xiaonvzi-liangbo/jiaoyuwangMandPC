<template>
  <div style="background-color:#F4F6F9;">
    <div class="img_top"><img src="@/assets/news/news_adv1.jpg"/></div>
    <div class="news">
      <div class="news_height">
        <div class="news_left">
          <div class="nav_top">您的位置：
            <router-link to="/" class="skip">首页</router-link>
            >
            <span class="skip">新闻中心</span>
          </div>
          <div class="nav_left">
            <div class="left_classify">专业分类</div>
            <div class="left_conter">
              <span class="clas_conter" v-for="(item,index) in classify" :key="index" @click="getAllInzhuanye(index,item.id)" :class="{'clas_check':action===index}">{{item.typeName}}</span>
            </div>
          </div>
          <div class="nav_left">
            <div class="left_classify">资讯分类</div>
            <div class="left_conter">
              <span class="clas_conter" v-for="(item,index) in message" :key="index" @click="information(index,item.id)" :class="{'clas_check':actions===index}">{{item.typeName}}</span>
            </div>
          </div>
          <div class="nav_conter" v-for="(item,index) in news" :key="index" @click="details(item.snId)">
            <div class="conter_title">{{item.snSubtitle}}</div>
            <div class="conter_conter">
              {{item.snIntro.substring(0,100)}}
              <span v-if="item.snIntro.length > 100">...</span>
            </div>
            <div>
              <span class="conter_time"><i class="iconfont icon-history icons"></i>{{item.snUptime | timeFilter}}</span>
              <span class="conter_time"><i class="iconfont icon-jilu icons"></i>{{item.snTwoName}}</span>
            </div>
          </div>
          <div class="conter_bottor">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="total"
              @current-change="currentchange"
              :current-page="pageObject.pageNo"
              :page-size="pageObject.length">
            </el-pagination>
          </div>
        </div>
      </div>
      <div class="news_right">
        <div class="subit">
          <div class="sub_title">1分钟精准匹配规划</div>
          <div class="sub_deputyText">YIFENZHONGJINGZHUPIPEIGUIHUA</div>
          <div class="form">
            <el-input placeholder="姓名" style="margin-bottom:10px;" v-model="fromData.name"></el-input>
            <el-input placeholder="联系号码" style="margin-bottom:10px;" v-model="fromData.phone"></el-input>
            <el-input placeholder="当前学历" style="margin-bottom:10px;" v-model="fromData.present"></el-input>
            <el-select v-model="fromData.plan" placeholder="计划学历" style="margin-bottom:10px;width:100%;">
              <el-option
                v-for="(item,index) in options"
                :key="index"
                :label="item.label"
                :value="item.value">
              </el-option>
              </el-select>
            <el-input placeholder="目标学校" style="margin-bottom:10px;" v-model="fromData.school"></el-input>
            <el-button class="tijiao" @click="presents">提交</el-button>
          </div>
        </div>
        <div style="margin-top:20px;">
          <img src="@/assets/index/xxtj_img1.jpg" width="280px;"/>
        </div>
        <div style="margin-top:20px;">
          <img src="@/assets/index/xxtj_img2.jpg" width="280px;"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utile/request.js'
export default {
  name: 'journalism',
  data () {
    return {
      fromData: {
        name: '',
        phone: '',
        present: '',
        plan: '',
        school: ''
      },
      options: [
        {label: '专科', value: '专科'},
        {label: '本科', value: '本科'},
        {label: '研究生', value: '研究生'}
      ],
      news: [],
      classify: [],
      action: 0,
      actions: '',
      flid: '',
      classes: '',
      total: 0,
      pageObject: {
        length: 10,
        pageNo: 1,
        exporter: 0
      },
      message: [],
      querys: ''
    }
  },
  methods: {
    // 当前页改变点击事件
    currentchange (val) {
      this.pageObject.pageNo = val
      this.getAllInformation(this.flid, this.classes)
    },
    // 专业分类点击切换事件
    getAllInzhuanye (index, id) {
      this.getAllInformation(id, '')
      this.getMessage(id)
      this.action = index
      this.actions = ''
      this.classes = ''
    },
    // 获取全部的信息
    getAllInformation (id, types) {
      let that = this
      that.flid = id
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: that.pageObject.pageNo,
          pageSize: that.pageObject.length,
          snOneType: id,
          snTwoTypes: types
        }
      })
        .then(res => {
          that.news = res.rows
          that.total = res.total
        })
    },
    // 资讯分类切换点击事件
    information (index, id) {
      this.actions = index
      this.classes = id
      this.getAllInformation(this.flid, id)
    },
    // 获取分类
    getFenlei () {
      let that = this
      request({
        url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByOneType',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '999',
          type: '3',
          sort: '1'
        }
      })
        .then(res => {
          that.classify = res.rows
          if (that.querys.zyId) {
            that.classify.forEach((item, index) => {
              if (item.id.toString() === that.querys.zyId) {
                that.action = index
                that.flid = item.id
                that.getMessage(item.id)
              }
            })
          } else {
            that.getMessage(that.classify[0].id)
            that.getAllInformation(that.classify[0].id, '')
          }
        })
    },
    // 获取资讯分类
    getMessage (parentd) {
      let that = this
      request({
        url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByTwoType',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '60',
          type: '3',
          parentId: parentd,
          sort: '2'
        }
      })
        .then(res => {
          that.message = res.rows
          if (that.querys.zxId) {
            that.message.forEach((item, index) => {
              if (item.id.toString() === that.querys.zxId) {
                that.actions = index
                that.classes = item.id
                that.getAllInformation(that.flid, item.id)
              }
            })
          }
        })
    },
    // 提交点击事件
    presents () {
      let that = this
      let bool = true
      let warn = ''
      if (!that.fromData.name) {
        warn = '姓名不能为空！'
      } else if (!that.fromData.phone) {
        warn = '手机号不能为空！'
      } else if (!(/^1[3456789]\d{9}$/.test(that.fromData.phone))) {
        warn = '手机号输入错误！'
      } else if (!that.fromData.present) {
        warn = '当前学历不能为空！'
      } else if (!that.fromData.plan) {
        warn = '计划学历不能为空！'
      } else if (!that.fromData.school) {
        warn = '目标学校不能为空！'
      } else {
        bool = false
        request({
          url: '/eduWeb/register/addUserFrom',
          method: 'post',
          data: {
            nickName: that.fromData.name,
            userMobile: that.fromData.phone,
            nowEducation: that.fromData.present,
            planEducation: that.fromData.plan,
            targetSchools: that.fromData.school,
            enlistType: '院校'
          }
        })
          .then(res => {
            that.$message({
              message: '提交成功，稍后会有老师联系您！',
              type: 'success'
            })
            that.fromData.name = that.fromData.user = that.fromData.present = that.fromData.plan = that.fromData.school = ''
          })
      }
      if (bool) {
        that.$message.error(warn)
      }
    },
    // 详情点击跳转事件
    details (id) {
      this.$router.push({
        path: '/news',
        query: {
          id: id
        }
      })
    }
  },
  created () {
    this.querys = this.$route.query
  },
  mounted () {
    this.getFenlei()
  }
}
</script>
<style scoped>
  .img_top{
    width: 1189px;
    margin: auto;
    padding: 22px 0;
  }
  .news{
    width: 1189px;
    margin: auto;
  }
  .news_left{
    width: 825px;
    display: inline-block;
    background-color: #fff;
    padding: 20px 30px;
  }
  .news_right{
    width: 280px;
    float: right;
    position: relative;
    right: 10px;
  }
  .nav_top{
    font-size: 14px;
    color: #666;
    padding-bottom: 18px;
    border-bottom: 1px solid #eee;
  }
  .nav_left{
    padding: 20px 0 60px 0;
    border-bottom: 1px solid #eee;
  }
  .news_height{
    width: 825px;
    display: inline-block;
    min-height: 1200px;
    margin-bottom: 50px;
  }
  .left_classify{
    font-size: 14px;
    color: #999;
    /* margin-right: 20px; */
    line-height: 30px;
    display: inline-block;
  }
  .left_conter{
    width: 740px;
    font-size: 14px;
    float: right;
  }
  .clas_conter{
    display: inline-block;
    line-height: 20px;
    margin-right: 10px;
    padding: 3px 6px;
    margin-bottom: 3px;
    cursor: pointer;
  }
  .clas_conter:hover{
    background-color: #116EBE;
    border-radius: 5px;
    color: #fff;
  }
  .clas_check{
    background-color: #116EBE;
    border-radius: 5px;
    color: #fff;
  }
  .nav_conter{
    width: 729px;
    padding: 18px 0;
    margin-left: 20px;
    border-bottom: 1px solid #eee;
  }
  .conter_title{
    font-size: 20px;
    color: #00397c;
    line-height: 42px;
    font-weight: 700;
    cursor: pointer;
  }
  .conter_conter{
    font-size: 14px;
    color: #666;
    line-height: 24px;
    margin-bottom: 12px!important;
    cursor: pointer;
  }
  .conter_time{
    color: #666;
    font-size: 14px;
    margin-right: 30px;
    cursor: pointer;
  }
  .icons{
    margin-right: 5px;
    position: relative;
    top: 1px;
  }
  .conter_bottor{
    text-align: center;
    margin-top: 20px;
  }
  .subit{
    border: 1px solid #d7dce1;
    background-color: #F7F7F7;
    padding: 30px 20px;
  }
  .sub_title{
    text-align: center;
    font-size: 24px;
    color: #116EBE;
    font-weight: 700;
  }
  .sub_deputyText{
    font-size: 10px;
    color: #6b6b6b;
    text-align: center;
    padding: 5px 0 30px 0;
  }
  .tijiao{
    width: 238px;
    height: 40px;
    font-size: 14px;
    border-radius: 0;
    margin-top: 20px;
    background-color: #116EBE;
    color: #fff;
  }
  .form >>> .el-input__inner{
    border-radius: 0;
  }
  .skip{
    cursor: pointer;
    text-decoration: none;
    color: #333;
  }
  .skip:hover{
    color: #51B7FF;
  }
</style>
