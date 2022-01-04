import {http} from './apiconfig'

class userAPI {
 async token(data: any) {
  return await http.post('oauth/token', {data})
 }
}


export default new userAPI()
