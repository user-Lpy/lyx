import request from '@/utlis/request'

export const getUsers = (data) => {
  return request({
    url: '/api/users',
    method: 'POST',
    data
  })
}
