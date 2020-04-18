<template>
  <div class="body">
    <div class="header">
      <div class="teacher">
        <p>
          <span class="teacher-name">{{teacher.name}}</span>
          <span class="teacher-phone">联系电话:{{teacher.tel}}</span>
        </p>
        <div class="two-code">
          <div class="two-conter" style="margin-left:0;">
            <img :src="teacher.weChatCode" width="100" height="100" />
            <div>联系微信</div>
          </div>
          <div class="two-conter">
            <img :src="teacher.qqCode" width="100" height="100" />
            <div>资讯QQ</div>
          </div>
          <div class="two-conter">
            <img :src="teacher.invitationCode" width="100" height="100" />
            <div>专属邀请码</div>
          </div>
        </div>
      </div>
      <img class="lipc" :src="teacher.lpic" alt />
    </div>
    <div class="content">
      <div>
        <p class="title">
          主讲公开课
          <span class="more">
            <a href="https://www.xlcwx.com/course/freeCourse" target="_black">
              更多
              <i class="el-icon-d-arrow-right"></i>
            </a>
          </span>
        </p>
        <div class="content-car">
          <div class="card" v-for="(item,index) in TeacherCourse" :key="index">
            <a :href="'https://www.xlcwx.com/liveShow/IntroPublic/'+item.id">
              <img class="card-img" :src="item.img" />
              <p class="card-txt">{{item.title}}</p>
              <div class="car-bottom">
                <p>上架时间：{{item.addTime.substring(0,10 )}}</p>
                <p>
                  时长：{{item.duration}}分钟
                  <span style="float:right">{{item.clicks}}人观看</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p class="title">
          热门公开课
          <span class="more">
            <a href="https://www.xlcwx.com/course/freeCourse" target="_black">
              更多
              <i class="el-icon-d-arrow-right"></i>
            </a>
          </span>
        </p>
        <div class="content-car">
          <div class="card" v-for="(item,index) in free" :key="index">
            <a :href="'https://www.xlcwx.com/liveShow/IntroPublic/'+item.id">
              <img class="card-img" :src="item.img" />
              <p class="card-txt">{{item.title}}</p>
              <div class="car-bottom">
                <p>上架时间：{{item.addTime.substring(0,10 )}}</p>
                <p>
                  时长：30分钟
                  <span style="float:right">{{item.clicks}}人观看</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p class="title">
          推荐辅导课程
          <span class="more">
            <a href="https://www.xlcwx.com/course" target="_black">
              更多
              <i class="el-icon-d-arrow-right"></i>
            </a>
          </span>
        </p>
        <div class="content-car">
          <div class="card" v-for="(item,index) in vips" :key="index">
            <a :href="'https://www.xlcwx.com/Course/'+item.id">
              <img class="card-img" :src="item.img" />
              <p class="card-txt">{{item.title}}</p>
              <div class="car-bottom">
                <p>上架时间：{{item.updateTime.substring(0,10 )}}</p>
                <p>
                  {{item.clicks}}人已购买
                  <span style="float:right ;color:#F87F37">￥{{item.price}}</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import request from "@/utile/requestwx.js";
export default {
  name: "pages",
  data() {
    return {
      teacher: {},
      vips: [],
      free: [],
      TeacherCourse: []
    };
  },
  methods: {
    // 获取课程活动
    getActivity() {
      let that = this;
      request({
        url: "/api/course/vip",
        method: "get",
        params: {
          q: that.grabble,
          pageIndex: "1",
          pageSize: "10",
          vipType: "0"
        }
      }).then(res => {
        that.vips = res.data;
      });
    },
    getfree() {
      let that = this;
      request({
        url: "/api/Course/free",
        method: "get",
        params: {
          q: that.grabble,
          pageIndex: "1",
          pageSize: "10"
        }
      }).then(res => {
        that.free = res.data
      })
    },
    getTeacherCourse() {
      let that = this;
      request({
        url: "/api/TeacherList/TeacherCourse",
        method: "get",
        params: {
          pageIndex: "1",
          pageSize: "10",
          teacgerId: that.teacher.id
        }
      }).then(res => {
        that.TeacherCourse = res.data;
      });
    }
  },
  mounted () {
    this.teacher = this.$route.query
    this.getActivity()
    this.getTeacherCourse()
    this.getfree()
  }
};
</script>
<style scoped>
p {
  margin: 0;
}
a {
  color: rgba(153, 153, 153, 1);
  text-decoration: none;
}
.body {
  background-color: #f3f3f3;
}
.header {
  height: 381px;
  width: 100%;
  background-image: url(../../../assets/counselor/bg-header.png);
  display: flex;
  align-items: center;
}
.teacher {
  color: #ffffff;
  margin-left: 474px;
  height: auto;
  width: calc(40vw);
}
.teacher-name {
  font-size: 36px;
}
.teacher-phone {
  font-size: 18px;
  margin-left: 30px;
}
.teacher-con {
  margin: 30px 0;
}
.two-code {
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-items: center;
}
.two-conter > img {
  border: 5px solid #fff;
  border-radius: 4px;
  background-color: #fff;
}
.two-conter {
  font-size: 12px;
  color: #fff;
  margin-left: 10px;
  text-align: center;
}
.content {
  margin: auto;
  width: 1200px;
  padding-bottom: 80px;
}
.content-car {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
}
.title {
  font-size: 20px;
  color: rgba(51, 51, 51, 1);
  margin: 30px 0 20px;
}
.more {
  float: right;
  font-size: 14px;
  color: rgba(153, 153, 153, 1);
  position: relative;
  top: 7px;
}
.card {
  width: 204px;
  height: 237px;
  background: rgba(255, 255, 255, 1);
  padding: 10px 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-right: 15px;
}
.card-img {
  width: 204px;
  height: 126px;
}
.card-txt {
  font-size: 14px;
  color: rgba(23, 25, 32, 1);
  line-height: 18px;
  text-align: justify;
  margin-top: 10px;
}
.car-bottom {
  color: #999999;
  font-size: 12px;
  margin-bottom: 15px;
}
.car-bottom p {
  margin-top: 12px;
}
</style>
