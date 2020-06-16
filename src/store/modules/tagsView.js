/**
 * Create by CC on 2018/12/12
 */

'use strict'
import { menuRoutes } from '@/router'
import moment from 'moment'

const tagsView = {
  state: {
    language: localStorage.getItem('language') || 'zh', // 全局语言类型
    menuRouter: menuRoutes, // 全局左侧导航栏
    showSnackbar: false, // 全局是否弹消息条,如果弹了,则不能再弹
    mini: localStorage.getItem('sidebarStatus') || false, // 是否收缩左侧栏
    currentRouter: {} // 当前路由对象
  },
  mutations: {
    // 设置语言
    SetLanguage: (state, language = 'zh') => {
      state.language = language
      let momentLang = ''
      switch (language) {
        case 'zh':
          momentLang = 'zh-cn'
          break
        case 'en':
          momentLang = 'en'
          break
      }
      moment.locale(momentLang)
      localStorage.setItem('language', language)
    },
    // 设置是否显示snackbar
    SetShowSnackbar: (state, show = false) => {
      state.showSnackbar = show
    },
    // 设置左侧栏是否收缩
    SetMini: (state, drawer = false) => {
      state.mini = drawer
      localStorage.setItem('sidebarStatus', drawer)
    },
    // 设置当前路由的Name
    SetCurrentRouter: (state, router = {}) => {
      state.currentRouter = router
    },
    SetMenuRouter: (state, menuRouter) => {
      state.menuRouter = menuRouter
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SetLanguage', language)
    },
    setShowSnackbar({ commit }, show) {
      commit('SetShowSnackbar', show)
    },
    setMini({ commit }, drawer) {
      commit('SetMini', drawer)
    },
    setCurrentRouter({ commit }, router) {
      commit('SetCurrentRouter', router)
    }
  }
}

export default tagsView
