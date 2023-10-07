import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localho.st:8000/',
  timeout: 1000,
});

export default axiosClient;