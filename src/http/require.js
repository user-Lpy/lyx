// axios二次封装

import axios from 'axios'

// qs 第三方库 进行格式转换
// eslint-disable-next-line no-unused-vars
import qs from 'qs'

const api = axios.create({
  baseURL: '/api',
  timeout: 3000
})

// axios 请求拦截器
api.interceptors.request.use(config => {
  // 获取当前的token ，加到请求头中
  // eslint-disable-next-line prefer-const
  let token = localStorage.getItem('token')
  if (token) {
    config.headers['X-Litemall-Token'] = token // Authorization认证
  }

  // config.url = config.baseURL;
  // 获取用户验证信息
  // localStorage.getItem("user1");
  return config
}, error => {
  return Promise.reject(error)
})

// axios 响应拦截器
api.interceptors.response.use(response => {
  return response
}, error => {
  const {
    response
  } = error
  // eslint-disable-next-line no-empty
  if (response) {} else {
    return Promise.reject(error)
  }
})

export default api
