<template>
  <div class="span16">
    <div class="uc-box uc-main-box">
      <div class="uc-content-box">
        <div class="box-hd">
          <h1 class="title">我的消息</h1>
          <div class="more clearfix">
            <ul class="filter-list J_orderType">
              <li class="first active">
                <a href="#">普通消息</a></li>
              <li>
                <a href="#">广播消息</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-bd">
          <div style="display: none">
            <p class="empty">当前没有消息。</p>
          </div>
          <!--普通消息-->
          <ul class="news-listul">
            <li style="width: 40px"><img src="../../assets/magic/xt.png" width="40px;"></li>
            <li style="width: 90%">
              <p class="news-title"><i style="color: #ff6700;">未读</i>&nbsp;申请试用品审核</p>
              <p class="news-xx">申请试用品审核，您好adobe，您的试用品审核已通过。</p>
              <p class="news-time">2018.02.01</p>
            </li>
            <p style="clear: both"></p>
          </ul>
          <ul class="news-listul">
            <li style="width: 40px"><img src="../../assets/magic/xt.png" width="40px;"></li>
            <li style="width: 90%">
              <p class="news-title"><i style="color: #ff6700; display: none">未读</i>&nbsp;申请试用品审核</p>
              <p class="news-xx">申请试用品审核，您好adobe，您的试用品审核已通过。</p>
              <p class="news-time">2018.02.01</p>
            </li>
            <p style="clear: both"></p>
          </ul>
          <!--广播消息-->
          <ul class="news-listul">
            <li style="width: 40px"><img src="../../assets/magic/gb.png" width="40px;"></li>
            <li style="width: 90%">
              <p class="news-title"><i style="color: #ff6700; display: none">未读</i>&nbsp;广播消息</p>
              <p class="news-xx">申请试用品审核，您好adobe，您的试用品审核已通过。</p>
              <p class="news-time">2018.02.01</p>
            </li>
            <p style="clear: both"></p>
          </ul>
          <ul class="news-listul">
            <li style="width: 40px"><img src="../../assets/magic/gb.png" width="40px;"></li>
            <li style="width: 90%">
              <p class="news-title"><i style="color: #ff6700;">未读</i>&nbsp;广播消息</p>
              <p class="news-xx">申请试用品审核，您好adobe，您的试用品审核已通过。</p>
              <p class="news-time">2018.02.01</p>
            </li>
            <p style="clear: both"></p>
          </ul>
        </div>
        <div>
          <div class="mt20">
            <div class="pagin fr s">
              <ul>
                <li><a href="#" class="">&lt;</a> </li>
                <li><a href="#" class="current">1</a> </li>
                <li><a href="#" class="">2</a> </li>
                <li><a href="#" class="">3</a> </li>
                <li><a href="#" class="">4</a> </li>
                <li style="border-right: 1px solid #ccc"><a href="#" class="">&gt;</a> </li>
              </ul>
            </div>
            <div class="clr"> </div>
          </div>
          <p style="clear: both"></p>
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
