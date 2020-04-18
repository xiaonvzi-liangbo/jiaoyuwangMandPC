<template>
  <div>
    <div class="top">
      <p class="title">全方位提供考研方案</p>
      <p class="title_s">始于先导：找准方向，做规划，科学备考</p>
      <div class="group">
        <div class="search">
          <p class="topTitle">为您选择合适的学历提升方式</p>
          <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="xueli">
              <img src="../../assets/promotr/search_icon1.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.xueli" placeholder="您的考研意向" clearable filterable >
                <el-option
                  v-for="item in mqdxl"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="cengci">
              <img src="../../assets/promotr/search_icon2.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.cengci" placeholder="目前的情况" clearable filterable>
                <el-option
                  v-for="item in xytsxl"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="city">
              <img src="../../assets/promotr/search_icon5.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.city" placeholder="意向就读省份" clearable filterable>
                <el-option
                  v-for="(item,index) in hjszd"
                  :key="index"
                  :label="item"
                  :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="time">
              <img src="../../assets/promotr/search_icon3.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.time" placeholder="选择学习方式" clearable filterable>
                <el-option
                  v-for="item in bysj"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="expenses">
              <img src="../../assets/promotr/search_icon4.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.expenses" placeholder="计划参加考试时间" clearable filterable>
                <el-option
                  v-for="item in xffw"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="grade">
              <img src="../../assets/promotr/search_icon6.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.grade" placeholder="入学难易度" clearable filterable>
                <el-option
                  v-for="item in btnyd"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item style="width:1000px;text-align:center;">
              <div class="form_but" @click="submitForm('ruleForm')">测一测我适合的学历提升</div>
              <div class="from_test">今天已有<span style="color:#0B5FA8;"> {{number}} </span>名参加测试</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>

    <!-- 相关时间开始 -->
    <div class="time">
      <div class="mask"></div>
      <div class="item">
        <p class="Range">
          <span class="num">5</span>
          <span class="unit">秒</span>
        </p>
        <p class="cont">推荐学历提升方式</p>
      </div>
      <div class="item">
        <p class="Range">
          <span class="num">10</span>
          <span class="unit">分钟</span>
        </p>
        <p class="cont">确认学历提升方式</p>
      </div>
      <div class="item">
        <p class="Range">
          <span class="num">20</span>
          <span class="unit">分钟</span>
        </p>
        <p class="cont">进入考前能力测评</p>
      </div>
      <div class="item">
        <p class="Range">
          <span class="num">1</span>
          <span class="unit">秒</span>
        </p>
        <p class="cont">生成报告</p>
      </div>
    </div>

    <!-- 最新测评开始 -->
    <div class="newtest">
      <div class="title">
        最新
        <br />测评
      </div>
        <div class="swiper-container swiper-container-horizontal swiper_newtest">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="item" v-for="(item,index) in detail" :key="index">
                <div class="phone">{{item.phone}}</div>
                <div class="type">学业能力测评</div>
                <div class="city">{{item.planAddress}}&nbsp;&nbsp;{{item.planEducation}}</div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <!-- 资讯开始 -->
    <div class="news">
      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">学术硕士</span>
            <span class="type">考研动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/promotr/news_img.png" />
            </div>
            <ul>
              <li v-for="(item,index) in science" :key="index" class="change">
                <a @click="skip(item.snId)">{{item.snSubtitle}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName">
            <el-tab-pane label="高校招生简章" name="first">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in general" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in scienceCom" :key="index">
                    <div @click="skip(item.snId)" class="change">{{item.snSubtitle | cut}}</div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/news',query: {id:'4420'}}" class="analysis">概念解析</router-link></div>
            <div class="item"><router-link :to="{path:'/news',query: {id:'4421'}}" class="analysis">专业科目</router-link></div>
            <div class="item"><router-link :to="{path:'/news',query: {id:'4422'}}" class="analysis">报考院校</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/course" target="_blank" class="link">课程精讲</a></div>
            <div class="item" @click="prospect('570')">就业前景</div>
            <div class="item"><a href="https://www.xlcwx.com/doc" target="_blank" class="link">学习资料库</a></div>
            <div class="item" @click="prospect('571')">经验分享</div>
            <div class="item" @click="prospect('572')">考试动态</div>
          </div>
        </div>
      </div>

      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">专业硕士</span>
            <span class="type">考研动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/promotr/news_img.png" />
            </div>
            <ul>
              <li v-for="(item,index) in major" :key="index">
                <a @click="skip(item.snId)" class="change">{{item.snSubtitle}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName1">
            <el-tab-pane label="高校招生简章" name="first">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in general1" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in majorCom" :key="index">
                    <span class="change" @click="skip(item.snId)">{{item.snSubtitle | cut}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/news',query: {id:'4420'}}" class="analysis">概念解析</router-link></div>
            <div class="item"><router-link :to="{path:'/news',query: {id:'4423'}}" class="analysis">专业科目</router-link></div>
            <div class="item"><router-link :to="{path:'/news',query: {id:'4424'}}" class="analysis">报考院校</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/course" target="_blank" class="link">课程精讲</a></div>
            <div class="item" @click="share('573')">就业前景</div>
            <div class="item"><a href="https://www.xlcwx.com/doc" target="_blank" class="link">学习资料库</a></div>
            <div class="item" @click="share('574')">经验分享</div>
            <div class="item" @click="share('575')">考试动态</div>
          </div>
        </div>
      </div>

      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">5月同等学历</span>
            <span class="type">考研动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/promotr/news_img.png" />
            </div>
            <ul>
              <li v-for="(item,index) in status" :key="index">
                <a class="change" @click="skip(item.snId)">{{item.snSubtitle}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName2">
            <el-tab-pane label="高校招生简章" name="first">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in general2" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in statusCom" :key="index">
                    <span class="change" @click="skip(item.snId)">{{item.snSubtitle | cut}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/news',query: {id:'4420'}}" class="analysis">概念解析</router-link></div>
            <div class="item"><router-link :to="{path:'/news',query: {id:'4425'}}" class="analysis">专业科目</router-link></div>
            <div class="item"><router-link :to="{path:'/news',query: {id:'4426'}}" class="analysis">报考院校</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/course" target="_blank" class="link">课程精讲</a></div>
            <div class="item" @click="maggio('576')">就业前景</div>
            <div class="item"><a href="https://www.xlcwx.com/doc" target="_blank" class="link">学习资料库</a></div>
            <div class="item" @click="maggio('577')">经验分享</div>
            <div class="item" @click="maggio('578')">考试动态</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 院校开始 -->
    <div class="school">
      <p class="title">热门院校推荐</p>
      <div class="block">
        <a
          class="item"
          v-for="(item,index) in SchoolList"
          :key="'SchoolList'+index"
          :href="item.scLink"
        >
          <div class="img">
            <img :src="[item.scBottomLogo]" alt />
          </div>
          <div class="neirong">
            <div class="name">
              <div>{{item.scGname}}</div>
            </div>
            <div class="conts">
              <div class="jj">{{item.scIntroInfo.substring(0,40)}}</div>
              <div class="zy">
                <span>特色专业：</span>
                <span
                  v-for="(zy,index) in item.collageMajors"
                  :key="'collageMajors'+index"
                >{{zy.smName}}、</span>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div class="school_btn" @click="choose">选择院校</div>
    </div>
  </div>
</template>

<script>
import request from '@/utile/request.js'
export default {
  name: 'deceased',
  data () {
    return {
      ruleForm: {
        xueli: '',
        cengci: '',
        time: '',
        expenses: '',
        city: '',
        grade: ''
      },
      mqdxl: [
        {label: '0', value: '本科生考研'},
        {label: '1', value: '专科生考研'},
        {label: '2', value: '在职考研'}
      ],
      xytsxl: [
        {label: '0', value: '本科在读'},
        {label: '1', value: '专科在读'},
        {label: '2', value: '专科在职'},
        {label: '2', value: '本科在职'}
      ],
      bysj: [
        {label: '0', value: '全日制学习'},
        {label: '1', value: '脱产学习'}
      ],
      xffw: [
        {label: '0', value: '年初统考'},
        {label: '1', value: '10月份联考'}
      ],
      hjszd: [
        '北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '内蒙古', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省',
        '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西', '海南省', '四川省', '贵州省',
        '云南省', '西藏', '陕西省', '甘肃省', '青海省', '宁夏', '新疆', '香港', '澳门', '台湾省'
      ],
      btnyd: [
        {label: '0', value: '简单'},
        {label: '1', value: '一般'},
        {label: '2', value: '困难'}
      ],
      rules: {
        xueli: [{required: true, message: '请选择您的考研意向', trigger: 'blur'}],
        cengci: [{required: true, message: '请选择您目前的情况', trigger: 'blur'}],
        time: [{required: true, message: '请选择学习方式', trigger: 'blur'}],
        expenses: [{required: true, message: '请选择计划参考时间', trigger: 'blur'}],
        city: [{required: true, message: '请选择意向就读省份', trigger: 'blur'}],
        grade: [{required: true, message: '请选择入学难易度', trigger: 'blur'}]
      },
      number: '',
      activeName: 'first',
      activeName1: 'first',
      activeName2: 'first',
      SchoolList: [],
      interval: '1000',
      science: [], // 学术硕士
      scienceCom: [], // 学术硕士的常见问题
      major: [], // 专业硕士
      majorCom: [],
      status: [],
      statusCom: [],
      detail: [],
      general: [],
      general1: [],
      general2: []
    }
  },
  filters: {
    cut (value) {
      if (value.length > 23) {
        return value.substring(0, 20)
      } else {
        return value
      }
    }
  },
  methods: {
    // 资讯详情
    skip (id) {
      this.$router.push({
        path: '/news',
        query: {
          id: id
        }
      })
    },
    // 获取测评信息的详情
    getParticulars () {
      let that = this
      request({
        url: '/eduWeb/jYAssessRecordForeign/findByAuto',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '6'
        }
      })
        .then(res => {
          that.detail = res.rows
        })
    },
    // 获取今日的测试人数
    getNumber () {
      let that = this
      request({
        url: '/eduWeb/jYAssessRecordForeign/findByNowOneGetNumber',
        method: 'get'
      })
        .then(res => {
          that.number = res.data
        })
    },
    // 获取招生简章
    getGeneral () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '564',
          snTwoTypes: '569'
        }
      })
        .then(res => {
          that.general = res.rows
        })
    },
    // 获取招生简章(专业)
    getGeneral1 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '565',
          snTwoTypes: '568'
        }
      })
        .then(res => {
          that.general1 = res.rows
        })
    },
    // 获取招生简章（5月）
    getGeneral2 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '566',
          snTwoTypes: '567'
        }
      })
        .then(res => {
          that.general2 = res.rows
        })
    },
    // 选择院校点击事件
    choose () {
      this.$router.push({
        path: '/search'
      })
    },
    // 获取学术硕士的考研动态动态
    getScience () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '564'
        }
      })
        .then(res => {
          that.science = res.rows
        })
    },
    // 获取学术硕士的常见问题
    getxCommon (types = '') {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '2',
          pageSize: '9',
          snOneType: '564',
          snTwoTypes: types
        }
      })
        .then(res => {
          that.scienceCom = res.rows
        })
    },
    // 常见问题切换事件
    prospect (value) {
      this.getxCommon(value)
    },
    // 获取专业硕士的考研动态
    getMajor () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '565'
        }
      })
        .then(res => {
          that.major = res.rows
        })
    },
    // 获取专业硕士的常见问题
    getmCommon (type = '') {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '2',
          pageSize: '9',
          snOneType: '565',
          snTwoTypes: type
        }
      })
        .then(res => {
          that.majorCom = res.rows
        })
    },
    // 专业硕士常见问题切换事件
    share (value) {
      this.getmCommon(value)
    },
    // 获取5月同等学历的考研动态
    getStatus () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '566'
        }
      })
        .then(res => {
          that.status = res.rows
        })
    },
    // 获取5月同等学力的常见问题
    getsCommon (type = '') {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '2',
          pageSize: '9',
          snOneType: '566',
          snTwoTypes: type
        }
      })
        .then(res => {
          that.statusCom = res.rows
        })
    },
    // 5月同等学历常见问题切换事件
    maggio (value) {
      this.getsCommon(value)
    },
    // 获取学校列表
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '8',
          scIspass: '1',
          smRecomed: '1',
          scType: '257'
        }
      })
        .then(res => {
          that.SchoolList = res.rows
          that.SchoolList.forEach(item => {
            item.scTypeName = item.scTypeName.split(',')
          })
        })
    },
    // 今日测一测点击事件
    submitForm (formName) {
      let that = this
      that.$refs[formName].validate((valid) => {
        if (valid) {
          that.$router.push({
            path: '/systematic',
            query: {
              mode: '1',
              xueli: that.ruleForm.xueli,
              cengci: that.ruleForm.cengci,
              time: that.ruleForm.time,
              expenses: that.ruleForm.expenses,
              city: that.ruleForm.city,
              grade: that.ruleForm.grade
            }
          })
        }
      })
    }
  },
  mounted () {
    this.getParticulars()
    this.getScience()
    this.getMajor()
    this.getGeneral()
    this.getGeneral1()
    this.getGeneral2()
    this.getStatus()
    this.getsCommon()
    this.getmCommon()
    this.getxCommon()
    this.getNumber()
    this.getSchool()
  }
}
</script>
<style>

</style>
<style lang="scss" scoped>
.analysis{
  text-decoration: none;
  color: #999;
}
  /deep/ .el-form-item__error{
    left: 46px;
  }
 /deep/ .el-input__inner{
    height: 61px;
    border: none;
    width: 285px;
    font-size: 15px;
    padding-left: 55px;
  }
  /deep/ .el-select .el-input .el-select__caret{
  font-size: 19px;
  // width: 340px;
  // height: 60px;
}
.group{
    width: 1180px;
    margin: auto;
    overflow: hidden;
}
.sele_img{
  position: relative;
  left: 50px;
  top: 10px;
  z-index: 9;
}

.top{
    background:url('~@/assets/promotr/top_img.jpg') no-repeat center center;
    height: 735px;
    overflow: hidden;
    .title{
        text-align: center;
        font-weight:bold;
        color: #fff;
        font-size: 58px;
        margin-top: 90px;
        margin-bottom: 8px !important;
    }
    .title_s{
        text-align: center;
        font-size: 28px;
        font-weight:bold;
        color: #fff;
        margin-bottom: 77px !important;
    }
    .group{
        .search{
            width: 1180px;
            height: 345px;
            background: url('~@/assets/promotr/top_search_bg.png');
            .topTitle{
                text-align: left;
                font-size: 16px;
                line-height: 63px;
                padding-left: 66px;
                color: #525353;
            }
            form{
                width: 1086px;
                margin: auto;
                overflow: hidden;
                .form_but{
                  text-align: center;
                  width: 370px;
                  height: 70px;
                  background-color: #0B5FA8;
                  color: #fff;
                  font-size: 16px;
                  line-height: 69px;
                  border: 0;
                  margin-left: 60px;
                  display:inline-block;
                  margin-top: 10px;
                  cursor: pointer;
                }
                .from_test{
                  display:inline-block;
                  font-size: 16px;
                  color: #666;
                  margin-left: 37px;
                }
            }

        }
    }
}

// 相关时间开始
.time{
    background-color: #fff;
    height: 146px;
    width: 1180px;
    margin: auto;
    position: relative;
    top: -46px;
    .mask{
        box-shadow:0px 10px 7px 2px #ededed;
        position: absolute;
        left: 0;
        top: 46px;
        width: 100%;
        height: 100px;
    }
    .item{
        float: left;
        width: 180px;
        margin: 0 56px;
        margin-top: 8px;
        .Range{
            text-align: center;
            .num{
                font-weight:bold;
                color: #cc0000;
                font-size: 55px;
            }
            .unit{
                color: #666666;
                font-size: 20px;
                font-weight: 500;
                margin-left: 7px;
                top: 25px;
                position: absolute;
            }
        }
        .cont{
            text-align: center;
            font-size: 16px;
            color: #666666;
            margin-top: 4px;
        }
    }
}

// 最新测评开始
.newtest{
    width: 1180px;
    margin: auto;
    height: 122px;
    border: 1px solid #d7dce1;
    overflow: hidden;
    margin-bottom: 35px;
    .title{
        font-weight: bold;
        font-size: 24px;
        color: #333333;
        width: 108px;
        text-align: center;
        padding-top: 24px;
        float: left;
    }
    .swiper_newtest{

        .item{
            width: 177px;
            height: 77px;
            border-left: 1px solid #d7dce1;
            float: left;
            font-size: 15px;
            line-height: 25px;
            float: left;
            text-align: center;
            margin-top: 24px;

            .phone{
                color: #66666a;
            }
            .type{
                color: #0099ff;
            }
            .city{
                color: #333333;
            }
        }
    }

}

// 资讯开始
.news{
    background-color: #f7f7f7;
    overflow: hidden;
    padding: 36px 0;

    .NewsTypeItem{
        background-color: #fff;
        width: 1180px;
        height: 380px;
        margin: auto;
        margin-bottom: 26px;
        padding: 18px 30px;
        overflow: hidden;
        .left{
            float: left;
            width: 541px;
            .title{
                height: 60px;
                line-height: 60px;
                border-bottom: 1px solid #f8f8f8;
                margin-bottom: 14px !important;

                .column{
                    font-size: 25px;
                    font-weight: bold;
                    color: #333333;
                    margin-left: 15px;
                }

                .type{
                    color: #333349 !important;
                    font-size: 16px;
                    margin-left: 142px;
                }
                span{
                    display: block;
                    float: left;
                }
            }
            .conts{
                overflow: hidden;
                .img{
                    width: 229px;
                    height: 233px;
                    float: left;
                    margin-right: 18px;
                    margin-left: 10px;

                    img{
                      float: left;
                        width: 229px;
                        height: 233px;
                    }
                }
                ul{
                    float: right;
                    font-size: 14px;
                    line-height: 29px;
                    position: relative;
                    top: -15px;
                    right: 20px;
                    z-index: 99;
                    li{
                        color: #87878f;
                        list-style:none;
                        a{
                            width: 244px;
                            display: block;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            color: #87878f;
                            text-decoration: none;
                        }
                        a:hover{
                            color:#0B5FA8 !important;
                            font-size: 15px !important;
                        }
                    }
                }
            }
        }
      .tabs{
        margin-top: 37px;
        position: relative;
        .conter{
          overflow: hidden;
          position: relative;
          top:-18px;
          left: -10px;
          ul{
            font-size: 14px;
            line-height: 29px;
            li{
              list-style: none;
              a{
                width: 244px;
                display: block;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                color: #87878f;
                text-decoration: none;
              }
              a:hover{
                color:#0B5FA8;
                font-size: 15px;
              }
            }
          }
        }
      }
    }
}
.model{
  width: 290px;
  position: absolute;
  top: 55px;
  right: 20px;
  .item{
    display: inline-block;
    width: 119px;
    height: 59px;
    cursor: pointer;
    background-color: #efefef;
    color: #a29e9d;
    font-size: 16px;
    text-align: center;
    line-height: 59px;
    margin: 0 2px;
    margin-bottom: 5px;
  }
  .item:hover{
    background-color: #F5F5F5;
    color: #0B5FA8;
  }
}
/deep/ .el-tabs__nav-wrap::after{
  background-color: #F8F8F8;
  height: 1px;
}
/deep/ .el-tabs__item{
  font-size: 16px;
  top: -10px;
}
// 院校开始
.school{
    overflow: hidden;
    .title{
        color: #333333;
        font-size: 30px;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 27px !important;
    }
    .block{
        width: 1145px;
        margin: auto;
        overflow: hidden;
        .item{
            width: 268px;
            height: 280px;
            float: left;
            background-color: #fff;
            margin: 0 9px;
            margin-bottom: 0px;
            margin-bottom: 20px;
            cursor: pointer;
            display: block;
            text-decoration: none;
            .img{
                width: 268px;
                height: 142px;
                overflow: hidden;
                img{
                    width: 268px;
                    height: 142px;
                    animation: img 3s ease-in 1;
                    transition: all 0.8s;
                    transform:rotate(0deg);
                    transform:scale(1.0);
                }
                img:hover{
                  animation: img 3s ease-in 1;
                    transition: all 0.6s;
                    transform:rotate(0deg);
                    transform:scale(1.1);
                }
            }
            .neirong{
                overflow: hidden;
                padding: 12px 14px;

                .name{
                    overflow: hidden;
                    margin-bottom: 6px;
                    div{
                        font-weight: bold;
                        font-size: 18px;
                        color: #202020;
                        line-height: 22px;
                        display: inline;
                        // float: left;
                        margin-right: 10px;
                    }
                    div{
                        float: left;
                    }
                    .type{
                        float: left;
                        display: block;
                        height: 22px;
                        line-height: 22px;
                        color: #fff;
                        font-size: 12px;
                        display: block;
                        padding: 0 5px;
                        margin-left: 5px;
                    }
                    .type1{
                        background-color: #f39c12;
                    }
                    .type2{
                        background-color: #626eef;
                    }
                    .type3{
                        background-color: #ff6060;
                    }
                }
                .conts{
                    font-size: 12px;
                    .jj{
                        color: #4f4f4f;
                        line-height: 18px;
                        margin-bottom: 5px;
                    }
                    .zy{
                        color: #a3a3a3;
                        line-height: 18px;
                    }
                }
            }
        }
    }
    .school_btn{
        width: 458px;
        height: 70px;
        text-decoration: none;
        background-color: #0B5FA8;
        color: #fff !important;
        font-size: 18px;
        line-height: 70px;
        margin:auto;
        margin-top: 40px;
        margin-bottom: 100px;
        text-align:center;
        border-radius: 4px;
        cursor: pointer;
        display: block;
    }
    .school_btn:hover{
      background-color: #1B82DB;
    }
}
.link{
  text-decoration: none;
  color: #999;
}
.link:hover{
  color: #0B5FA8;
}
.change{
  color: #87878F !important;
}
.change:hover{
  cursor: pointer !important;
  color: #0B5FA8 !important;
  font-size: 15px !important;
}
</style>
