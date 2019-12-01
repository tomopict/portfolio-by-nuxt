import { AxiosPromise, AxiosRequestConfig } from 'axios'
import httpClient from './http-client'
import { PostLists } from '@/models/Post'

export const fetchQiitaData = (config?: AxiosRequestConfig): AxiosPromise => {
  return httpClient.get(`${process.env.QiitaApi}/users/tomopict/items`, config)
}
