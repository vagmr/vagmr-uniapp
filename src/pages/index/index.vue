<script setup lang="ts">
//
import customNavbar from '@/pages/index/componets/customNavbar.vue'
import { getBanner, getCategory, hotRecomand } from '@/services/home/getMethod'
import type { bannerItem, categoryItem, hotShopItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './componets/categoryPanel.vue'
import HotPanel from './componets/hotPanel.vue'

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
onLoad(() => {
  getBannerRe()
  getCategoryRe()
  getHot()
})
</script>

<template>
  <custom-navbar />
  <scroll-view class="container" scroll-y>
    <vag-Swiper :bannerList="bannerList" />
    <CategoryPanel :categoryList="categoryList" />
    <HotPanel :list="hotReList" />
    <vag-guessLike />
  </scroll-view>
</template>

<style lang="scss">
//
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
