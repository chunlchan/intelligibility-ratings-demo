import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'instructions',
      component: () => import('../views/InstructionsView.vue')
    },
    {
      path: '/experiment',
      name: 'experiment',
      component: () => import('../views/ExperimentView.vue')
    },    
    {
      path: '/end',
      name: 'end',
      component: () => import('../views/EndView.vue')
    }
  ]
})

export default router
