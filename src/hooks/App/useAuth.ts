import {useAppDispatch, useAppSelector} from "../../redux/store";
import {useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {TOKEN} from "../../helpers/constants";
import {setToken} from "../../redux/slices/userSlice";
import {useLoad} from "../general/useLoad";

export const useAuth = () => {
 const dispatch = useAppDispatch()
 const {stopLoad, load} = useLoad()
 const token = useAppSelector(state => state.user.token)
 const isAuth = !!token

 const saveToken = async () => {
  const accessToken = await getTokenAsync()
  await dispatch(setToken({data: accessToken}))
  stopLoad()
 }
 const getTokenAsync = async () => {
  return await AsyncStorage.getItem(TOKEN)
 }

 useEffect(() => {
  saveToken()
 }, [])
 return {isAuth, load}
}