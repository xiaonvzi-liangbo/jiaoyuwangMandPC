<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){
    // let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    // if (!flag) {
    //   window.location.href = 'http://xlcxx.com'
    // }
  },
  mounted(){
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://wp.qiye.qq.com/qidian/2852173998/916ab7b58aee10d2e1ff28597e308eb2')
    recaptchaScript.setAttribute('id', 'qd2852173998916ab7b58aee10d2e1ff28597e308eb2')
    document.head.appendChild(recaptchaScript)
  }
}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #F2F4F8;
}
#app{
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
  font-size: 24px;
  height: 100%;
}
</style>
