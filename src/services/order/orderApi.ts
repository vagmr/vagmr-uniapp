import type { OrderParams, OrderResult } from '@/types/order'
import { customRequest } from '@/utils/request'
/**
+ * 获取订单 API。
+ *
+ * @return {Promise<OrderResult>} 一个 Promise，解析为订单结果。
+ */
export const getOrderApi = () => {
  return customRequest<OrderResult>({
    url: '/member/order/pre',
  })
}

/**
 * Retrieves an order by making an API call.
 * 填写订单-获取立即购买订单
 * @param {Object} data - The data object containing the SKU ID, count, and optional address ID.
 * @param {string} data.skuId - The SKU ID of the order.
 * @param {string} data.count - The count of items in the order.
 * @param {string} [data.addressId] - The optional address ID for the order.
 * @return {Promise<OrderResult>} A promise that resolves to the order result.
 */
export const getOrderBUyApi = (data: { skuId: string; count: string; addressId?: string }) => {
  return customRequest<OrderResult>({
    url: '/member/order/pre/now',
    data,
  })
}
/**
 * Creates a new order in the API.
 *发送订单的请求api
 * @param {OrderParams} data - The order parameters.
 * @return {Promise<{ id: string }>} - A promise that resolves with the ID of the created order.
 */
export const postOrderApi = (data: OrderParams) => {
  return customRequest<{ id: string }>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
