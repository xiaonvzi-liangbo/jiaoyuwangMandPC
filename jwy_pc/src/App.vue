<template>
  <div id="app">
    <router-view/>
    <img src="@/assets/gr/kf.png" id="xlc_cbl" class="imgs"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  created () {
    let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (flag) {
      window.location.href = 'http://m.xlcxx.com'
    }
  },
  mounted () {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/8e686a2115ecc9484544b7650a3cf3de')
    recaptchaScript.setAttribute('id', 'qd28521739988e686a2115ecc9484544b7650a3cf3de')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style scoped>
  .imgs{
    position: fixed;
    right: 50px;
    bottom: 100px;
    cursor: pointer;
  }
</style>
<style>
#app,html,body,.el-container{
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
}
  .group{
    width: 1181px;
    overflow: hidden;
    margin: auto;
  }
  .el-radio__label{
    font-size: 20px !important;
  }
  .el-progress__text{
    margin-left: 0px !important;
    position: relative;
    left: 10px;
  }
</style>
