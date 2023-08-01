import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/choiceness', // 路由重定向
    children: [
      {
        path: 'choiceness',
        name: 'Choiceness',
        component: () => import('@/views/choiceness/index.vue')
      },
      {
        path: 'group',
        name: 'Group',
        component: () => import('@/views/group')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/order')
      },
      {
        path: 'user',
        name: 'User',
        component: () => import('@/views/user')
      }
    ]
  }
  // ,
  // {
  //   path: '',
  //   name: '',
  //   component: () => import('@/views/choiceness')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
