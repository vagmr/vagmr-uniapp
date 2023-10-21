<script setup lang="ts">
import type { hotShopItem } from '@/types/home'

//
defineProps<{ list: hotShopItem[] }>()
</script>

<template>
  <!-- 推荐专区 -->
  <view class="panel hot">
    <view class="item" v-for="ele in list" :key="ele.id">
      <view class="title">
        <text class="title-text">{{ ele.title }}</text>
        <text class="title-desc">{{ ele.alt }}</text>
      </view>
      <navigator hover-class="none" :url="`/pages/hot/hot?type=${ele.type}`" class="cards">
        <image
          v-for="src in ele.pictures"
          :key="src"
          class="image"
          mode="aspectFit"
          :src="src"
        ></image>
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
@import './style/hotPanel.scss';
</style>
