import Http from './api'


export const apiconfig = {
 baseURL: 'https://inskill-dev.ru/',
 headers: {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
 },
}

export const http = new Http(apiconfig)
