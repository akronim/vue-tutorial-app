import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  user: {
    id: 1
  },
  users: []
}

export const getters = {
  getUserId: (state) => state.user.id,
  getUserName: (state) => {
    return state.user.name
  },
  getUsersNames: (state) => {
    return state.users.map((user) => user.name)
  }
}

export const mutations = {
  setUserName1 (state, name) {
    // 1st solution:
    // it won't trigger getters at all, more details:
    state.user.name = name
  },
  setUserName2 (state, name) {
    // 2nd solution:
    // same as "state.user = Object.assign({}, state.user, { name })"
    // it will trigger both getters every time when you call this mutation
    state.user = { ...state.user, name }
  },
  setUserName3 (state, name) {
    // 3rd solution:
    // it will trigger both getters when you call this mutation for the first time,
    // but if you call it the next time only getUserName() will be triggered
    // Vue.set() will check if property already exists before re-assigning the entire object
    Vue.set(state.user, 'name', name)
  },
  addUser1 (state, user) {
    // 1st solution:
    // it will work as expected and trigger getUsersNames()
    state.users.push(user)
  },
  addUser2 (state, user) {
    // 2nd solution
    // even though we are recreating the entire array,
    // it will behave in the same way as first solution
    state.users = [...state.users, user]
  },
  updateUserName1 (state, { index, name }) {
    // 1st solution:
    // it will properly update an array item, but also it will trigger getUsersNames()
    Vue.set(state.users[index], 'name', name)
  },
  updateUserName2 (state, { index, name }) {
    // 2nd solution:
    state.users[index].name = name
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
