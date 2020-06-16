/**
 * Create by CC on 2020/6/16
 */
'use strict'

const httpTestRouter = {
  path: 'httptest',
  to: 'httptest',
  meta: {
    title: '测试工具',
    icon: 'material-icons memory'
  },
  component: () => import('@/views/httpTest')
}

export default httpTestRouter
