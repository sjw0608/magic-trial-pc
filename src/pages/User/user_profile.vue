<template>
  <div class="span16">
    <div class="uc-box uc-main-box">
      <div class="uc-box uc-main-box">
        <div class="uc-content-box portal-content-box">
          <div class="box-bd">
            <div class="portal-main clearfix">
              <div class="user-card">
                <h2 class="username">Morning.<i style=" font-size: 14px; color: #ffac13;">普通会员</i></h2>
                <p class="tip">每日签到</p>
                <router-link class="link" :to="{path:'/user/information'}">修改个人信息 &gt;</router-link>
                <img class="avatar" src="../../assets/magic/photo.jpg" width="150" height="150" alt="Morning.">
              </div>
              <div class="user-actions">
                <ul class="action-list">
                  <li>绑定邮箱：<span class="tel">63489886@qq.com</span></li>
                  <li>绑定亚马逊：<span class="level level-2">账号未绑定</span>
                    <router-link class="btn btn-small btn-primary" :to="{path:'/user/information'}">绑定</router-link>
                  </li>
                  <li>绑定银行卡：<span class="level level-2">未绑定</span>
                    <router-link class="btn btn-small btn-primary" :to="{path:'/user/bind_bank'}">绑定</router-link>
                  </li>
                  <li>实名认证：<span class="level level-2">未认证</span>
                    <router-link class="btn btn-small btn-primary" :to="{path:'/user/authentication'}">认证</router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="portal-sub">
              <ul class="info-list clearfix">
                <li>
                  <h3><span class="num">$1300.21</span></h3>
                  <p class="center-title">账户余额
                    <router-link :to="{path:'/user/user_profile/integral'}" style="color:#a2a2a2" class="link" active-class='active'>查看明细&gt;</router-link>
                  </p>
                  <img src="../../assets/magic/ye.png" alt="">
                </li>
                <li>
                  <h3><span class="num">1000</span></h3>
                  <p class="center-title">我的积分
                    <router-link :to="{path:'/user/user_profile/integral'}"  style="color:#a2a2a2" class="link" active-class='active'>查看明细&gt;</router-link>
                  </p>
                  <img src="../../assets/magic/jf.png" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
