export default [
  {
    path: '/:micro+',
    component: () => import('@/micro/MicroApp.vue')
  }
]
