<script setup lang="ts">
import { getProfileApi, putProfileApi } from '@/services/profile/profileApi'
import type { Gender, ProfileDetail } from '@/types/login'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { useMemberStore } from '@/stores'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
//引入用户仓库
const memberStore = useMemberStore()
//个人信息的渲染
const profile = ref<ProfileDetail>({} as ProfileDetail)
//封装获取个人信息的函数
const getProFileData = async () => {
  const res = await getProfileApi()
  profile.value = res.result
}
//修改性别的函数
const onGenderChange: UniHelper.RadioGroupOnChange = (e) => {
  profile.value.gender = e.detail.value as Gender
}
//修改日期的函数
const DataChange: UniHelper.DatePickerOnChange = (e) => {
  profile.value.birthday = e.detail.value
}

//修改城市的函数
let locationCode: string[] = []
const changeRegion: UniHelper.RegionPickerOnChange = (e) => {
  profile.value.fullLocation = e.detail.value.join(' ')
  locationCode = e.detail.code!
}
//修改个人信息的请求函数
const putProfileData = async () => {
  const res = await putProfileApi({
    nickname: profile.value?.nickname,
    gender: profile.value.gender,
    birthday: profile.value.birthday,
    profession: profile.value.profession,
    provinceCode: locationCode[0],
    cityCode: locationCode[1],
    countyCode: locationCode[2],
  })
  //更新仓库中的昵称
  memberStore.profile!.nickname = res.result.nickname

  uni.showToast({ icon: 'success', title: '保存成功' })
  setTimeout(() => {
    uni.navigateBack()
  }, 500)
}
//定义上传头像的函数
const onChangeAvatar = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (res) => {
      const filepath = res.tempFiles[0].tempFilePath
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: filepath,
        //是否需要这部分存疑
        success: (res) => {
          if (res.statusCode === 200) {
            const avatar = JSON.parse(res.data).result.avatar
            //个人信息页的数据更新
            profile.value!.avatar = avatar
            //仓库数据更新
            memberStore.profile!.avatar = avatar
            uni.showToast({ icon: 'success', title: '更新头像成功' })
          } else {
            uni.showToast({
              title: '出现错误',
              icon: 'error',
            })
          }
        },
      })
    },
  })
}
onLoad(() => {
  getProFileData()
})
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view @tap="onChangeAvatar" class="avatar">
      <view class="avatar-content">
        <image class="image" :src="profile?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">vgamr(不可修改)</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请填写昵称"
            @input="profile!.nickname = $event.target!.value"
            :value="profile?.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profile?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profile?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            @change="DataChange"
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profile?.birthday"
          >
            <view v-if="profile?.birthday">{{ profile.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            @change="changeRegion"
            class="picker"
            mode="region"
            :value="profile?.fullLocation?.split(' ')"
          >
            <view v-if="profile?.fullLocation">{{ profile.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input class="input" type="text" placeholder="请填写职业" v-model="profile!.profession" />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button @tap="putProfileData" class="form-button">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }

    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
