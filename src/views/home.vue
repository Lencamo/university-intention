<template>
  <div class="home-container">欢迎来到首页！</div>
</template>
<script>
import { apiDemoAPI } from '@/api/index.js'

export default {
  name: 'comHome',

  async created() {
    // await无法打印错误信息，所以使用try……catch
    try {
      const res = await apiDemoAPI()
      console.log(res)
    } catch (err) {
      console.dir(err) // 详细打印
    }
  }
}
</script>
<style lang=""></style>
