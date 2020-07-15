import Vue from 'vue'
import VueRouter from 'vue-router'

import { Field, CellGroup, Button, Form, RadioGroup, Radio, Icon, NavBar, Cell } from 'vant'

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
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
