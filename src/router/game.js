/**
 * Create by CC on 2020/6/16
 */
'use strict'

const gameRouter = {
  path: 'game',
  to: 'game',
  meta: {
    title: '轻松一刻',
    icon: 'material-icons games'
  },
  component: () => import('@/views/game')
}

export default gameRouter
