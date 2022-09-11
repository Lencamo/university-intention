import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入js适配库
import 'amfe-flexible'
// 引入全局样式文件
import '@/assets/css/global.less'

// 全局注册vant组件（按需引入）
import {
  Form,
  Field,
  Button,
  NavBar,
  Icon,
  Image as VanImage,
  Uploader,
  Grid,
  GridItem,
  Cell,
  CellGroup,
  Divider,
  Area,
  RadioGroup,
  Radio,
  Popup,
  Picker,
  Search,
  Swipe,
  SwipeItem,
  NoticeBar,
  CountDown,
  Calendar
} from 'vant'

Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(VanImage)
Vue.use(Uploader)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Divider)
Vue.use(Area)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Popup)
Vue.use(Picker)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(NoticeBar)
Vue.use(CountDown)
Vue.use(Calendar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
