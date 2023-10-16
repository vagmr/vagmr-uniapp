import { customRequest } from '@/utils/request'

type loginParams = {
  code: string
  encryptedData: string
  iv: string
}
/**
 * 登录请求的接口
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
