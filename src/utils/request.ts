/* 拼接基础地址设置超时时间,添加请求头标识,添加 token */
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

//添加类型，支持泛型
interface Data<T> {
  code: string
  msg: string
  result: T
}
/**
 * Sends a request with the provided configuration and returns a promise that resolves with the response data.
 *返回 Promise 对象，用于处理返回值类型,添加了对各种错误的处理，支持泛型
 *
 * @param {UniApp.RequestOptions} config - The configuration for the request.
 * @return {Promise<Data<T>>} A promise that resolves with the response data.
 * @template T
 */
export const request = <T>(config: UniApp.RequestOptions): Promise<Data<T>> => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...config,
      success(res) {
        if (res.statusCode > 200 && res.statusCode < 300) {
          //提取核心数据 res.data
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          // 401错误 -> 清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: 'pages/login/login' })
          reject(res)
        }
        //其他错误 -> 根据后端错误信息轻提示
        else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求失败',
          })
          reject(res)
        }
      },
      // 响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，换个网络试试',
        })
        reject(err)
      },
    })
  })
}
