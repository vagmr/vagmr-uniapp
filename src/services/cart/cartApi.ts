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