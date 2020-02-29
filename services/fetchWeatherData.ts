import { AxiosPromise, AxiosRequestConfig } from 'axios'
import httpClient from './http-client'

export const fetchWeatherData = (parms: {
  q: string
  APPID: string
}): AxiosPromise => {
  return httpClient.get(
    `http://api.openweathermap.org/data/2.5/weather?q=${parms.q}&APPID=${parms.APPID}`
  )
}
