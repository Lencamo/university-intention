<template>
  <div class="examinee-container">
    <!-- 头部标题区域 -->
    <div class="title-box">
      <van-nav-bar title="考生信息" left-arrow></van-nav-bar>
    </div>
    <div class="content-box" style="margin-top: 20px">
      <!-- 文理科选择 -->
      <van-field name="radio" label="单选框">
        <template #input>
          <van-radio-group v-model="radio" direction="horizontal">
            <van-radio name="1">理科</van-radio>
            <van-radio name="2">文科</van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <!-- 选择考生地区 -->
      <div class="provice">
        <van-field
          readonly
          clickable
          name="area"
          :value="address"
          label="地区选择"
          placeholder="点击选择省市区"
          @click="showArea = true"
        />
        <van-popup v-model="showArea" position="bottom">
          <van-area
            :area-list="areaList"
            :columns-placeholder="['请选择', '请选择', '请选择']"
            @confirm="onConfirm1"
            @cancel="showArea = false"
          />
        </van-popup>
      </div>
      <!-- 选择考生年份 -->
      <div class="timeSelect">
        <van-field
          readonly
          clickable
          name="area"
          :value="yearValue"
          label="高考年份"
          placeholder="点击选择年份"
          @click="showYear = true"
        />
        <van-popup v-model="showYear" position="bottom">
          <van-picker
            title="标题"
            show-toolbar
            :columns="columns"
            @confirm="onConfirm2"
            @cancel="showYear = false"
          />
        </van-popup>
      </div>
      <!-- 填写高考分数 -->
      <div class="writeScore">
        <van-field
          v-model="grades"
          name="用户名"
          label="高考分数"
          placeholder="请填写你的高考成绩"
        />
      </div>
    </div>
    <div class="commit-box">
      <van-button type="danger">提交</van-button>
    </div>
  </div>
</template>
<script>
import { areaList } from '@vant/area-data'

export default {
  data() {
    return {
      // 单选框
      radio: '1',
      // 地址栏
      address: '',
      showArea: false,
      areaList, // 地区数据
      // 年份栏
      yearValue: '',
      showYear: false,
      columns: ['2026', '2025', '2024', '2023', '2022', '2021', '2020'],
      // 成绩栏
      grades: ''
    }
  },
  methods: {
    onConfirm1(values) {
      this.address = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/')
      this.showArea = false
    },
    onConfirm2(values) {
      this.yearValue = values
      this.showYear = false
    }
  }
}
</script>
<style lang="less" scoped>
.commit-box {
  text-align: center;
  margin-top: 30px;
}

::v-deep .van-button--normal {
  padding: 0 60px;
  height: 35px;
}
</style>
