<template>
  <div>
    <heads title="账号信息" :button="false"></heads>
    <div class="heards">
      <div class="hea-top">
        <div>我的头像</div>
        <div>
          <img src="@/assets/index/head_portrait.png" class="img1"/>
          <img src="@/assets/index/sy_gengduo.png" class="img2"/>
        </div>
      </div>
      <div class="hea-tops">
        <div>昵称</div>
        <div>
          <span>一个昵称</span>
          <img src="@/assets/index/sy_gengduo.png" class="img2"/>
        </div>
      </div>
    </div>
    <div class="heards">
      <div class="hea-top">
        <div>手机号</div>
        <div>
          <span>185****0527</span>
          <img src="@/assets/index/sy_gengduo.png" class="img2"/>
        </div>
      </div>
      <div class="hea-tops" @click="amend">
        <div>密码修改</div>
        <div>
          <img src="@/assets/index/sy_gengduo.png" class="img2"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
export default {
  name:'account',
  components:{
    heads
  },
  data(){
    return{

    }
  },
  methods: {
    //修改密码点击事件
    amend(){
      this.$router.push({
        path:'/login',
        query:{
          type:'3'
        }
      })
    }
  },
}
</script>
<style scoped>
  .heards{
    padding-left: 30px;
    background-color: #fff;
  }
  .hea-top{
    margin-top: 20px;
    height: 100px;
    line-height: 100px;
    border-bottom: 2px solid #EEEEEE;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .hea-tops{
    height: 100px;
    line-height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .img1{
    width: 70px;
    height: 70px;
    position: relative;
    top: 24px;
  }
  .img2{
    width: 12px;
    height: 22px;
    margin-right: 30px;
    margin-left: 20px;
  }
</style>