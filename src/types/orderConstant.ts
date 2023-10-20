/** 订单状态的枚举值  */
export enum OrderState {
  DaiFuKuan = 1,
  DaiFaHuo = 2,
  DaiShuoHuo = 3,
  Daipingjia = 4,
  YiWanCheng = 5,
  YiQuXiao = 6,
}
/** 对应的状态文本  */
export const OrderStateList = [
  { id: 1, text: '待付款' },
  { id: 2, text: '待发货' },
  { id: 3, text: '待收货' },
  { id: 4, text: '待评价' },
  { id: 5, text: '已完成' },
  { id: 6, text: '已取消' },
]
