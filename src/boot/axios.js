import axios from 'axios'

export default async ({ Vue }) => {
  // baseURL
  axios.defaults.baseURL = 'http://localhost:3000/'

  Vue.prototype.$axios = axios
}
