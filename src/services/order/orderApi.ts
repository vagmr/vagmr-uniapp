import type {
  OrderParams,
  OrderResult,
  OrderInfoResult,
  OrderLogisticResult,
  OrderListParams,
  OrderListResult,
} from '@/types/order'
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
/**
 * Retrieves order information from the API based on the provided ID.
 * 获取订单详情列表
 * @param {string} id - The ID of the order to retrieve information for.
 * @return {Promise<OrderInfoResult>} - A Promise that resolves to the order information.
 */
export const getOrderInfoApi = (id: string) => {
  return customRequest<OrderInfoResult>({
    url: `/member/order/${id}`,
  })
}
/**
 * Makes a request  to repurchase an order.
 *
 * 请求重新购买订单。
 *
 * @param {string} id - The ID of the order to repurchase. 订单的ID以重新购买。
 * @return {OrderResult} - The result of the repurchase operation. 重新购买操作的结果。
 */
export const buyAgainApi = (id: string) => {
  return customRequest<OrderResult>({
    url: `/member/order/repurchase/${id}`,
  })
}

/**
 * 获取指定订单的物流API。
 *
 * @param {string} id - 订单的ID。
 * @return {Promise<OrderLogisticResult>} - 一个解析为订单物流结果的Promise。
 */
export const getLogisticApi = (id: string) => {
  return customRequest<OrderLogisticResult>({
    url: `/member/order/${id}/logistics`,
  })
}

/**
 * 删除订单
 * @description 仅在订单状态为待评价，已完成，已取消时，可删除订单。
 * @param data ids 订单集合
 */
export const deleteMemberOrderAPI = (data: { ids: string[] }) => {
  return customRequest<{ msg: string }>({
    method: 'DELETE',
    url: `/member/order`,
    data,
  })
}
/**
 * 取消订单
 * @description 仅在订单状态为待付款时，可取消订单。
 * @param id id 订单ID
 * @param data { cancelReason: string } 取消原因
 */
export const cancelOrderApi = (id: string, data: { cancelReason: string }) => {
  return customRequest({
    url: `/member/order/${id}/cancel`,
    method: 'PUT',
    data,
  })
}

/**
 * 获取订单列表
 * @param data orderState 订单状态
 */
export const getMemberOrderAPI = (data: OrderListParams) => {
  return customRequest<OrderListResult>({
    method: 'GET',
    url: `/member/order`,
    data,
  })
}
