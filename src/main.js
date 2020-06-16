'use strict'

import 'vuetify/dist/vuetify.min.css'
import 'ant-design-vue/dist/antd.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './style/icon/iconfont.css'
import './style/style.scss'

import Vue from 'vue'
import vuetify from './plugins/vuetify'
import 'moment/locale/zh-cn'
// 公共方法
import './plugins/core/overrideObject'
import './utils'
import App from './App'
// store结构
import store from './store'
// 路由
import router from './router'

import { Table, Upload, Icon, Input } from 'ant-design-vue'

Vue.component(Table.name, Table)
Vue.component(Table.Column.name, Table.Column)
Vue.component(Table.ColumnGroup.name, Table.ColumnGroup)
Vue.component(Upload.name, Upload)
Vue.component(Upload.Dragger.name, Upload.Dragger)
Vue.component(Icon.name, Icon)
Vue.component(Input.name, Input)

// 注册全局自定义组件
import './plugins/components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
