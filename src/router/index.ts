import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Money from '@/views/Money.vue'
import Label from '@/views/Label.vue'
import Statistics from '@/views/Statistics.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/label',
    component: Label
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
