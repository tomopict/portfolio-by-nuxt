import axios from 'axios'
import axiosRetry from 'axios-retry'
const instance = axios.create({
  timeout: 50000
})
// Lambdaがタイムアウトする場合があるので50x系は最大3回retryする
axiosRetry(instance, { retries: 3 })

export default instance
