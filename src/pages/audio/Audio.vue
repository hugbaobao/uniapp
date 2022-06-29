<template>
  <view>
    <view @click="onplay" class="play">
      <image
        src="/static/bofang.png"
        alt=""
        mode="widthFix"
        v-if="!flag"
      ></image>
      <image src="/static/zanting.png" alt="" mode="widthFix" v-else></image>
    </view>
  </view>
</template>
el

<script>
// 播放api
const innerAudioContext = uni.createInnerAudioContext()
// innerAudioContext.autoplay = true
export default {
  name: '',
  data() {
    return {
      musicId: '',
      musicInfo: {},
      flag: false,
    }
  },
  onLoad(option) {
    // console.log(option.id)
    this.musicId = option.id
    this.getmusicURL()
    this.onplay()
  },
  components: {},
  methods: {
    async getmusicURL() {
      const { data: res } = await this.$request({
        url: '/song/url',
        data: {
          id: this.musicId,
        },
      })
      this.musicInfo = res.data[0]
      // console.log(this.musicInfo)
      innerAudioContext.src = this.musicInfo.url
    },
    onplay() {
      this.flag = !this.flag

      if (this.flag == true) {
        innerAudioContext.play()
      } else {
        return innerAudioContext.pause()
      }
      innerAudioContext.onError(() => {
        uni.showToast({
          title: '歌曲播放失败！',
          icon: error,
        })
      })
    },
  },
}
</script>

<style scoped>
.play {
  width: 200rpx;
  height: 200rpx;
  margin: 400rpx auto;
}
.play image {
  width: 100%;
  height: 100%;
}
</style>
