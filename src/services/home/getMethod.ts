import { customRequest } from '@/utils/request'
import type { bannerItem, categoryItem } from '@/types/home'
/**
 * Retrieves the banner for the specified distribution site.
 * -首页-广告区域-小程序
 *
 * @param {number} distributionSite - The distribution site where the banner will be displayed. Default value is 1 for the home page.
 * @return {Promise} A promise that resolves to the banner data.
 */
export const getBanner = (distributionSite: number = 1): Promise<any> => {
  return customRequest<bannerItem[]>({
    url: '/home/banner',
    method: 'GET',
    data: {
      //广告区域展示位置，1 为首页（默认值），2 为商品分类页
      distributionSite,
    },
  })
}
export const getCategory = () => {
  return customRequest<categoryItem[]>({
    url: '/home/category/mutli',
  })
}
