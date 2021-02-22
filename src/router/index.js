import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue')
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import(/* webpackChunkName: "result" */ '../views/result.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
