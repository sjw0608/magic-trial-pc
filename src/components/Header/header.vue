<template>
  <div>
    <div class="shortcut-2014">
      <div class="w">
        <ul style="float: left">
          <li class="fore1 ttbar-login" style="float: left"> <a href="#" class="link-user">您好！用户 adobe 欢迎您登录魔力试用商城</a> &nbsp;&nbsp; <a href="#" class="link-logout">退出</a> </li>
          <!--登录注册布局-->
          <!-- <li class="fore2">
            <div class="dt"> <a href="#">用户登录</a> </div>
          </li>
          <li class="spacer"></li>
          <li class="fore2">
            <div class="dt"> <a href="#">用户注册</a> </div>
          </li>
          <li class="spacer"></li>
          <li class="fore2">
            <div class="dt"> <a href="#">商家登录</a> </div>
          </li> -->
        </ul>
        <ul class="fr">
          <li class="fore2">
            <div class="dt"> <router-link :to="{path:'/user/user_profile'}">个人中心</router-link></div>
          </li>
          <li class="spacer"></li>
          <li class="fore7 dorpdown ttbar-atte" aid="2_955_6494">
            <div class="dt cw-icon">关注商城</div>
            <div class="dd dorpdown-layer">
              <div class="dd-spacer"></div>
              <div class="dd-inner ttbar-atte-main"><img src="../../assets/magic/wechat.png" alt=""></div>
            </div>
          </li>
          <li class="fore2 help_center">
            <div> <router-link :to="{path:'/user/guide'}"><img  class="middle" src="../../assets/magic/help.png"> 帮助中心</router-link> </div>
          </li>
        </ul>
        <span class="clr"></span>
      </div>
    </div>
    <magic-header></magic-header>
  </div>
</template>

<script>
import MagicHeader from './magic_header'
export default {
  components: {
    MagicHeader
  }
}
</script>

<style>
</style>
