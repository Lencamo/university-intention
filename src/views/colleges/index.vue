<template>
  <div class="colleges-container">
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
    <!-- 热门大学区域 -->
    <div class="hot-box">
      <div class="topBar">
        <van-nav-bar left-text="热门院校" style="color: orange">
          <template #right>
            换一批
            <van-icon name="replay" size="18" style="margin-left: 10px" />
          </template>
        </van-nav-bar>
      </div>
      <collegesItem></collegesItem>
      <collegesItem></collegesItem>
      <collegesItem></collegesItem>
    </div>

    <!-- 大学筛选区域 -->
    <div class="choose-box">
      <div class="topBar">
        <van-nav-bar left-text="院校筛选"> </van-nav-bar>
      </div>
      <van-dropdown-menu active-color="#1989fa">
        <!-- 省份筛选 -->
        <van-dropdown-item v-model="provinceId" :options="provincesOption" />
        <!-- 专业筛选 -->
        <van-dropdown-item title="专业">
          <van-checkbox-group v-model="result">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in specializedList"
                clickable
                :key="item"
                :title="` ${item}`"
                @click="toggle(index)"
              >
                <template #right-icon>
                  <van-checkbox :name="item" ref="checkboxes" />
                </template>
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </van-dropdown-item>
        <!-- 排序筛选 -->
        <van-dropdown-item v-model="sortingId" :options="sortingOption" />
        <!-- 其他筛选 -->
        <van-dropdown-item title="筛选">
          <screening></screening>
          <screening></screening>
          <screening></screening>
        </van-dropdown-item>
      </van-dropdown-menu>
      <collegesItem></collegesItem>
      <collegesItem></collegesItem>
      <collegesItem></collegesItem>
    </div>
  </div>
</template>
<script>
import collegesItem from '@/components/colleges/collegesItem'
import { areaList } from '@vant/area-data'
import screening from '@/components/colleges/screening'

export default {
  components: {
    collegesItem,
    screening
  },
  created() {
    // console.log(this.special)
    // 获取省份数组
    Object.values(this.provincesList).forEach((item) => {
      this.newProvinces.push(item)
    })
    // console.log(this.newProvinces)

    // 数据处理
    let num = 1
    this.provincesOption = this.newProvinces.map((item) => {
      const obj = {}

      obj.text = item
      obj.value = num++
      return obj
    })
    this.provincesOption.unshift({ text: '全国', value: 0 })
    // console.log(this.provincesOption)
  },
  data() {
    return {
      searchValue: '',
      // 省份信息
      provincesList: areaList.province_list,
      newProvinces: [], // 省份数组
      // 下拉菜单
      // 1、地区
      provinceId: 0,
      provincesOption: [], // option格式的省份数组
      // 2、专业
      specializedList: [
        '软件工程',
        '电气工程及其自动化',
        '土木工程',
        '数学与应用数学',
        '建筑学'
      ],
      result: [],
      // 3、排序
      sortingId: 0,
      sortingOption: [
        { text: '排序', value: 0 },
        { text: '热度', value: 1 },
        { text: '就业率', value: 2 },
        { text: '分数', value: 3 }
      ],
      // 4、其他
      othersId: 0,
      othersOption: []
    }
  },
  methods: {
    onConfirm() {
      this.$refs.item.toggle()
    },
    toggle(index) {
      this.$refs.checkboxes[index].toggle()
    }
  }
}
</script>
<style lang="less" scoped>
.colleges-container {
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
}

.hot-box,
.choose-box {
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

// 其他筛选部分
.select-box {
  background-color: #7373ec;
}
</style>
