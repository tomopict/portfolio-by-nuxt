import { AxiosPromise, AxiosRequestConfig } from 'axios'
import httpClient from './http-client'

export const fetchQiitaUserData = (
  config?: AxiosRequestConfig
): AxiosPromise => {
  return httpClient.get(`${process.env.QiitaApi}/users/tomopict/items`, config)
}
