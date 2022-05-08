import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  // headers: {
  //   Authorization: `Bearer${process.env.REACT_APP_API_KEY}`,
  // },
})

instance.interceptors.response.use((response) => {
  const { data } = response
  return data
})

export default instance
