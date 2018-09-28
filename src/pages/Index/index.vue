<template>
  <div>
    <div class="home-hero-container container">
      <div class="home-hero">
        <div class="list-left">
          <ul>
            <li class="list-leimu">
              <a href="" class="title-name">女装<span class="arrow-t"><img src="../../assets/magic/arrow-3.png" alt="" width="9px"></span></a>
              <div class="dispaly-hover">
                <div class="little-title">
                  <p><a href="">长裙</a></p>
                  <p><a href="">上衣</a></p>
                  <p><a href="">长裤</a></p>
                  <p><a href="">上衣</a></p>
                  <p><a href="">长裙</a></p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="slide">
          <banner :bannerList='bannerList'></banner>
        </div>
        <div class="four-tips">
          <ul>
            <li class="tip-img"><img src="../../assets/magic/57-1.png"></li>
            <li class="tip-font">
              <p>今日商品在线件数</p>
              <p><i>175</i></p>
            </li>
          </ul>
          <ul>
            <li class="tip-img"><img src="../../assets/magic/57-2.png"></li>
            <li class="tip-font">
              <p>已有入驻商家数</p>
              <p><i>10563</i></p>
            </li>
          </ul>
          <ul>
            <li class="tip-img"><img src="../../assets/magic/57-3.png"></li>
            <li class="tip-font">
              <p>已领到商品的用户人数</p>
              <p><i>136420</i></p>
            </li>
          </ul>
          <ul>
            <li class="tip-img"><img src="../../assets/magic/57-4.png"></li>
            <li class="tip-font">
              <p>已发布的活动个数</p>
              <p><i>171365</i></p>
            </li>
          </ul>
          <!-- <p style="clear: both"></p> -->
        </div>
      </div>
      <div class="list-recommend">
        <div>
          <p class="try-use">推荐试用</p>
        </div>
        <div>
          <hot-shop :sliderGoods='sliderGoods'></hot-shop>
        </div>
         <div style="margin: 30px 0px"><img src="../../assets/magic/littlebanner-1.png" width="1180px"></div>
      </div>
    </div>
    <div style="background-color:#f5f5f5; width: 100%;">
      <div class="home-hero-container container">
        <classify></classify>
        <p style="height:100px"></p>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/Scroll/banner'
import HotShop from '@/components/Scroll/hot_shop'
import Classify from '@/components/Classify/classify'
export default {
  name: 'Index',
  components: {
    Banner,
    HotShop,
    Classify
  },
  data() {
    return {
      bannerList: ['../static/banner1.png', '../static/banner1.png', '../static/banner1.png'],
      sliderGoods: 8
    }
  }
}
</script>

<style>
</style>
