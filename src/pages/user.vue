<template>
  <div>
    <div class="breadcrumbs">
      <div class="container">
        <a href="#">首页</a><span class="sep">&gt;</span><span>个人中心</span><span class="sep">&gt;</span><span>消息通知</span>
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
                      <a href="#">我的试用</a>
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
                      <a href="#">我的个人中心</a></li>
                    <li class="active">
                      <a class="J_noRandom" href="#">消息通知<i class="J_miMessageTotal"></i></a></li>
                  </ul>
                </div>
              </div>
              <div class="uc-nav-box">
                <div class="box-hd">
                  <h3 class="title">账户管理</h3>
                </div>
                <div class="box-bd">
                  <ul class="uc-nav-list">
                    <li><a href="#">个人信息</a></li>
                    <li><a href="#">实名认证</a></li>
                    <li><a href="#">绑定银行卡</a></li>
                    <li><a href="#">余额提现</a></li>
                    <li><a href="#">修改密码</a></li>
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
                      <a href="#">试用新手指引</a></li>
                    <li>
                      <a href="#">搜索下单指引</a></li>
                    <li>
                      <a href="#">如何复制订单编号</a></li>
                    <li>
                      <a href="#">申请之后如何知道结果</a></li>
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
