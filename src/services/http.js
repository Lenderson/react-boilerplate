import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: process.env.REACT_APP_REQUEST_TIMEOUT,
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => error
)

export default api
