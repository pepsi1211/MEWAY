import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admin'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    admin,
    login
  }
})
