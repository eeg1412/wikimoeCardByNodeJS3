import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'ClientIndex',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "clientIndex" */ '@/views/client/ClientIndex.vue'),
    children: [
      {
        path: '/home',
        name: 'ClientHome',
        component: () => import(/* webpackChunkName: "ClientHome" */ '../views/client/ClientHome.vue')
      },
      {
        path: '/register',
        name: 'ClientRegister',
        component: () => import(/* webpackChunkName: "ClientRegister" */ '../views/client/ClientRegister.vue')
      },
      {
        path: '/create-card',
        name: 'ClientCreateCard',
        component: () => import(/* webpackChunkName: "ClientCreateCard" */ '../views/client/ClientCreateCard.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
