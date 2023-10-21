<script setup lang="ts">
//
import customNavbar from '@/pages/index/componets/customNavbar.vue'
import { getBanner, getCategory, hotRecomand } from '@/services/home/getMethod'
import type { bannerItem, categoryItem, hotShopItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './componets/categoryPanel.vue'
import HotPanel from './componets/hotPanel.vue'
import type { vagGuessInstance } from '@/types/component.d.ts'
import skeleton from '@/pages/index/componets/skeleton.vue'
//定义数组存放数据
const bannerList = ref<bannerItem[]>([])
//分类数据存放
const categoryList = ref<categoryItem[]>([])
const getBannerRe = async () => {
  const res = await getBanner()
  bannerList.value = res.result
}
//获取前台分类
const getCategoryRe = async () => {
  const res = await getCategory()
  categoryList.value = res.result
}
//热门推荐模块渲染
const hotReList = ref<hotShopItem[]>([])
const getHot = async () => {
  const res = await hotRecomand()
  hotReList.value = res.result
}
//获取更多分页
const guessRef = ref<vagGuessInstance>()

const onLower = () => {
  guessRef.value?.getGuessLike()
}
//自定义下拉刷新处理函数
const isTrigge = ref(false)
const onRefresh = async () => {
  isTrigge.value = true
  guessRef.value?.reStore()
  await Promise.all([getBanner(), getHot()])
  isTrigge.value = false
}
//页面加载
const isLoading = ref(true)
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getBannerRe(), getCategoryRe(), getHot()])
  isLoading.value = false
})
</script>

<template>
  <custom-navbar />
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresh"
    :refresher-triggered="isTrigge"
    @scrolltolower="onLower"
    class="container"
    scroll-y
  >
    <skeleton v-if="isLoading" />
    <template v-else>
      <vag-Swiper :bannerList="bannerList" />
      <CategoryPanel :categoryList="categoryList" />
      <HotPanel :list="hotReList" />
      <vag-guessLike ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
/* #ifdef APP-PLUS */
#app,
/* #endif */
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.container {
  flex: 1;
}
</style>
