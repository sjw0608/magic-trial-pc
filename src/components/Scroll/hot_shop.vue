<template>
 <swiper class="swiper goods_banner" :options="swiperOption"  ref="mySwiper">
    <!-- slides -->
    <template v-for="item in sliderGoods">
      <swiper-slide>
        <div class="shop-list">
          <p class="shop-img"><img src="../../assets/magic/12.png"></p>
            <p class="shop-name">ASAHI 运动鞋 动物图案</p>
            <p class="shop-money">$124.65</p>
            <p class="shop-only"><i>限量10份</i></p>
            <p class="shop-free"><a href="#">我要试用</a></p>
        </div>
      </swiper-slide>
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
    sliderGoods: Number
  },
  data() {
    return {
      swiperOption: {
        //切换模式  横屏或者竖屏
        // direction : 'vertical',
        //设置自动播放速度
        autoplay: true,
        //开启无限循环
        loop: false,
        //设置同屏显示的数量，默认为1，使用auto是随意的意思。
        slidesPerView: 5,
        //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，或true使用默认值。
        mousewheel: false
      }
    }
  }
}
</script>

<style>
</style>
