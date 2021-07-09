export const state = () => ({
  list: []
})

export const mutations = {
  setLists (state, lists) {
    state.list = lists
  },
  
  toggleList (state, uni) {
    uni.like = !uni.like
  }
}

export const getters = {
  getLists: state => state.list
}