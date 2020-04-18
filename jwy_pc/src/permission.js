import router from '@/router'
import { getUser } from '@/utile/auth.js'

router.beforeEach((to, from, next) => {
  let getFlag = getUser()
  if (getFlag) {
    next()
  } else {
    if (to.meta.isLogin) {
      next('/signIn')
    } else {
      next()
    }
  }
})
