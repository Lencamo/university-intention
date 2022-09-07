module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5, //设置 font-size 基准值
      // 其他
      // rootValue(val) {
      //   return val.file.indexOf('vant') === -1 ? 75 : 37.5
      // },
      propList: ['*'] //使用范围
    }
  }
}
