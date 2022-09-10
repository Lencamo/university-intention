<template>
  <div class="sign-container">
    <!-- 操作选择区域 -->
    <div class="title-box">
      <div class="left" :style="selectIn" ref="sign_in" @click="pageChangeFn">
        <a>Sign In</a>
      </div>
      <div class="right" :style="selectUp" ref="sign_up" @click="pageChangeFn">
        <a>Sign Up</a>
      </div>
    </div>
    <!-- 核心区域 -->
    <div class="content-box">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="用户名"
          :left-icon="this.login_regStatus ? 'friends' : 'phone'"
          :placeholder="this.login_regStatus ? 'phone or email' : 'phone'"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          left-icon="lock"
          placeholder="password"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <span class="one"><a href="###">忘记密码?</a></span>
        <div v-if="login_regStatus">
          <div style="margin: 30px 50px">
            <van-button round block type="info" native-type="submit"
              >登录</van-button
            >
          </div>
          <span class="two" @click="pageChangeFn"
            ><a href="###">没有账号？点击注册</a></span
          >
        </div>
        <div v-else>
          <div style="margin: 30px 50px">
            <van-button round block type="info" native-type="submit"
              >注册</van-button
            >
          </div>
          <span class="two" @click="pageChangeFn"
            ><a href="###">点击登录</a></span
          >
        </div>
      </van-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      // 登录还是注册
      login_regStatus: true, // false 表示选中sign up, true 表示选中sign in
      selectIn: {
        float: 'left',
        width: '50%',
        height: '100%',
        // 选中状态时的样式
        backgroundColor: '#c6c6f5',
        color: '#6e6eee',
        fontWeight: '700'
      },
      selectUp: {
        float: 'left',
        width: '50%',
        height: '100%'
      }
    }
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values)
    },

    // 页面切换
    pageChangeFn() {
      const styleData = this.selectIn
      this.selectIn = this.selectUp
      this.selectUp = styleData
      this.login_regStatus = !this.login_regStatus
    }
  }
}
</script>
<style lang="less" scoped>
.sign-container {
  width: 100%;
  .title-box {
    height: 15%;
    width: 100%;
    background-color: #e7e7f9;
    color: #908f9c;
    text-align: center;
    line-height: 60px;
    margin-bottom: 30px;
    // .left {
    //   float: left;
    //   width: 50%;
    //   height: 100%;
    //   // 选中状态时的样式
    //   background-color: #c6c6f5;
    //   color: #6e6eee;
    //   font-weight: 700;
    //   // background-color: green;
    // }
    // .right {
    //   float: left;
    //   width: 50%;
    //   height: 100%;
    //   // background-color: red;
    // }
  }
}

.one {
  margin: 30px 50px;
  font-size: 15px;
  display: block;
  text-align: right;
  color: #13377b;
  text-decoration: underline;
}

.two {
  margin: 30px 50px;
  font-size: 18px;
  display: block;
  text-align: center;
  a {
    color: #3165db;
  }
}
</style>
