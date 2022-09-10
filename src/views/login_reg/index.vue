<template>
  <div class="login_reg-container">
    <div class="pic-box">
      <img src="./imgs/background-main.jpg" alt="" />
    </div>
    <div class="sign-box">
      <com-sign></com-sign>
    </div>
  </div>
</template>
<script>
import comSign from '@/components/login_reg/sign.vue'

export default {
  components: {
    comSign
  }
}
</script>
<style lang="less" scoped>
.login_reg-container {
  height: 100%;
  .pic-box {
    height: 35%;
    img {
      width: 100%;
    }
  }
  .sign-box {
    height: 65%;
    background-color: #ffffff;
  }
}
</style>
