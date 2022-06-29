/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const systemRouter = {
  path: '/systemManagement',
  component: Layout,
  redirect: 'noRedirect',
  name: 'systemManagement',
  meta: {
    title: '系统管理',
    icon: 'chart'
  },
  children: [
    {
      path: 'user',
      component: () => import('@/views/systemManagement/user'),
      name: 'user',
      meta: { title: '用户管理', noCache: true }
    },
    {
      path: 'role',
      component: () => import('@/views/systemManagement/role'),
      name: 'role',
      meta: { title: '角色管理', noCache: true }
    },
    {
      path: 'dictionaries',
      component: () => import('@/views/systemManagement/dictionaries'),
      name: 'dictionaries',
      meta: { title: '字典配置', noCache: true }
    }
  ]
}

export default systemRouter
