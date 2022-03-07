<template>
  <div class="common_body">
    <h3 class="common_title">注册账号</h3>
    <a-form :label-col="{ span: 4 }">
      <a-form-item label="账号">
        <a-input />
      </a-form-item>
      <a-form-item label="密码">
        <a-input-password />
      </a-form-item>
      <a-form-item label="昵称">
        <a-input />
      </a-form-item>
      <a-form-item label="邮箱">
        <a-input />
      </a-form-item>
      <a-form-item label="邮箱验证码">
        <a-input-search enter-button="发送验证码"> </a-input-search>
      </a-form-item>
      <a-form-item label="图形验证码">
        <a-input />
      </a-form-item>
      <a-form-item :wrapper-col="{ offset: 4 }">
        <a-button type="primary" class="mr15">注册</a-button>
        <a-button>返回</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped></style>
