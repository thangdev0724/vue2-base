import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: []
})

router.beforeEach((to, from, next) => {
  const publicPages = [
    '/login',
    '/register',
    '/forgot-password',
    '/reset-password'
  ]
  const authRequired = !publicPages.includes(to.path)
  if(authRequired) {
    // do something
  }
  next()
})

export default router
