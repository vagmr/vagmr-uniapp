import type { categoryType } from '@/types/category'
import { customRequest } from '@/utils/request'

export const categoryApi = () => {
  return customRequest<categoryType[]>({
    url: '/category/top',
  })
}
