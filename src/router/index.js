import { createRouter, createWebHistory } from 'vue-router'
import episodesRouter from '@/modules/episodes/router'
import characterRouter from '@/modules/characters/router'
import LocationRouter from '@/modules/locations/router'
const routes = [
  
  {
    path: '/',
    name: 'layout',
    component: () => import(/* webpackChunkName: "layout" */ '../views/Layout.vue')
  },
  {
    path: '/episodes',
    ...episodesRouter
  },
  {
    path: '/characters',
    ...characterRouter
  },
  {
    path: '/locations',
    ...LocationRouter
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: () => import('../views/Layout.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
