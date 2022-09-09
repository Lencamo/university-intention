import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入js适配库
import 'amfe-flexible'
// 引入全局样式文件
import '@/assets/css/global.less'

// 全局注册vant组件（按需引入）
import { Form, Field, Button } from 'vant'
Vue.use(Form)
Vue.use(Field)
Vue.use(Button)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
