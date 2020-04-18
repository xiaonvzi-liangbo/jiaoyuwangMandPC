<template>
  <div class="hese">
    <van-nav-bar :title="title" class="heads">
      <div slot="left">
        <img src="@/assets/index/sy_logo.png" class="imgs" v-if="!heardtype"/>
        <span v-else @click="backtrack"><van-icon name="arrow-left"/></span>
      </div>
      <div slot="right" v-if="button">
        <span v-if="isShow"><span class="right" @click="landing('1')">登陆</span>/<span class="left" @click="landing('2')">注册</span></span>
        <span v-else @click="personal">个人中心</span>
      </div>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  name: "heards",
  props: {
    heardtype: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ""
    },
    button: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isShow: ""
    }
  },
  methods: {
    //返回点击事件
    backtrack() {
      this.$router.go(-1);
    },
    //登陆/注册点击事件
    landing(val) {
      this.$router.push({
        path: "/login",
        query: {
          type: val
        }
      })
    },
    //个人中心点击事件
    personal() {
      this.$router.push({
        path: "/personal"
      })
    }
  },
  mounted() {
    let show = window.sessionStorage.getItem("show")
    if (show) {
      this.isShow = false;
    } else {
      this.isShow = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.hese{
  height: 88px;
}
.heads {
  height: 88px;
  width: 100%;
  line-height: 88px;
  position: fixed;
  top: 0;
  font-size: 26px;
  z-index: 999999999 !important;
  .right{
    margin-right:4px;
  }
  .left{
    margin-left:4px;
  }
}
.imgs {
  width: 210px;
  height: 54px;
  position: relative;
  left: 10px;
  top: 18px;
}
</style>