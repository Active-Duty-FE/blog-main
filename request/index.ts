import axios, { AxiosResponse } from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { AxiosInstance } from 'axios'

import { BASE_URL, TIMEOUT } from './config'
class AppRequst {
  instance: AxiosInstance
  constructor(baseURL: string, timeout: number) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
    this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
      console.log('request interciptor')
      return config
    })
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      console.log('response interciptor')
      return res.data
    })
  }
  request<T>(config: AxiosRequestConfig) {
    return this.instance.request<T>(config)
  }
  get<T>(url: string, params?: any) {
    return this.request<T>({
      url,
      params,
      method: 'GET'
    })
  }
  post<T>(url: string, data?: any) {
    return this.instance.request<T>({
      url,
      data,
      method: 'POST'
    })
  }
}

export default new AppRequst(BASE_URL, TIMEOUT)
