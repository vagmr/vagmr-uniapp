<script setup lang="ts">
//
import { guessLikeApi } from '@/services/home/getMethod'
import { onMounted, ref } from 'vue'
import type { GuessItem } from '@/types/home'
import type { PageParams } from '@/types/global'

//猜你喜欢模块封装
const guessLikeList = ref<GuessItem[]>([])
const pageConfig: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
if (import.meta.env.DEV) {
  pageConfig.page = 1
}
const finish = ref(false)
/**
 * Fetches guess-like items from the API and updates the guessLikeList.
 *从Api获取猜你喜欢数据更新猜你喜欢列表
 * @return {Promise<void>} - A promise that resolves when the guess-like items are fetched and the guessLikeList is updated.
 */
const getGuessLike = async () => {
  if (finish.value) {
    return uni.showToast({ title: '没有更多数据了', icon: 'none' })
  }
  const res = await guessLikeApi(pageConfig)
  guessLikeList.value.push(...res.result.items)
  //判断是否还有更多
  if (pageConfig.page < res.result.pages) {
    //加载更多
    pageConfig.page++
  } else {
    finish.value = true
  }
}
onMounted(() => {
  getGuessLike()
})
//下拉刷新,重置数据
const reStore = () => {
  pageConfig.page = 1
  guessLikeList.value = []
  finish.value = false
}
defineExpose({
  getGuessLike,
  reStore,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessLikeList"
      :key="item.id"
      :url="`/pages/shopDatail/shopDatail?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name">{{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text"> {{ finish ? '没有更多数据了' : '正在加载...' }}</view>
</template>

<style lang="scss">
@import '@/components/style/vag-guessLike.scss';
</style>
