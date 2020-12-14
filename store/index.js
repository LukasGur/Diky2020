export const state = () => ({
  mainTitle: null
})

export const mutations = {
  setNewMainTitle (state, mainTitle) {
    state.mainTitle = mainTitle
  }
}

export const getters = {
  getMainTitle (state) {
    return state.mainTitle
  }
}
