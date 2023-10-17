import type { addAddressParams } from '@/types/address'
import { customRequest } from '@/utils/request'
export const addAddressApi = (data: addAddressParams) => {
  return customRequest<{ id: string }>({
    url: '/member/address',
    method: 'POST',
    data,
  })
}
