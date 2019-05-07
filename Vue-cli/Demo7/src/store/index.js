import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu'
import user from './module/user'
import login from './module/login'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu,
    user,
    login
  }
});
