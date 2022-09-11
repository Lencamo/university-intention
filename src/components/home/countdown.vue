<template>
  <div class="countdown-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="高考倒计时" left-arrow></van-nav-bar>
    </div>
    <!-- 倒计时区域 -->
    <div class="time-box">
      <van-count-down :time="time">
        <template #default="timeData">
          <span class="block">{{ timeData.hours }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.minutes }}</span>
          <span class="colon">:</span>
          <span class="block">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
    </div>
    <!-- 日历区域 -->
    <div class="calendar-box">
      <van-calendar
        title="【一起向未来】"
        :poppable="false"
        :show-confirm="false"
        :style="{ height: '500px' }"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 30 * 60 * 60 * 1000
    }
  }
}
</script>
<style lang="less" scoped>
.countdown-container {
  background-color: #f4f4fa;
  .time-box {
    margin: 15% 10% 10%;
    height: 12%;
    .colon {
      display: inline-block;
      margin: 15px 10px;
      color: #3535e4;
      font-size: 45px;
    }
    .block {
      display: inline-block;
      padding-top: 10%;
      width: 26%;
      height: 50px;
      color: #fff;
      font-size: 45px;
      text-align: center;
      background-color: #f4d53b;
      border-radius: 10px;
    }
  }
}
</style>
