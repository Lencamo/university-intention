<template>
  <div class="lines-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="一分一段" left-arrow></van-nav-bar>
    </div>
    <!-- 年份选择区域 -->
    <div class="select-box">
      <van-button type="default">2022</van-button>
      <van-button type="default">2021</van-button>
      <van-button type="default">2020</van-button>
      <van-button type="default">2019</van-button>
      <van-button type="default">2018</van-button>
      <van-button type="default">2017</van-button>
    </div>
    <!-- 列表数据展示区域 -->
    <div class="data-box">
      <div class="topBar">
        <van-nav-bar left-text="查询结果"> </van-nav-bar>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.lines-container {
  background-color: #f4f4fa;
  .select-box {
    margin: 30px 0px 20px;
    .van-button--default {
      margin: 5%;
      width: 23%;
      background-color: antiquewhite;
      .van-button__text {
        letter-spacing: 0.5em;
        text-align: center;
        padding-right: 8px;
      }
    }
  }

  .data-box {
    height: 20%;
    width: 100%;
    margin-top: 5%;
    /deep/ .van-nav-bar__content {
      background-color: white;
      .van-nav-bar__text {
        color: black;
        font-size: 16px;
      }
    }
  }
}
</style>
