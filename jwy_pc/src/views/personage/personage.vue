<template>
  <div class="all">
    <div class="background"></div>
    <div class="distribute">
      <div class="dis-left">
        <div class="dis-height"  @click="go('/personage/planning')" :class="{'dis-check':this.$route.path==='/personage/planning'}">
          <img src="@/assets/gr/icon1.png" class="dis-img" />
          规划方案
        </div>
        <div class="dis-height"  @click="go('/personage/evaluation')" :class="{'dis-check':$route.path==='/personage/evaluation'}">
          <img src="@/assets/gr/icon2.png" class="dis-img" />
          测评报告
        </div>
        <div  class="dis-height"  @click="go('/personage/account')" :class="{'dis-check':$route.path==='/personage/account'}"
        >
          <img src="@/assets/gr/icon3.png" class="dis-img" />
          账号信息
        </div>
      </div>
      <div class="ri-height">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'personage',
  data () {
    return {}
  },
  methods: {
    go (path) {
      this.$router.push(path)
    }
  }
}
</script>
<style scoped>
.all {
  background-color: #f6f6f6;
}
.background {
  background: url("~@/assets/gr/banner.png");
  height: 200px;
  background-size: 100% 100%;
}
.distribute {
  width: 1200px;
  margin: auto;
  display: flex;
  flex-direction: row;
  position: relative;
  top: -25px;
}
.dis-left {
  width: 200px !important;
  min-height: 360px;
  background-color: #fff;
  text-align: center;
  padding: 20px 0;
  border-radius: 4px;
}
.dis-height {
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.dis-img {
  width: 16px;
  height: 18px;
  margin-right: 10px;
}
.dis-height {
  line-height: 34px;
  cursor: pointer;
}
.ri-height {
  margin-left: 20px;
  width: 900px !important;
  background-color: #fff;
  padding: 30px 40px;
  min-height: 690px;
  border-radius: 4px;
}
.dis-check {
  color: #0b5fa8;
}
</style>
