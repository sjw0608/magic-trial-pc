<template>
  <div class="magic-header">
    <div class="container">
      <div class="header-logo"> <a class="logo ir" href="" title="魔力试用商城官网" data-stat-id="" onclick="">魔力试用商城官网</a> </div>
      <div class="header-nav">
        <ul class="nav-list">
          <li class="nav-item nav-item-all" v-if="name != 'Index'">
            <a class="link" href="#">全部商品分类</a>
            <div class="home-hero-container">
              <div class="home-hero home-hero-all">
                <div class="list-left">
                  <ul>
                    <li class="list-leimu"> <a class="title-name" href="">女装<span class="arrow-t"><img src="../../assets/magic/arrow-3.png" width="9px"></span></a>
                      <div class="dispaly-hover">
                        <div class="little-title">
                          <p><a href="">长裙</a></p>
                          <p><a href="">上衣</a></p>
                          <p><a href="">长裤</a></p>
                          <p><a href="">长裙</a></p>
                          <p><a href="">上衣</a></p>
                          <p><a href="">长裤</a></p>
                          <p><a href="">长裤</a></p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item"><a class="link" href="">阿迪达斯</a></li>
          <li class="nav-item"><a class="link" href="">雅诗兰黛</a></li>
          <li class="nav-item"><a class="link" href="">资生堂</a></li>
          <li class="nav-item"><a class="link" href="">蕉下</a></li>
          <li class="nav-item"><a class="link" href="">象印</a></li>
          <li class="nav-item"><a class="link" href="">娇韵诗</a></li>
          <li class="nav-item"><a class="link" href="">海蓝之谜</a></li>
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
