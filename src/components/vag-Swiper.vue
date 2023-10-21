<script setup lang="ts">
import { ref } from 'vue'
import type { bannerItem } from '@/types/home'

const activeIndex = ref(0)
const onChange: UniHelper.SwiperOnChange = (e) => {
  activeIndex.value = e.detail.current
}

withDefaults(defineProps<{ bannerList: bannerItem[] }>(), {
  bannerList: () => [],
})
</script>

<template>
  <view class="carousel">
    <swiper :circular="true" :autoplay="false" :interval="3000" @change="onChange">
      <swiper-item v-for="el in bannerList" :key="el.id">
        <navigator url="/pages/index/index" hover-class="none" class="navigator">
          <image mode="aspectFill" class="image" :src="el.imgUrl"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in bannerList.length"
        :key="item"
        class="dot"
        :class="{ active: index === activeIndex }"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
@import '@/components/style/vag-Swiper.scss';
</style>
