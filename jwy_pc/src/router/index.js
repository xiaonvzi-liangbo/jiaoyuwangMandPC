import Vue from 'vue'
import Router from 'vue-router'
import layout from '../views/layout'

Vue.use(Router)

export const constantRouterMap = [{
  path: '/',
  component: layout,
  children: [{
    path: '',
    name: 'home',
    component: () => import('@/views/home/home'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'study',
    name: 'study',
    component: () => import('@/views/study/study'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'promote',
    name: 'promote',
    component: () => import('@/views/promote/promote'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'systematic',
    name: 'systematic',
    component: () => import('@/views/promote/systematic'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'speaker',
    name: 'speaker',
    component: () => import('@/views/promote/begin/speaker'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'textualResearch',
    name: 'textualResearch',
    component: () => import('@/views/textualResearch/textualResearch'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'school',
    name: 'school',
    component: () => import('@/views/school/school'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'course',
    name: 'course',
    component: () => import('@/views/course/course'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'counselor/pages',
    name: 'pages',
    component: () => import('@/views/counselor/pages/pages'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'research',
    name: 'research',
    component: () => import('@/views/research/research'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'studyAbroad',
    name: 'studyAbroad',
    component: () => import('@/views/studyAbroad/studyAbroad'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'search',
    name: 'search',
    component: () => import('@/views/search/search'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'news',
    name: 'news',
    component: () => import('@/views/news/news'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'activity',
    name: 'activity',
    component: () => import('@/views/activity/activity'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'counselor',
    name: 'counselor',
    component: () => import('@/views/counselor/counselor'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'deceased',
    name: 'deceased',
    component: () => import('@/views/deceased/deceased'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'begin',
    name: 'begin',
    component: () => import('@/views/promote/begin/begin'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'status',
    name: 'status',
    component: () => import('@/views/status/status'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'journalism',
    name: 'journalism',
    component: () => import('@/views/news/journalism'),
    meta: {
      isLogin: false
    }
  },
  {
    path: 'personage',
    name: 'personage',
    redirect: '/personage/tacitly',
    component: () => import('@/views/personage/personage'),
    children: [{
      path: 'tacitly',
      name: 'tacitly',
      component: () => import('@/views/personage/index/index'),
      meta: {
        isLogin: true
      }
    },
    {
      path: 'record',
      name: 'record',
      component: () => import('@/views/personage/record/record'),
      meta: {
        isLogin: true
      }
    }, {
      path: 'planning',
      name: 'planning',
      component: () => import('@/views/personage/planning/planning')
    },
    {
      path: 'details',
      name: 'details',
      component: () => import('@/views/personage/planning/details')
    },
    {
      path: 'evaluation',
      name: 'evaluation',
      component: () => import('@/views/personage/evaluation/evaluation')
    },
    {
      path: 'check',
      name: 'check',
      component: () => import('@/views/personage/evaluation/check')
    }, {
      path: 'account',
      name: 'account',
      component: () => import('@/views/personage/account/account')
    }
    ]
  }
  ]
},
{
  path: '/signIn',
  name: 'signIn',
  component: () => import('@/views/signIn/index'),
  meta: {
    isLogin: false
  }
},
{
  path: '/signIn/password',
  name: 'password',
  component: () => import('@/views/signIn/password/password'),
  meta: {
    isLogin: false
  }
},
{path: '*', component: () => import('@/views/notfind')}

]
export default new Router({
  routes: constantRouterMap
})
