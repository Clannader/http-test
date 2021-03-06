/**
 * Create by CC on 2019/12/22
 */
'use strict'

import Vue from 'vue'

// 自定义组件
Vue.component('menu-group', () => import('@/components/core/MenuGroup'))
Vue.component('menu-item', () => import('@/components/core/MenuItem'))
Vue.component('menu-sub-group', () => import('@/components/core/MenuSubGroup'))

// 我觉得这个表格是根本无法封装的
Vue.component('app-table', () => import('@/components/core/AppTable'))
Vue.component('app-date-picker', () => import('@/components/core/AppDatePicker'))
