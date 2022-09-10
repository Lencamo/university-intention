<template>
  <div class="owner-container">
    <div class="pic-box">
      <van-icon
        style="position: absolute; right: 10px; top: 10px"
        name="setting-o"
      />
      <img src="./imgs/background-top.png" alt="" />
    </div>
    <!-- 悬浮的个人信息区域 -->
    <div class="person-box">
      <van-image
        class="titleImg"
        round
        fit="cover"
        width="2rem"
        height="2rem"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="content">周杰伦</div>
      <van-divider
        :style="{
          color: '#1989fa',
          borderColor: '#1989fa',
          margin: '0px 16px'
        }"
      >
        V
      </van-divider>
    </div>
    <!-- 考生信息显示区域 -->
    <div class="student-box">
      <div class="topBar">
        <van-nav-bar left-text="考生信息">
          <template #right>
            <van-icon name="arrow" size="22" />
          </template>
        </van-nav-bar>
      </div>
      <div class="gridContent">
        <van-grid :column-num="3">
          <van-grid-item icon="photo-o" text="省份" />
          <van-grid-item icon="photo-o" text="文理" />
          <van-grid-item icon="photo-o" text="分数" />
        </van-grid>
      </div>
    </div>
    <!-- 预报大学区域 -->
    <div class="intention-box">
      <span class="title">志愿大学</span>
      <van-cell center title="冲刺院校" value="x所" label="录取率30%左右" />
      <van-cell center title="稳妥院校" value="x所" label="录取率30%左右" />
      <van-cell center title="保底院校" value="x所" label="录取率30%左右" />
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less">
.owner-container {
  height: 100%;
  background-color: #f4f4fa;
  position: relative;
  .pic-box {
    height: 35%;
    position: relative;
    img {
      width: 100%;
    }
  }
  .person-box {
    position: absolute;
    top: 15%;
    width: 90%;
    height: 20%;
    margin: 8% 5%;
    background-color: white;
    opacity: 0.8;
    border-radius: 2px;
    .titleImg {
      position: absolute;
      right: 10px;
      top: -25px;
      border: white 3px solid;
      box-shadow: 0px 2px 2px 2px #e6e8ea;
    }
    .content {
      font-size: 35px;
      height: 40px;
      width: 70%;
      text-align: center;
      margin: 30px 15px;
      letter-spacing: 3px;
    }
  }
  .student-box {
    margin-top: 15%;
    height: 20%;
    width: 100%;
    .van-nav-bar__content {
      background-color: white;
      .van-nav-bar__text {
        color: black;
        font-size: 16px;
      }
    }
  }
  .intention-box {
    margin-top: 6%;
    height: 20%;
    width: 100%;
    background-color: white;
    .title {
      font-size: 16px;
      display: inline-block;
      width: 100%;
      padding: 16px;
      border-bottom: rgb(219, 219, 219) 1px solid;
    }
  }
}
</style>
