import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import PageNotFound from '../views/PageNotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/Analytics',
      name: 'analytics',
      component: () => import('../views/Analytics.vue')
    },
    {
      path: '/Tracking',
      name: 'tracking',
      component: () => import('../views/Tracking.vue')
    },
    {
      path: '/Setting',
      name: 'setting',
      component: () => import('../views/Setting.vue')
    },
    // Catch All 404
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router
