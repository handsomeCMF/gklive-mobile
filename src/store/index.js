import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getter'
import theme from './modules/theme'

Vue.use(Vuex)

export default new Vuex.Store({
  getters: getters,
  modules: { theme },
  strict: process.env.NODE_ENV !== 'production'
})
