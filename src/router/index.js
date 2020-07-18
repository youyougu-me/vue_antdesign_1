import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'

  },
  {
    path: '/home',
    component: () => import('@/views/Home/index')
  },
  {
    path: '/slot',
    component: () => import('@/views/Slot/index')
  },
  {
    path: '/page404',
    component: () => import('@/views/Page404/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
