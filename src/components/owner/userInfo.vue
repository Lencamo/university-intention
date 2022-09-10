<template>
  <div class="userInfo-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="个人资料" left-arrow>
        <template #right>
          <van-icon name="success" size="30" />
        </template>
      </van-nav-bar>
    </div>
    <!-- 核心内容区域 -->
    <div class="content-box">
      <!-- 普通信息 -->
      <div class="general-msg">
        <!-- 1、图片 -->
        <div class="imgEdit">
          <van-image
            round
            fit="cover"
            width="2rem"
            height="2rem"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <span class="msg1">
            <van-uploader> Edit Photo </van-uploader>
          </span>
        </div>
        <!-- 2、资料填写 -->
        <van-form @submit="onSubmit">
          <van-field
            v-model="username"
            name="用户名"
            left-icon="user-o"
            placeholder="用户名"
          />
          <van-field
            v-model="nickname"
            type="password"
            name="昵称"
            left-icon="medal-o"
            placeholder="昵称"
          />
        </van-form>
      </div>
      <!-- 重要信息 -->
      <div class="core-msg">
        <span class="msg2">Private Information</span>
        <van-form @submit="onSubmit">
          <van-field
            required
            readonly
            v-model="phonenum"
            name="手机号"
            left-icon="phone-o"
            placeholder="手机号"
          />
          <van-field
            required
            v-model="nickname"
            type="email"
            name="邮箱"
            left-icon="logistics"
            placeholder="绑定邮箱"
          />
          <!-- 只读状态 -->
          <van-field
            readonly
            required
            v-model="password"
            type="password"
            name="密码"
            left-icon="lock"
            placeholder="密码"
          />
        </van-form>
      </div>
    </div>
    <!-- 退出登录区域 -->
    <div class="exit-box">
      <van-button type="danger">退出登录</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      nickname: '',
      phonenum: '13670372447',
      email: '',
      password: '666666'
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
.imgEdit {
  padding: 30px 35%;
  text-align: center;
  .msg1 {
    display: inline-block;
    color: purple;
    font-size: 15px;
    font-weight: 650;
  }
}

.msg2 {
  display: inline-block;
  margin: 30px 40px 15px;
  color: #c7c7f1;
  font-size: 17px;
}

.exit-box {
  text-align: center;
}

::v-deep .van-button--normal {
  padding: 0 60px;
  height: 35px;
}
</style>
