import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { CookieExist } from './utils/common/cookieUtils.js'

import { Lazyload } from 'vant'
Vue.use(Lazyload)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (CookieExist('gk-app-token')) { // 存在
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }
})

const vue = new Vue({
  router,
  store,
  render: h => h(App)
})

vue.$mount('#app')
