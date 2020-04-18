import axios from 'axios'
// import { MessageBox } from 'element-ui'
// import store from '@/store'
import QS from 'qs'
// import { removeToken } from '@/utile/auth'

// 跨域携带session
axios.defaults.withCredentials = true

const service = axios.create({
  baseURL: 'http://www.xlcxx.com/api/', // 向后台请求的接口地址的前缀
  // baseURL: 'http://192.168.8.67:8897/', // 本地后台请求接口
  timeout: 115000, // 请求的响应时间
  withCredentials: false, // 允许携带cookie
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' // 请求的头部
  }
})

// http request 请求拦截器，对请求数据处理，有token值则配置上token值
// 请求拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = QS.stringify(config.data) // 转换为Form Data，防止post请求参数无法传到后台
    }
    return config
  }, error => {
    console.log(error)
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    return Promise.resolve(response.data)
  },
  error => {
    return Promise.reject(error)
  })

export default service
