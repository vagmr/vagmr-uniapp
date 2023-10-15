/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import vagSwiper from '@/components/vag-Swiper.vue'
import vagGuessLike from '@/components/vag-guessLike.vue'
declare module 'vue' {
  export interface GlobalComponents {
    'vag-Swiper': typeof vagSwiper
    'vag-guessLike': typeof vagGuessLike
  }
}
//创建组件实例类型
export type vagGuessInstance = InstanceType<typeof vagGuessLike>
