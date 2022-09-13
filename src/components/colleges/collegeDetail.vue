<template>
  <div class="collegeDetail-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="详情" left-arrow></van-nav-bar>
    </div>
    <!-- 学校头部区域 -->
    <div class="name">电子科技大学</div>
    <div class="college-box">
      <div class="pic-left">
        <van-image
          width="2.5rem"
          height="2.5rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </div>
      <div class="msg-right">
        <span>高校层次：普通本科</span>
        <span>办学类型：公办院校</span>
        <span>高校位置：四川·成都</span>
      </div>
    </div>
    <div class="detail-box">
      <div class="topBar">
        <van-nav-bar left-text="简介"> </van-nav-bar>
      </div>
      <div class="college-img">
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
      </div>
      <div class="text-msg">
        <p>
          &emsp;&emsp; 电子科技大学（University of Electronic Science and
          Technology of
          China），简称“电子科大”，坐落于四川省成都市，是中华人民共和国教育部直属高校，由教育部、工业和信息化部、四川省和成都市共建；位列国家“双一流”、
          [84]
          “985工程”、“211工程”，入选“2011计划”、“111计划”、卓越工程师教育培养计划、国家建设高水平大学公派研究生项目、中国政府奖学金来华留学生接收院校、全国深化创新创业教育改革示范高校，为“两电一邮”成员；是一所完整覆盖整个电子类学科，以电子信息科学技术为核心，以工为主，理工渗透，理、工、管、文、医协调发展的多科性研究型全国重点大学。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.collegeDetail-container {
  .name {
    text-align: center;
    font-size: 22px;
    margin: 20px 0px 15px;
  }
  .college-box {
    height: 20%;
    // background-color: antiquewhite;
    border-top: 2px solid #f7f7f9;
    border-bottom: 2px solid #f7f7f9;
    .pic-left {
      float: left;
      width: 35%;
      height: 100%;
      // background-color: aquamarine;
      .van-image {
        margin: 15%;
      }
    }
    .msg-right {
      float: right;
      width: 65%;
      height: 100%;
      // background-color: aqua;
      span {
        font-size: 15px;
        display: block;
        height: 33%;
        margin-top: 25px;
        margin-bottom: -40px;
        margin-left: 10%;
      }
    }
  }
}

// 简介部分
.detail-box {
  width: 100%;
  /deep/ .van-nav-bar__content {
    background-color: white;
    .van-nav-bar__text {
      color: black;
      font-size: 16px;
    }
  }
}

// 图片部分
.college-img {
  // background-color: aqua;
  height: 200px;
  width: 100%;
  padding: 5px 40px;
  img {
    display: inline-block;
    height: 100%;
  }
}

// .文章部分
.text-msg {
  font-size: 15px;
  margin: 10px 15px;
  p {
    line-height: 25px;
  }
}
</style>
