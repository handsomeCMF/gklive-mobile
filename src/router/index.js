import Vue from 'vue'
import VueRouter from 'vue-router'

import { Field, CellGroup, Button, Form, RadioGroup, Radio, Icon, NavBar, Cell, ActionSheet, PullRefresh, Empty, Loading } from 'vant'

Vue.use(Loading)
Vue.use(Empty)
Vue.use(PullRefresh)
Vue.use(ActionSheet)
Vue.use(Cell)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Field)
Vue.use(Form)
Vue.use(CellGroup)
Vue.use(Button)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/home',
    component: () => import('../views/Main.vue'),
    meta: { requiresAuth: true },
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/star',
      name: 'star',
      component: () => import('../views/star/index.vue')
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import('../views/mine/index.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/liveroom',
    name: 'liveroom',
    component: () => import('../views/home/liveroom.vue')
  },
  {
    path: '/helloWorld',
    name: 'helloWorld',
    component: () => import('../views/home/HelloWorld.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
