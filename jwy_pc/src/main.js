// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import scroll from 'vue-seamless-scroll'
import '@/assets/iconfont/iconfont.css'
import './permission'
import * as file from './utile/filter.js'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(scroll)

/* eslint-disable no-new */

Object.keys(file).forEach(key => {
  Vue.filter(key, file[key])
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
