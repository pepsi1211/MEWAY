export default {
  path:'/admin',
  component: () => import('@/views/Admin'),
  children: [
    {
      path: "home",
      component: ()=>import('@/views/Admin/home.vue')
    },
    {
      path: "users",
      component: ()=>import('@/views/Admin/users.vue')
    },
    {
      path: "sendMessage",
      component: ()=>import('@/views/Admin/sendMessage.vue')
    },
    {
      path: "class",
      component: ()=>import('@/views/Admin/class.vue')
    },
    {
      path: "/admin",
      redirect: 'home'
    }
  ]
}