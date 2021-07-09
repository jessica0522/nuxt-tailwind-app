export const state = () => ({
  list: []
})

export const mutations = {
  setLists (state, lists) {
    state.list = lists
  },

  toggleList (state, key) {
    state.list[key].like = !state.list[key].like
  }
}

export const getters = {
  getLists: state => state.list
}