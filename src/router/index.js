import Vue from 'vue'
import VueRouter from 'vue-router'
import Productos from '../views/vistaproductos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'vistaproductos',
    component: Productos
  },
  {
    path: '/vistacarrito',
    name: 'vistacarrito',
    meta: { requiresAuth:true },
    component: () => import('../views/vistacarrito.vue')
  },
  {
    path: '/vistaadmin',
    name: 'vistaadmin',
    meta: { requiresAuth:true },
    component: () => import('../views/vistaadmin.vue')
  },
  {
    path: '/vistaregistro',
    name: 'vistaregistro',
    component: () => import('../views/vistaregistro.vue')
  }
]

import Firebase from '../db'

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)){
    if(!Firebase.auth.currentUser){
      next('/')
    } else{
      next()
    }
  } else{
    next() //make sure to always call next
  }
})




export default router
