import {useAppSelector} from "../../redux/store";

export const useAuth = () => {
 const token = useAppSelector(state => state.user.token)
 const isAuth = !!token
 return {isAuth}
}