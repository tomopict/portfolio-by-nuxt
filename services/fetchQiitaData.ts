import { AxiosPromise, AxiosRequestConfig } from 'axios'
import httpClient from './http-client'
import { PostLists } from '@/models/Post'

export const fetchQiitaData = (config?: AxiosRequestConfig): AxiosPromise => {
  return httpClient.get(`https://qiita.com/api/v2/users/tomopict/items`, config)
}
