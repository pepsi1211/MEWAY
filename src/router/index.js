import Vue from 'vue'
import VueRouter from 'vue-router'
import adminRouter from './admin'
import loginRouter from './login'
import registerRouter from './register'

Vue.use(VueRouter)

  const router = new VueRouter({
    // base: process.env.BASE_URL,
    base: "meway",
    routes: [
      adminRouter,
      loginRouter,
      registerRouter,
      {
        path: "/*",
        redirect: "/admin"
      }
    ]
  })

export default router
