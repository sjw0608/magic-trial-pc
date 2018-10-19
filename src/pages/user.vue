<template>
  <div>
    <div class="breadcrumbs">
      <div class="container">
        <!-- <router-link :to="{path:'/'}">首页</router-link><span class="sep">&gt;</span><span>个人中心</span><span class="sep">&gt;</span><span>消息通知</span> -->
      </div>
    </div>
    <div class="page-main user-main">
      <div class="container">
        <div class="row">
          <div class="span4">
            <div class="uc-box uc-sub-box">
              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">试用中心</h3>
                </div>
                <div class="box-bd">
                  <ul class="uc-nav-list J_navList">
                    <li>
                      <router-link :to="{path:'/user/trial'}" active-class='active'>我的试用</router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">个人中心</h3>
                </div>
                <div class="box-bd">
                  <ul id="J_orderNavList" class="uc-nav-list">
                    <li>
                      <router-link :to="{path:'/user/user_profile'}" active-class='active'>我的个人中心</router-link></li>
                    <li>
                      <router-link :to="{path:'/user/news'}" active-class='active'>消息通知</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">账户管理</h3>
                </div>
                <div class="box-bd">
                  <ul class="uc-nav-list">
                    <li><router-link :to="{path:'/user/information'}" active-class='active'>个人信息</router-link></li>
                    <li><router-link :to="{path:'/user/authentication'}" active-class='active'>实名认证</router-link></li>
                    <li><router-link :to="{path:'/user/bind_bank'}" active-class='active'>绑定银行卡</router-link></li>
                    <li><router-link :to="{path:'/user/withdrawal'}" active-class='active'>余额提现</router-link></li>
                    <li><router-link :to="{path:'/user/update_password'}" active-class='active'>修改密码</router-link></li>
                  </ul>
                </div>
              </div>
              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">帮助中心</h3>
                </div>
                <div class="box-bd">
                  <ul class="uc-nav-list">
                    <li>
                      <router-link :to="{path:'/user/guide'}" active-class='active'>试用新手指引</router-link></li>
                    <li>
                      <router-link :to="{path:'/user/search_help'}" active-class='active'>搜索下单指引</router-link></li>
                    <li>
                      <router-link :to="{path:'/user/copy_orders'}" active-class='active'>如何复制订单编号</router-link></li>
                    <li>
                      <router-link :to="{path:'/user/result_help'}" active-class='active'>申请之后如何知道结果</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <router-view/>
        </div>
      </div>
      <p style="clear: both"></p>
      <div style="height:50px"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
