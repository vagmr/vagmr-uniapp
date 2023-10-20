import { customRequest } from '@/utils/request'
import type { LoginResult } from '@/types/login'
type loginParams = {
  code: string
  encryptedData: string
  iv: string
}
/**
 * 登录请求的接口
 * 个人开发者用不了，需要有企业的账号
 * @param data 请求参数
 * @returns - 登录接口
 */
export const loginApi = (data: loginParams) => {
  return customRequest({
    method: 'POST',
    url: '/login/wxMin',
    data,
  })
}
/**
 * 模拟登录请求的接口
 * @param phoneNumber - 手机号
 * @returns - 登录接口
 */
export const mockLoginApi = (phoneNumber: string) => {
  return customRequest<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
/**
 * 传统网页端登录
 * @param account - 账号
 * @param password - 密码
 * @returns - 登录接口
 */
export const h5LoginAPi = (data: { account: string; password: string }) => {
  return customRequest({
    url: '/login',
    method: 'POST',
    data,
  })
}
