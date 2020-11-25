import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import SaveTouringCar from '../views/SaveTouringCar.vue'
import BuyTouringCar from '../views/BuyTouringCar.vue'
import login from "../views/login.vue"
import register from "../views/register.vue"
import camp from "../views/camp.vue"
import lookpword from "../views/lookpword.vue"
import usercenter from "../views/usercenter.vue"
import collection from "../views/collection.vue"
import evaluate from "../views/evaluate.vue"
import campDetail from "../views/campDetail.vue"
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/SaveTouringCar',
    name: 'SaveTouringCar',
    component: SaveTouringCar
  },
  {
    path: '/BuyTouringCar',
    name: 'BuyTouringCar',
    component: BuyTouringCar
  },
  {
  		path: "/login",
  		name: "login",
  		component: login
      // path: '/about',
      // name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
  {
  		path: "/register",
  		name: "register",
  		component: register
  },{
    path: '/camp',
    name: 'camp',
    component: camp
  },  {
    path: '/campDetail/:id',
    name: 'campDetail',
    component: campDetail
  },
  {
  		path: "/lookpword",
  		name: "lookpword",
  		component: lookpword
  },
  {
  		path: "/usercenter",
  		name: "usercenter",
  		component: usercenter
  },
  {
  		path: "/collection",
  		name: "collection",
  		component: collection
  },
  {
  		path: "/evaluate",
  		name: "evaluate",
  		component: evaluate
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
})

/*router.beforeEach((to, from, next) => {
	const nextRoute = ['SaveTouringCar'] // 需要登录的页面
	  let isLogin = sessionStorage.getItem("token") // 判断是否登录，本地存储有用户数据则视为已经登录
	  // 未登录状态；当路由到 nextRoute 指定页时，跳转至 UserLogIn
	  if (nextRoute.indexOf(to.name) >= 0) { // 检测是否登录的页面
	    if (!isLogin) { // 如果未登录（本地存储无用户数据），并且要跳到登录页面
	      if (from.name === 'UserLogIn') {
	        next('/')
	        return
	      }
	　　　　// 登录后，跳到到当前页面
	      router.push({
	        name: 'UserLogIn',
	        params: {redirect: to.fullPath}  
	      })
	    }
	  }
	  // 已登录状态；当路由到 UserLogIn 时，跳转至 Home
	  if (to.name === 'UserLogIn') {
	    if (isLogin) {
	      next('/')
	      return
	    }
	  }
	  next() // 必须使用 next ,执行效果依赖 next 方法的调用参数
})*/
export default router
