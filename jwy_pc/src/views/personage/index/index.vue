<template>
  <div class="dis-right">
    <div class="ri-top">
      <div>
        <img src="@/assets/gr/heards.png"/>
      </div>
      <div class="ri-title">
        <div>亲爱的{{userName}}欢迎来到新里程教育</div>
        <div><el-button type="primary" plain size="small" class="ri-but" @click="record">完善档案</el-button></div>
      </div>
    </div>
    <div class="ri-imgs">
      <img src="@/assets/gr/none.png" height="175" width="269"/>
      <div class="ri-small">暂无数据，快去参加测评吧。</div>
    </div>
  </div>
</template>
<script >
import { getUser } from '@/utile/auth.js'
import request from '@/utile/request.js'
export default {
  name: 'index',
  data () {
    return {
      userName: getUser(),
      button: '完善档案'
    }
  },
  methods: {
    record () {
      this.$router.push({
        path: '/personage/record'
      })
    },
    // 获取资料完整度
    getzl () {
      let that = this
      request({
        url: '/eduWeb/register/findByIsPerfectData',
        method: 'post',
        data: {
          userName: getUser()
        }
      })
        .then(res => {
          let num = res.data
          if (num === '1') {
            that.button = '编辑档案'
          } else {
            that.button = '完善档案'
          }
        })
    }
  },
  mounted () {
    this.getzl()
  }
}
</script>
<style scoped>
.dis-right{
    margin-left: 20px;
    width: 100%;
    background-color: #fff;
    padding: 30px 40px;
    min-height: 690px;
  }
  .dis-height{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .dis-img{
    width: 16px;
    height: 18px;
    margin-right: 10px;
  }
  .ri-top{
    display: flex;
    flex-direction: row;
  }
  .ri-title{
    margin-left: 19px;
    font-size: 18px;
    padding: 10px;
  }
  .ri-but{
    position: relative;
    top: 15px;
  }
  .ri-imgs{
    text-align: center;
    padding-top: 100px;
  }
  .ri-small{
    margin-top: 15px;
    color: #999999;
  }
</style>
