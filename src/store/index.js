import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    addUser(state, payload) {
      state.users.push(payload);
    },
    editUser(state, payload) {
      state.users = [ ...payload ];
    },
    addUsersJson(state, payload) {
      state.users = [ ...state.users, ...payload];
    },
    removeUser(state, payload) {
      state.users = state.users.filter(user => user.id !== payload);
    },
    initialiseStore() {
      if(localStorage.getItem('users')) {
				this.replaceState(
          {
            users: JSON.parse(localStorage.getItem('users')),
          }
				);
			}
    },
  },
  getters: {
    usersLength: state => {
      return state.users.length;
    }
  },
})
