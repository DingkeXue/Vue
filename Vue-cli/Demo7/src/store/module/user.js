const state = {
  currentUser: null,
  isLogin: false
};

const getters = {
  getCurrentUser: (state) => state.currentUser
};

const mutations = {
  userStatus: (state, user) => {
    if (user) {
      state.currentUser = user;
      state.isLogin = true;
    } else {
      state.currentUser = null;
      state.isLogin = false;
    }
  }
};

const actions = {
  setUser: ({commit}, userName) => {
    commit('userStatus', userName);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
