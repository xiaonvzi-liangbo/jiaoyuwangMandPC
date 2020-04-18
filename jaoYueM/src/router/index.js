import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index')
    },
    {
      path: '/school',
      name: 'name',
      component: () => import('@/views/selectSchool/school')
    },
    {
      path: '/educational',
      name: 'educational',
      component: () => import('@/views/educational/educational')
    },
    {
      path: '/goAbroad',
      name: 'goAbroad',
      component: () => import('@/views/goAbroad/goAbroad')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('@/views/courses/courses')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login')
    },
    {
      path: '/personal',
      name: 'personal',
      meta: {
        requireAuth: true
      },
      component: () => import('@/views/personal/personal')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('@/views/personal/account')
    },
    {
      path: '/educational/testSelection',
      name: 'testSelection',
      component: () => import('@/views/educational/testSelection/testSelection'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/educational/testSelection/topic',
      name: 'topic',
      component: () => import('@/views/educational/topic/topic'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/educational/testSelection/report',
      name: 'report',
      component: () => import('@/views/educational/topic/report/report'),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/research',
      name: 'research',
      component: () => import('@/views/research/research')
    },
    {
      path:'/textual',
      name:'textual',
      component:()=>import('@/views/textual/textual')
    },
    {
      path:'/404',
      name:'404',
      component:()=>import('@/views/errors/errors')
    },
    {
      path:'*',
      redirect:'/404'
    }
  ]
})

 