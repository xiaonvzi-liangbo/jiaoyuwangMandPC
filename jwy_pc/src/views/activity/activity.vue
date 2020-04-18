<template>
  <div style="background-color:#F7F7F7;">
    <img src="@/assets/coures/banners.png" class="ban-img"/>
    <div class="navigation">
      <div class="navs-center">
        <div><span class="nav-all">全部学院</span><span class="nav-all mous" :class="{'blue':one==='all'}" @click="swiall('all')">全部</span></div>
        <div><span class="nav-span mous" :class="{'blue':one===index}" v-for="(item,index) in fresh" :key="index" @click="switchover(index)">{{item.name}}</span></div>
      </div>
      <div class="navi-bttom">
        <div  style="width:180px;">
          <span class="nav-all">全部项目</span>
          <span class="nav-all nav-all2 mous" :class="{'blue':two==='all'}" @click="speall('all')">全部</span>
        </div>
        <div style="width:100%;">
          <span v-for="(item,index) in freshAll" :key="index" :class="{'blue':two===index}" @click="species(index)" class="nav-block mous">
            {{item.name}}
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="conter" v-for="(item,index) in acti" :key="index" :href="item.url">
        <div><img :src="item.img" width="600"/></div>
        <div class="interior">
          <div class="int-size">{{item.title}}</div>
          <div class="int-con">{{item.summary}}</div>
          <div class="int-bottom"><a :href="item.url" target="_blank" style="margin-right:20px;"><el-button type="primary" plain size="small">详情</el-button></a><el-button type="primary" size="small" plain id="jyw_zxbm">在线咨询</el-button></div>
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
</template>
<script>
import request from '@/utile/requestwx.js'
export default {
  name: 'activity',
  data () {
    return {
      freshAll: [
        {
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
        },
        {
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
        },
        {
          'name': '英语四六级',
          'kind': '5'
        },
        {
          'name': '教师资格',
          'kind': '6'
        },
        {
          'name': '5G应用系统工程师',
          'kind': '50'
        },
        {
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
        },
        {
          'name': '健康管理师',
          'kind': '14'
        },
        {
          'name': '会计职称',
          'kind': '47'
        },
        {
          'name': '审计师',
          'kind': '45'
        }
      ],
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
      ],
      acti: [],
      reception: [
        {
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
        },
        {
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
        },
        {
          'name': '英语四六级',
          'kind': '5'
        },
        {
          'name': '教师资格',
          'kind': '6'
        },
        {
          'name': '5G应用系统工程师',
          'kind': '50'
        },
        {
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
        },
        {
          'name': '健康管理师',
          'kind': '14'
        },
        {
          'name': '会计职称',
          'kind': '47'
        },
        {
          'name': '审计师',
          'kind': '45'
        }
      ],
      pageObject: {
        length: 5,
        pageNo: 1,
        exporter: 0
      },
      one: 'all',
      two: 'all',
      kind: '',
      counts: 0
    }
  },
  methods: {
    // 当前页改变事件
    currentchange (val) {
      this.pageObject.pageNo = val
      this.getActivity()
    },
    // 获取课程活动
    getActivity () {
      let that = this
      request({
        url: '/api/TopicList',
        method: 'get',
        params: {
          page: that.pageObject.pageNo,
          kind: that.kind
        }
      })
        .then(res => {
          that.acti = res.data
          that.counts = parseInt(res.headers['p-totalitemcount'])
        })
    },
    // 全部学院切换点击事件
    switchover (index) {
      this.freshAll = this.fresh[index].types
      this.one = index
    },
    // 全部学院全部点击事件
    swiall (index) {
      this.one = 'all'
      this.freshAll = this.reception
      this.kind = ''
      this.getActivity()
    },
    // 全部项目选择事件
    species (index) {
      this.two = index
      this.kind = this.freshAll[index].kind
      this.getActivity()
    },
    // 全部项目选择全部事件
    speall (index) {
      this.kind = ''
      this.getActivity()
    }
  },
  created () {
    let bm = document.createElement('script')
    bm.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/c613f2ef2e469cf4bfceaab7fdc6d96e')
    bm.setAttribute('id', 'qd2852173998c613f2ef2e469cf4bfceaab7fdc6d96e')
    bm.setAttribute('charset', 'utf-8')
    // bm.setAttribute('async')
    // bm.setAttribute('defer')
    document.head.appendChild(bm)
  },
  mounted () {
    this.getActivity()
  }
}
</script>
<style scoped>
  .ban-img{
    width: 100%;
    height: 100%;
  }
  .navigation{
    width: 1200px;
    padding: 0px 30px;
    margin: 40px auto;
    background-color: #fff;
    border-radius: 8px;
  }
  .navs{
    padding: 20px 0px 10px 0;
    border-bottom: 1px solid #EEEEEE;
  }
  .navs-center{
    padding: 20px 0;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #EEEEEE;
  }
  .nav-all{
    color: #999999;
    margin-right: 30px;
  }
  .nav-all2{
    position: relative;
    margin-right: 0px;
    right: 5px;
  }
  .nav-span{
    display: inline-block;
    margin-right: 40px;
  }
  .navi-bttom{
    padding: 10px 0 20px 0;
    display: flex;
    flex-direction: row;
  }
  .nav-block{
    display: inline-block;
    margin-bottom: 10px;
    margin-right: 30px;
  }
  .mous:hover{
    cursor: pointer;
    color: #2E8AE5;
  }
  .conter{
    width: 1200px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    margin: auto;
    margin-bottom: 20px !important;
  }
  .interior{
    padding: 30px;
    position: relative;
  }
  .int-size{
    font-size: 18px;
  }
  .int-con{
    font-size: 14px;
    color: #999;
    margin-top: 20px;
    line-height: 25px;
  }
  .int-bottom{
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
  .pagin{
    text-align: center;
    padding-bottom: 100px;
    padding-top: 50px;
  }
  .blue{
    color: #2E8AE5;
  }
</style>
