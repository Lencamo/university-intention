<template>
  <div class="paswdReset-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="重置密码" left-arrow></van-nav-bar>
    </div>
    <!-- 内容区域 -->
    <div class="cell" style="margin-top: 20px">
      <van-form @submit="onSubmit">
        <van-field
          v-model="password"
          type="password"
          name="密码"
          left-icon="lock"
          placeholder="请输入当前密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="newPaswd"
          type="password"
          name="密码"
          left-icon="lock"
          placeholder="请输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="surePaswd"
          type="password"
          name="密码"
          left-icon="lock"
          placeholder="请再次输入新密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-form>
    </div>
    <div class="commit-box">
      <van-button type="danger">提交</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      newPaswd: '',
      surePaswd: ''
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    }
  }
}
</script>
<style lang="less" scoped>
.commit-box {
  text-align: center;
  margin-top: 30px;
}

::v-deep .van-button--normal {
  padding: 0 60px;
  height: 35px;
}
</style>
