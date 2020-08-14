import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRouter from './admin'
import loginRouter from './login'

Vue.use(VueRouter)

  const router = new VueRouter({
    // base: process.env.BASE_URL,
    base: "meway",
    routes: [
      adminRouter,
      loginRouter,
      {
        path: "/*",
        redirect: "/admin"
      }
    ]
  })

export default router
