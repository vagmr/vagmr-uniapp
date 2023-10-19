import type { AddressListParams } from './address'

/* 获取订单返回的地址信息 */
export interface userAddresses extends AddressListParams {
  /**邮编 */
  postalCode: string
}

/* 获取订单返回的商品信息 */
export type goods = {
  /** id */
  id: string
  /** 商品名称 */
  name: string
  /** 商品图片 */
  picture: string
  /** 数量 */
  count: number
  /** skuid */
  skuId: string
  /** 属性文字，例如“颜色:瓷白色 尺寸：8寸” */
  attrsText: string
  /** 价格 */
  price: number
  /** 实付单价 */
  payPrice: number
  /** 小计总价 */
  totalPrice: number
  /**实付价格小计 */
  totalPayPrice: number
}
/* 返回的结算信息 */
export type summary = {
  /** 商品总数 */
  goodsCount: number
  /** 商品总价 */
  totalPrice: number
  /** 实付总价 */
  totalPayPrice: number
  /** 邮费 */
  postFee: number
  /**折扣总计 */
  discountPrice: number
}

/* 返回信息类型 */
export type OrderResult = {
  /** 用户地址列表 */
  userAddresses: userAddresses[]
  /** 商品集合 */
  goods: goods[]
  /** 结算信息 */
  summary: summary
}
