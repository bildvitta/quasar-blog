const state = {
  authors: []
}

const getters = {
  authorsList: state => state.authors

}

const mutations = {
  setAuthors (state, value) {
    state.authors.push(value)
  },

  removeAuthor (state, index) {
    state.authors.splice(index, 1)
  },

  editAuthor (state, { values, index }) {
    state.authors[index] = values
  }
}

const actions = {
  addAuthors ({ commit }, value) {
    commit('setAuthors', value)
  },

  removeAuthor ({ commit }, index) {
    commit('removeAuthor', index)
  },

  editAuthor ({ commit }, author) {
    commit('editAuthor', author)
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}
