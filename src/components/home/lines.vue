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
    <!-- 表格组件封装（vant组件库没有） -->
    <div class="table-box">
      <vant-table :tableData="tableData" :option="option"></vant-table>
    </div>
  </div>
</template>
<script>
import vantTable from '@/components/home/vant-table'

export default {
  components: {
    vantTable
  },
  data() {
    return {
      tableData: [
        {
          scores: '700-750',
          number: 106,
          position: 106
        },
        {
          scores: '699',
          number: 18,
          position: 124
        },
        {
          scores: '698',
          number: 13,
          position: 137
        },
        {
          scores: '697',
          number: 15,
          position: 152
        },
        {
          scores: '696',
          number: 21,
          position: 194
        },
        {
          scores: '695',
          number: 22,
          position: 216
        },
        {
          scores: '694',
          number: 25,
          position: 241
        },
        {
          scores: '693',
          number: 20,
          position: 261
        }
      ],
      option: {
        column: [
          {
            label: '分数',
            prop: 'scores'
          },
          {
            label: '同分人数',
            prop: 'number'
          },
          {
            label: '高考位次',
            prop: 'position'
          }
        ]
      }
    }
  }
}
</script>
<style lang="less" scoped>
.lines-container {
  background-color: #f4f4fa;
  .select-box {
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
    height: 8%;
    width: 100%;
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
