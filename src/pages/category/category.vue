<script setup lang="ts">
//
import vagSwiper from '@/components/vag-Swiper.vue'
import { getBanner } from '@/services/home/getMethod'
import { ref, computed } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { bannerItem } from '@/types/home'
import { categoryApi } from '@/services/category/categoryPageApi'
import type { categoryType } from '@/types/category'
import pageSkeleton from '@/pages/category/components/pageSkeleton.vue'
//轮播图模块
const bannerList = ref<bannerItem[]>([])
const getBannerRe = async () => {
  const res = await getBanner(2)
  bannerList.value = res.result
}
//定义获取数据函数
const categoryList = ref<categoryType[]>([])
const getCategoryData = async () => {
  const res = await categoryApi()
  // console.log(res)
  categoryList.value = res.result
}
//tab栏切换
const activeIndex = ref(0)
//通过计算属性实时获取二级分类的数据
const subCategoryList = computed(() => {
  return categoryList.value[activeIndex.value]?.children
})
//骨架屏生成显示
const isLoading = ref(true)
//加载数据
onLoad(async () => {
  await Promise.all([getBannerRe(), getCategoryData()])
  isLoading.value = false
})
</script>

<template>
  <template v-if="isLoading">
    <pageSkeleton />
  </template>

  <view v-else class="viewport">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>

    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          class="item"
          :class="{ active: index === activeIndex }"
          @tap="activeIndex = index"
        >
          <text class="name">{{ item.name }} </text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 焦点图 -->
        <vagSwiper :bannerList="bannerList" />
        <!-- 内容区域 -->
        <view class="panel" v-for="item in subCategoryList" :key="item.id">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none">全部</navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              class="goods"
              hover-class="none"
              :url="`/pages/shopDatail/shopDatail?id=${goods.id}`"
            >
              <image class="image" :src="goods.picture"></image>
              <view class="name ellipsis">{{ goods.name }}</view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }}</text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
@import './style/category.scss';
</style>
