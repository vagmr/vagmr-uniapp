import type { OrderInfoResult } from '@/types/order'
import { customRequest } from '@/utils/request'

/**
 * Executes a request to the wxPayAPI endpoint.
 *  🔔重要说明
 *由于微信支付的限制，仅 appid 为 wx26729f20b9efae3a 的开发者才能调用该接口。此外，开发者还需要微信授权登录。
 *对于其他开发者，可以使用模拟支付接口进行开发测试，调用后，订单状态将自动更新为已支付。
 * @return {Promise<WechatMiniprogram.RequestPaymentOption>} A promise that resolves with the payment option response.
 */
export const wxPayAPi = (id: string) => {
  return customRequest<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/wxPay/miniPay',
    data: {
      orderId: id,
    },
  })
}
/**
 * Makes a mock payment request.
 * 进行模拟支付请求。
 *
 * @param {string} id - The ID of the payment. 支付的ID。
 * @return {Promise<{ msg: string }>} - A promise that resolves to an object with a message string.
 * 一个返回带有消息字符串的对象的解析为 Promise。
 */
export const payMock = (id: string) => {
  return customRequest<{ msg: string }>({
    url: '/pay/mock',
    data: {
      orderId: id,
    },
  })
}
/**
 * 模拟发货的APi,只在开发环境生效
 *  Makes a mock API call to retrieve a specific post.
 * @param {string} id - The ID of the post to retrieve.
 * @return {Promise<{ msg: string }>} - A promise that resolves to an object with a message.
 */
export const mockPostApi = (id: string) => {
  return customRequest<{ msg: string }>({
    url: `/member/order/consignment/${id}`,
  })
}
/**
 * 确认收货的api
 * @param {string} id -  订单id     The ID of the order.
 * @return {Promise} A promise that resolves with the response of the request.
 */

export const confirmRecApi = (id: string) => {
  return customRequest<OrderInfoResult>({
    url: `/member/order/${id}/receipt`,
    method: 'PUT',
  })
}
