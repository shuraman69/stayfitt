// instance
import axios, { AxiosResponse } from 'axios'
import { store } from '../redux/store'
import { LOCATION } from '../helpers/constants'

const successStatuses = [200, 201, 204]
type ResponseType = {
  data: any
  status: number
}
export const instance = axios.create({
  baseURL: LOCATION.api,
})
export const getUserToken = () => {
  return store.getState().user.token
}
export const getHeaderWithToken = () => {
  return {
    headers: {
      Authorization: `Bearer ${getUserToken()}`,
    },
  }
}
const checkResponse = async (res: AxiosResponse): Promise<ResponseType> => {
  if (successStatuses.includes(res.status)) {
    return {
      data: res.data && res.data,
      status: res.status,
    }
  }
  /* eslint-disable-next-line */
  throw Error()
}
export const httpBuilder = async (
  url: string,
  type: 'get' | 'post' | 'put' | 'delete',
  params?: any
): Promise<ResponseType> => {
  const methods = {
    get: () =>
      instance.get(url, { params, ...getHeaderWithToken() }).then((res) => checkResponse(res)),
    post: () => instance.post(url, params, getHeaderWithToken()).then((res) => checkResponse(res)),
    put: () => instance.put(url, params, getHeaderWithToken()).then((res) => checkResponse(res)),
    delete: () =>
      instance
        .delete(url, {
          data: params,
          ...getHeaderWithToken(),
        })
        .then((res) => checkResponse(res)),
  }
  return await methods[type]()
}
