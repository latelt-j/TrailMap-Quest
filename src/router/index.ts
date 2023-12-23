import { createRouter, createWebHistory } from 'vue-router'
import PreviewApp from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'profile',
      component: PreviewApp
    },
  ]
})

export default router
