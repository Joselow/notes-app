import { authGuard } from '@/Guards/AuthGuard'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      alias: ['/', '/homepage' ]
    },
    {
      path: '/403',
      name: '403',   
      component: () => import('../views/Errors/403.vue'),             
    },
    {
      path: '/notas',
      name: 'notes',
      meta:{
        needAuth: true,
      },
      component: () => import('../views/NotesView.vue'),
      beforeEnter: [authGuard],        ///* EL orden si importa

    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
    ,
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    }
  ]
})


export default router



