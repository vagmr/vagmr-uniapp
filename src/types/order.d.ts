import type { AddressListParams } from './address'
import type { orderState } from './orderConstant'
import type { PageParams } from '@/types/global'

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

/**发送订单的参数类型声明  */
export type OrderParams = {
  /**  商品集合 */
  goods: Pick<goods, 'skuId' | 'count'>[]
  /**地址id */
  addressId: string
  /**配送时间类型，1为不限，2为工作日，3为双休或假日
     枚举值:123 */
  deliveryTimeType: number
  /**买家留言 */
  buyerMessage: string
  /**支付方式，1为在线支付，2为货到付款 */
  payType: 1 | 2
  /**支付渠道：支付渠道，1支付宝、2微信--支付方式为在线支付时，传值，为货到付款时，不传值 */
  payChannel: 1 | 2
}
/* ---------------------------------下面是订单详情部分----------------------------------------------- */

/** 订单详情 返回信息 */
export type OrderInfoResult = {
  /** 订单编号 */
  id: string
  /** 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消 */
  orderState: orderState
  /** 倒计时--剩余的秒数 -1 表示已经超时，正数表示倒计时未结束 */
  countdown: number
  /** 商品集合 [ 商品信息 ] */
  skus: OrderSkuItem[]
  /** 收货人 */
  receiverContact: string
  /** 收货人手机 */
  receiverMobile: string
  /** 收货人完整地址 */
  receiverAddress: string
  /** 下单时间 */
  createTime: string
  /** 商品总价 */
  totalMoney: number
  /** 运费 */
  postFee: number
  /** 应付金额 */
  payMoney: number
}

/** 商品信息 */
export type OrderSkuItem = {
  /** sku id */
  id: string
  /** 商品 id */
  spuId: string
  /** 商品名称 */
  name: string
  /** 商品属性文字 */
  attrsText: string
  /** 数量 */
  quantity: number
  /** 购买时单价 */
  curPrice: number
  /** 图片地址 */
  image: string
}

/** 物流信息 返回值类型 */
export type OrderLogisticResult = {
  /** 快递公司 */
  company: {
    /** 公司名称 */
    name: string
    /** 快递编号 */
    number: string
    /** 联系电话 */
    tel: string
  }
  /** 商品件数 */
  count: number
  /** 物流日志 */
  list: LogisticItem[]
}

/** 物流日志 */
export type LogisticItem = {
  /** 信息ID */
  id: string
  /** 信息文字 */
  text: string
  /** 时间 */
  time: string
}

/** 订单列表参数 */
export type OrderListParams = PageParams & { orderState: number }

/** 订单列表 */
export type OrderListResult = {
  /** 总记录数 */
  counts: number
  /** 数据集合    [ 订单信息 ] */
  items: OrderItem[]
  /** 当前页码 */
  page: number
  /** 总页数 */
  pages: number
  /** 页尺寸 */
  pageSize: number
}

/** 订单列表项 */
export type OrderItem = OrderInfoResult & {
  /** 总件数 */
  totalNum: number
}
