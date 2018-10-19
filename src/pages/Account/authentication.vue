<template>
  <div class="span16">
    <div class="uc-box uc-main-box">
      <div class="uc-content-box">
        <div class="box-hd">
          <h1 class="title">实名认证
            <small>待认证</small>
          </h1>
          <div style="margin-bottom: 10px;">
            <input class="personal-input" type="text" placeholder="请输入您的真实姓名">
            <p><input class="personal-input" type="text" placeholder="请输入ID号"></p>
          </div>
          <div style="margin-bottom: 10px;">
            <div class="more clearfix" style="margin-bottom: 10px;">
              <h2 class="subtitle">上传身份证照片</h2>
            </div>
            <a style="float: left; margin-right:10px" href="javascript:;">
              <div class="toux">
                <img src="../../assets/magic/id.jpg">
                <input type="file" name="file" class="upload__input" accept="image/png,image/gif">
                <p class="font">证件正面</p>
              </div>
            </a>
            <a style="float: left; margin-right:10px" href="javascript:;">
              <div class="toux">
                <img src="../../assets/magic/id.jpg">
                <input type="file" name="file" class="upload__input" accept="image/png,image/gif">
                <p class="font">证件反面</p>
              </div>
            </a>
            <a style="float: left; margin-right:10px" href="javascript:;">
              <div class="toux">
                <img src="../../assets/magic/id.jpg">
                <input type="file" name="file" class="upload__input" accept="image/png,image/gif">
                <p class="font">手持证件半身照</p>
              </div>
            </a>
            <p style="clear: both"></p>
          </div>
          <div style="margin-top:30px;">
            <a href="javascript:;" class="personal-buttom">提交</a>
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
