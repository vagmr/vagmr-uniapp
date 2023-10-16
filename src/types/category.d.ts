import type { goodsItem } from '@/types/global'
//分类页面中chilren数组的类型
export type childrenType = {
  // 二级分类id
  id: string
  // 二级分类名称
  name: string
  // 二级分类图片
  picture: string
  goods: goodsItem[]
  brands: null
  saleProperties: null
  categories: null
  parentName: null
  parentId: null
}

//分类页面的总类型
export type categoryType = {
  id: string
  name: string
  picture: string
  imageBanners: string[]
  children: childrenType[]
}
