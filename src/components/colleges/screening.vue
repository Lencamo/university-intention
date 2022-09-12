<template>
  <div class="screening-container">
    <div class="select-box">
      <div class="title">办学类型</div>
      <div class="lable">
        <span class="content">公办院校</span>
        <span class="content">民办院校</span>
        <span class="content">中外合办</span>
        <span class="content">港澳台合办</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.select-box {
  background-color: #ffffff;
  .title {
    display: inline-block;
    margin: 10px 20px;
    font-size: 15px;
    color: orange;
  }
  .lable span {
    display: inline-block;
    background-color: #f5f5f5;
    font-size: 14px;
    width: 25%;
    margin: 8px 4%;
    padding: 5px 0px;
    text-align: center;
  }
  .lable span:hover {
    background-color: #c9d7ed;
  }
}
</style>
