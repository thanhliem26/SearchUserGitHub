import axios from 'axios'

export const getReadMe = (user, seletedRepo) => {
  return axios.get(
    `https://api.github.com/repos/${user}/${seletedRepo}/contents/README.md`,
  )
}
