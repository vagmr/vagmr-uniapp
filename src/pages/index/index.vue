<script setup lang="ts">
//
import customNavbar from '@/pages/index/componets/customNavbar.vue'
import { getBanner, getCategory } from '@/services/home/getMethod'
import type { bannerItem, categoryItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './componets/categoryPanel.vue'

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
onLoad(() => {
  getBannerRe()
  getCategoryRe()
})
</script>

<template>
  <view class="index">
    <custom-navbar />
    <vag-Swiper :bannerList="bannerList" />
    <CategoryPanel :categoryList="categoryList" />
  </view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
