/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import vagSwiper from '@/components/vag-Swiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    'vag-Swiper': typeof vagSwiper
    'vag-guessLike': typeof import('@/components/vag-guessLike.vue')['default']
  }
}
