<script setup lang="ts">
//
import { deleteAddressApi, getAddressListApi } from '@/services/address/addressApi'
import type { AddressListParams } from '@/types/address'
import { onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
//响应式数据接收地址列表
const addressList = ref<AddressListParams[]>([])
//获取地址列表的函数
const getAddressList = async () => {
  const res = await getAddressListApi()
  addressList.value = res.result
}
/**
 * -Deletes an address.
 * -删除某条地址
 * @param {string} id - The ID of the address to be deleted.
 * @return {Promise<void>} - A promise that resolves when the address is successfully deleted.
 */
const deleteAddress = (id: string) => {
  uni.showModal({
    title: '删除地址',
    cancelColor: '#333',
    confirmColor: '#f00',
    content: '确定删除该地址吗？',
    success: async (res) => {
      if (res.confirm) {
        await deleteAddressApi(id)
        uni.showToast({
          icon: 'success',
          title: '删除成功',
        })
        getAddressList()
      }
    },
  })
}
//每次页面显示时获取地址列表
onShow(() => {
  getAddressList()
})
</script>

<template>
  <view class="viewport">
    <!-- 地址列表 -->
    <scroll-view class="scroll-view" scroll-y>
      <view v-if="addressList.length" class="address">
        <uni-swipe-action class="address-list">
          <!-- 收货地址项 -->
          <uni-swipe-action-item class="item" v-for="el in addressList" :key="el.id">
            <view class="item-content">
              <view class="user">
                {{ el.receiver }}
                <text class="contact">{{ el.contact }}</text>
                <text v-if="el.isDefault" class="badge">默认</text>
              </view>
              <view class="locate">{{ el.fullLocation }} {{ el.address }}</view>
              <navigator
                class="edit"
                hover-class="none"
                :url="`/pagesMember/addressForm/addressForm?id=${el.id}`"
              >
                修改
              </navigator>
            </view>
            <template #right>
              <button @tap="deleteAddress(el.id)" class="delete-button">删除</button>
            </template>
          </uni-swipe-action-item>
        </uni-swipe-action>
      </view>
      <view v-else class="blank">暂无收货地址</view>
    </scroll-view>
    <!-- 添加按钮 -->
    <view class="add-btn">
      <navigator hover-class="none" url="/pagesMember/addressForm/addressForm">
        新建地址
      </navigator>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

/* 删除按钮 */
.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
  font-size: 28rpx;
  font-weight: 700;
  color: #cf4444;
  border-radius: 0;
  padding: 0;
  background-color: rgb(131, 130, 131);
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f4f4f4;

  .scroll-view {
    padding-top: 20rpx;
  }
}

.address {
  padding: 0 20rpx;
  margin: 0 20rpx;
  border-radius: 10rpx;
  background-color: #fff;

  .item-content {
    line-height: 1;
    padding: 40rpx 10rpx 38rpx;
    border-bottom: 1rpx solid #ddd;
    position: relative;

    .edit {
      position: absolute;
      top: 36rpx;
      right: 30rpx;
      padding: 2rpx 0 2rpx 20rpx;
      border-left: 1rpx solid #666;
      font-size: 26rpx;
      color: #666;
      line-height: 1;
    }
  }

  .item:last-child .item-content {
    border: none;
  }

  .user {
    font-size: 28rpx;
    margin-bottom: 20rpx;
    color: #333;

    .contact {
      color: #666;
    }

    .badge {
      display: inline-block;
      padding: 4rpx 10rpx 2rpx 14rpx;
      margin: 2rpx 0 0 10rpx;
      font-size: 26rpx;
      color: #27ba9b;
      border-radius: 6rpx;
      border: 1rpx solid #27ba9b;
    }
  }

  .locate {
    line-height: 1.6;
    font-size: 26rpx;
    color: #333;
  }
}

.blank {
  margin-top: 300rpx;
  text-align: center;
  font-size: 32rpx;
  color: #888;
}

.add-btn {
  height: 80rpx;
  text-align: center;
  line-height: 80rpx;
  margin: 30rpx 20rpx;
  color: #fff;
  border-radius: 80rpx;
  font-size: 30rpx;
  background-color: #27ba9b;
}
</style>
