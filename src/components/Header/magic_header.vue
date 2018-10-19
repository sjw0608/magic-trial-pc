<template>
  <div class="magic-header">
    <div class="container">
      <div class="header-logo"> <a class="logo ir" href="" title="魔力试用商城官网" data-stat-id="" onclick="">魔力试用商城官网</a> </div>
      <div class="header-nav">
        <ul class="nav-list">
          <li class="nav-item nav-item-all" v-if="name != 'Index'">
            <a class="link" href="javascript:;">全部商品分类</a>
            <div class="home-hero-container">
              <div class="home-hero home-hero-all">
                <div class="list-left">
                  <ul>
                    <li class="list-leimu"> <a class="title-name" href="javascript:;">女装<span class="arrow-t"><img src="../../assets/magic/arrow-3.png" width="9px"></span></a>
                      <div class="dispaly-hover">
                        <div class="little-title">
                          <p><router-link :to="{path:'/good_list'}">长裙</router-link></p>
                          <p><router-link :to="{path:'/good_list'}">上衣</router-link></p>
                          <p><router-link :to="{path:'/good_list'}">长裤</router-link></p>
                          <p><router-link :to="{path:'/good_list'}">长裙</router-link></p>
                          <p><router-link :to="{path:'/good_list'}">上衣</router-link></p>
                          <p><router-link :to="{path:'/good_list'}">长裤</router-link></p>
                          <p><router-link :to="{path:'/good_list'}">长裤</router-link></p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">阿迪达斯</router-link></li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">雅诗兰黛</router-link></li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">资生堂</router-link></li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">蕉下</router-link></li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">象印</router-link></li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">娇韵诗</router-link></li>
          <li class="nav-item"><router-link :to="{path:'/good_list'}" class="link">海蓝之谜</router-link></li>
        </ul>
      </div>
      <div class="header-search">
        <form class="m_searchForm search-form clearfix" action="" method="get">
          <label for="search" class="hide">站内搜索</label>
          <input class="search-text search" type="search"  placeholder="请输入关键字">
          <a class="search-btn" href="">
          <p class="search-img"></p>
          </a>
        </form>
      </div>
    </div>
    <p style="clear: both"></p>
  </div>
</template>

<script>
export default {
  created() {
    this.name = this.$route.name
  },
  watch: {
    $route(route) {
      this.name = route.name
    }
  }
}
</script>

<style>
</style>
