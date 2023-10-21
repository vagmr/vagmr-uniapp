<template name="skeleton">
  <view class="sk-container">
    <view is="components/vag-Swiper">
      <view class="carousel Swiper--carousel">
        <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator Swiper--navigator" hover-class="none">
              <image class="image Swiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator Swiper--indicator">
          <text class="dot Swiper--dot active Swiper--active"></text>
          <text class="dot Swiper--dot"></text>
          <text class="dot Swiper--dot"></text>
          <text class="dot Swiper--dot"></text>
          <text class="dot Swiper--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/componets/categoryPanel">
      <view class="category categoryPanel--category">
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-621 sk-text"
            >居家</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-171 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-482 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-283 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-761 sk-text"
            >个护</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-268 sk-text"
            >严选</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-321 sk-text"
            >数码</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-80 sk-text"
            >运动</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-1 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator class="category-item categoryPanel--category-item" hover-class="none">
          <image class="icon categoryPanel--icon sk-image"></image>
          <text class="text categoryPanel--text sk-transparent sk-text-14-2857-447 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view is="pages/index/componets/hotPanel">
      <view class="panel hotPanel--panel hot hotPanel--hot">
        <view class="item hotPanel--item">
          <view class="title hotPanel--title">
            <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-286 sk-text"
              >特惠推荐</text
            >
            <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-886 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator class="cards hotPanel--cards" hover-class="none">
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item hotPanel--item">
          <view class="title hotPanel--title">
            <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-125 sk-text"
              >爆款推荐</text
            >
            <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-802 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator class="cards hotPanel--cards" hover-class="none">
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item hotPanel--item">
          <view class="title hotPanel--title">
            <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-650 sk-text"
              >一站买全</text
            >
            <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-604 sk-text"
              >精心优选</text
            >
          </view>
          <navigator class="cards hotPanel--cards" hover-class="none">
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item hotPanel--item">
          <view class="title hotPanel--title">
            <text class="title-text hotPanel--title-text sk-transparent sk-text-14-2857-189 sk-text"
              >新鲜好物</text
            >
            <text class="title-desc hotPanel--title-desc sk-transparent sk-text-14-2857-139 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator class="cards hotPanel--cards" hover-class="none">
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image hotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/vag-guessLike" class="r">
      <view class="caption guessLike--caption">
        <text
          class="text guessLike--text sk-transparent sk-text-0-0000-965 sk-text sk-pseudo sk-pseudo-circle"
          >猜你喜欢</text
        >
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
.sk-transparent {
  color: transparent !important;
}
/* #ifdef  APP-PLUS || H5 */
@import './style/hotPanel.scss';
@import './style/categoryPanel.scss';
@import '@/components/style/vag-Swiper.scss';
@import '@/components//style/vag-guessLike.scss';
/* #endif */
.sk-text-3-3333-298 {
  background-image: linear-gradient(
    transparent 3.3333%,
    #eeeeee 0%,
    #eeeeee 96.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 27.1739rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-845 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}
.sk-text-14-2857-621 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-171 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-482 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-283 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-761 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-268 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-321 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-80 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-1 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-447 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 35.5072rpx;
  position: relative !important;
}
.sk-text-14-2857-286 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-886 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-125 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-802 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-650 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-604 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-14-2857-189 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}
.sk-text-14-2857-139 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}
.sk-text-0-0000-965 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7971rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
