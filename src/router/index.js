import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 登录注册部分
  {
    path: '/',
    redirect: '/enter'
  },
  {
    path: '/enter',
    component: () => import('@/views/login_reg/index.vue')
  },
  // '我的'标签栏
  {
    path: '/owner',
    component: () => import('@/views/owner/index.vue')
  },
  {
    path: '/userinfo',
    component: () => import('@/components/owner/userInfo.vue')
  },
  {
    path: '/setting',
    component: () => import('@/components/owner/setting.vue')
  },
  {
    path: '/paswd',
    component: () => import('@/components/owner/paswdReset.vue')
  },
  {
    path: '/examinee',
    component: () => import('@/components/owner/examinee.vue')
  },
  // '首页'标签栏
  {
    path: '/home',
    component: () => import('@/views/home/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
