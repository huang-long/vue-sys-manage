import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/main.vue'
import childRouter from './menuRouter'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/',
      name: 'main',
      component: MainView,
      children: childRouter,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/login.vue')
    },
  ]
})

export default router
