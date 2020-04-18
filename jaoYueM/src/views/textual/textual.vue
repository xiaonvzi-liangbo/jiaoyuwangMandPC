<template>
  <div>
    <van-popup
      v-model="show"
      position="right"
      :style="{ width: '80%',height:'100%' }">弹出层</van-popup>
    <div @click="showPopup">关闭打开</div>
    <van-nav-bar title="标题" class="con">
      <div slot="left">图片</div>
      <div slot="right"><span @click="deg">登陆</span>/注册</div>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name:'textual',
  data(){
    return{
      show: false
    }
  },
  methods: {
    showPopup() {
      // this.show = true;
      // this.$toast.loading({
      //   message: '加载中...',
      //   forbidClick: true
      // })
      this.$toast('成功文案')
    },
    deg(){
      this.$toast('成功文案')
    }
  },
}
</script>
<style scoped>
  .con{
    height:80px;
    line-height: 80px;
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>