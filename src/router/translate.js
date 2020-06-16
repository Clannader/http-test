/**
 * Create by CC on 2020/6/16
 */
'use strict'

const translateRouter = {
  path: 'translation',
  to: 'translation',
  meta: {
    title: '翻译工具',
    icon: 'material-icons translate'
  },
  component: () => import('@/views/translation')
}

export default translateRouter
