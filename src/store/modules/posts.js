const state = {
  posts: []
}

const getters = {
  postsList: state => state.posts
}

const mutations = {
  setPost (state, value) {
    state.posts.push(value)
  },

  removePost (state, index) {
    state.posts.splice(index, 1)
  },

  editPost (state, { values, index }) {
    state.posts[index] = values
  }
}

const actions = {
  setPost ({ commit }, value) {
    commit('setPost', value)
  },

  removePost ({ commit }, index) {
    commit('removePost', index)
  },

  editPost ({ commit }, post) {
    commit('editPost', post)
  }
}

export default {
  namespaced: true,

  state,
  getters,
  mutations,
  actions
}
