import Vue from 'vue'
import VueRouter from 'vue-router'

import { Field, CellGroup, Button, Form, RadioGroup, Radio, Icon } from 'vant'

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
    component: () => import('../views/liveroom/index.vue'),
    meta: { requiresAuth: true }
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
