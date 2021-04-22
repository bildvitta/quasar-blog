import axios from 'axios'

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
  },

  fecthAuthors (state, data) {
    state.authors = data
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
  },

  async fecthAuthors ({ commit }) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'authors'
      })

      commit('fecthAuthors', data)
    } catch {}
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}
