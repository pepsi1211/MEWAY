const state = {
  token: window.localStorage.getItem('token') || '',
}

const actions = {

}

const getters = {
  token: state => state.token
}

const mutations = {
  TOKEN(state, payload){
    state.token = payload.token
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}