import {
 combineReducers,
 configureStore,
} from '@reduxjs/toolkit'
import {
 TypedUseSelectorHook,
 useDispatch,
 useSelector,
} from 'react-redux'
import userSlice from "./slices/userSlice";
// import {
//  persistReducer,
//  persistStore,
// } from 'redux-persist'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import {
//  FLUSH,
//  PAUSE,
//  PERSIST,
//  PURGE,
//  REGISTER,
//  REHYDRATE,
// } from 'redux-persist/es/constants'
//
// const persistConfig = {
//  key: 'root',
//  storage: AsyncStorage,
//  blacklist: ['catalog', 'article'],
// }
const Reducer = combineReducers({
 user: userSlice,
})
// const persistedReducer = persistReducer(
//  persistConfig,
//  Reducer
// )

export const store = configureStore({
 reducer: Reducer
})

// export const persistor = persistStore(store)

export type AppStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () =>
 useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppStateType> =
 useSelector
