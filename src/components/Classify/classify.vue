<template>
  <div class="list-classification">
    <div>
      <p class="try-use">时尚女装</p>
      <p class="button-lr"> <a href="#"><span>查看全部<img src="../../assets/magic/arrow-2.png"></span></a></p>
      <p style="clear: both"></p>
    </div>
    <div class="classification-shop">
      <ul style="">
        <li><img src="../../assets/magic/girl.png" alt=""></li>
      </ul>
      <ul class="shop-list">
        <template v-for='idx in shop'>
          <li class="" :key="idx">
            <a href="">
              <p class="shop-img"><img src="../../assets/magic/12.png"></p>
              <p class="shop-name">ASAHI 运动鞋 动物图案</p>
              <p class="shop-money">$124.65</p>
              <p class="shop-only"><i>限量10份</i></p>
              <p class="shop-free">我要试用</p>
            </a>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shop: 8
    }
  }
}
</script>

<style>
</style>
