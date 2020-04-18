<template>
  <div>
    <div class="bg">
      <div class="top">
        <p class="title">报考院校任你选 名校学历唾手可得</p>
        <p class="title_r">汇聚211/985高端名校首府，含金量更有保障</p>
        <div class="search">
          <el-input v-model="search" placeholder="搜索学校中文简称或全称" clearable></el-input>
          <el-button class="su" @click="getSchool">搜索</el-button>
        </div>
        <p class="text">
          学历提升行业旗舰，高等教育资源雄厚。新里程教育已经与多所高等院校开展招生合作，包括“211工程”建
          <br />设的全国重点大学、“985工程”知名高水平大学以及教育部直属重点高校。
        </p>
      </div>
      <div class="group">
        <div class="filter">
          <div class="nav nav_type">
            <span class="type">院校类型</span>
            <span class="item" @click="screen('','all')" :class="{'on':schoolCheck==='all'}">全部</span>
            <span
              class="item"
              :class="{'on':schoolCheck===index}"
              v-for="(item,index) in SchoolType"
              :key="index"
              @click="screen(item.id,index)"
            >{{item.typeName}}</span>
          </div>
          <div class="nav nav_cengci">
            <span class="type">报考层次</span>
            <span class="item"  @click="examinationLevel('','all')" :class="{'on':ccCheck==='all'}">全部</span>
            <span
              class="item"
              v-for="(item,index) in SchoolCengci"
              :key="index"
              :class="{'on':ccCheck===index}"
              @click="examinationLevel(item.id,index)"
            >{{item.typeName}}</span>
          </div>
        </div>
        <div class="list" v-if="school.length > 0">
          <div class="item" v-for="(item,index) in school" :key="'school'+index">
            <div class="img">
              <img :src="item.scIndexLogo" alt srcset />
            </div>
            <div class="hr"></div>
            <div class="neirong">
              <p class="name">{{item.scGname}}</p>
              <p class="conts">{{item.scIntroInfo.substring(0,85)}}</p>
              <p class="type">
                <span>热门报考专业:</span>
                <span
                  class="zy"
                  v-for="(zy,index) in item.collageMajors"
                  :key="'collageMajors'+index"
                >{{zy.smName}}</span>
              </p>
            </div>
            <div class="hr" style="margin-right: 14px;"></div>
            <div class="item_btn">
              <div class="btnList">
                <el-button class="btns">
                  <i class="iconfont icon-06 icons"></i>我要报名
                </el-button>
                <el-button class="btns">
                  <a :href="item.scLink" target="_blank"><i class="iconfont icon-pinglun icons"></i>查看详情</a>
                </el-button>
              </div>
              <p class="xq">
                <span class="cont">
                  <img src="../../assets/search/item_icon1.jpg" alt />
                  <span>学校简介</span>
                </span>
                <span class="cont">
                  <img src="../../assets/search/item_icon2.jpg" alt />
                  <span>招生简章</span>
                </span>
                <span class="cont">
                  <img src="../../assets/search/item_icon3.jpg" alt />
                  <span>招生专业</span>
                </span>
              </p>
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
        <div class="list" v-if="school.length === 0">
          <h3>暂无数据</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utile/request.js'
export default {
  data () {
    return {
      search: '',
      seoTitle: '新里程教育',
      seoWords: 'keyWords',
      seoRiption: 'Description',
      school: {},
      SchoolType: [],
      SchoolCengci: [],
      lmid: '',
      flid: '',
      schoolCheck: 'all',
      ccCheck: 'all',
      total: 0,
      pageObject: {
        length: 8,
        pageNo: 1,
        exporter: 0
      }
    }
  },
  methods: {
    currentchange (val) {
      this.pageObject.pageNo = val
      this.getSchool()
    },
    // 获取院校类型
    getSchoolType () {
      let that = this
      request({
        url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByOneType',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '100',
          type: '5',
          sort: '1'
        }
      })
        .then(res => {
          that.SchoolType = res.rows
          that.getGradation()
        })
    },
    // 获取报考层次
    getGradation (id = '') {
      let that = this
      request({
        url: '/eduWeb/jyEducationFunctionDictionariesForeign/findByTwoReturnOne',
        method: 'get',
        params: {
          type: id
        }
      })
        .then(res => {
          that.SchoolCengci = res.data
        })
    },
    // 筛选院校类型
    screen (scType, index) {
      this.flid = scType
      this.schoolCheck = index
      this.getSchool()
    },
    // 筛选报考层次
    examinationLevel (scCtype, index) {
      this.lmid = scCtype
      this.ccCheck = index
      this.getSchool()
    },
    // 获取全部院校
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: that.pageObject.pageNo,
          pageSize: that.pageObject.length,
          scIspass: '1',
          scType: that.flid,
          scCtype: that.lmid,
          scGname: that.search
        }
      })
        .then(res => {
          that.school = res.rows
          that.total = res.total
        })
    }
  },
  mounted () {
    this.getSchoolType()
    this.getSchool()
  }
}
</script>
<style lang="scss" scoped>
/deep/ .el-input__inner{
  height: 50px;
  width: 725px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.bg{
    background: #f7f7f7;

}
.top{
    background: url('~@/assets/search/hd_img.jpg')no-repeat center center;
    height: 580px;
    overflow: hidden;
    .title{
        text-align: center;
        font-size: 56px;
        font-weight: bold;
        color: #fff;
        margin-top: 68px;
        margin-bottom: 12px !important;
    }
    .title_r{
        text-align: center;
        width: 540px;
        margin: auto;
        font-size: 22px;
        color: #e7e7e7;
        border: 1px solid #e7e7e7;
        border-radius:50px;
        line-height: 38px;
        margin-bottom: 35px !important;
    }
    .search{
        overflow: hidden;
        width: 832px;
        margin: auto;
        .su{
          float: right;
          width: 110px;
          position: relative;
          top: -50px;
          height: 51px;
          background-color: #0B5FA8;
          border: 0;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          color: #fff;
        }

    }
    .text{
        font-size: 16px;
        color: #919191;
        text-align: center;
        line-height: 23px;
        position: relative;
        top: -30px;
    }

}

.group{
    width: 1180px;
    background-color: #fff;
    position: relative;
    top: -145px;
    margin: auto;
    padding: 30px 38px;
    .filter{
        padding: 0 34px;
        .nav{
            overflow: hidden;
            span{
              font-size: 16px;
              margin-right: 30px;
              float: left;
              display: block;
              line-height: 52px;
              cursor: pointer;
            }
            .type{
                color: #7a7a7a !important;
            }
            .item{
                color: #909090 !important;
            }
            .item:hover{
              color: #9bcafe !important;
            }
            .on{
                color: #9bcafe !important;
            }
        }
        .hr{
            background: url('~@/assets/search/nav_hr.jpg');
            height: 2px;
            width: 100%;
        }
    }
    .list{
        overflow: hidden;
        h3{
            text-align: center;
            margin: 50px;
        }
        .item{
            overflow: hidden;
            margin-top: 40px;
            padding-bottom: 30px;
            border-bottom:1px solid #e7e7e7;
            &:last-of-type{
                border-bottom:0 !important;
            }
            .img{
                float: left;
                width: 116px;
                height: 116px;
                margin-left: 23px;
                margin-right: 36px;

                img{
                    width: 116px;
                    height: 116px;
                }
            }
            .hr{
                border-left:1px solid #e7e7e7;
                float: left;
                margin-right: 34px;
                width: 1px;
                height: 116px;
            }
            .neirong{
                float: left;
                width: 590px;
                padding-right: 26px;

                .name{
                    font-weight: bold;
                    font-size: 18px;
                    color: #666666;
                    margin-bottom: 3px !important;
                }
                .conts{
                    font-size: 13px;
                    color: #666666;
                    line-height: 22px;
                }

                .type{
                    color: #999999;
                    font-size: 13px;
                    margin-top: 15px;
                    .zy{
                        margin-right: 25px;
                    }
                }
            }
            .item_btn{
                overflow: hidden;
                width: 282px;
                .btnList{
                    overflow: hidden;
                    .btns{
                        width: 116px;
                        line-height: 18px;
                        border: 1px solid #999999;
                        text-align: center;
                        font-size: 12px;
                        color: #666666 !important;
                        border-radius:4px;
                        margin-right: 29px;
                        a{
                          text-decoration: none;
                          color: #666;
                        }
                        &:last-of-type{
                            margin-right: 0 !important;
                        }
                    }
                }
                .xq{
                    overflow: hidden;
                    margin-top: 18px;

                    .cont{
                        width: 78px;
                        float: left;
                        margin-right: 23px;
                        text-align: center;
                        font-size: 13px;
                        color: #666666 !important;
                        line-height: 18px;

                        img{
                            width: 16px;
                            height: 16px;
                            float: left;
                            margin-top: 2px;
                        }
                        &:last-of-type{
                            margin-right: 0;
                        }

                    }
                }
            }

        }
    }
    .page{
        text-align:center !important;
    }
  .icons{
    position: relative;
    right: 4px;
    height: 20px;
    width: 20px;
    top: 2px;
  }
}
.conter_bottor{
  text-align: center;
  margin-top: 30px;
}
</style>
