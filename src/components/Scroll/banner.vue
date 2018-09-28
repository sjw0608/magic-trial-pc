<template>
 <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
    <!-- slides -->
    <template v-for="img in bannerList">
      <swiper-slide><img :src="img" alt="" style="width:100%;"></swiper-slide>
    </template>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  props: {
    bannerList: Array
  },
  data() {
    return {
      swiperOption: {
        //切换模式  横屏或者竖屏
        // direction : 'vertical',
        //设置自动播放速度
        autoplay: {
          disableOnInteraction: true,
          delay: 4000
        },
        pagination: {
          el: '.swiper-pagination'
        },
        //开启无限循环
        loop: false,
        //设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView: 1,
        //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel: false
      }
    }
  }
}
</script>

<style>
</style>
