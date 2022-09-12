<template>
  <div class="collegesItem-container">
    <!-- 左侧图片区域 -->
    <div class="pic-left">
      <van-image
        class="titleImg"
        round
        fit="cover"
        width="1.5rem"
        height="1.5rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <!-- 中间内容区域 -->
    <div class="core-box">
      <div class="name">电子科技大学</div>
      <div class="msg">
        <span class="chunks">公办</span>
        <span class="chunks">普通本科</span>
      </div>
    </div>
    <!-- 右侧分数区域 -->
    <div class="lowest-right">
      <div class="place">四川·成都</div>
      <div class="grades">635<span class="fens">分</span></div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.collegesItem-container {
  height: 15%;
  width: 100%;
  border-top: 1px solid #f5f6f8;
  border-bottom: 1px solid #f5f6f8;
  position: relative;
  background-color: white;
  .pic-left {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 25%;
    // background-color: rgb(195, 220, 243);
    .titleImg {
      margin: 10px 25px;
      // border-radius: 10px;
      overflow: hidden;
    }
  }
  .core-box {
    padding: 0px 25%;
    height: 75px;
    width: 50%;
    // background-color: rgb(239, 185, 210);
    .name {
      padding: 10px 15px 0px;
      font-size: 16px;
      // 字体超出部分……隐藏
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .msg {
      margin-left: 15px;
      margin-top: 10px;
      span {
        display: inline-block;
        font-size: 5px;
        margin-right: 10px;
        padding: 0px 5px;
        color: #939bab;
        border: 1px solid #a1adc4;
      }
    }
  }
  .lowest-right {
    position: absolute;
    top: 0px;
    right: 0px;
    height: 100%;
    width: 25%;
    // background-color: rgb(243, 215, 192);
    .place {
      display: inline-block;
      font-size: 10px;
      background-color: #dee1e6;
      border-radius: 5px;
      margin: 15px 12px 10px;
      padding: 2px;
    }
    .grades {
      text-align: center;
      font-size: 20px;
      color: #e03b3b;
      margin-right: 10px;
      .fens {
        font-size: 16px;
      }
    }
  }
}
</style>
