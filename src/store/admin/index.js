const state = {
  asideHeight: window.localStorage.getItem('asideHeight') || '',
}

const actions = {

}

const mutations = {
  ASIDE_HEIGHT(state, payload){
    state.asideHeight = payload.asideHeight
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}