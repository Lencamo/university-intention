import request from '@/utils/axios-instance'

// 示例：

export const apiDemoAPI = () => {
  return request({
    url: '/api/demo',
    method: 'GET'
  })
}
