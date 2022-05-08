import axios from './axios'

export const getReadMe = (user, seletedRepo) => {
  return axios.get(`repos/${user}/${seletedRepo}/contents/README.md`)
}
