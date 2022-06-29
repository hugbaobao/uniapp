<template>
  <view>
    <scroll-view class="scroll-view_H" scroll-x="true" enable-flex>
      <view
        id="demo1"
        class="scroll-view-item_H"
        v-for="item in songList"
        :key="item.id"
      >
        <view class="image">
          <image :src="item.album.picUrl" alt="" mode="widthFix"></image>
        </view>
        <view class="text">
          <text>{{ item.name }}</text
          ><br />
          <text style="font-size: 24rpx">{{ item.artists[0].name }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  created() {},
  props: ['songList'],
}
</script>

<style scoped>
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  height: 310rpx;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  background-color: #fff;
}
.scroll-view-item_H {
  display: inline-block;
  display: flex;
  justify-content: left;
  width: 650rpx;
  height: 100rpx;
  margin-right: 20rpx;
}
.image {
  width: 100rpx;
  height: 100rpx;
  display: inline-block;
  border-radius: 10rpx;
  overflow: hidden;
  margin-right: 10rpx;
}
.image image {
  width: 100%;
  height: 100%;
}
.text {
  flex: 1;
  padding-left: 10rpx;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.text text {
  display: inline-block;
  width: 500rpx;
  font-size: 28rpx;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
