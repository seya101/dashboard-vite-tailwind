import { createRouter, createWebHistory } from 'vue-router'
import PageNotFound from '../views/PageNotFound.vue'
import Dashboard from '../views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    // {
    //   path: '/Dashboard',
    //   name: 'Dashboard',
    //   component: Dashboard
    // },
    {
      path: '/Analytics',
      name: 'Analytics',
      component: () => import('../views/Analytics.vue')
    },
    {
      path: '/Tracking',
      name: 'Tracking',
      component: () => import('../views/Tracking.vue')
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: () => import('../views/Setting.vue')
    }
    ,
    // Catch All 404
    {
      path: '/:catchAll(.*)',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
})

export default router
