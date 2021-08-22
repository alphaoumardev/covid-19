import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes =
    [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
    ]

const router =
    {
        history: createWebHistory(process.env.BASE_URL), routes
    }
createRouter
export default router
