<template>
  <div class="span16">
    <div class="uc-box uc-main-box">
      <div class="uc-content-box">
        <div class="box-hd">
          <h1 class="title">我的订单</h1>
          <div class="more clearfix">
            <ul class="filter-list J_orderType">
              <li class="first active">
                <a href="#">全部订单</a></li>
              <li>
                <a href="#">待审核(0)</a>
              </li>
              <li>
                <a href="#">已通过</a>
              </li>
              <li>
                <a href="#">未通过</a>
              </li>
              <li>
                <a href="#">已完成</a>
              </li>
            </ul>
            <!-- <form class="search-form clearfix">
              <label for="search" class="hide">站内搜索</label>
              <input class="search-text" type="search" id="J_orderSearchKeywords" name="keywords" autocomplete="off"
                placeholder="输入商品名称、商品编号、订单号">
              <a class="search-btn" href="">
                <p class="search-img"></p>
              </a>
            </form> -->
          </div>
        </div>
        <div class="box-bd">
          <div style="display: none">
            <p class="empty">当前没有交易订单。</p>
          </div>
          <div>
            <ul class="try-list">
              <li class="examine-box">
                <p class="examine-time">申请审核中：<i>23小时58分20秒</i></p>

                <a href="#" class="top-buttom">放弃申请</a>
                <a href="#" class="top-buttom look">查看详情</a>
                <p style="clear: both"></p>
              </li>
              <li class="try-detil detail-img"><img src="../../assets/magic/bbb.jpg"></li>
              <li class="try-detil detail-title"><a href="#">米家二位转换器 白色 通用</a></li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">下单价</p>
              </li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">返还价</p>
              </li>
              <p style="clear: both"></p>
            </ul>
            <ul class="try-list">
              <li class="examine-box">
                <p class="examine-time">填写订单号：<i>23小时58分20秒</i></p>
                <a href="#" class="top-buttom">下单填写订单号</a>
                <a href="#" class="top-buttom look">查看详情</a>
                <p style="clear: both"></p>
              </li>
              <li class="try-detil detail-img"><img src="../../assets/magic/bbb.jpg"></li>
              <li class="try-detil detail-title"><a href="#">米家二位转换器 白色 通用</a></li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">下单价</p>
              </li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">返还价</p>
              </li>
              <p style="clear: both"></p>
            </ul>
            <ul class="try-list">
              <li class="examine-box">
                <p class="examine-time">填写评价：<i>23小时58分20秒</i></p>
                <a href="#" class="top-buttom">评价</a>
                <a href="#" class="top-buttom look">查看详情</a>
                <p style="clear: both"></p>
              </li>
              <li class="try-detil detail-img"><img src="../../assets/magic/bbb.jpg"></li>
              <li class="try-detil detail-title"><a href="#">米家二位转换器 白色 通用</a></li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">下单价</p>
              </li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">返还价</p>
              </li>
              <p style="clear: both"></p>
            </ul>
            <ul class="try-list">
              <li class="examine-box">
                <p class="examine-time">订单已完成</p>
                <a href="#" class="top-buttom look">查看详情</a>
                <p style="clear: both"></p>
              </li>
              <li class="try-detil detail-img"><img src="../../assets/magic/bbb.jpg"></li>
              <li class="try-detil detail-title"><a href="#">米家二位转换器 白色 通用</a></li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">下单价</p>
              </li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">返还价</p>
              </li>
              <p style="clear: both"></p>
            </ul>
            <ul class="try-list">
              <li class="examine-box">
                <p class="examine-time">资格审核超时，系统自动关闭</p>
                <a href="#" class="top-buttom look">查看详情</a>
                <p style="clear: both"></p>
              </li>
              <li class="try-detil detail-img"><img src="../../assets/magic/bbb.jpg"></li>
              <li class="try-detil detail-title"><a href="#">米家二位转换器 白色 通用</a></li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">下单价</p>
              </li>
              <li class="try-detil detail-money">
                <p>$123.00</p>
                <p class="name-money">返还价</p>
              </li>
              <p style="clear: both"></p>
            </ul>
          </div>
        </div>
        <div>
          <div class="mt20">
            <div class="pagin fr s">
              <ul>
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
