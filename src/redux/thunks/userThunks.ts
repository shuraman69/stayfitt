import {AppDispatch} from "../store";
import {userAPI} from "../../api/userAPI";
import {setToken} from "../slices/userSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN} from "../../helpers/constants";

export const userThunks = {
 token(authData: any) {
  return async (dispatch: AppDispatch) => {
   const {data} = await userAPI.token(authData)
   if (data.access_token) {
    dispatch(setToken({data: data.access_token}))
    await AsyncStorage.setItem(TOKEN, data.access_token)
   }
  }
 },
 logout() {
  return async (dispatch: AppDispatch) => {
   await AsyncStorage.removeItem(TOKEN)
   await dispatch(setToken({data: null}))
  }
 }
}