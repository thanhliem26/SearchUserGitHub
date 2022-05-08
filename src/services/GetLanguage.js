import axios from './axios'

export const getLanguage = (url) => {
  return axios.get(url)
}
