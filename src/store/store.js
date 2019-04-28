import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // eslint-disable-next-line no-undef
    isLoggedIn: !!localStorage.getItem('lbUser')
  }
})
