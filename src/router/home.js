/**
 * Create by CC on 2018/12/19
 */
'use strict'

const homeRouter = {
  path: 'home',
  to: 'home',
  meta: {
    title: '首页',
    icon: 'material-icons home'
  },
  component: () => import('@/views/home')
}

export default homeRouter
