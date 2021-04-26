import axios from 'axios'

const state = {
  authors: []
}

const getters = {
  authorsList: state => state.authors
}

const mutations = {
  removeAuthor (state, index) {
    state.authors.splice(index, 1)
  },

  fecthAuthors (state, data) {
    state.authors = data
  }
}

const actions = {
  removeAuthor ({ commit }, index) {
    commit('removeAuthor', index)
  },

  async fecthAuthors ({ commit }) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'authors'
      })

      commit('fecthAuthors', data)
    } catch {}
  },

  async sendAuthors (context, data) {
    try {
      await axios({
        method: 'POST',
        url: 'authors',
        data
      })
    } catch {}
  },

  async fecthSpecificAuthor ({ commit }, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `authors/${id}`
      })

      return data
    } catch {}
  },

  async editAuthor ({ commit }, author) {
    try {
      await axios({
        method: 'PUT',
        url: `authors/${author.id}`,
        data: author.values
      })
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
