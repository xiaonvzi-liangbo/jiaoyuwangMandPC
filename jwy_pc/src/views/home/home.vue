<template>
  <div>
    <div class="backimg">
      <div class="group">
        <div class="group_title">一站式学历提升/资格考证规划平台</div>
        <div class="title_s">用专业驾驭品牌，从学历出发/出国留学/职业资格考试</div>
      </div>
      <div class="group">
        <div class="block">
          <div class="item item_b">
            <p class="title">学历提升规划</p>
            <p class="conts">
              自学考试/成人高考/网络教育/考研
              <br />为您提供一站式学习提升规划
            </p>
            <router-link to="/promote" class="item_btn">
              <span class="span">我需要规划 》</span>
            </router-link>
          </div>
          <div class="item1 item_b">
            <p class="title">考研规划</p>
            <p class="conts">
              学术硕士/专业硕士/同等学
              <br />力 211/985名校优选
            </p>
            <router-link to="/deceased" class="item_btn">
              <span class="span">我需要规划 》</span>
            </router-link>
          </div>
          <div class="item2 item_b1">
            <p class="title">资格考证辅导</p>
            <p class="conts">
              建筑工程、财政金融、医药医师等
              <br />覆盖95%职业考试需要
            </p>
            <router-link class="item_btn" to="/status">
              <span class="span">我要选择课程 》</span>
            </router-link>
          </div>
          <div class="item3 item_b1">
            <p class="title">研修班</p>
            <p class="conts">
              帮您推荐适合您的高校
              <br />211/985名校优选
            </p>
            <router-link to="/research" class="item_btn">
              <span class="span">我要报读 》</span>
            </router-link>
          </div>
          <div class="item4 item_b1">
            <p class="title">出国留学</p>
            <p class="conts">
              帮您推荐适合您的高校
              <br />211/985名校优选
            </p>
            <router-link class="item_btn" to="/studyAbroad">
              <span class="span">我要留学 》</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="group_my">
      <div class="idea">
        <div class="idea_title">大家<br/>怎么说</div>
        <div class="red">
          <el-carousel height="160px" direction="vertical" :autoplay="true" :loop="true" indicator-position="none">
            <el-carousel-item v-for="(item,index) in 3" :key="index">
              <div class="scroll">
                <div><img src="../../assets/index/talk_img1.jpg" class="img"/></div>
                <div class="scroll_flot">
                  <div class="scroll_title">张同学妈妈<br>
                  上海徐汇  小升初</div>
                  <p class="scroll_text">孩子升高一,面对这么多学校，不知怎么选,经过远播规划师的分析后，找到了适合的学校，真是我们家的贵人</p>
                </div>
              </div>
              <div class="scroll">
                <div><img src="../../assets/index/talk_img2.jpg" class="img"/></div>
                <div class="scroll_flot">
                  <div class="scroll_title">张同学妈妈<br>
                  上海徐汇  小升初</div>
                  <p class="scroll_text">孩子升高一,面对这么多学校，不知怎么选,经过远播规划师的分析后，找到了适合的学校，真是我们家的贵人</p>
                </div>
              </div>
              <div class="scroll">
                <div><img src="../../assets/index/talk_img3.jpg" class="img"/></div>
                <div class="scroll_flot">
                  <div class="scroll_title">张同学妈妈<br>
                  上海徐汇  小升初</div>
                  <p class="scroll_text">孩子升高一,面对这么多学校，不知怎么选,经过远播规划师的分析后，找到了适合的学校，真是我们家的贵人</p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div class="group" style="margin-top:30px;margin-bottom:30px;">
      <div class="borders">
        <p class="bord_title">1分钟精准匹配规划</p>
        <p class="bord_text">YIFENZHONGJINGZHUNPIPEIGUIHUA</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
          <el-form-item prop="name" style="margin-left:23px;">
            <el-input placeholder="学生姓名" v-model="ruleForm.name" style="width:330px;"></el-input>
          </el-form-item>
          <el-form-item prop="number" style="margin-left:23px;">
            <el-input placeholder="联系号码" v-model="ruleForm.number" style="width:330px;"></el-input>
          </el-form-item>
          <el-form-item prop="dqxl" style="margin-left:23px;">
            <el-input placeholder="当前学历" v-model="ruleForm.dqxl" style="width:330px;"></el-input>
          </el-form-item>
          <el-form-item prop="jhxl" style="margin-left:23px;">
            <el-select v-model="ruleForm.jhxl" placeholder="计划学历" style="width:330px;">
              <el-option
                v-for="item in plan"
                :key="item.value"
                :label="item.label"
                :value="item.label">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="school" style="margin-left:23px;">
            <el-input placeholder="目标学校" v-model="ruleForm.school" style="width:330px;"></el-input>
          </el-form-item>
          <el-form-item style="margin-left:13px;">
            <el-button class="form_but" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!--这里应该是点击跳转的   现在暂时没有跳转后期需要加上-->
      <div class="borders1" style="margin-left:20px"></div>
      <div class="borders2" style="margin-left:20px"></div>
    </div>
    <div class="school1">
      <p class="title1">学历提升热门推荐院校</p>
      <p class="title_s1">Hot Recommended Institutions for Academic Degree Promotion</p>
      <div class="group1">
        <div class="block1">
          <a
            class="itemm"
            v-for="(item,index) in SchoolList"
            :key="'SchoolList'+index"
            :href="item.scLink"
          >
            <div class="img1">
              <img :src="[item.scBottomLogo]" alt />
            </div>
            <div class="neirong1">
              <div class="name1">
                <div>{{item.scGname}}</div>
                <div>
                  <span
                    v-for="(type,index) in item.scTypes"
                    :key="'scTypes'+index"
                    class="type1"
                    :class="{'type11':type == 253 || type == 254 || type == 257,'type2':type == 255 || type == 256,}"
                  >
                    <span v-if="type == 253">成考</span>
                    <span v-else-if="type == 254">网教</span>
                    <span v-else-if="type == 255">开放</span>
                    <span v-else-if="type == 256">同等</span>
                    <span v-else-if="type == 257">在职研</span>
                  </span>
                </div>
              </div>
              <div class="conts1">
                <div class="jj1">{{item.scIntroInfo.substring(0,40)}}</div>
                <div class="zy1">
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
        <div class="scBmInfo1">
          <div class="title_info1">
            <div class="info_title_b1">本月已报名成功</div>
            <div class="info_title_s1">BENYUEYIBAOMINGCHENGGONG</div>
          </div>
          <div class="list1">
            <!--:class-option="classOption"-->
            <vue-seamless-scroll :data="applyList">
              <div class="itemm" v-for="(item,index) in applyList" :key="index">
                <div class="icon1">
                  <img src="../../assets/index/school_info_pic.png" alt />
                </div>
                <div class="conts1">
                  <div class="name1">
                    {{item.userName}}
                    <span>{{item.planEducation}}</span>
                  </div>
                  <div class="yx1">
                    <span>报名院校：</span>
                    {{item.targetSchools}}
                  </div>
                </div>
              </div>
            </vue-seamless-scroll>
          </div>
        </div>
      </div>
    </div>
    <!-- 职业资格开始 -->
    <div class="zyzgz">
      <p class="zy_titlet">覆盖95%以上的职业需要</p>
      <p class="zy_title_st">Covering more than 95% of vocational examination needs</p>
      <div class="zy_single_navs">
        <div  v-for="(item,index) in OneNVQ" :key="index" :class="{'zy_itemi':true,addRed:index===addClass}" @click="switchover(item.id,index)">{{item.typeName}}</div>
      </div>
      <div class="zy_blockb">
        <div class="zy_single_contss">
          <div class="zy_itemis" v-for="(item,index) in TwoNVQ1" :key="index">
            <div class="zy_imgi">
              <img :src="[item.picture]"/>
            </div>
            <div class="zy_contsc">
              <p class="item_titlei">{{item.typeName}}</p>
              <p class="jjj">{{item.typeInfo.substring(0,40)}}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="coursess">
      <p class="title">网校在线备考课程</p>
      <p class="title_s">随时随地，享受品质教育</p>
      <div class="cour-page">
        <div class="cour-buttons">
          <div class="cour-but" @click="cutPage('up')"><i class="el-icon-arrow-left"></i></div>
          <div class="cour-but" @click="cutPage('down')"><i class="el-icon-arrow-right"></i></div>
        </div>
      </div>
      <div class="cour-posi">
        <div class="cour-block" v-for="(item,index) in course" :key="index">
          <img :src="item.img" class="cour-imgs"/>
          <div class="cour-title">{{item.title}}</div>
          <div class="cour-class">
            {{item.zhuanYe.name}}
            <el-divider direction="vertical"></el-divider>
            共{{item.detailSummaries.allCount}}门课程
          </div>
          <div style="margin-top:20px;">
            <span class="cour-live" v-show="item.detailSummaries.liveCourseCount">直播</span>
            <span class="cour-db" v-show="item.detailSummaries.videoCourseCount">点播</span>
            <span class="cour-ms" v-show="item.detailSummaries.faceToFaceCourseCount">面授</span>
          </div>
          <div class="cour-num">
            <div>{{item.clicks}}人已购</div>
            <div class="cour-money">￥{{item.price}}</div>
          </div>
        </div>
      </div>
    </div>
    <!--升学流程-->
    <div>
      <div class="flow">
        <img src="../../assets/index/sxlc_img.png" class="sxlc" alt />
      </div>
    </div>
    <div class="newsList">
      <div class="groupg">
        <p class="titlet">
          热门资讯
          <a href="/News/list#/journalism">查看更多</a>
        </p>
        <ul>
          <li class="ul_title">
            自学考试
            <em></em>
          </li>
          <li v-for="(item,index) in NewsList1" :key="'NewsList1'+index">
            <router-link
              :to="{path:'/news',query: {id:item.snId}}"
            >{{item.snSubtitle}}</router-link>
          </li>
        </ul>
        <ul>
          <li class="ul_title">
            成人高考
            <em></em>
          </li>
          <li v-for="(item,index) in NewsList2" :key="'NewsList2'+index">
            <router-link
              :to="{path:'/news',query: {id:item.snId}}"
            >{{item.snSubtitle}}</router-link>
          </li>
        </ul>
        <ul>
          <li class="ul_title">
            网络教育
            <em></em>
          </li>
          <li v-for="(item,index) in NewsList3" :key="'NewsList3'+index">
            <router-link
              :to="{path:'/news',query: {id:item.snId}}"
            >{{item.snSubtitle}}</router-link>
          </li>
        </ul>
        <ul>
          <li class="ul_title">
            在职研
            <em></em>
          </li>
          <li v-for="(item,index) in NewsList4" :key="'NewsList4'+index">
            <router-link
              :to="{path:'/news',query: {id:item.snId}}"
            >{{item.snSubtitle}}</router-link>
          </li>
        </ul>
        <ul>
          <li class="ul_title">
            出国留学
            <em></em>
          </li>
          <li v-for="(item,index) in NewsList5" :key="'NewsList5'+index">
            <router-link
              :to="{path:'/news',query: {id:item.snId}}"
            >{{item.snSubtitle}}</router-link>
          </li>
        </ul>
        <ul>
          <li class="ul_title">
            考试动态
            <em></em>
          </li>
          <li v-for="(item,index) in NewsList6" :key="'NewsList6'+index">
            <router-link
              :to="{path:'/news',query: {id:item.snId}}"
            >{{item.snSubtitle}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="teacher">
      <p class="titlet">资深学历提升/职业考试规划师</p>
      <p class="title_st">Covering more than 95% of vocational examination needs</p>
      <div class="blockt">
        <div class="itemt" v-for="(item,index) in teacher" :key="'teacher'+index">
          <div class="imgt">
            <img :src="item.staLpic" alt />
            <div class="hott" v-if="item.staRecommend == 1">热门</div>
          </div>
          <div class="contst">
            <p class="item_titlet">{{item.staTitle}}</p>
            <p class="jjt">{{item.staTwoTitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from '@/utile/request.js'
import requestwx from '@/utile/requestwx.js'
export default {
  name: 'home',
  data () {
    return {
      searchs: '',
      plan: [
        {value: '1', label: '专科'},
        {value: '2', label: '本科'},
        {value: '3', label: '研究生'}
      ],
      addClass: 0,
      SchoolList: [],
      applyList: [],
      OneNVQ: [],
      TwoNVQ1: [],
      course: [],
      NewsList1: [],
      NewsList2: [],
      NewsList3: [],
      NewsList4: [],
      NewsList5: [],
      NewsList6: [],
      teacher: [],
      ruleForm: {
        name: '',
        number: '',
        dqxl: '',
        jhxl: '',
        school: ''
      },
      numbers: 0,
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
          { min: 2, max: 10, message: '请输入2-10个字符', trigger: 'blur' },
          {pattern: /^[\u4E00-\u9FA5]+$/, message: '请输入中文', trigger: 'blur'}
        ],
        number: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误', trigger: 'blur' }
        ],
        dqxl: [
          { required: true, message: '请输入当前学历', trigger: 'blur' },
          {pattern: /^[\u4E00-\u9FA5]+$/, message: '请输入中文', trigger: 'blur'}
        ],
        jhxl: [
          { required: true, message: '请输入计划学历', trigger: 'blur' }
        ],
        school: [
          { required: true, message: '请输入目标学校', trigger: 'blur' },
          {pattern: /^[\u4E00-\u9FA5]+$/, message: '请输入中文', trigger: 'blur'}
        ]
      }

    }
  },
  methods: {
    // 获取报名成功列表
    getApply () {
      let that = this
      request({
        url: '/eduWeb/register/findByAllUserFrom',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '10',
          enlistType: '院校'
        }
      })
        .then(function (response) {
          that.applyList = response.rows
        })
    },
    // 获取学校列表(这里获取的是审核通过的合作院校)
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '6',
          scIspass: '1',
          smRecomed: '1'
        }
      })
        .then(function (response) {
          that.SchoolList = response.rows
        })
    },
    // 获取职业资格一级分类即标题(1级职能)
    occupational () {
      let that = this
      request({
        url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByOneType',
        method: 'get',
        params: {
          type: '1',
          pageNum: '1',
          pageSize: '6',
          sort: '1',
          isDelete: '0'
        }
      })
        .then(function (response) {
          let arry = response.rows
          for (let i = arry.length - 1; i > -1; i--) {
            that.OneNVQ.push(arry[i])
          }
          that.occupationalTwo(that.OneNVQ[0].id)
        })
    },
    // 一级职业资格点击切换事件
    switchover (id, index) {
      this.addClass = index
      this.occupationalTwo(id)
    },
    // 职业资格二级分类
    occupationalTwo (parentid) {
      let that = this
      request({
        url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByOneType',
        method: 'get',
        params: {
          type: '1',
          pageNum: '1',
          pageSize: '6',
          sort: '2',
          parentId: parentid,
          isDelete: '0'
        }
      })
        .then(res => {
          that.TwoNVQ1 = res.rows
        })
    },
    // 资讯列表
    information () {
      let that = this
      // 获取自学考试列表
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType: '501'
        }
      })
        .then(response => {
          that.NewsList1 = response.rows
        })
        // 成人高考
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType: '502'
        }
      })
        .then(response => {
          that.NewsList2 = response.rows
        })
      // 网络教育
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType: '503'
        }
      })
        .then(response => {
          that.NewsList3 = response.rows
        })
      // 在职研
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType: '504'
        }
      })
        .then(response => {
          that.NewsList4 = response.rows
        })
      // 出国留学
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType: '505'
        }
      })
        .then(response => {
          that.NewsList5 = response.rows
        })
      // 考试动态
      request({
        url: '/eduWeb/newsllistForeign/getAllnewsList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4',
          snOneType: '506'
        }
      })
        .then(response => {
          that.NewsList6 = response.rows
        })
    },
    // 上一页下一页切换点击事件
    cutPage (value) {
      if (value === 'up') {
        this.numbers--
        if (this.numbers < 0) {
          this.numbers = 0
        }
      } else if (value === 'down') {
        this.numbers++
      }
      this.getClass()
    },
    // 获取网校vip课程
    getClass () {
      let that = this
      if (that.numbers > -1) {
        requestwx({
          url: '/api/Course/vip',
          method: 'get',
          params: {
            PageSize: '5',
            PageIndex: that.numbers
          }
        })
          .then(response => {
            that.course = response.data
          })
      }
    },
    // 获取资深教师事件
    getTeacher () {
      let that = this
      request({
        url: '/eduWeb/foreignTeacher/list',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '4'
        }
      })
        .then(function (response) {
          that.teacher = response.rows
        })
    },
    // 精准匹配规划提交时间
    submitForm (formName) {
      let that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          request({
            url: '/eduWeb/register/addUserFrom',
            method: 'post',
            data: {
              nickName: that.ruleForm.name,
              userMobile: that.ruleForm.number,
              nowEducation: that.ruleForm.dqxl,
              planEducation: that.ruleForm.jhxl,
              targetSchools: that.ruleForm.school,
              enlistType: '院校'
            }
          })
            .then(function (response) {
              if (response.code === 200) {
                if (response.data === '成功') {
                  that.$message({
                    message: '提交成功，稍后会有专业老师跟你联系！',
                    type: 'success'
                  })
                  that.ruleForm.name = that.ruleForm.number = that.ruleForm.dqxl = that.ruleForm.jhxl = that.ruleForm.school = ''
                } else {
                  that.$message.error('提交失败，请重试！')
                }
              }
            })
        }
      })
    }
  },
  created () {
    this.getClass()
  },
  mounted () {
    this.getSchool()
    this.getApply()
    this.occupational()
    this.information()
    this.getTeacher()
  }
}
</script>
<style scoped lang='scss'>
  .cour-buttons{
    border: 1px solid #E8E8E8;
    width: 71px;
    height: 24px;
    line-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    float: right;
  }
  .cour-page{
    width: 1200px;
    margin: auto;
    height: 20px;
  }
  .cour-but{
    flex: auto;
    text-align: center;
    cursor: pointer;
    &:first-child{
      border-right: 1px solid #E8E8E8;
    }
    &:hover{
      background-color: #4595E7;
    }
  }
/deep/ .el-input__inner{
  height:45px;
  }
  .backimg{
    background:url('~@/assets/index/header.png') no-repeat center center;
    height: 849px;
    overflow: hidden;
    background-size: 100% 100%;
  }
  .group_title{
    text-align: center;
    color: #fff;
    font-size: 46px;
    font-weight: bold;
    margin-top: 62px;
  }
  .title_s{
    text-align: center;
    font-size: 20px;
    color: #fff;
    margin-top: 10px;
  }
  .el-button{
    border-radius:0 4px 4px 0;
    color: #fff;
    border: none;
    width: 80px;
    position: relative;
    left: -10px;
    height: 45px;
    line-height: 16px;
  }
  .cour-posi{
    width: 1200px;
    margin: 40px auto;
  }
  .cour-imgs{
    width: 100%;
    height: 116px;
  }
  .cour-block{
    padding: 10px 15px;
    width: 195px;
    height: 275px;
    background-color: #fff;
    display: inline-block;
    margin-right: 15px;
    &:nth-child(5){
      margin-right: 0px !important;
    }
  }
  .cour-title{
    font-size: 12px;
    min-height: 30px;
    margin-top: 10px;
  }
  .cour-class{
    font-size: 10px;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #999;
  }
  .block{
    background-color: #fff;
    overflow: hidden;
    height: 550px;
    padding: 25px;
    width: 100%;
    margin-top: 50px;
    padding: 25px;
  }
  .item{
    float: left;
    padding-left: 40px;
    padding-top: 27px;
    margin-bottom: 24px;
    margin-right: 23px;
    background: url('~@/assets/index/header_img1.jpg');
    background-size: 100% 100%;
  }
  .item1{
    float: left;
    padding-left: 40px;
    padding-top: 27px;
    margin-bottom: 24px;
    margin-right: 23px;
    background: url('~@/assets/index/header_img2.png');
    background-size: 100% 100%;
  }
  .item2{
    float: left;
    padding-left: 40px;
    padding-top: 27px;
    margin-bottom: 24px;
    margin-right: 23px;
    background: url('~@/assets/index/header_img3.png');
    background-size: 100% 100%;
  }
  .item3{
    float: left;
    padding-left: 40px;
    padding-top: 27px;
    margin-bottom: 24px;
    margin-right: 23px;
    background: url('~@/assets/index/header_img4.jpg');
    background-size: 100% 100%;
  }
  .item4{
    float: left;
    padding-left: 40px;
    padding-top: 27px;
    margin-bottom: 24px;
    margin-right: 23px;
    background: url('~@/assets/index/header_img5.jpg');
    background-size: 100% 100%;
  }
  .item_b1{
    width: 322px;
    height: 225px;
  }
  .item_b{
    width: 514px;
    height: 243px;
  }
  .item_s{
    width: 514px;
    height: 243px;
  }
  .title{
    color: #333333;
    font-size: 28px;
    font-weight: bold;
    text-align: left;
    margin-bottom: 7px !important;
  }
  .conts{
    color: #686869;
    font-size: 14px;
    line-height: 25px;
    margin-bottom: 12px !important;
  }
  .item_btn{
    width: 180px;
    height: 42px;
    text-align: center;
    color: #0B5FA8 !important;
    border: 1px solid #0B5FA8;
    background-color: #fff;
    margin-top: 7px;
    cursor: pointer;
    position: relative;
    display: block;
  }
  .span{
    z-index: 2;
    line-height: 40px;
    position: relative;
  }
  a{
    text-decoration: none;
  }
  .item_btn:hover{
    color: #fff !important;
  }
  .item_btn:hover:before{
    width: 100%;
  }
  .item_btn:before{
    content: " ";
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #0B5FA8;
    -webkit-transition: width .2s ease-in-out;
    transition: width .2s ease-in-out;
  }
  .group_my{
    width: 1181px;
    margin: auto;
    margin-top: 50px;
    border:1px solid #D7DCE1;
  }
  .cour-live{
    font-size: 10px;
    padding: 3px 5px;
    border-radius: 2px;
    border: 1px solid #FF7439;
    color: #FF7439;
  }
  .cour-db{
    font-size: 10px;
    padding: 3px 5px;
    border-radius: 2px;
    border: 1px solid #1B89FA;
    color: #1B89FA;
  }
  .cour-ms{
    font-size: 10px;
    padding: 3px 5px;
    border-radius: 2px;
    border: 1px solid #19A211;
    color: #19A211;
  }
  .cour-num{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 10px;
    color: #999999;
    margin-top: 15px;
  }
  .cour-money{
    color:#F15817;
    font-size: 14px;
    font-weight: bold;
  }
  .idea{
    display: flex;
    flex-direction: row;
  }
  .idea_title{
    width: 108px;
    height: 115px;
    font-weight: 700;
    font-size: 24px;
    color: #333;
    padding-top: 43px;
    text-align: center;
    border-right: 1px solid #D7DCE1;
  }
  .red{
    width: 100%;
    height: 100%;
  }
  .scroll{
    float: left;
    margin-top: 20px;
    margin-left: 25px;
    display: flex;
    flex-direction: row;
    color: #333333;
    font-size: 12px;

  }
  .scroll_title{
    line-height: 20px;
  }
  .img{
    width: 102px;
    height: 120px;
  }
  .scroll_text{
    line-height: 18px;
  }
  .scroll_flot{
    margin-left: 15px;
    width: 200px;
  }
  .borders{
    width: 373px;
    height: 510px;
    border: 1px solid #d7dce1;
    float: left;
  }
  .bord_title{
    color: #0B5FA8;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
    margin-top: 24px;
    text-align: center;
  }
  .bord_text{
    font-size: 10px;
    text-align: center;
    color: #6b6b6b;
    text-align: center;
    position: relative;
    top: -15px;
  }
  .form_but{
    margin-left: 20px;
    width: 330px;
    border-radius: 4px;
    background-color: #0B5FA8;
  }
  .borders1{
    width: 383px;
    height: 510px;
    float: left;
    background: url('~@/assets/index/xxtj_img1.jpg');
    background-size: 100% 100%;
  }
  .borders2{
    width: 383px;
    height: 510px;
    float: left;
    background: url('~@/assets/index/xxtj_img2.jpg');
    background-size: 100% 100%;
  }
  .school{
    background-color: #F7F7F7;
    margin-top: 40px;
    padding: 50px 0;
  }
  .school_title{
    text-align: center;
    font-size: 30px;
    color: #000;
    margin-bottom: 15px!important;
  }
  .school_en{
    font-size: 12px;
    color: #999;
    text-align: center;
    margin-bottom: 44px!important;
  }
  .school_left{
    width: 915px;
    float: left;
    overflow: hidden;
  }
  .school_text{
    width: 286px;
    height: 280px;
    float: left;
    background-color: #fff;
    margin-right: 19px;
    margin-bottom: 20px;
    display: block;
  }
  .scbmInfo{
    float: right;
    width: 262px;
    background: url('~@/assets/index/school_info.jpg')no-repeat top center;
    background-color: #fff;
    position: relative;
  }
  .scbm_title{
    text-align: center;
    color: #ff4848;
  }
  .scbn_apply{
    font-weight: bold;
    font-size: 20px;
    line-height: 21px;
    position: relative;
    top: -10px;
  }
  .scbn_en{
    font-size: 10px;
    position: relative;
    top: -25px;
  }
  .network{
    background-color: #F84849;
  }
  .carous{
    background-color: #F84849;
  }
  .carous_color{
    background-color: #fff;
    width: 200px;
  }
  .flow{
    background:url('~@/assets/index/sxlc.jpg') no-repeat center center;
    height: 659px;
    overflow: hidden;
    text-align: center;
  }
  .sxlc{
    padding: 42px 0;
  }

  /**scss */
  .school1{
    background-color: #f7f7f7;
    overflow: hidden;
    .title1{
        text-align: center;
        margin-top: 50px;
        font-size: 30px;
        color: #000;
        margin-top: 45px;
        margin-bottom: 15px !important;
    }
    .title_s1{
        font-size: 12px;
        color: #999999;
        text-align: center;
        margin-bottom: 44px !important;
    }
    .group1{
        width: 1181px;
        margin:auto;
        overflow: hidden;
        margin-bottom: 43px;
        .block1{
            width: 915px;
            float: left;
            overflow: hidden;
            a{
              text-decoration: none;
            }
            .itemm{
                width: 286px;
                height: 280px;
                float: left;
                background-color: #fff;
                margin-right: 19px;
                margin-bottom: 20px;
                display: block;
                overflow: hidden;
                .img1{
                    width: 286px;
                    height: 151px;
                    animation: img 3s ease-in 1;
                    transition: all 0.8s;
                    transform:rotate(0deg);
                    transform:scale(1.0);
                    img{
                        width: 286px;
                        height: 151px;
                    }
                }
                .img1:hover{
                    animation: img 3s ease-in 1;
                    transition: all 0.6s;
                    transform:rotate(0deg);
                    transform:scale(1.1);
                }
                .neirong1{
                    overflow: hidden;
                    padding: 12px 14px;

                    .name1{
                        overflow: hidden;
                        margin-bottom: 6px;
                        div{
                            font-weight: bold;
                            font-size: 18px;
                            color: #202020;
                            line-height: 22px;
                            display: inline;
                            margin-right: 10px;
                        }
                        div{
                            float: left;
                        }
                        .type1{
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
                        .type11{
                            background-color: #f39c12;
                        }
                        .type2{
                            background-color: #626eef;
                        }
                        .type3{
                            background-color: #ff6060;
                        }
                    }
                    .conts1{
                        font-size: 12px;
                        .jj1{
                            color: #4f4f4f;
                            line-height: 18px;
                            margin-bottom: 5px;
                        }
                        .zy1{
                            color: #a3a3a3;
                            line-height: 18px;
                        }
                    }
                }
            }
        }
        .yx1{
          margin-top: 5px;
        }
        .scBmInfo1{
            float: right;
            width: 262px;
            background: url('~@/assets/index/school_info.jpg')no-repeat top center;
            background-color: #fff;
            position: relative;
            .title_info1{
                position: absolute;
                left: 22px;
                top: 14px;
                color: #ff4848;

                .info_title_b1{
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 21px;
                    margin-bottom: 5px;
                }
                .info_title_s1{
                    font-size: 10px;
                }
            }

            .list1{
                width: 262px;
                padding: 0 10px;
                margin-top: 81px;
                overflow: hidden;
                height: 498px;

                .itemm{
                    border-bottom: 1px solid #e9e9e8;
                    height: 64px;
                    padding: 8px 0;
                    padding-left: 18px;
                    cursor: pointer;
                    .icon1{
                        width: 33px;
                        height: 33px;
                        float: left;
                        margin-top: 4px;
                        img{
                            width: 33px;
                            height: 33px;
                        }
                    }
                    .conts1{
                        float: left;
                        font-size: 14px;
                        color: #858585;
                        margin-left: 13px;
                    }
                }
            }
        }
    }
  }
  .zyzgz{
    overflow: hidden;
  }
  .zy_titlet{
    text-align: center;
    margin-top: 50px;
    font-size: 30px;
    color: #000;
    margin-top: 45px;
    margin-bottom: 15px !important;
  }
  .zy_title_st{
    font-size: 12px;
    color: #999999;
    text-align: center;
    margin-bottom: 44px !important;
  }
  .zy_single_navs{
    overflow: hidden;
    width: 1015px;
    margin: auto;
    margin-bottom: 26px;
    text-align: center;
  }
  .zy_itemi{
     width: 145px;
    height: 40px;
    border: 1px solid #cccccc;
    background-color: white;
    color: #333333;
    font-size: 15px;
    text-align: center;
    line-height: 40px;
    margin: 0 12px;
    cursor: pointer;
    display: inline-block;
  }
  .zy_itemi:hover{
    border: 1px solid #1B89FA;
    background-color: #1B89FA;
    color: #fff;
  }
  .addRed{
    border: 1px solid #1B89FA !important;
    background-color: #1B89FA !important;
    color: #fff !important;
  }
  .zy_blockb{
    width: 1215px;
    margin: auto;
    overflow: hidden;
  }
  .zy_itemis{
    width: 371px;
    height: 317px;
    float: left;
    margin: auto 17px;
    margin-bottom: 22px;
    cursor: pointer;
  }
  .zy_imgi{
    width: 371px;
    height: 195px;
    overflow: hidden;
    img{
      width: 371px;
      height: 195px;
      animation: img 3s ease-in 1;
      transition: all 0.8s;
      transform:rotate(0deg);
      transform:scale(1);
    }
    img:hover{
      animation: img 3s ease-in 1;
      transition: all 0.6s;
      transform:rotate(0deg);
      transform:scale(1.1);
    }
  }
  .zy_contsc{
    text-align: center;
    overflow: hidden;
    .item_title{
      font-size: 16px;
      color: #343434;
      line-height: 40px;
      margin-top: 15px;
    }
    .jjj{
      font-size: 14px;
      color: #b0b0b0;
      width: 335px;
      margin: auto;
      margin-bottom: 20px !important;
      padding: 0 20px;
      text-align: center;
    }
  }
  .zyzg_btnz{
    width: 262px;
    height: 42px;
    border-radius:50px;
    border: 1px solid #1B89FA;
    text-align: center;
    font-size: 15px;
    line-height: 42px;
    margin: auto;
    margin-bottom: 35px;
    color: #1B89FA;
    cursor: pointer;
    background-color: #fff;
    &:hover{
        background-color: #1B89FA;
        color: #fff;
    }
  }
.newsList{
    background-color: #f6f6f6;
    overflow: hidden;
    .groupg{
        width: 1181px;
        margin: auto;
        overflow: hidden;
        margin-bottom: 60px;

        .titlet{
            font-weight: bold;
            font-size: 24px;
            color: #333333;
            overflow: hidden;
            margin-top: 45px;
            margin-bottom: 30px !important;

            a{
                font-weight: 500;
                font-size: 16px;
                color: #666666;
                float: right;
            }
            a:hover{
              color: #1B89FA;
            }
        }
        ul{
            width: 244px;
            float: left;
            margin-right: 155px;
            color: #333333;
            margin-bottom: 25px;

            .ul_title{
                font-size: 16px !important;
                margin-bottom: 5px !important;
                padding-left: 5px;
                em{
                    vertical-align: middle;
                    display: inline-block;
                    width: 183px;
                    height: 1px;
                    margin: 0 10px;
                    background: #d7dce1;
                }
            }
            li{
                line-height: 36px;
                overflow: hidden;
                white-space: nowrap;
                font-size: 14px;
                text-overflow: ellipsis;
                overflow: hidden;
                a{
                  color: #666666;
                }
                a:hover{
                  color: #1B89FA;
                  font-size: 15px;
                }
            }
            &:nth-of-type(3),&:nth-of-type(6){
                margin-right: 0;
            }
        }
    }

}
.teacher{
    overflow: hidden;
    .titlet{
        text-align: center;
        margin-top: 50px;
        font-size: 30px;
        color: #000;
        margin-top: 35px;
        margin-bottom: 10px !important;
    }
    .title_st{
        font-size: 12px;
        color: #999999;
        text-align: center;
        margin-bottom: 25px !important;
    }
    .blockt{
        width: 1181px;
        margin:auto;
        overflow: hidden;
        margin-top: 50px;
        padding: 0 28px;
        .itemt{
            width: 261px;
            float: left;
            overflow: hidden;
            margin: 0 10px;
            margin-bottom: 78px;
            cursor: pointer;
            .imgt{
                position: relative;
                overflow: hidden;
                img{
                    width: 261px;
                    height: 200px;
                    animation: img 3s ease-in 1;
                    transition: all 0.8s;
                    transform:rotate(0deg);
                    transform:scale(1);
                }
                img:hover{
                  animation: img 3s ease-in 1;
                  transition: all 0.6s;
                  transform:rotate(0deg);
                  transform:scale(1.1);
                }
                .hott{
                    position: absolute;
                    left: 10px;
                    top: 10px;
                    font-size: 15px;
                    text-align: center;
                    color: #fff;
                    background-color: #F15817;
                    width: 41px;
                    height: 22px;
                    text-align: center;
                    border-radius:3px;
                }
            }
            .contst{
                text-align: center;
                .item_titlet{
                  font-size: 18px;
                  color: #313131;
                  font-weight:bold;
                  line-height: 32px;
                  margin-top: 10px;

                }
                .jjt{
                  color: #9b9b9b;
                  font-size: 16px;
                  margin-bottom: 20px !important;
                }
            }
        }
    }
}
//网校在线备考课程
.coursess{
    overflow: hidden;
    background-color: #F4F4F4;
    .title{
      text-align: center;
      margin-top: 50px;
      font-size: 30px;
      color: #000;
      font-weight: 500;
      margin-top: 35px;
      margin-bottom: 10px !important;
    }
    .title_s{
      font-size: 12px;
      color: #999999;
      text-align: center;
      margin-bottom: 25px !important;
    }
}
</style>
