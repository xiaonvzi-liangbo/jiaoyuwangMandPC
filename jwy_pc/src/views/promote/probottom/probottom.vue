<template>
  <div class="school">
    <div class="title">新里程教育致力把品质教育融入生活</div>
    <div class="subheading">XINLICHENGJIAOYUZHILIYUBAPINZHIJIAOYURONGRUSHENGHUO</div>
    <div v-for="(item,index) in schoollist" :key="index" class="block">
      <img :src="item.scBottomLogo"/>
    </div>
  </div>
</template>
<script>
import request from '@/utile/request.js'
export default {
  name: 'probottom',
  data () {
    return {
      schoollist: []
    }
  },
  methods: {
    // 获取学校列表
    getSchool () {
      let that = this
      request({
        url: '/eduWeb/foreignCollage/getList',
        method: 'get',
        params: {
          pageNum: '1',
          pageSize: '5',
          scIspass: '1',
          smRecomed: '1'
        }
      })
        .then(res => {
          that.schoollist = res.rows
        })
    }
  },
  mounted () {
    this.getSchool()
  }
}
</script>
<style scoped lang="scss">
  .school{
    padding: 50px 0;
    text-align: center;
    .title{
      color: #000;
      font-size: 28px;
    }
    .subheading{
      color: #6e6e6e;
      font-size: 16px;
      margin-top: 5px;
    }
    .block{
      display: inline-block;
      margin-top: 30px;
      margin-right: 20px;
      img{
        width: 214px;
        height:108px;
        cursor: pointer;
      }
    }
  }
</style>
