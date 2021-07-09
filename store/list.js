export const state = () => ({
  list: []
})

export const mutations = {
  setLists (state, lists) {
    state.list = lists
  },

  changeListLike (state, {value, index}) {
    state.list[index].like = value
  }
}

export const getters = {
  getLists: state => state.list
}