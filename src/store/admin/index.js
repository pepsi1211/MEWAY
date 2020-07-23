const state = {
  mainWdth: window.localStorage.getItem('mainWdth') || '',
}

const actions = {

}

const mutations = {
  MAIN_WIDTH(state, payload){
    state.mainWdth = payload.currentWidth
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}