<template>
  <div>
    <heads title="个人中心" :button="false"></heads>
    <div class="heards">
      <div class="hearimg">
        <img src="@/assets/index/head_portrait.png" />
      </div>
      <div class="chick-name">
        <div class="name">我是昵称</div>
        <div class="account">
          <span>账号：13706373431</span>
          <span class="compile" @click="compile">编辑<img src="@/assets/index/sy_gengduo.png"/></span>
        </div>
      </div>
    </div>
    <div class="operation">
      <div class="rows">
        <div class="picts">图</div>
        <div class="texts">
          账号信息
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="rows">
        <div class="picts">图</div>
        <div class="texts">
          测评报告
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
      <div class="rows" style="border:0;">
        <div class="picts">图</div>
        <div class="texts">
          规划方案
          <img src="@/assets/index/sy_gengduo.png"/>
        </div>
      </div>
    </div>
    <div class="secede" @click="quit">退出登录</div>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
export default {
  name:'personal',
  components:{
    heads
  },
  data(){
    return{

    }
  },
  methods: {
    //退出登录
    quit(){
      window.sessionStorage.removeItem('show')
      this.$router.push({
        path:'/'
      })
    },
    //编辑点击事件
    compile(){
      this.$router.push({
        path:'/account'
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .heards{
    background-color: #fff;
    display: flex;
    flex-direction: row;
    padding: 40px 60px;
    .hearimg{
      width: 120px;
      height: 120px;
      border-radius: 50%;
      img{
        width: 120px;
        height: 120px;
      }
    }
    .chick-name{
      position: relative;
      top: 20px;
      left: 20px;
      width: 100%;
      .name{
        font-size: 32px;
        font-weight: bold;
      }
      .account{
        margin-top: 15px;
        position: relative;
        display: inline-block;
        width: 100%;
        .compile{
          position: absolute;
          right: 0;
          img{
            width: 13px;
            height: 23px;
            margin-left: 10px;
          }
        }
      }
    }
  }
  .operation{
      margin: 20px 0;
      background-color: #fff;
      .rows{
        height: 84px;
        display: flex;
        font-size: 26px;
        flex-direction: row;
        align-items: center;
        .picts{
          padding-left: 30px;
          width: 30px;
        }
        .texts{
          margin-left: 25px;
          width: 100%;
          line-height: 84px;
          border-bottom: 2px solid #EEEEEE;
          position: relative;
          img{
            width: 12xp;
            height: 22px;
            position: absolute;
            right: 40px;
            top: 35px;
          }
        }
      }
    }
    .secede{
      text-align: center;
      background-color: #fff;
      height: 80px;
      line-height: 80px;
      font-size: 26px;
    }
</style>