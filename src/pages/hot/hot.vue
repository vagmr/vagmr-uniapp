<script setup lang="ts">
import { hotPageApi } from '@/services/home/hotPage'
import { onMounted } from 'vue'
import { ref } from 'vue'
import type { SubTypeItem } from '@/types/hot'
// 热门推荐页 标题和url
const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const query = defineProps({
  type: {
    type: String,
  },
})
const curItemMap = hotMap.find((v) => v.type === query.type)
uni.setNavigationBarTitle({ title: curItemMap!.title })
//hot页面渲染
const hotBanner = ref('')
const sublist = ref<(SubTypeItem & { isFinlish?: boolean })[]>([])
const activeIndex = ref(0)
//页面数据是否全部完成加载

//添加滚动触底事件
const onScroll = async () => {
  const curList = sublist.value[activeIndex.value]
  if (curList.goodsItems.page < curList.goodsItems.pages) {
    curList.goodsItems.page++
  } else {
    curList.isFinlish = true
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'success',
    })
  }
  const res = await hotPageApi(curItemMap!.url, {
    subType: curList.id,
    page: curList.goodsItems.page,
    pageSize: curList.goodsItems.pageSize,
  })
  //新的数据
  const newList = res.result.subTypes[activeIndex.value]
  curList.goodsItems.items.push(...newList.goodsItems.items)
}
//定义请求函数
const getHotPageData = async () => {
  //利用vite中的环境变量
  const res = await hotPageApi(curItemMap!.url, { page: import.meta.env.DEV ? 30 : 1 })
  hotBanner.value = res.result.bannerPicture
  sublist.value = res.result.subTypes
}
//页面加载
onMounted(() => {
  getHotPageData()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="hotBanner"> </image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(el, index) in sublist"
        :key="el.id"
        class="text"
        :class="{ active: index === activeIndex }"
        @tap="activeIndex = index"
        >{{ el.title }}</text
      >
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      v-for="(item, index) in sublist"
      :key="item.id"
      v-show="index === activeIndex"
      scroll-y
      class="scroll-view"
      @scrolltolower="onScroll"
    >
      <view class="goods">
        <navigator
          hover-class="none"
          class="navigator"
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=`"
        >
          <image class="thumb" :src="goods.picture"></image>
          <view class="name ellipsis">{{ goods.desc }}</view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">{{ item.isFinlish ? '没有更多数据了' : ' 正在加载...' }}</view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.scroll-view {
  flex: 1;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;

  .text {
    margin: 0 20rpx;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;

  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }

  .symbol {
    font-size: 70%;
  }

  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
