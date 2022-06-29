<template>
  <view>
    <Class :songList="songsinfo"></Class>
  </view>
</template>

<script>
import Class from '@/components/class/Class.vue'
export default {
  name: '',
  data() {
    return {
      songsinfo: [],
    }
  },
  methods: {
    async getinfo() {
      const { data: res } = await this.$request({
        url: '/top/song',
        data: {
          type: 16,
        },
      })
      this.songsinfo = res.data.slice(0, 6)
    },
  },
  created() {
    this.getinfo()
  },
  components: {
    Class,
  },
}
</script>

<style scoped></style>
