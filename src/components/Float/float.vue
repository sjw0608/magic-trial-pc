<template>
  <div class="fixed">
    <div><i class="icon-fixed fixed-5"></i> <a href="#">
      <p>商家入驻</p>
      </a> </div>
    <div><i class="icon-fixed fixed-1"></i>
      <p>我的试用</p>
    </div>
    <div><i class="icon-fixed fixed-2"></i>
      <p>联系客服</p>
    </div>
    <div style="border-bottom: 1px solid #ddd" @click="backToTop"><i class="icon-fixed fixed-4"></i>
      <p>回到顶部</p>
    </div>
  </div>
</template>

<script>
import { scrollIt } from './scrollIt'
export default {
  props: {},
  data() {
    return {}
  },
  methods: {
    currentPageYOffset() {
      // 判断滚动区域大于多少的时候显示返回顶部的按钮
      window.pageYOffset > this.pageY ? (this.showReturnToTop = true) : (this.showReturnToTop = false)
    },
    backToTop() {
      scrollIt(0, 1000, this.transitionName, this.currentPageYOffset)
    }
  },
  created() {
    window.addEventListener('scroll', this.currentPageYOffset)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.currentPageYOffset)
  }
}
</script>

<style>
</style>
