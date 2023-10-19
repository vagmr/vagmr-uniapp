import type { OrderResult } from '@/types/order'
import { customRequest } from '@/utils/request'

export const getOrderApi = () => {
  return customRequest<OrderResult>({
    url: '/member/order/pre',
  })
}

export const getOrderBUyApi = (data: { skuId: string; count: string; addressId?: string }) => {
  return customRequest<OrderResult>({
    url: '/member/order/pre/now',
    data,
  })
}
