<template>
  <view class="block"> 

<view class="hreader">
  <view class="item" style="font-weight:700"><slot name="default"></slot></view>
  <view class="item">更多 ></view>
</view>

<view class="content"></view>
<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" 
          v-for="item in contentList" 
          :key="item.id">
          <view class="png">
              <image :src="item.picUrl" alt=""></image>
            </view>
            <text>{{ item.name }}</text>
          </view>
				</scroll-view>
</view>
</template>

<script>

export default {
  name:'',
  data() {
    return { 
			}
  },
props:{
  contentList:{
          type: Array,
					default: [],
					required: true,
  }
}
}
</script>

<style scoped>
.hreader{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item {
  height: 40rpx;
  line-height: 40rpx;
}
.hreader .item:nth-child(2) {
  font-size: 24rpx;
  padding: 0 20rpx;
  border: 1px solid #999;
  border-radius: 28rpx;
}

/* content */
.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}
	.scroll-view-item_H {
		display: inline-block;
		width: 200rpx;
		text-align: center;
		font-size: 36rpx;
    padding-top: 20rpx;
	}
  .scroll-view-item_H .png {
    width: 100%;
    height: 100%;
    border-radius: 20rpx;
    overflow: hidden;
  }
  .scroll-view_H .scroll-view-item_H:nth-child(n+2) { 
    margin-left: 15rpx;
  }
/* 图片部分 */
.png image{
    width: 200rpx;
    height: 200rpx;
}
.scroll-view-item_H text {
  font-size: 28rpx;
  display: inline-block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>