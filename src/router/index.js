'use strict'
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from 'components/homePage'
import Home from './home'
import Translate from './translate'
import HttpTest from './http-test'
import Game from './game'

Vue.use(VueRouter)

// 有权限的路由列表
export const menuRoutes = [
  Home, HttpTest, Translate, Game
]

// 无需权限的路由列表
export const constantRoutes = [
  {
    path: '/',
    redirect: '/home',
    component: HomePage,
    children: menuRoutes
  },
  {
    path: '/404',
    component: () => import('@/views/NotFound')
  },
  {
    path: '*',
    component: () => import('@/views/NotFound'),
    hidden: true
  }
]

const createRouter = () => new VueRouter({
  routes: constantRoutes
})

const router = createRouter()

router.beforeEach(async(to, from, next) => {
 next()
})

router.afterEach(to => {
  if (to.fullPath && to.fullPath !== '/404') {
    const app = router.app
    // 设置当前路由对象
    app.$store.dispatch('setCurrentRouter', to)
  }
})

// 这里处理多次点击当前路由报错,其实就是屏蔽错误,vue那边的坑
// 解决重复点击导航路由报错 vue-router 3.1.3版本还有问题,等升级后再说吧,暂时屏蔽错误，不影响功能
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push() {
  return originalPush.apply(this, Array.prototype.slice.apply(arguments)).catch(err => err)
}

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // 重设路由
}

export default router
