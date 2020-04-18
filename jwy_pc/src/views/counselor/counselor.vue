<template>
  <div style="background-color:#F7F7F7;">
    <img src="@/assets/search/coubanner.png" class="ban-img" />
    <div class="navigation">
      <div class="navs-center">
        <div>
          <span class="nav-all">全部学院</span>
          <span class="nav-all mous" :class="{'blue':one==='all'}" @click="swiall('all')">全部</span>
        </div>
        <div>
          <span
            class="nav-span mous"
            :class="{'blue':one===index}"
            v-for="(item,index) in fresh"
            :key="index"
            @click="switchover(index)"
          >{{item.name}}</span>
        </div>
      </div>
      <div class="navi-bttom">
        <div style="width:180px;">
          <span class="nav-all">全部项目</span>
          <span
            class="nav-all nav-all2 mous"
            :class="{'blue':two==='all'}"
            @click="speall('all')"
          >全部</span>
        </div>
        <div style="width:100%;">
          <span
            v-for="(item,index) in freshAll"
            :key="index"
            :class="{'blue':two===index}"
            @click="species(index)"
            class="nav-block mous"
          >{{item.name}}</span>
        </div>
      </div>
    </div>
    <div class="conter">
      <div class="con-block" v-for="(item,index) in acti" :key="index">
        <div class="con-rows">
          <div>
            <img :src="item.lpic" width="142" height="206" />
          </div>
          <div class="con-conter">
            <!-- <div class="con-title">{{item.name}}<a class="con-page" :href="'https://www.xlcwx.com/adviser/'+item.id" target="_blank">进入主页</a></div> -->
            <div class="con-title">
              {{item.name}}
              <span class="con-page" @click="detail(item)" target="_blank">进入主页</span>
            </div>

            <div class="con-text">{{item.content}}</div>
            <div class="con-tel">
              <span style="color:#0B5FA8;">联系电话：</span>
              {{item.tel}}
            </div>
            <div class="two-code">
              <div class="two-conter" style="margin-left:0;">
                <img :src="item.weChatCode" width="56" height="56" />
                <div>联系微信</div>
              </div>
              <div class="two-conter">
                <img :src="item.qqCode" width="56" height="56" />
                <div>资讯QQ</div>
              </div>
              <div class="two-conter">
                <img :src="item.invitationCode" width="56" height="56" />
                <div style="width:60px;">专属邀请码</div>
              </div>
            </div>
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
        :total="counts"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import request from '@/utile/requestwx.js'
export default {
  name: 'counselor',
  data () {
    return {
      freshAll: [
        {
          name: '自学考试辅导',
          kind: '1'
        },
        {
          name: '普通专升本',
          kind: '3'
        },
        {
          name: '成考考前辅导',
          kind: '4'
        },
        {
          name: '学术硕士',
          kind: '8'
        },
        {
          name: '专业硕士',
          kind: '9'
        },
        {
          name: '5月同等学力',
          kind: '10'
        },
        {
          name: '英语四六级',
          kind: '5'
        },
        {
          name: '教师资格',
          kind: '6'
        },
        {
          name: '5G应用系统工程师',
          kind: '50'
        },
        {
          name: '造价工程师',
          kind: '29'
        },
        {
          name: '建造师',
          kind: '23'
        },
        {
          name: '工程造价实操',
          kind: '30'
        },
        {
          name: '健康管理师',
          kind: '14'
        },
        {
          name: '会计职称',
          kind: '47'
        },
        {
          name: '审计师',
          kind: '45'
        }
      ],
      fresh: [
        {
          name: '专本科学院',
          types: [
            {
              name: '自学考试辅导',
              kind: '1'
            },
            {
              name: '普通专升本',
              kind: '3'
            },
            {
              name: '成考考前辅导',
              kind: '4'
            }
          ]
        },
        {
          name: '考研学院',
          types: [
            {
              name: '学术硕士',
              kind: '8'
            },
            {
              name: '专业硕士',
              kind: '9'
            },
            {
              name: '5月同等学力',
              kind: '10'
            }
          ]
        },
        {
          name: '语培学院',
          types: [
            {
              name: '英语四六级',
              kind: '5'
            }
          ]
        },
        {
          name: '教考学院',
          types: [
            {
              name: '教师资格',
              kind: '6'
            }
          ]
        },
        {
          name: '职业培训学院',
          types: [
            {
              name: '5G应用系统工程师',
              kind: '50'
            }
          ]
        },
        {
          name: '建筑学院',
          types: [
            {
              name: '造价工程师',
              kind: '29'
            },
            {
              name: '建造师',
              kind: '23'
            },
            {
              name: '工程造价实操',
              kind: '30'
            }
          ]
        },
        {
          name: '医药健康学院',
          types: [
            {
              name: '健康管理师',
              kind: '14'
            }
          ]
        },
        {
          name: '财会学院',
          types: [
            {
              name: '会计职称',
              kind: '47'
            },
            {
              name: '审计师',
              kind: '45'
            }
          ]
        }
      ],
      acti: [],
      reception: [
        {
          name: '自学考试辅导',
          kind: '1'
        },
        {
          name: '普通专升本',
          kind: '3'
        },
        {
          name: '成考考前辅导',
          kind: '4'
        },
        {
          name: '学术硕士',
          kind: '8'
        },
        {
          name: '专业硕士',
          kind: '9'
        },
        {
          name: '5月同等学力',
          kind: '10'
        },
        {
          name: '英语四六级',
          kind: '5'
        },
        {
          name: '教师资格',
          kind: '6'
        },
        {
          name: '5G应用系统工程师',
          kind: '50'
        },
        {
          name: '造价工程师',
          kind: '29'
        },
        {
          name: '建造师',
          kind: '23'
        },
        {
          name: '工程造价实操',
          kind: '30'
        },
        {
          name: '健康管理师',
          kind: '14'
        },
        {
          name: '会计职称',
          kind: '47'
        },
        {
          name: '审计师',
          kind: '45'
        }
      ],
      pageObject: {
        length: 12,
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
    // 页面跳转
    detail (val) {
      this.$router.push({
        path: '/counselor/pages',
        query: {
          weChatCode: val.weChatCode,
          qqCode: val.qqCode,
          invitationCode: val.invitationCode,
          lpic: val.lpic,
          id: val.id
        }
      })
    },
    // 当前页改变事件
    currentchange (val) {
      this.pageObject.pageNo = val
      this.getActivity()
    },
    // 获取课程活动
    getActivity () {
      let that = this
      request({
        url: '/api/TeacherList/Teacher',
        method: 'get',
        params: {
          page: that.pageObject.pageNo,
          PageSize: that.pageObject.length,
          kind: that.kind
        }
      }).then(res => {
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
      this.two = index
      this.getActivity()
    }
  },
  mounted () {
    this.getActivity()
  }
}
</script>
<style scoped>
.two-code {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
}
.two-conter {
  font-size: 12px;
  color: #999;
  margin-left: 10px;
  text-align: center;
}
.ban-img {
  width: 100%;
  height: 100%;
}
.navigation {
  width: 1200px;
  padding: 0px 30px;
  margin: 40px auto;
  background-color: #fff;
  border-radius: 8px;
}
.navs {
  padding: 20px 0px 10px 0;
  border-bottom: 1px solid #eeeeee;
}
.navs-center {
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #eeeeee;
}
.nav-all {
  color: #999999;
  margin-right: 30px;
}
.nav-all2 {
  position: relative;
  margin-right: 0px;
  right: 5px;
}
.nav-span {
  display: inline-block;
  margin-right: 40px;
}
.navi-bttom {
  padding: 10px 0 20px 0;
  display: flex;
  flex-direction: row;
}
.nav-block {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 30px;
}
.mous:hover {
  cursor: pointer;
  color: #2e8ae5;
}
.pagin {
  text-align: center;
  padding-bottom: 100px;
  padding-top: 50px;
}
.blue {
  color: #2e8ae5;
}
.conter {
  width: 1200px;
  margin-top: 10px;
  margin: 0 auto;
}
.con-block {
  width: 346px;
  height: 206px;
  border-radius: 3px;
  padding: 20px;
  background-color: #fff;
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}
.con-block:nth-child(3n) {
  margin-right: 0px;
}
.con-rows {
  display: flex;
  flex-direction: row;
}
.con-conter {
  padding: 0 14px;
  width: 100%;
}
.con-title {
  font-size: 16px;
  font-weight: bold;
  position: relative;
  width: 100%;
}
.con-page {
  font-size: 12px;
  color: #0b5fa8;
  position: absolute;
  right: 0;
  bottom: 0;
  cursor: pointer;
  text-decoration: none;
}
.con-text {
  font-size: 12px;
  color: #999;
  min-height: 47px;
  margin-top: 16px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.con-tel {
  font-size: 12px;
  margin: 10px 0;
}
</style>
