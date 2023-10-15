import { customRequest } from '@/utils/request'
import type { PageParams } from '@/types/global'

type hotParams = PageParams & { subType: string }
/**
 * This function makes an API call to the hot page with the given URL and data.
 * 热门推荐模块的通用请求函数
 * @param {string} url - The URL of the hot page. 传入的请求地址
 * @param {hotParams} data - Optional data to be sent with the API call.传入的请求参数,可选
 * @return {Promise<any>} - A Promise that resolves to the response from the API call.
 */
export const hotPageApi = (url: string, data?: hotParams) => {
  return customRequest({
    url,
    data,
  })
}
