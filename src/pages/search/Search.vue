<template>
  <view>
    <view class="SearchArea">
      <input type="text" focus @input="getAI" v-model="searchValue" />
      <text @click="cancel">取消</text>
    </view>

    <view>
      <view
        v-for="item in songList"
        :key="item.id"
        @click="ToAudio(item.id)"
        class="showList"
      >
        <icon type="search" size="20" color="#ccc" />
        <text>{{ item.name }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      searchValue: '',
      songList: [],
    }
  },
  components: {},
  methods: {
    cancel() {
      uni.navigateBack()
    },
    getAI() {
      // 防抖
      //  清除定时器
      clearTimeout(this.timer)

      if (this.searchValue.length == 0) {
        this.songList = []
        return
      }
      this.timer = setTimeout(async () => {
        const { data: res } = await this.$request({
          url: '/search',
          data: {
            keywords: this.searchValue,
            limit: 10,
          },
        })
        this.songList = res.result.songs
        // console.log(this.songList)
      }, 500)
    },
    ToAudio(id) {
      // console.log(id)
      uni.navigateTo({
        url: `/pages/audio/Audio?id=${id}`,
      })
    },
  },
}
</script>

<style scoped>
.SearchArea {
  width: 100%;
  padding: 10rpx 20rpx;
  display: flex;
  align-items: center;
}
.SearchArea input {
  width: 600rpx;
  height: 60rpx;
  border-radius: 30rpx;
  margin-right: 20rpx;
  background-color: #f0f0f0;
  font-size: 28rpx;
  padding-left: 28rpx;
}

/* 歌曲列表 */
.showList {
  display: flex;
  align-items: center;
  height: 80rpx;
  border-bottom: 1rpx solid #ccc;
  padding: 0 20rpx;
}
.showList text {
  margin-left: 20rpx;
}
</style>
