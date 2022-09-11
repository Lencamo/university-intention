<template>
  <div class="home-container">
    <!-- 顶部搜索 -->
    <div class="search-box">
      <div class="left">
        <span class="area">四川</span>
        <van-icon name="location-o" />
      </div>
      <div class="center">
        <van-search
          v-model="searchValue"
          shape="round"
          placeholder="请输入搜索关键词"
        >
        </van-search>
      </div>
      <div class="right"></div>
    </div>
    <!-- 轮播图区域 -->
    <div class="swipe-box" style="">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <!-- 公告区域 -->
    <van-notice-bar
      scrollable
      left-icon="volume-o"
      text="乾坤未定，你我皆是黑马。"
    />
    <!-- 核心功能区 -->
    <div class="action-box">
      <div class="topBar">
        <van-nav-bar left-text="工具箱"> </van-nav-bar>
      </div>
      <div class="gridContent">
        <van-grid :column-num="3">
          <van-grid-item icon="photo-o" text="AI填报" />
          <van-grid-item icon="photo-o" text="一分一段" />
          <van-grid-item icon="photo-o" text="省控线" />
        </van-grid>
      </div>
    </div>

    <!-- 高考咨讯区域 -->
    <div class="question-box">
      <van-grid :gutter="6" column-num="2">
        <van-grid-item
          v-for="value in 4"
          :key="value"
          icon="photo-o"
          text="高考--"
        />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchValue: ''
    }
  }
}
</script>
<style lang="less" scoped>
.home-container {
  background-color: #f4f4fa;
  .search-box {
    .left {
      float: left;
      width: 20%;
      height: 54px;
      font-size: 15px;
      line-height: 54px;
      text-align: center;
      // background-color: #dc93b8;
      .area {
        display: inline-block;
        margin: 0px 10px;
      }
    }
    .center {
      background-color: #7373ec;
      .van-search {
        // background-color: #9393dc;
        background-color: #7373ec;
        /deep/ .van-search__content {
          background-color: white;
        }
      }
    }
  }
  .swipe-box {
    margin: 20px 10px;
    border-radius: 8px;
    overflow: hidden;
  }
  .action-box {
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
  .question-box {
    margin-top: 8%;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #c0c0f4;
}
</style>
