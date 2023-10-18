import type { CartResult } from '@/types/cart'
import { customRequest } from '@/utils/request'

type CartParams = { skuId: string; count: number }
/**
 * Sends a POST request to the '/member/cart' endpoint with the provided cart data.
 * 添加商品到购物车
 * @param {Object} data - The cart data containing the SKU ID and count.
 * @param {string} data.skuId - The SKU ID of the item.
 * @param {number} data.count - The number of items to add to the cart.
 * @return {Promise<CartResult>} A promise that resolves to the result of the cart operation.
 */
export const postCartApi = (data: CartParams) => {
  return customRequest<CartResult>({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}
/**
 * -从服务器获取购物车信息
 * Retrieves the cart information from the server.
 * @return {Promise<CartResult>} -A promise that resolves to the cart information.
 */
export const getCartApi = () => {
  return customRequest<CartResult[]>({
    url: '/member/cart',
  })
}
/**
 * -删除或清空购物车
 *Deletes a shop API request by sending a DELETE request to the '/member/cart' endpoint.
 * @param {string[]} ids - 需求参数为skuId的数组
 * @return {Promise} A promise that resolves with the response data.
 */
export const deleteShopApi = (data: { ids: string[] }) => {
  return customRequest<{ msg: string }>({
    url: '/member/cart',
    method: 'DELETE',
    data,
  })
}

/**
 * Sends a PUT request to update the cart with the specified SKU ID.
 * 更新购物车数量
 * @param {string} skuId - The SKU ID of the cart item to update.
 * @param {Object} data - The data object containing optional properties:
 *   - selected (boolean): Whether the cart item is selected.
 *   - count (number): The quantity of the cart item.
 * @returns {Promise} A Promise that resolves to the updated cart data.
 */
export const putCartApi = (
  skuId: string,
  data: {
    selected?: boolean
    count?: number
  },
) => {
  return customRequest<CartResult>({
    url: `/member/cart/${skuId}`,
    method: 'PUT',
    data,
  })
}
/**
 * 更新购物车中所有商品的选中状态。
 *
 * @param {boolean} selected - 新的选中状态。
 * @return {Promise} 一个 Promise 对象，用于处理从服务器返回的响应。
 */
export const putSeleteAll = (selected: boolean) => {
  return customRequest({
    url: '/member/cart/selected',
    method: 'PUT',
    data: {
      selected,
    },
  })
}
