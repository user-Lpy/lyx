import api from '../http/require'
export const loginIn = () => api({
  url: 'http://82.157.146.153:8090/wx/home/index', // 请求地址
  method: 'get'// 请求方式
})
