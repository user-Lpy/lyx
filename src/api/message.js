import request from '@/utlis/request'

export const getMessage = (data) => {
  return request({
    url: '/api/message',
    method: 'POST',
    data
  })
}
