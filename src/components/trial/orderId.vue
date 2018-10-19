<template>
  <div>
    <div class="ui-dialog box-display">
      <div class="ui-dialog-title">
        <span>填写订单号</span>
      </div>
      <div class="ui-dialog-content">
        <div class="form">
          <div class="item">
            <input type="text" class="itxt">
            <div class="ftx-03">登录亚马逊后台，复制订单号</div>
          </div>
        </div>
        <div class="item">
          <span class="label">&nbsp;</span>
          <div>
            <a href="#none" class="no-buttom"><span>取消</span></a>
            <a href="#none" class="yes-buttom"><span>确定</span></a>
            <div class="loading loading-1" style=" margin-top:20px"><a href="#">不会复制订单号？看这里</a></div>
          </div>
          <div style="display:none"><input name="" type="reset"></div>
        </div>
      </div>
      <a class="ui-dialog-close" title="关闭"><span class="ui-icon ui-icon-delete"></span></a>
    </div>
    <div class="ui-mask" style="position: absolute; left: 0px; top: 0px; opacity: 0.15; z-index: 9998; width: 1903px; height: 2109px; background-color: rgb(0, 0, 0);"></div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
