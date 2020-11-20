import Vue from 'vue'
import VueRouter from 'vue-router'
import Activity from '../views/CampActivity.vue'
import Order from '../views/order.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/activity',
    name: 'Activity',
    component: Activity
  },
  {
    path: '/order',
    name: 'Order',
    component: Order
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
	mode:'history',
  routes
})

export default router
