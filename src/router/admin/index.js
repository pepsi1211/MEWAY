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
      path: "/admin",
      redirect: 'home'
    }
  ]
}