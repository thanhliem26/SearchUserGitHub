import axios from 'axios'

const getUserInfo = (name, page) => {
  return axios.get(`https://api.github.com/search/users?q=${name}&page=${page}`)
}

const getUserRepo = (name) => {
  return axios.get(`https://api.github.com/users/${name}/repos`)
}

export { getUserInfo, getUserRepo }
