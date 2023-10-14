/* 实现需求
拼接基础地址
设置超时时间
添加请求头标识
添加 token */
import { BaseURL } from '@/constant'
import { useMemberStore } from '@/stores'
const httpInterceptor = {
  invoke(config: UniApp.RequestOptions) {
    if (!config.url.startsWith('http')) {
      config.url = BaseURL + config.url
    }
    // 2. 请求超时
    config.timeout = 10000
    config.header = {
      ...config.header,
      'source-client': 'miniapp',
    }
    // 4. 添加 token 请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      config.header.Authorization = token
    }
  },
}
// 拦截 request 请求
uni.addInterceptor('request', httpInterceptor)
// 拦截 uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)
