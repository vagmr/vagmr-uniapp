import type { GoodsResult } from '@/types/shopDetail'
import { customRequest } from '@/utils/request'
/**
 * Retrieves the details of a specific shop using the provided ID.
 *商品详情的获取函数
 * @param {string} id - The ID of the shop to retrieve details for.
 * @return {Promise} A Promise that resolves to the shop details.
 */
export const getShopDeatilApi = (id: string) => {
  return customRequest<GoodsResult>({
    url: '/goods',
    data: {
      id,
    },
  })
}
