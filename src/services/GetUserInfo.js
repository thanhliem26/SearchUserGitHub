import axios from './axios'

const getUserInfo = (name, page) => {
  return axios.get(`search/users?q=${name}&page=${page}`)
}

const getUserRepo = (name) => {
  return axios.get(`users/${name}/repos`)
}

export { getUserInfo, getUserRepo }
