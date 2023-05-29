import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Contact from '../views/ContactView.vue'
import Update from '../views/UpdateView.vue'
import Music from "../views/MusicView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Update',
      name: 'Update',
      component: Update
    },
    {
      path: '/Music',
      name: 'Music',
      component: Music
    },
  ]
})

export default router
