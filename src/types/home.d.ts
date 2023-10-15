export type bannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}
export type categoryItem = {
  id: string
  icon: string
  name: string
}
export type hotShopItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}
