import type { vagGuessInstance } from '@/types/component'
import { ref } from 'vue'
//自定义组合式函数
/**
 * Updates the guess like list by retrieving new guesses.
 * 用于在滚动到底部时更新猜你喜欢列表
 *@param {vagGuessInstance} guessRef - The guess ref
 *@author -vagmr
 *@return {object} -返回要绑定到组件上的ref和触底时调用的函数
 */
export const updateGuessLikeList = () => {
  const guessRef = ref<vagGuessInstance>()
  const onScrollLower = () => {
    guessRef.value?.getGuessLike()
  }
  return { guessRef, onScrollLower }
}
