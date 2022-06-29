<template>
  <view>
    <!-- 分段器 -->
    <view class="uni-padding-wrap uni-common-mt">
      <uni-segmented-control
        :current="current"
        :values="items"
        :style-type="styleType"
        :active-color="activeColor"
        @clickItem="onClickItem"
      />
    </view>

    <view class="content">
      <!-- 明天把这里改成路由模式 -->
      <view v-if="current === 0"><currentz></currentz></view>
      <view v-if="current === 1"><curruntO></curruntO></view>
      <view v-if="current === 2"><curruntT></curruntT></view>
      <view v-if="current === 3"><curruntTR></curruntTR></view>
    </view>
  </view>
</template>

<script>
import { uniSegmentedControl } from '@dcloudio/uni-ui'
import currentz from '@/components/segment/segcontent'
import curruntO from '@/components/segment/segcontentO.vue'
import curruntT from '@/components/segment/segcontentT.vue'
import curruntTR from '@/components/segment/segcontentTR.vue'
export default {
  name: '',
  data() {
    return {
      items: ['华语', '欧美', '日本', '韩国'],
      current: 0,
      activeColor: '#dd524d',
      styleType: 'text',
    }
  },
  methods: {
    onClickItem(e) {
      // console.log(e);
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex
      }
    },
  },
  components: {
    uniSegmentedControl,
    currentz,
    curruntO,
    curruntT,
    curruntTR,
  },
}
</script>

<style scoped>
/* 分段器 */
.uni-padding-wrap {
  width: 750rpx;
  background-color: #fff;
}
</style>
