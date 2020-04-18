import router from '@/router'
router.beforeEach((to, from, next) => { 
  if (to.matched.some(res => res.meta.requireAuth)) { 
    let userData = window.sessionStorage.getItem('show')
    if (userData) { 
      next()
    } else { 
      if (to.meta.requireAuth) {
        next('/login')
      } else {
        next()
      }
    }
  } else {
    next()
  }
})