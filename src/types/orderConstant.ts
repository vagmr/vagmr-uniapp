/** 订单状态的枚举值  */
export enum OrderState {
  DaiFuKuan = 0,
  DaiFaHuo = 1,
  DaiShuoHuo = 2,
  Daipingjia = 3,
  YiWanCheng = 4,
  YiQuXiao = 5,
}
/** 对应的状态文本  */
export const OrderStateList = [
  { id: 0, text: '待付款' },
  { id: 1, text: '待发货' },
  { id: 2, text: '待收货' },
  { id: 3, text: '待评价' },
  { id: 4, text: '已完成' },
  { id: 5, text: '已取消' },
]
