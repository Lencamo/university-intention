<template>
  <div class="setting-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="设置" left-arrow></van-nav-bar>
    </div>
    <!-- 内容区域 -->
    <div class="list" style="margin-top: 20px">
      <van-cell-group>
        <van-cell title="个人资料" icon="location-o" is-link />
        <van-cell title="修改密码" icon="location-o" is-link />
        <van-cell title="我的收藏" icon="location-o" is-link />
        <van-cell title="关于我们" icon="location-o" is-link />
      </van-cell-group>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.list {
  .van-cell:after {
    border-bottom: 1px solid #d3d5d7;
  }
}
</style>
