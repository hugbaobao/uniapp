<template>
  <view class="main-content">
    <view class="search" @click="ToSearch"> 搜索</view>

    <view class="swiper">
      <swiper indicator-dots circular autoplay interval="3000">
        <swiper-item v-for="item in bannerList" :key="item.id">
          <image :src="item.pic" alt="" mode="widthFix"></image>
        </swiper-item>
      </swiper>
    </view>

    <view class="suggest">
      <scroll-view class="scroll-view_H padding" scroll-x="true">
        <view
          id="demo1"
          class="scroll-view-item_H"
          v-for="item in circleList"
          :key="item.id"
        >
          <view class="picture">
            <image :src="item.iconUrl" alt="" mode="widthFix"></image>
          </view>
          <text>{{ item.name }}</text>
        </view>
      </scroll-view>
    </view>

    <view class="often padding">
      <common :contentList="recommendList">推荐歌单</common>
    </view>

    <view class="segment">
      <Segment></Segment>
    </view>
  </view>
</template>

<script>
import common from '@/components/common.vue'
import Segment from '@/components/segment/Segment.vue'
export default {
  name: '',
  data() {
    return {
      bannerList: [],
      circleList: [],
      recommendList: [],
    }
  },
  methods: {
    // 获取轮播图
    async getpic() {
      const { data: res } = await this.$request({
        url: '/homepage/block/page',
      })
      // console.log(res);
      this.bannerList = res.data.blocks[0].extInfo.banners
    },
    // 圆形图标入口
    async getcircle() {
      const { data: res1 } = await this.$request({
        url: '/homepage/dragon/ball',
      })
      this.circleList = res1.data
    },
    // 推荐歌单
    async getrecommend() {
      const { data: res2 } = await this.$request({
        url: '/personalized',
        data: {
          limit: 6,
        },
      })
      this.recommendList = res2.result
      // console.log(this.recommendList)
    },
    ToSearch() {
      uni.navigateTo({
        url: '/pages/search/Search',
      })
    },
  },
  onLoad() {
    this.getpic()

    this.getcircle()

    this.getrecommend()
  },
  components: {
    common,
    Segment,
  },
}
</script>

<style scoped>
.main-content {
  background-color: #f0f0f0;
  padding-top: 10rpx;
}
/* 公共样式 */
.padding {
  padding: 20rpx 25rpx;
}
/* 搜索框 */
.search {
  width: 700rpx;
  margin: 0 auto;
  background-color: #fff;
  height: 60rpx;
  line-height: 60rpx;
  border-radius: 30rpx;
  text-indent: 1em;
  font-size: 28rpx;
  color: #ccc;
}

/* 轮播图 */
.swiper {
  width: 750rpx;
  margin: 10rpx auto;
}
.swiper image {
  width: 100%;
}

/* 滑动盒子 */
.scroll-view_H {
  white-space: nowrap;
  width: 100%;
  box-shadow: 0 5rpx 3px #fff;
}
.scroll-view_H .scroll-view-item_H:nth-child(n + 2) {
  margin-left: 10rpx;
}
.scroll-view-item_H {
  display: inline-block;
  width: 150rpx;
  height: 150rpx;
  text-align: center;
  font-size: 24rpx;
  padding-right: 25rpx;
}
.scroll-view-item_H .picture {
  width: 100rpx;
  height: 100rpx;
  margin: 0 auto;
  border-radius: 50rpx;
  background-color: rgb(253, 228, 228);
  margin-bottom: 10rpx;
  position: relative;
  overflow: visible;
  z-index: 1;
}
.picture image {
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  left: 0rpx;
  top: -100rpx;
  filter: drop-shadow(0rpx 100rpx 0rpx #fe5454);
  z-index: 99;
}
/* 猜你喜欢 */

/* 分段器 */
.segment {
  margin-top: 0;
}
</style>
