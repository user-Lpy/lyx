import axios from 'axios'
const request = axios.create({
  baseURL: 'http://localhost:8080',
  timeput: 5000
})
export default request
