<template>
  <div>
    <div class="top">
      <p class="title">全方位提供学历提升方案</p>
      <p class="title_s">·211/985名校推荐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;·发掘你的潜力，迅速突破自我</p>
      <div class="group">
        <div class="search">
          <p class="topTitle">为您选择合适的学历提升方式</p>
          <el-form :inline="true" :model="ruleForm" :rules="rules" ref="ruleForm">
            <el-form-item prop="xueli">
              <img src="../../assets/promotr/search_icon1.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.xueli" placeholder="目前的学历" clearable filterable >
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
              <el-select v-model="ruleForm.cengci" placeholder="需要的学历提升层次" clearable filterable>
                <el-option
                  v-for="item in xytsxl"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="time">
              <img src="../../assets/promotr/search_icon3.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.time" placeholder="毕业时间" clearable filterable>
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
              <el-select v-model="ruleForm.expenses" placeholder="学费范围" clearable filterable>
                <el-option
                  v-for="item in xffw"
                  :key="item.value"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="city">
              <img src="../../assets/promotr/search_icon5.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.city" placeholder="户籍所在地" clearable filterable>
                <el-option
                  v-for="(item,index) in hjszd"
                  :key="index"
                  :label="item.value"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item prop="grade">
              <img src="../../assets/promotr/search_icon6.jpg" class="sele_img"/>
              <el-select v-model="ruleForm.grade" placeholder="毕业难易度" clearable filterable>
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
            <span class="column">自学考试</span>
            <span class="type">自学考试动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/coures/banercous.png" />
            </div>
            <ul>
              <li v-for="(item,index) in newList1" :key="index" class="change">
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
                  <li v-for="(item,index) in regulations1" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in issue1" :key="index">
                    <div @click="skip(item.snId)" class="change">{{item.snSubtitle | cut}}</div>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'530'}}" class="analysis">政策信息</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'531'}}" class="analysis">考试报名</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'532'}}" class="analysis">准考证打印</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'533'}}" class="analysis">考试安排</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'534'}}" class="analysis">教材大纲</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'535'}}" class="analysis">成绩查询</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'536'}}" class="analysis">自考备考</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'501',zxId:'537'}}" class="analysis">自考就业</router-link></div>
          </div>
        </div>
      </div>

      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">成人高考</span>
            <span class="type">成人高考动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/coures/banercous.png" />
            </div>
            <ul>
              <li v-for="(item,index) in newList2" :key="index">
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
                  <li v-for="(item,index) in regulations2" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in issue2" :key="index">
                    <span class="change" @click="skip(item.snId)">{{item.snSubtitle | cut}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'538'}}" class="analysis">政策信息</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'539'}}" class="analysis">报考指南</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'540'}}" class="analysis">考试报名</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'541'}}" class="analysis">领准考证</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'542'}}" class="analysis">成绩查询</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'543'}}" class="analysis">志愿填报</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'502',zxId:'544'}}" class="analysis">录取查询</router-link></div>
          </div>
        </div>
      </div>

      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">开放教育</span>
            <span class="type">开放教育动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/coures/banercous.png" />
            </div>
            <ul>
              <li v-for="(item,index) in newList3" :key="index">
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
                  <li v-for="(item,index) in regulations3" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in issue3" :key="index">
                    <span class="change" @click="skip(item.snId)">{{item.snSubtitle | cut}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'545'}}" class="analysis">入学考试</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'546'}}" class="analysis">报考指南</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'547'}}" class="analysis">报名时间</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'548'}}" class="analysis">考试报名</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'549'}}" class="analysis">考试时间</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'550'}}" class="analysis">准考证打印</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'517',zxId:'551'}}" class="analysis">考试科目</router-link></div>
          </div>
        </div>
      </div>

      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">在职研</span>
            <span class="type">在职研动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/coures/banercous.png" />
            </div>
            <ul>
              <li v-for="(item,index) in newList4" :key="index">
                <a class="change" @click="skip(item.snId)">{{item.snSubtitle}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName3">
            <el-tab-pane label="高校招生简章" name="first">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in regulations4" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in issue4" :key="index">
                    <span class="change" @click="skip(item.snId)">{{item.snSubtitle | cut}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'504',zxId:'552'}}" class="analysis">概念解析</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'504',zxId:'553'}}" class="analysis">专业科目</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'504',zxId:'554'}}" class="analysis">报考院校</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/course" target="_blank" class="link">课程精讲</a></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'504',zxId:'555'}}" class="analysis">就业前景</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/doc" target="_blank" class="link">学习资料库</a></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'504',zxId:'556'}}" class="analysis">经验分享</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'504',zxId:'557'}}" class="analysis">考试动态</router-link></div>
          </div>
        </div>
      </div>
      <div class="NewsTypeItem">
        <div class="left">
          <p class="title">
            <span class="column">出国留学</span>
            <span class="type">出国留学动态</span>
          </p>
          <div class="conts">
            <div class="img">
              <img src="../../assets/coures/banercous.png" />
            </div>
            <ul>
              <li v-for="(item,index) in newList5" :key="index">
                <a class="change" @click="skip(item.snId)">{{item.snSubtitle}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tabs">
          <el-tabs v-model="activeName4">
            <el-tab-pane label="高校招生简章" name="first">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in regulations5" :key="index">
                    <a href>{{item.snSubtitle}}</a>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="常见问题" name="second">
              <div class="conter">
                <ul>
                  <li v-for="(item,index) in issue5" :key="index">
                    <span class="change" @click="skip(item.snId)">{{item.snSubtitle | cut}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
          <div class="model">
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'505',zxId:'558'}}" class="analysis">概念解析</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'505',zxId:'559'}}" class="analysis">专业科目</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'505',zxId:'560'}}" class="analysis">报考院校</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/course" target="_blank" class="link">课程精讲</a></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'505',zxId:'561'}}" class="analysis">就业前景</router-link></div>
            <div class="item"><a href="https://www.xlcwx.com/doc" target="_blank" class="link">学习资料库</a></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'505',zxId:'562'}}" class="analysis">经验分享</router-link></div>
            <div class="item"><router-link :to="{path:'/journalism',query: {zyId:'505',zxId:'563'}}" class="analysis">考试动态</router-link></div>
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
            <img :src="item.scBottomLogo" alt />
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
  name: 'promote',
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
        {label: '0', value: '初中及以下'},
        {label: '1', value: '高中'},
        {label: '2', value: '专科在读'},
        {label: '3', value: '专科'},
        {label: '4', value: '本科'}
      ],
      xytsxl: [
        {label: '0', value: '升专科'},
        {label: '1', value: '升本科'},
        {label: '2', value: '研究生'}
      ],
      bysj: [
        {label: '0', value: '1年'},
        {label: '1', value: '2年'}
      ],
      xffw: [
        {label: '0', value: '5-6千'},
        {label: '1', value: '1万左右'}
      ],
      hjszd: [
        {label: '0', value: '山东'},
        {label: '1', value: '其他省份'}
      ],
      btnyd: [
        {label: '0', value: '简单'},
        {label: '1', value: '一般'},
        {label: '2', value: '困难'},
        {label: '3', value: '非常困难'}
      ],
      rules: {
        xueli: [{required: true, message: '请选择您目前的学历', trigger: 'blur'}],
        cengci: [{required: true, message: '请选择需要提升的学历层次', trigger: 'blur'}],
        time: [{required: true, message: '请选择毕业时间', trigger: 'blur'}],
        expenses: [{required: true, message: '请选择学费范围', trigger: 'blur'}],
        city: [{required: true, message: '请选择户籍所在地', trigger: 'blur'}],
        grade: [{required: true, message: '请选择毕业难易度', trigger: 'blur'}]
      },
      number: '',
      activeName: 'first',
      activeName1: 'first',
      activeName2: 'first',
      activeName3: 'first',
      activeName4: 'first',
      SchoolList: [],
      interval: '1000',
      detail: [],
      newList1: [],
      newList2: [],
      newList3: [],
      newList4: [],
      newList5: [],
      regulations1: [],
      regulations2: [],
      regulations3: [],
      regulations4: [],
      regulations5: [],
      issue1: [],
      issue2: [],
      issue3: [],
      issue4: [],
      issue5: []
    }
  },
  filters: {
    cut (value) {
      if (value.length > 18) {
        return value.substring(0, 18) + '...'
      } else {
        return value
      }
    }
  },
  methods: {
    // 自考常见问题
    getIssue1 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '501',
          snTwoTypes: '525'
        }
      })
        .then(res => {
          that.issue1 = res.rows
        })
    },
    // 成考常见问题
    getIssue2 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '502',
          snTwoTypes: '526'
        }
      })
        .then(res => {
          that.issue2 = res.rows
        })
    },
    // 开放教育常见问题
    getIssue3 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '517',
          snTwoTypes: '527'
        }
      })
        .then(res => {
          that.issue3 = res.rows
        })
    },
    // 在职研常见问题
    getIssue4 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '504',
          snTwoTypes: '528'
        }
      })
        .then(res => {
          that.issue4 = res.rows
        })
    },
    // 出国常见问题
    getIssue5 () {
      let that = this
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '505',
          snTwoTypes: '529'
        }
      })
        .then(res => {
          that.issue5 = res.rows
        })
    },
    // 获取所有的动态
    getDynamic () {
      let that = this
      // 自学考试
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '501'
        }
      })
        .then(res => {
          that.newList1 = res.rows
        })
      // 成人高考
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '502'
        }
      })
        .then(res => {
          that.newList2 = res.rows
        })
      // 开放教育
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '517'
        }
      })
        .then(res => {
          that.newList3 = res.rows
        })
      // 在职研
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '504'
        }
      })
        .then(res => {
          that.newList4 = res.rows
        })
      // 出国留学
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '505'
        }
      })
        .then(res => {
          that.newList5 = res.rows
        })
    },
    // 获取招生简章
    getGeneral () {
      let that = this
      // 自学考试
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '501',
          snTwoTypes: '521'
        }
      })
        .then(res => {
          that.regulations1 = res.rows
        })
      // 成人高考
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '502',
          snTwoTypes: '515'
        }
      })
        .then(res => {
          that.regulations2 = res.rows
        })
      // 开放教育
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '517',
          snTwoTypes: '522'
        }
      })
        .then(res => {
          that.regulations3 = res.rows
        })
      // 在职研
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '504',
          snTwoTypes: '523'
        }
      })
        .then(res => {
          that.regulations4 = res.rows
        })
      // 出国留学
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '9',
          snOneType: '505',
          snTwoTypes: '524'
        }
      })
        .then(res => {
          that.regulations5 = res.rows
        })
    },

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

    // 今日测一测点击事件
    submitForm (formName) {
      let that = this
      that.$refs[formName].validate((valid) => {
        if (valid) {
          that.$router.push({
            path: '/systematic',
            query: {
              mode: '0',
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
    },
    // 获取热门院校
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '8',
          scRecomd: '1'
        }
      })
        .then(res => {
          that.SchoolList = res.rows
        })
    },
    // 选择院校点击事件
    choose () {
      this.$router.push({
        path: '/search'
      })
    }
  },
  mounted () {
    this.getIssue1()
    this.getIssue2()
    this.getIssue3()
    this.getIssue4()
    this.getIssue5()
    this.getNumber()
    this.getGeneral()
    this.getParticulars()
    this.getDynamic()
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
  .analysis:hover{
    color: #0B5FA8;
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
                  &:hover{
                    background-color: #1C7FD4;
                  }
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
