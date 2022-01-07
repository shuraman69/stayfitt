import { httpBuilder } from './api'

export const userAPI = {
  async token(data: any) {
    return httpBuilder('oauth/token', 'post', data)
  },
}
