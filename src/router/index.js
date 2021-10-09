import Vue from 'vue'
import website from './website'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
    {
      path: '/',
      name: 'website',
      component: ()=> import ( '../views/website'),
      children:website
    },
  ]
})

export default router
