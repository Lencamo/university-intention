<template>
  <div class="vant-table">
    <table cellspacing="0" :style="bgcolor" style="width: 100%" class="table">
      <tr>
        <th class="th" v-for="(item, index) in option.column" :key="index">
          {{ item.label }}
        </th>
      </tr>
      <tr v-for="(item, index) in tableData" :key="index" class="list-tr">
        <td v-for="(context, i) in option.column" :key="i">
          {{ item[context.prop] }}
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    bgcolor: Object,
    tableData: Array,
    option: Object
  },
  created() {}
}
</script>

<style lang="less" scoped>
.vant-table {
  margin: 10px 20px;
  border: 1px solid #dee1e6;
  .table {
    font-size: 16px;
    .th {
      height: 1.074074rem;
      line-height: 1.074074rem;
      background-color: #dee1e6;
      text-align: center;
      color: #7272f1;
    }
    .list-tr {
      height: 1.074074rem;
      line-height: 1.074074rem;
      text-align: center;
      font-size: 13px;
    }
    .list-tr:nth-child(2n + 1) {
      background-color: #dee1e6;
    }
  }
}
</style>
