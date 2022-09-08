import axios from 'axios'

// 自定义配置新建一个axios实例
const reqAxios = axios.create({
  baseURL: 'http://127.0.0.1:4523/m1/1581082-0-default',
  timeout: 10000
  // 【其他更多的配置参考axios官网】
})

// 导出自定义的axios方法, 供外面调用传参发请求
export default ({
  url = '',
  method = 'GET',
  params = {},
  data = {},
  headers = {}
}) => {
  return reqAxios({
    url,
    method,
    params,
    data,
    headers
  })
}
