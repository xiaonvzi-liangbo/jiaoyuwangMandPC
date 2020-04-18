<template>
  <div class="background">
    <heads title="考试测试题"></heads>
    <div class="img-posi"><img src="@/assets/index/report.png" class="imgs"/></div>
    <div class="title">《您的学历提升测评报告PDF》已生成</div>
    <div class="look">查看报告</div>
  </div>
</template>
<script>
import heads from '@/components/heads/heads'
export default {
  name:'report',
  components:{
    heads
  },
  data(){
    return{

    }
  }
}
</script>
<style scoped>
  .background{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #fff;
  }
  .img-posi{
    text-align: center;
  }
  .imgs{
    width: 330px;
    height: 279px;
    margin-top: 150px;
  }
  .title{
    font-size: 30px;
    text-align: center;
    color: #0B5EA8;
    margin-top: 50px;
  }
  .look{
    width: 400px;
    height: 90px;
    line-height: 90px;
    text-align: center;
    margin: auto;
    background-color: #0B5EA8;
    color: #fff;
    border-radius: 6px;
    font-size: 30px;
    margin-top: 120px;
  }
</style>