<template>
  <div style="background-color: #f5f5f5; width: 100%">
    <div class="home-hero-container container goods_list">
      <p style="clear: both"></p>
      <div class="context">
        <div class="main">
          <div class="gray">
            <div class="wrapper">
              <p class="site"> 当前位置: <span>首页</span><span>所有分类</span> </p>
            </div>
          </div>
          <div class="wrapper">
            <div class="filtrate_container">
              <div class="filtrate_core">
                <div class="row">
                  <p class="tit">试用平台</p>
                  <p class="cont shop_source"> <a href="#" data-source="" class="all active">全部</a> <a href="#" class="all ">亚马逊</a>
                  </p>
                </div>
                <div class="row">
                  <p class="tit">试用类型</p>
                  <p class="cont main-nav"> <a data-value="all" class="all active">全部</a> <a class="" data-value="highprice">搜索试用</a>
                  </p>
                </div>
                <div class="row">
                  <p class="tit">热门分类</p>
                  <p class="cont category"> <a href="javascript:;" class="all" catid="0">全部</a> <a href="javascript:;"
                      class="" catid="120">母婴</a> <a href="javascript:;" class="active" catid="3">精品男装</a> <a href="javascript:;"
                      class="" catid="5">时尚配饰</a> <a href="javascript:;" class="" catid="20">鞋子箱包</a> <a href="javascript:;"
                      class="" catid="21">数码家电</a> <a href="javascript:;" class="" catid="22">美容护肤</a> <a href="javascript:;"
                      class="" catid="23">美食特产</a> <a href="javascript:;" class="" catid="82">家居日用</a> <a href="javascript:;"
                      class="" catid="92">综合商品</a> <a href="javascript:;" class="" catid="107">时尚女装</a> </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="order-list-box clearfix">
        <ul class="order-list">
          <li class="active first"> <a href="#">默认</a></li>
          <li> <a href="#">人气</a></li>
          <li class="up"> <a href="#">价格 <img src="../../assets/magic/arrowup.png" style="vertical-align: middle;margin-top: -5px;"
                width="20px"></a></li>
          <li> <a href="#">时间</a></li>
        </ul>
        <ul class="type-list">
        </ul>
      </div>
      <!--商品列表-->
      <div class="list-recommend">
          <template v-for="idx in goodsList">
            <div class="shop-list shop-list-two" :key="idx">
              <p class="shop-img"><img src="../../assets/magic/12.png"></p>
              <p class="shop-name">ASAHI 运动鞋 动物图案</p>
              <p class="shop-money">$124.65</p>
              <p class="shop-only"><i>限量10份</i></p>
              <p class="shop-only"><i class="people">关注人数105人</i></p>
              <p class="shop-free"><a href="#">我要试用</a></p>
            </div>
          </template>
      </div>
    </div>
    <div class="container">
      <div class="list-recommend">
        <div>
          <p class="try-use">推荐试用</p>
        </div>
        <div>
          <hot-shop :sliderGoods='sliderGoods'></hot-shop>
        </div>
      </div>
    </div>
    <p style="height:100px"></p>
  </div>
</template>

<script>
import HotShop from '@/components/Scroll/hot_shop'
export default {
  components: {
    HotShop
  },
  data() {
    return {
      goodsList: 20,
      sliderGoods: 8
    }
  }
}
</script>

<style>
</style>
