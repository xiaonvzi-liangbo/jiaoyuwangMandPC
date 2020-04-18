<template>
  <div>
    <div class="cuowu">404</div>
    <div class="posi"><van-button type="primary" @click="back">返回首页</van-button></div>
  </div>
</template>
<script>
export default {
  name:'errors',
  data(){
    return{

    }
  },
  methods: {
    //返回首页
    back(){
      this.$router.push('/')
    }
  },
}
</script>
<style scoped>
  .cuowu{
    font-size: 150px;
    font-weight: bold;
    text-align: center;
    padding-top: 70%;
  }
  .posi{
    text-align: center;
    padding-top: 100px;
  }
</style>