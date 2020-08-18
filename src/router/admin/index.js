export default {
  path:'/admin',
  component: () => import('@/views/Admin'),
  children: [
    {
      path: "home",
      component: ()=>import('@/views/Admin/home')
    },
    {
      path: "users",
      component: ()=>import('@/views/Admin/student')
    },
    {
      path: "sendMessage",
      component: ()=>import('@/views/Admin/student/sendMessage.vue')
    },
    {
      path: "student-detail",
      component: ()=>import('@/views/Admin/student/detail.vue')
    },
    {
      path: "class",
      component: ()=>import('@/views/Admin/class')
    },
    {
      path: "/admin",
      redirect: 'home'
    }
  ]
}