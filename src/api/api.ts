import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios'
import {store} from '../redux/store'

class HttpInstance {
 config = {}
 successStatuses = [200, 204]
 // @ts-ignore
 instance: AxiosInstance

 constructor(config: AxiosRequestConfig) {
  this.config = config
  this.init()
 }

 init() {
  this.instance = axios.create(this.config)
 }
}

class Http extends HttpInstance {
 constructor(config: AxiosRequestConfig) {
  super(config)
 }

 checkResponse(result: AxiosResponse) {
  // if (this.successStatuses.includes(result.status) && result.data) {
  //  if (Array.isArray(result.data.data)) {
  //   return renderItems(result.data)
  //  } else {
  //   return {data: result.data.data, formatData: renderItems(result.data)}
  //  }
  // } else {
  //  if (result.data?.[0]?.meta?.show) {
  //   return store.dispatch(setError({data: result.data}))
  //  }
  //  if (result.status === 500) {
  //   return store.dispatch(setGlobalError({data: true}))
  //  }
  //  return result
  // }
  return result
 }

 async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  return this.checkResponse(await this.instance.get(url, config))
 }

 async post(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  return this.checkResponse(await this.instance.post(url, data, config))
 }

 async put(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  return this.checkResponse(await this.instance.put(url, data, config))
 }

 async delete(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
  return this.checkResponse(await this.instance.delete(url, config))
 }
}

export default Http
