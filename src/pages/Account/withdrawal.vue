<template>
   <div class="span16">
    <div class="uc-box uc-main-box">
      <div class="uc-content-box">
        <!--普通提现-->
        <div class="box-hd">
          <h1 class="title">余额提现
            <!--<small>请先绑定银行卡！如已绑定请忽略</small>-->
            <small><i style="color: #8F8F8F">已绑定Quickpay用户:</i>adobe <i style="color: #8F8F8F">账号：</i>adobe@foxmall.com</small>
          </h1>
          <div>
            <div class="more clearfix">
              <ul class="filter-list J_orderType">
                <li class="first active">
                  <a href="#">普通提现</a></li>
                <li>
                  <a href="#">快速提现</a>
                </li>
              </ul>
            </div>
            <div style="margin-bottom: 10px; margin-top: 10px;">
              <input class="personal-input" type="text" placeholder="请输入您的提现金额，最低50美元"><span style="margin-left: 10px;">当前可提现金额:<i
                  style="color: #ff7600">1600</i>美元</span>
              <p>手续费:<i style="color: #ff7600">0.00</i>&nbsp;最终到账:<i style="color: #ff7600">0.00</i>美金</p>
            </div>
            <div style="margin-top: 20px;">
              <a href="#" class="personal-buttom">确认申请</a>
            </div>
            <div class="personal-tips" style="margin-top: 30px">
              <p>温馨提示</p>
              <p>1.提现金额需是整数，不能包含小数点</p>
              <p>2.建议使用快速提现，最快2小时到账</p>
              <p>3.加入VIP，快速提现减免手续费，还有更多特权</p>
            </div>
          </div>
          <!--快速提现-->
          <div>
            <div class="more clearfix">
              <ul class="filter-list J_orderType">
                <li class="first">
                  <a href="#">普通提现</a></li>
                <li class="active">
                  <a href="#">快速提现</a>
                </li>
              </ul>
            </div>
            <div style="margin-bottom: 10px; margin-top: 10px;">
              <p>到账时间2小时，<i style="color: #ff7600">每笔收取15%手续费</i></p>
              <input class="personal-input" type="text" placeholder="请输入您的提现金额，最低50美元"><span style="margin-left: 10px;">当前可提现金额:<i
                  style="color: #ff7600">1600</i>美元</span>
              <p>手续费:<i style="color: #ff7600">0.00</i>&nbsp;最终到账:<i style="color: #ff7600">0.00</i>美金</p>
            </div>
            <div style="margin-top: 20px;">
              <a href="#" class="personal-buttom">确认申请</a>
            </div>
            <div class="personal-tips" style="margin-top: 30px">
              <p>温馨提示</p>
              <p>1.提现金额需是整数，最低提现金额$50</p>
              <p>2.非工作时间内，国家法定节假日，不受理快速提现申请</p>
              <p>3.非工作日内的快速提现申请，上班之后第一时间处理</p>
              <p>4.加入VIP，快速提现减免手续费，还有更多特权</p>
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
