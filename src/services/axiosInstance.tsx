import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: `https://devapi.smartmeanalytics.com/api/ranking/`
})

export default axiosInstance
